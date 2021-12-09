---
title: My Linux Development Environment of 2018
slug: my-linux-development-envrionment-2018
date: 2018-03-24
summary: In this blog post I will talk a bit about the setup and software of my personal laptop, powered by Linux.
tags: ['development','productivity','linux']
published: true
devto_url: https://dev.to/brpaz/my-linux-development-environment-of-2018-ch7
layout: ../../layouts/Post.astro
---

In this blog post I will talk a bit about the setup and software of my personal laptop, powered by Linux. This is somewhat inspired by [this post](https://dev.to/mrkaran/my-development-setup-on-a-macbook), but for a Linux based setup.

I wont list all the applications I have installed on the machine, but only the ones I consider relevant and more focused on Development.

## Base system

Right now my machine is running Linux Mint 18.3 but I am thinking of moving back to Ubuntu 18.04 when its out. I dont really have any complains with Mint, but with with the replacement of Unity with Gnome 3 I want to give it a try.

## Productivity Tools

* [Boostnote](http://boostnote.io) — My main note taking application. I use it mostly to store code snippets and reference material for my development activities. Its open source, cross platform and works completely offline. I wish to have an easier way to sync between multiple machines but since the notes are stored as CSON files, I am using a private Git repo to sync.

* [Simplenote](https://simplenote.com/) — I use Simplenote as my “scratchpad”, for quick notes and thoughts. mostly when on my mobile.

* [Cerebro](http://cerebroapp.com) — Cerebro is an open source cross platform launcher similar to Spotlight and Alfred for Mac. The maintenance is kinda low atm and I felt the need to fork it, but it works pretty well. It doesnt have the same amount of plugins as Alfred does, but I have been developing some.

## Internet

* [Google Chrome](https://www.google.com/chrome/) — My primary browser of choice.

* [Firefox ](https://www.mozilla.org/en-US/firefox/new/)— My secondary browser.

* [Min](https://github.com/minbrowser/min) — Min is a minimalist webbrowser. Since Linux doesn't have anything like [Fenetre](https://xn--fent-ipa.re/) for Mac, I use it when I want to browse documentation, follow a tutorial or watch a video side in a Picture in Picture / side by side mode.

* [Dropbox](https://www.dropbox.com/?landing=dbv2) — For sharing files.

* [Mailspring](https://getmailspring.com/) — Email client.

* [Corebird](https://corebird.baedert.org/) — Twitter Desktop client

* [Ramme](https://github.com/terkelg/ramme) — Instagram desktop client

* [Caprine](https://github.com/sindresorhus/caprine) — Facebook messenger desktop client

* [Whatsapp Desktop](https://github.com/Enrico204/Whatsapp-Desktop) — WhatsApp desktop client with built in notifications and system tray integration.

* [Slack](https://slack.com/) — For chat and engage with communities.

* [Wireshark](https://www.wireshark.org/) — For network sniffing. Useful when developing to see the communication between multiple applications.

## Graphics and Multimedia

* [Pinta](https://pinta-project.com/pintaproject/pinta/) — Pinta is a free, open source program for drawing and image editing. Its my image editor of choice. While Gimp is the most popular image editor on Linux, I found Pinta to much more simpler to use and resembles more with Photostop.

* [XnConvert](https://www.xnview.com/en/xnconvert/) — a powerful and free cross-platform batch image processor, allowing you to combine over 80 actions.

* [Draw.io ](https://github.com/jgraph/drawio-desktop)— Draw.io is my app of choice for designing all kinds of diagrams, from flowcharts, to sequence diagrams or even wireframes. Its 100% free to use and can be integrated with Google Drive.

* [Shutter](http://shutter-project.org/) — For taking screenshots and quickly annotate them with arrows, boxes etc. It also have some nice effects like blur sensible parts of an image.

* [ffmulticonverter](https://sourceforge.net/projects/ffmulticonv/) — For converting images / videos between multiple formats.

* [Peek](https://github.com/phw/peek) — Peek allows to record the screen and save as GIF format. very useful for creating demo gifs for put on project readme files for example.

* [pick](https://kryogenix.org/code/pick/) — Color picker

* [Trimage](https://trimage.org/) — Image compression tool

## Sound and Video

* [VLC](https://www.videolan.org/vlc/index.html) — my favorite media player. Version 3 have chromecast support built in which is even better.

* [Kdenlive](https://kdenlive.org/) — for video editing

* [Kazam](https://github.com/sconts/kazam) — To record screencasts

* [Spotify](https://www.spotify.com/pt/) — For listening to my favorite music.

## System utilities

* [Bleachbit](https://www.bleachbit.org/) — System cleaner utility.

* [Stacer](https://github.com/oguzhaninan/Stacer) — Linux System Optimizer and Monitoring

* [Caffeine](https://launchpad.net/caffeine) — To keep my machine awake

* [Pullover](https://github.com/cgrossde/Pullover) — To receive [Pushover](https://pushover.net) notifications on my desktop

* [CopyQ](https://github.com/hluk/CopyQ) — To manage my clipboard

## Editors

* [Jetbrains](https://www.jetbrains.com/) (PHPstorm, WebStorm) — My IDE of choice,

* [Visual studio code](https://code.visualstudio.com/) — All in one text editor

* vim (for editing files on command line)

## Terminal setup

* [Tilix](https://github.com/gnunn1/tilix) — My favorite terminal emulator.

* [Zsh shell](http://www.zsh.org/) — An feature rich alternative to bash

* [zplug](https://github.com/zplug/zplug) — To manage zsh plugins.

* [zsh-completions ](https://github.com/zsh-users/zsh-completions)— Additional completion definitions for Zsh.

## Command line utilities

* [tldr](https://github.com/tldr-pages/tldr) — tldr is an alternative to man pages but only with the essential. Great way of quickly find any command syntax.

* [yadm](https://github.com/TheLocehiliosan/yadm) — Dotfiles manager

* [fasd](https://github.com/clvv/fasd) — Fasd is a command-line productivity booster. Fasd offers quick access to files and directories for POSIX shells. It is inspired by tools like [autojump](https://github.com/joelthelion/autojump), [z](http://github.com/rupa/z) and [v](https://github.com/rupa/v). Fasd keeps track of files and directories you have accessed, so that you can quickly reference them in the command line.

* [fzf](https://github.com/junegunn/fzf) — A command-line fuzzy finder

* [the silver searcher](https://github.com/ggreer/the_silver_searcher) — A code-searching tool similar to ack, but faster

* [lf](https://github.com/gokcehan/lf) — A command line file manager.

* [pandoc](https://pandoc.org/) — convert between multiple file types from the command line.

* [pwgen](https://github.com/jbernard/pwgen) — Password generator

* [lnav](http://lnav.org/) — An advanced log file viewer for the small-scale

* [trash-cli](https://github.com/andreafrancia/trash-cli) — trash-cli trashes files recording the original path, deletion date, and permissions.

* [opn-cli](https://github.com/sindresorhus/opn-cli) — Opens stuff like websites, files, executables. Cross-platform.

* [ascicinema](https://asciinema.org/) — Record and share your terminal sessions, the right way.

* [hostess](https://github.com/cbednarski/hostess) — An idempotent command-line utility for managing your /etc/hosts file.

* [get-port-cli](https://github.com/sindresorhus/get-port-cli) — Get an available port

* [public-ip-cli ](https://github.com/sindresorhus/public-ip-cli)— Get your public IP address

* i[nternal-ip-cli](https://github.com/sindresorhus/internal-ip-cli) — Get your internal IP address

* [speedtest-cli](https://github.com/sivel/speedtest-cli) — Command line interface for testing internet bandwidth using speedtest.net

* [fkill-cli](https://github.com/sindresorhus/fkill-cli) — Fabulously kill processes. Cross-platform.

* [doctoc](https://github.com/thlorenz/doctoc) — Generates table of contents for markdown files inside local git repository. Links are compatible with anchors generated by github or other sites.

## *Development Environment*

I use Docker extensively in my development environment. I still have common runtimes like go, php, node (with [nvm](https://github.com/creationix/nvm)) and ruby (with [rvm](https://rvm.io/)) installed in the host.

* [Docker](https://www.docker.com/)

* [Docker-compose](https://github.com/docker/compose) — Define and run multi-container applications with Docker

* [Minikube](https://github.com/kubernetes/minikube) — Run Kubernetes locally

* [Telepresence](https://github.com/datawire/telepresence) — Local development against a remote Kubernetes or OpenShift cluster

* [ctop](https://github.com/bcicen/ctop) — Top-like interface for container metrics

* [Vagrant](https://www.vagrantup.com/) — Development Environments Made Easy. I dont Vagrant that much nowadays unless I want to work on infrastucture stuff. (Ex: testing spinning a new cluster or testing an Ansible playbook).

* [Dnsdock](https://github.com/aacebedo/dnsdock) — For managing dns of Docker containers.

## Development tools

* [how2](http://stackoverflow from the terminal) — Stack overflow from terminal

* [Pet](https://github.com/knqyf263/pet) — Simple command-line snippet manager. I use it to store the commands I use most.

* [caniuse-cmd](https://github.com/sgentle/caniuse-cmd) — Caniuse command line tool

* [hub](https://github.com/github/hub) — hub is a command line tool that wraps git in order to extend it with extra features and commands that make working with GitHub easier.

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) — Generate a changelog from git metadata

* [release-it](https://github.com/webpro/release-it) — CLI release tool for Git repos and npm packages.

* [git-open](https://github.com/paulirish/git-open) — Type `git open` to open the GitHub page or website for a repository in your browser.

* [git-semver](https://github.com/markchalloner/git-semver)— Git plugin for Semantic Versioning

* [tig](https://github.com/jonas/tig) — Text-mode interface for git

* [jq ](https://stedolan.github.io/jq/)— jq is a lightweight and flexible command-line JSON processor

* [python-gitlab](https://github.com/python-gitlab/python-gitlab)— GitLab client

* [overcommit](https://github.com/brigade/overcommit) —a tool to manage and configure [Git hooks](http://git-scm.com/book/en/Customizing-Git-Git-Hooks).

* [tmux](https://tmux.github.io/) and [tmuxp](https://github.com/tmux-python/tmuxp) — Terminal multiplexer.

* [gitbook-cli](https://github.com/GitbookIO/gitbook-cli) — GitBook’s command line interface

* [pageres-cli](https://github.com/sindresorhus/pageres-cli) — Capture website screenshots

* [httpie](https://github.com/jakubroztocil/httpie) — Modern command line HTTP client — user-friendly curl alternative with intuitive UI, JSON support, syntax highlighting, wget-like downloads, extensions, etc

* [yeoman](http://yeoman.io/) — Yeoman is a tool that allows to scaffold projects from a series of templates.

* [generator-editorconfig](https://github.com/Knorcedger/generator-editorconfig) — Generates .editorconfig files.

* [license](http://nishanths.github.io/license/) — Create licenses from the command-line.

* [gi](https://www.gitignore.io/) — Create useful .gitignore files for your project

* [travis.rb](https://github.com/travis-ci/travis.rb) — Travis CI Client (CLI and Ruby library)

* [http-server](https://www.npmjs.com/package/http-server) — http-server is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

* [codeclimate-cli](https://github.com/codeclimate/codeclimate) — codeclimate is a command line interface for the Code Climate analysis platform. It allows you to run Code Climate engines on your local machine inside of Docker containers.

* [mycli](https://github.com/dbcli/mycli) — A Terminal Client for MySQL with AutoCompletion and Syntax Highlighting.

* [json-server](https://github.com/typicode/json-server) — Get a full fake REST API with zero coding in less than 30 seconds.

* [localtunnel](https://github.com/localtunnel/localtunnel) — localtunnel exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes.

* [mailhog](https://github.com/mailhog/MailHog) — Web and API based SMTP testing

* [artilery](https://artillery.io/) — Artillery is a modern, powerful & easy-to-use load testing toolkit. Use it to ship scalable applications that stay performant & resilient under high load.

* [Postman](https://www.getpostman.com/) — Postman Makes API Development Simple.

* [Devdocs-Desktop](https://github.com/egoist/devdocs-desktop) — [DevDocs.io](https://devdocs.io/) combines multiple API documentations in a fast, organized, and searchable interface. This is an unoffcial desktop app for it.

## DevOps tools

* [doctl](https://github.com/digitalocean/doctl) — A command line tool for DigitalOcean services.

* [gcloud-sdk](https://cloud.google.com/sdk/) — The official sdk to interact with Google Cloud infrastucture.

* [aws-cli](https://github.com/aws/aws-cli) — This package provides a unified command line interface to Amazon Web Services.

* [ansible](https://www.ansible.com/) — Automate infrasctucture

* [terraform](https://www.terraform.io/) — Write, Plan, and Create Infrastructure as Code

* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) — kubectl is a command line interface for running commands against Kubernetes clusters

* [kubectx](https://github.com/ahmetb/kubectx) — Fast way to switch between clusters and namespaces in kubectl!

* [kubeval](https://github.com/garethr/kubeval) — Validate your Kubernetes configuration files, supports multiple Kubernetes versions

* [helm](https://github.com/kubernetes/helm) — The Kubernetes Package Manager

* [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli) — The Heroku Command Line Interface (CLI) makes it easy to create and manage your Heroku apps directly from the terminal. It’s an essential part of using Heroku.

* [forge.sh](https://forge.sh/) — Define and deploy multi-container apps in Kubernetes, from source

* [Firebase tools](https://github.com/firebase/firebase-tools) — The Firebase Command Line Tools

* [dpl](https://github.com/travis-ci/dpl) — Dpl (dee-pee-ell) is a deploy tool made for continuous deployment.

## Conclusion

This is current Development machine. Hope you have find this useful.

I am always looking for ways to improve my workflow, so if you use any tool that you find useful and its not listed here, feel free to comment this post.

Linux can be a very powerful development environment. Its a pity that amazing Mac applications like [Alfred](https://www.alfredapp.com/) or [Fenetre](https://xn--fent-ipa.re/) doesn't have a viable Linux alternative. Thats what I miss the most. And I never used a Mac but I feel the power of these applications!

