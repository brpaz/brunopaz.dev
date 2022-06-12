---
title: How to keep software installed from GitHub updated with Ansible
slug: how-to-keep-software-installed-from-github-updated-with-ansible
date: 2021-05-30
summary: |
  There are lot´s of great software that is not available or is outdated on the Package managers repositories and it´s only available on GitHub.
  The biggest issue with installing software directly from GitHub is the update process, which is a very manual process. What if we could automate that process?
  In This article I will show how we can Ansible to make sure that any software installed from GitHub is always updated.
tags: ansible, github, automation
published: true
#devto_url: https://dev.to/brpaz/how-to-create-your-own-auto-completion-for-json-and-yaml-files-on-vs-code-with-the-help-of-json-schema-k1i
layout: ../../layouts/Post.astro
featured: true
---

The simplest way to install software on Linux based Operating Systems is to use the default package manager that comes with the OS, like `apt` in Debian/Ubuntu or `dnf` in Fedora.

Submitting software and mantaining these repositories is not trivial for the common developer, and so there are lot´s of great software that is simply not available or is outdated on the package managers repositories.

Flatpaks and Snaps are growing as a viable alternative to distribute software, but still, there are tons of great Software that the only way to get it, is from GitHub.

If the repository has a good release process, installing software from GitHub can be almost as easy as using a package manager. Many projects provide artifacts in multiple formats like deb, rpm, AppImage and you can choose the most convinient way for your system. If that is not available, at least you should have a tarball that you can download and extract it´s contents to the appropriate place on your System.

The biggest issue with installing software directly from GitHub is the update process. When you use any kind of package manager, updating all software is a matter of running a single command like `apt update` or equivalent. For software installed from GitHub, the process is a lot more manual as you have to go to the GitHub repository, check if there is a new release, download and install the correct artifact and repeat the process for each software that you have installed this way.

