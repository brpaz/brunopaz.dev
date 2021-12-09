---
title: From Notion to Dendron, my new note taking and knowledge base application
slug: from-notion-to-dendron
date: 2021-05-20
summary: Dendron is an open-source, local-first, markdown-based, note-taking tool built on top of VSCode. In this article, I give an introduction to core Dendron features and show a real example of how I am using it to manage all my knowledge.
tags: ['dendron','tools','knowledge', 'note-taking']
published: false
# devto_url: https://dev.to/brpaz/from-notion-to-dendron-my-new-note-taking-and-knowledge-base-application-4icl-temp-slug-6997891
layout: ../../layouts/Post.astro
---

Note taking and to-do lists apps are probably the most common applications. Still, It seems to be really difficult to find one that completely suites my needs.

I tried many apps like [Evernote](https://evernote.com/), [Boostnote](https://boostnote.io/), [Notable](https://notable.app/), [Joplin](https://joplinapp.org/), until I discovered [Notion](https://notion.so/) and thought that I would finally settle.

While I was generally happy with it, it had a couple of drawbacks for me. Performance was not the best, doesn´t work offline, doesn´t have a native Linux app, and while you can export your notes to Markdown, I still feel somewhat locked in.

They have done improvements to performance recently and even release the API which it was a thing that I was eagerly looking for, but I believe that something as important as your entire knowledge, shouldn´t be tied to some third party closed platform and wanted to move to have something local, where I have total control and that I could sync to a Git Repository.

I tried [Obsidian](https://obsidian.md/) for some time, but I missed the full hierarchy of Notion, where everything is a Page. Obsidian doesn´t allow a folder to also be a page.

Ironic or not, I was searching in Obsidian forums for a solution for that and saw a user linking to [Dendron](https://wiki.dendron.so/) that caught my attention.

I decided to give it a try and it quickly convinced me to move all my content in Notion.

## What is Dendron?

![Dendron Logo](/img/blog/b1rcmpkxv5bdqzah1yo8.png)

> [Dendron](https://wiki.dendron.so/) is an open-source, local-first, markdown-based, note-taking tool built on top of VSCode.

The fact that Dendron is built on top of VSCode is interesting and a great appeal to developers, as your notes are managed within a familiar interface, and allows you to use all the built-in features of VSCode that you already use when coding, like search or code snippets. It also supports the thousands of extensions from VSCode Marketplace that you can use to extend the core functionality and to improve your workflow. And you could even build your own.

Dendron creates it´s own [VSCode Workspace](https://code.visualstudio.com/docs/editor/workspaces) and installs a couple of extensions to provide the full functionality.

### Hierarchies FTW

Folders vs Tags is an eternal discussion in all note taking apps that I have used. Some support only folders, other only tags, others support both. Each has some advantages, but it ends to be a very personal choice.

Each person brain process information in a different way and mine prefers a more hierarchical and visual approach, that is closer to the folder/tree structure.

Dendron takes this to the next level with the concept of "Hierarchies".

Instead of using nested folders, Dendron uses a flat structure of files, with a "." separator.

For example, the following folder structure:

```
.
└── project1/
    │   └── project1/designs/promotion.png
    ├── project1/paperwork/
    │   └── project1/paperwork/legal.md
    └── project1/tasks/
        ├── project1/tasks/task1.md
        └── project1/tasks/task2.md
```

Would be represented in Dendron like this:

```
.
├── project1.md
├── project1.designs.md
├── project1.designs.promotion.md
├── project1.paperwork.md
├── project1.paperwork.legal.md
├── project1.tasks.md
├── project1.tasks.task1.md
└── project1.tasks.task2.md
```

It feels similar the the concept of "namespaces/packages" in programming, using "." as a separator.

This structure,  makes a lot easier to have an global overview of how your content is structured, as you don´t need to navigate into a deep list of nested folders. Also can get an "index" page at the root of your hierarchy that you can´t do with a folder based structure.

And thanks to Dendron [lookup](https://wiki.dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html) feature, you can find and create new pages in your hierarchy very easy, leveraging the native VSCode Lookup. It feels a bit like triggering auto-completion while programming.

Just press `Ctrl+L` and start typing:

![Dendron lookup example](/img/blog/go46zlv7j0zd8b8a17he.gif)

The hiearchies will also be visible as a traditional "Tree View" in the sidebar.

This is working very well for me and it´s incredibly fast to find the content that I am looking for, which is one of the most important things for me.

But you are not limited to Hierarchies. Dendron also supports [Backlinks](https://wiki.dendron.so/notes/3472226a-ff3c-432d-bf5d-10926f39f6c2.html) similar to Roam and Obsidian and also [tags](https://wiki.dendron.so/notes/8bc9b3f1-8508-4d3a-a2de-be9f12ef1821.html).

It also have an amazing [Graph view](https://wiki.dendron.so/notes/587e6d62-3c5b-49b0-aedc-02f62f0448e6.html), that allows you to see how your notes are connected.

It´s really flexible.

### Keep a consistent notes structure using schemas

A really cool feature of Dendron is [Note Schemas](https://wiki.dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html). Note Schemas are like an optional type system for your notes and hierarchies.

So for example, suppose your are creating notes for programming languages and you want that each language note has the same structure and child notes like "introduction", "data types", "variables", etc.

You can define a schema, and Dendron will automatically autocomplete the child pages allow you to create then easily.

![Dendron Schemas in action](/img/blog/voohwmdqhcusdgtw467s.gif)

You can also create "Note templates" for your notes, so that when you create a new note of a particular type always have the same basic content.

### Organize your notes using Vaults

All Dendron content lives inside the VSCode workspace created when you start Dendron for the first time.

There are cases that makes sense to have some notes separated from others, like having Work and Personal spaces. Dendron allows that with the [Multi Vault Support](https://wiki.dendron.so/notes/45cfb9f2-46cf-4f67-a41e-834818fbd06e.html).

Each vault is basically a folder inside your workspace.


### Publish your notes as a static website

Dendron allows to generate a static site for your vaults.

This is great for sharing documentation written in Dendron with the public or since Dendron is a local application, to have a read only view of your notes that you can access from everywhere.

You can see an example of how a published page looks like [here](https://www.kevinslin.com/). Kevin is the Creator of Dendron, btw.

### And many more

Dendron has a lot more of cool features. Special notes types like "Scratch" and "Journal", hooks that allow users to run custom scripts in various parts of Dendron's lifecycle and much more.

Make sure you read the [documentation](https://wiki.dendron.so/). To get started, you can check the following on-boarding video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/3io2fHRmZsE' frameborder='0' allowfullscreen></iframe></div>

---

## My Dendron Workflow

I presented some of the core features of Dendron and hope that you got an idea of how it works and what it can do.

I will now show a real example, of how I personally use Dendron to manage all my knowledge.

### Launching Dendron

As I said in the beginning of this article, Dendron works as a set VSCode Extensions. While having all the VSCode platform is cool, I still prefer to have a standalone app for my notes and don´t mix with my general Coding workspace.

You can achieve that separation in multiple ways.

The first, is to launch VSCode, but pointing to a different `data` and `extension` directories. You can do so, by launching Code from the command line with the flags `--user-data-dir` and `--extensions-dir`, like:

```bash
code --user-data-dir=/path/to/code-dendron \
  --extensions-dir=/path/to/code-dendron-ext
```

This works fine and gives you a separate install with only the Dendron extensions, but it´s still the same VS Code application with the VSCode icon and such.

If you want to have everything completely separate, you can install a different VSCode build like the [Insiders build](https://code.visualstudio.com/insiders/) or [Codium](https://vscodium.com/) and use it only for Dendron.

This way they are two separate apps, and you can even change the icon and the application name.

That´s what I did. I use Linux so I have a `.desktop` file to launch "Codium Dendron", like this:

```
[Desktop Entry]
Version=1.1
Type=Application
Name=Dendron
Comment=The note-taking tool that grows with you
Icon=/home/bruno/.local/share/icons/apps/dendron.png
Exec=/usr/bin/codium --user-data-dir=/home/bruno/.config/dendron/data --extensions-dir=/home/bruno/.config/dendron/ext /home/bruno/Dendron/dendron.code-workspace
StartupWMClass=VSCodium
```

### Everything is stored in Git

I created a private GitHub repo where I store the entire Dendron workspace with all the vaults and configs.

This way I can easily clone it in any other machine to make changes.

Dendron has a "Remote vaults" feature that allow you to sync Vaults with Git but you have to store each vault in a separate repository. Instead I created all my vaults as "Local" and sync the contents manually.


### Workspace and hierarchies structure

Right now, I have three vaults:

* **Dev** - contains all notes regarding Software Engineering.
* **Personal** - contains personal things like list of TV Series to see or book reviews.
* **Work** - Work related stuff, like meeting notes.

My core use case of using Dendron is to store Development and Programming related knowledge. The "Dev" vault is by far, the one with more notes.

I will do next a sneak peak, how I am using hierarchies to organize the contents of the Dev Vault.

I am using Dendron for a month now, so this structure can be completely different in the future, but I am really liking it so far.

Dendron has some cool refactor capabilities for hierarchies, so if in the future I decide to organize my notes in a very different way, it should be simple to do so. And even without that, the fact the Dendron stores notes as a flat file structure, makes it simple to do some operations programmatically. A lot easier that dragging each page individually in Notion.

Content organization is a very personal thing. You should build the way it fits best with your brain. Still, having an inspiration is always good, so I hope that sharing how I am doing, can be helpful.

My main hierarchies are the following:

#### **Languages**


The "languages" hierarchy, is where I store information about the programming languages that I know or that I am learning.

I have a root note for each programming language, which can contain child notes for more specific aspects of the language.

I am not using Schemas at the moment, but this is a good use case for them, so that I could guarantee that each language hierarchy has exactly the same structure.

I generally always have a couple on common child notes for each language:

* **getting-started** - Introduction to the language, base concepts and links to setup.
* **articles** - List of interesting blog posts, tutorials etc related to that language.
* **libs** - List of popular libraries built in that language.
* **tools** - Tooling associated with that language, like build or linting tools.

If I need to dive deep into a particular library or framework for example, I can keep creating child notes lile `langs.php.lib.mylib`.

Example:

```
├── langs.md
├── langs.php.md
├── langs.php.getting-started.md
├── langs.php.libs.md
├── langs.php.libs.symfony.md
├── langs.php.libs.symfony.getting-started.md
├── langs.php.libs.symfony.articles.md
├── langs.php.libs.symfony.bundles.md
├── langs.php.tools.md
├── langs.php.tools.composer.md
```

#### **Craft**

Everything related with Software Craftsmanship topics like Clean Code and Code quality guidelines and practices, and programmer mindset.

Example:

```
├── craft.md
├── craft.clean-code.md
├── craft.code-quality.md
├── craft.high-quality-software-worth-the-cost.md
├── craft.pragmatic-programmer.md
├── craft.real-10x-engineers.md
├── craft.technical-debt.md
├── craft.ten-commandments-egoless-programming.md
├── craft.the-senior-engineer.md
```

#### **Principles**

The "Principles" hierarchy contains notes regarding core programming principles like Algorithms, Data structures and Design patterns.

```
├── principles.md
├── principles.algos.md
├── principles.data-structures.md
├── principles.data-structures.hash-table.md
├── principles.data-structures.linked-list.md
├── principles.data-structures.queue.md
├── principles.data-structures.stack.md
├── principles.design-patterns.md
├── principles.design-patterns.adapter.md
├── principles.design-patterns.factory.md
├── principles.paradigms.md
├── principles.paradigms.oop.md
├── principles.paradigms.functional.md
├── principles.solid.md
```

#### **Engineering**

The "Engineering" hierarchy contains notes about wider Engineering topics and best practices, like CI/CD, Code reviews, Team structure, Mentorship and more.

```
├── engineering.md
├── engineering.cicd.deployment.md
├── engineering.cicd.manifesto.md
├── engineering.cicd.md
├── engineering.cicd.pipeline.md
├── engineering.cicd.release.md
├── engineering.cicd.trunk-based-development.md
├── engineering.code-review.md
├── engineering.feature-toggles.md
├── engineering.kpis.md
├── engineering.mentorship.md
├── engineering.team-structure.md
```

#### **Systems Design**

Information regarding how to design systems and applications, APIs, architectural patterns, etc:

```
├── systems-design.md
├── systems-design.12-factor-app.md
├── systems-design.apis.md
├── systems-design.apis.graphql.md
├── systems-design.apis.grpc.md
├── systems-design.apis.rest.md
├── systems-design.apis.rest.best-practices.md
├── systems-design.apis.rest.documentation.md
├── systems-design.apis.rest.security.md
├── systems-design.apis.rest.tools.md
├── systems-design.ddd.md
├── systems-design.hexagonal-arch.md
├── systems-design.jamstack.md
├── systems-design.microservices.md
├── systems-design.cqrs.md
├── systems-design.serveless.md
```

#### **Ops**

The "ops" hierarchy is where I store all the information related to Infrastructure and DevOps.

```
├── ops.md
├── ops.cloud.md
├── ops.cloud.aws.md
├── ops.cloud.digitalocean.md
├── ops.cloud.gcp.md
├── ops.dns.md
├── ops.incident-management.md
├── ops.k8s.md
├── ops.k8s.getting-started.md
├── ops.k8s.articles.md
├── ops.k8s.helm.md
├── ops.k8s.kubectl.md
├── ops.k8s.kubectl.cheatsheet.md
├── ops.k8s.tooling.md
├── ops.k8s.tooling.kind.md
├── ops.k8s.tooling.kustomize.md
├── ops.monitoring.md
├── ops.monitoring.grafana.md
├── ops.monitoring.grafana.dashboards.md
├── ops.monitoring.grafana.install.md
├── ops.monitoring.loki.md
├── ops.monitoring.loki.logql.md
├── ops.monitoring.prometheus.md
├── ops.tools.md
├── ops.tools.ansible.md
├── ops.tools.pulumi.md
├── ops.tools.terraform.md
├── ops.webservers.md
├── ops.webservers.nginx.md
```

### **Tools**

I use this hierarchy to store notes, user guides and cheat sheets for common used tools, like Command line tools, or Desktop Software.

```
├── tools.md
├── tools.cli.md
├── tools.cli.doctl.md
├── tools.cli.fd.md
├── tools.cli.fzf.md
├── tools.cli.jq.md
├── tools.cms.directus.md
├── tools.cms.md
├── tools.degit.md
├── tools.devdns.md
├── tools.docker.cheatsheet.md
├── tools.docker.getting-started.md
├── tools.docker.label-schema.md
├── tools.docker.md
├── tools.espanso.md
├── tools.slack.md
├── tools.vscode.md
├── tools.github.md
├── tools.github.actions.md
├── tools.github.cli.md
├── tools.github.container-registry.md
├── tools.jetbrains.md
├── tools.zealdocs.md
```

#### **Learning**

When I am learning something new, like doing an online course, I create a note in the learning hierarchy to take notes on that course. I try to keeop it simple in a single note, but can create child notes, like for each chapter of the course.

```
├── learning.md
├── learning.courses.md
├── learning.courses.udemy-apache-kafka-series.md
```

These is just the surface of my Dendron hierarchies, but should give you a good example how everything is structured.
I have some more hierarchies, like "frontend", "database", "testing", "security", "linux", "git" and a few more, following similar structure.

#### **Projects**

In the "projects" hierarchy, I have a note for each personal project or idea, where I gather the requirements, describe the tech stack, etc. It´s my project planning space, before starting coding.

```
├── projects.md
├── projects.project1.md
```

The project note uses a Note template to ensure that all the project notes have the same structure.

These is just the surface of my Dendron hierarchies, but should give you a good example how everything is structured.
I have some more hierarchies, like "frontend", "database", "testing", "security", "linux", "git" and a few more, following similar structure.

--

### Mobile access

Unlike cloud software like Notion, Dendron doesnt have a mobile app, but frankly, for my workflow, I don´t miss it.

I write most of my notes while coding or watching courses/read tutorials, so I am at my personal or work laptop with Dendron installed.

In mobile, I use mostly [Google Keep](https://keep.google.com/) to take quick notes, and if I found that these notes are important to store in a more permant storage later, I can just copy them to Dendron, the next time I am on my computer.

Most of the time, my mobile consuption will be read only, like if I need to lookup some information on an existing note.

For that, I am using [GitJournal](https://gitjournal.io/) app on Android to access the Git Repo where my notes are stored.

I also plan to publish my workspace to a private web server, so I can read it more easily.

---

## Conclusion

Dendon is a pretty new app, but I am really enjoying using it so far. Hierarchies works incredible well with my mind and I can use workflows that I already using when programming like Code Snippets, Refactoring, etc.

If you are looking for an local first Note taking / Knowledge management application, you should give it Dendron a try.

If you decide to try it, I also recommend you join the community on [Discord](https://discord.com/invite/xrKTUStHNZ).

It´s a really friendly community and you can help shaping the future on Dendron.

Good note taking!

