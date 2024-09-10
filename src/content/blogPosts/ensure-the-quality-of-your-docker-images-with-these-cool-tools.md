---
title: Ensure the quality of your Docker Images with these cool tools
slug: ensure-the-quality-of-your-docker-images-with-these-cool-tools
publishDate: 2019-07-01
excerpt: In this article, I will present some cool tools that can be used to test and ensure the quality of your Docker image.
tags: ['development','docker','php', 'xdebug']
devto_url: https://dev.to/brpaz/ensure-the-quality-of-your-docker-images-with-these-cool-tools-1bh7
published: true
featured: true


---

When we talk about software testing, most of the time it's about testing the application code in order to guarantee it safeties our defined code quality metrics and functional/business requirements.

The same concepts like Unit Testing or Integration Testing can also be applied for infrastructure related code.

Testing VMs and Bare metal systems can be complex and very time and resource consuming, but with containers that process is much easier.

Next, I will present some tools that you can use to ensure the quality of your Docker images.

## Hadolint

[Hadolint](https://github.com/hadolint/hadolint) is a linter for Dockerfiles.

It can be used to ensure that you Dockerfile doesn't contain structural errors and follows the official [best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).

It also uses [ShellCheck](https://github.com/koalaman/shellcheck) under the hood, which is a static analysis tool for shell scripts, to validate the shell code present in your Dockerfile "RUN" instructions, which is pretty neat.

Having a well written Dockerfile is the first step to a quality Image.

## Container Structure Test

[Container structure test](https://github.com/GoogleContainerTools/container-structure-test) is a tool developed by Google to validate the structure of your image. It can be seen as a Unit Test framework for containers.

These tests can be used to check the output of commands in an image, as well as verify metadata and contents of the filesystem.

You define your tests in a YAML file and then run the tool against an existing image locally or it some registry.

A simple metadata test, that checks the existing of environment variables, labels, ports and other can be defined as such:

```yaml
metadataTest:
  env:
    - key: foo
      value: baz
  labels:
    - key: 'com.example.vendor'
      value: 'ACME Incorporated'
  exposedPorts: ["8080", "2345"]
  volumes: ["/test"]
  entrypoint: []
  cmd: ["/bin/bash"]
  workdir: "/app"
```

## Goss and DGoss

[Goss](https://github.com/aelsabbahy/goss) is another YAML based tool for validating a server’s configuration. It's built in Go and can be used to test all kinds of systems from Virtual Machines to containers. [Dgoss](https://github.com/aelsabbahy/goss/tree/master/extras/dgoss) its a wrapper that facilitates the usage of Goss with containers.

Here is an example of a test definition using Goss:

```yaml
port:
  tcp:22:
    listening: true
    ip:
    - 0.0.0.0
  tcp6:22:
    listening: true
    ip:
    - '::'
service:
  sshd:
    enabled: true
    running: true
user:
  sshd:
    exists: true
    uid: 74
    gid: 74
    groups:
    - sshd
    home: /var/empty/sshd
    shell: /sbin/nologin
group:
  sshd:
    exists: true
    gid: 74
process:
  sshd:
    running: true
```

As you can see its really simple to understand.

It is very similar to "Container structure test" but with a bigger set of functions that allow you to verify stuff like services, users, packages, groups, and even HTTP endpoints. You can probably do that by writing your own commands, using Container Structure test, but goss provides these out of the box.

I think both are good options. I haven't tried Goss yet in practice. Experiment and see what you like more ;)

## Kitchen CI

One of the popular tools to test infrastructure code is [Kitchen CI](https://kitchen.ci/).

Kitchen provides a test harness to execute infrastructure code on one or more platforms in isolation.

A driver plugin architecture is used to run code on various cloud providers and virtualization technologies such as Vagrant, Amazon EC2, and Docker.

It supports many testing frameworks like [InSpec](https://www.inspec.io/) or [Serverspec](https://serverspec.org/).

It's Ruby based and a lot more complex than Goss or Structure Test. It also requires many more dependencies. Nevertheless its a very powerful tool that you might want to check out.

## Security Testing with Clair

A very important aspect that sometimes is forgotten when working with containers is security. Docker images still have an OS like Ubuntu or Alpine under the hood which might have software packages with known security vulnerabilities that need to be monitored and patched.

[Clair](https://github.com/coreos/clair) is an open source project that helps to find these vulnerabilities in your docker images.

It contains a database that is updated at regular intervals so it can find the most recently discovered issues.

You can easily integrate it into your CI Pipeline to be notified on any vulnerability.

Recently I also discovered [Anchore](https://anchore.com/) which is very similar but that besides its open source solution also provides an Enterprise solution with Dashboards and other things.

## Keep your image sizes in control with Dive

Having small and optimized images is very important in order to have faster builds.

[Dive](https://github.com/wagoodman/dive) is a very cool tool that allows you to explore a docker image, see its layers contents, and more.

It can help a lot to understand how your image layers are organized and find ways to shrink the size of your final image.

Even cooler, is that you can run it on your CI system and configure it to fail the build based on some metrics related to the size of the image.

---

## Conclusion

Testing your infrastructure code besides your application code is very important to avoid unexpected problems.

In more traditional systems it´s not always easy and it can have a high cost in terms of time and resources.

With Docker and these tools, it's really simple and fast to implement some basic tests to guarantee that the required packages are installed, the specified ports are listening and the needed services are running.

Having these tests can give you extra confidence that the system as a whole will work as expected.

---

Do you know any other cool tool that I haven't mentioned in the article? Feel free to share.

Thanks for reading.