What if we could automate this process? This is where [Ansible](https://www.ansible.com/) comes in.

## What is Ansible?

[Ansible](https://www.ansible.com/) is a tool for automating cloud provisioning, configuration management and application deployment. It´s mostly used by SysAdmins/DevOps to manage multiple servers as infrastucture as code, but the abstractions are the same whether you're managing one machine or a hundred.

Under the hood, Ansible is just a domain specific language (DSL) for a task runner that runs over ssh. You write Ansible yaml files which describe the tasks that you want to run on each machine and Ansible will take care of running these tasks and ensuring the state of your system matches, what is specified.

Ansible includes many built-in modules, like "copy" or "command", that abstracts common actions like copy files or execute shell commands. You can check all the available built-in modules [here](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html).

There are also many 3rd party modules, built by the community, that you can use.

In this article we will use the [GitHub release module](https://docs.ansible.com/ansible/latest/collections/community/general/github_release_module.html), which provides an interface to the GitHub Releases API, and will allow us to get the latest release tag of a particular repository, in our Ansible tasks.

Ansible is very powerfull, and we will only surface the basics on this article. I think it´s important to explain some terminology before going further:

* **Playbook**: A playbook consists of a set of tasks that you want to run on the target machine. It´s the entrypoint for the Ansible execution. These tasks can be defined directly in the playbook file or included from other Ansible files or roles.
* **Role**: A role is the primary mechanism for breaking a playbook into multiple files. This simplifies writing complex playbooks, and it makes them easier to reuse. For Example you can have a "docker" role that installs and configures docker, and use that role in your playbook, instead of repeating the same tasks in all your playbooks that needs docker.
* **Module** - A module is a reusable, standalone script that Ansible runs on your behalf, either locally or remotely. Modules interact with your local machine, an API, or a remote system to perform specific tasks.
* **Inventory** - A list or a group of machines/hosts where Ansible will be run against.

## Install GitHub Cli using Ansible

To demonstrate the use of Ansbile to install software from GitHub, we will create simple playbook to install the [GitHub CLI](https://github.com/cli/cli/) tool, on an Ubuntu based system. You can find the full source code at [GitHub](https://github.com/brpaz/install-github-software-ansible-demo).

### Installing Ansible and dependenceis

Ansible is available in the defualt repositories for most popular distros. You can also install it using Python Pip.

For ubuntu 20.04, we could install it with the following commands:

```bash
sudo apt-get update
sudo apt install -y python3-pip ansible
ansible --version
```

You can check the specific instructions for your distro on the [Installation Guide](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) in Ansible Docs.

We also need to install the [github_release](https://docs.ansible.com/ansible/2.5/modules/github_release_module.html) Ansible module. This module is part of the "community.general" collection, that you can install using [Ansible Galaxy](https://galaxy.ansible.com), a package manager for Ansible content. A Collection is a distribution format for Ansible content that can include playbooks, roles, modules, and plugins.

Ansible Galaxy is included when you install Ansible. You can run the following command to install the respective collection:

```bash
ansible-galaxy collection install community.general
```

This Ansible module depends on the `github.py` Python package to interact with that GitHub API. It´s a Python package, so we can install it with Python Pip.

```bash
pip install github3.py
```

### Creating the playbook

Creating an Ansible playbook is as simple as creating an YAML file following the structure required by ansible.

The full playbook for this example, will look like this:

```yaml
- name: GitHub Cli install
  hosts: all

  vars_prompt:
    - name: github_token
      prompt: "What is your GitHub Token?"
      default: "{{ lookup('env','GITHUB_TOKEN') }}"
      private: yes

  tasks:
    - name: "Get Latest Release from Github"
      community.general.github_release:
        user: cli
        repo: cli
        action: latest_release
        token: "{{ github_token }}"
      register: release

    - name: Print Latest release
      ansible.builtin.debug:
        var: release

    - name: Download Binary
      ansible.builtin.unarchive:
        src: https://github.com/cli/cli/releases/download/{{release.tag}}/gh_{{release.tag[1:]}}_linux_amd64.tar.gz
        dest: /tmp
        remote_src: true

    - name: Install Binary
      ansible.builtin.copy:
        src: /tmp/gh_{{release.tag[1:]}}_linux_amd64/bin/gh
        dest: "/usr/local/bin"
        mode: a+x
      become: true
```

The **hosts** property is used to specify in which machine(s) this playbook will be run. This is mostly useful, for multiple servers orchestration, as you might want to run different tasks on different hosts, depending on the role of the server for example (web, database etc).

Since this will be run only on a single machine, we can use the keyword "all".

The `var_prompts` section, allow us to specify a list of variables that Ansible will prompt the user before running the playbook. In this case we will ask for a GitHub token, defaulting to the value of "GITHUB_TOKEN" envrionment variable.

This isn´t really needed for this simple example, but if you are doing many requests to GitHub API in the same Ansible run, it might be wise to set it, to avoid rate limits of the GitHub API.

The **tasks** section is where we specify the commands that we want Ansible to run on each host. These commands will be defined with Ansible modules.

Each task will be executed in the defined order.

So, If we wanted to manually install the GitHub Cli from GitHub, these would be the steps that we would do:

* Go the the [releases page](https://github.com/cli/cli/releases) to see what is the latest available release.
* Download the appropriate artifact for our system.
* Depending on the format of the artifact, we could install it directly, or if a tarball, for example, we would need to extract it and move the contents to the appropriate place.

Let´s see how we can automate these steps with Ansible.

To get the latest release, we will use the "github_release" module we installed before.

```yaml
  - name: "Get Latest Release from Github"
    community.general.github_release:
      user: cli
      repo: cli
      action: latest_release
      token: "{{ github_token }}"
    register: release
```

We specify some options like the "user" and "repo" and also the "register" property is used, so we store the output of the command in a variable to be used in the next steps.

We can see the value of the variable for debug purposes, using the "debug" module.

```yaml
- name: Print Latest release
  ansible.builtin.debug:
    var: release
```

Then we need to download the respective artifact from GitHub. This step can be a little different depending on the project and how they create the releases.

As we can see in the [releases page](https://github.com/cli/cli/releases), this project offers artifacts for deb, rpm, and archive (tar.gz).  For this example, we will use the archive version as it is the most common used format that we will probably find. But if the project have a better format available for your system, you should use that. If you are using Ubuntu, you could use the [APT module](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/apt_module.html) to install the .deb file directly instead.

For downloading and extracting the tarball, we will use the built-in [Unarchive](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/unarchive_module.html) module, that can do both at the same time:

```yaml
 - name: Download Binary
   ansible.builtin.unarchive:
    src: https://github.com/cli/cli/releases/download/{{release.tag}}/gh_{{release.tag[1:]}}_linux_amd64.tar.gz
    dest: /tmp
    remote_src: true
```

Here we use the `release` variable that we saved in the previous step, to construct the full download link for the archive. The unarchive module will automatically download and extract the file specified in the "src" property to the directory specified in the "dest" property. The "remote_src" flag is needed to indicate Ansible that the source is a remote URL.

After we download and extract the artifact, we can move the respective executable file to a place in your PATH, like `/usr/local/bin`.

We can use another built-in Ansible module, "copy" do to that:

```yaml
    - name: Install Binary
      ansible.builtin.copy:
        src: /tmp/gh_{{release.tag[1:]}}_linux_amd64/bin/gh
        dest: "/usr/local/bin"
        mode: a+x
      become: true
```

The file needs to be executable, so we specify the "mode" property to indicate the respective permissions. The "become" property is used to run the command as sudo, since the "/usr/local/bin" is usually owned by the root user.

And that´s it.

To run the playbook, open a terminal in the directory where your playbook and hosts file is located, and run:

```bash
ansible-playbook -i hosts setup.yml
```

The `-i` flag indicates a path to the "inventory" file, which specifies the ip addresses and other connection properties that will be used by Ansible to connect to the target machine. Ansible works by connecting to the target machine via SSH, but since we are running this playbook locally, we can use the property "ansible_connection" to indicate that in the hosts file.

```yaml
local ansible_connection=local
```

After Ansible is executed , when we open a new terminal and type `gh`, it should show the GitHub CLI help command.

## Using it at scale

This example, showed the basics of using Ansible to install GitHub software. The tasks will vary slightly depending on the project and what kind of artifacts they provide.

While the example installs a single piece of software, you could do exactly the same logic to install many software from multiple GitHub repositories in the same Ansible playbook.

You could define all your tasks in the playbook file, but like in programming, when your playbook gets too big, it´s recommended to extract into seperate files. Think of the playbook file as the "main" function of your program. You can do this by using [roles](https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html) and create a single role for each software, or you can just create seperate yaml files, each one containing the tasks for each software and then using the [Include tasks](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/include_tasks_module.html) directive, to include the tasks in the main playbook file.

Roles are most useful if you want to reuse functionality across different playbooks or share with the community and also if your tasks are more complex or requires same more configuration.

In our example, we could encapsulate all the tasks defined in the main playbook into a role and then reference it from the playbook file like this:

```yaml
- hosts: all
  roles:
     - { role: github-cli }
```

See [this](https://github.com/tommarshall/ansible-role-awscli) example of a role that installs the AWS Cli.

I am using "include_tasks" in my setup and use normal folders to organize each software as most of the tasks are very simple, but if I was starting today, I would probably use roles, which is a more "standard" way and could allow me to share them to other persons.

## Conclusion

GitHub is a great source of software, but keeping all of it updated with the latest release, can be a very manual process and a lot less convinient that using your distribution package manager. Ansible can help automating that bit.

Create a playbook and tasks for each of your software, and then every time you want to update your system, simply execute the Playbook, in a similar way as you would run `apt update` or `flatpak update`. The "github_release" module will take care, of getting the latest release directly from GitHub, so every time you run the playbook, you will install the most recent version of the Software.

Ansible can be used for a lot more than just installing GitHub software. You can completely automate the setup of a new machine with it. Check my personal setup [here](https://github.com/brpaz/my-linux-setup/) for inspiration.

Thanks for reading.
