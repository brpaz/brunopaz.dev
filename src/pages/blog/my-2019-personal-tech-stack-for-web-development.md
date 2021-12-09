---
title: My 2019 Personal Tech stack for Web Development
slug: my-2019-personal-tech-stack-for-web-development
date: 2019-12-01
summary:  In this article, I will talk a bit about my personal favorite tech stack and related tools for Web Development.
tags: ['development']
published: true
devto_url: https://dev.to/brpaz/my-2019-personal-tech-stack-for-web-development-2d5j
layout: ../../layouts/Post.astro
---

In this article, I will talk a bit about my personal tech stack and related tools for Web Development.

But, before starting, let me just do a brief introduction about myself.

## Who am I?

I am Web Engineer, working atm in an E-Commerce/Payment company where I do mostly Backend development, using Golang and Java as core technologies.

I started programming in 2011 after graduating in Computer Science.

I was still looking for my real passion, and working in a very small startup as my first job, forced me to do a little bit of everything from frontend to backend and some basic ops, in the old days where HTML, CSS, and jQuery were enough to build a frontend.

Over the years I specialized more in Backend development, mostly using PHP and Symfony.

Backend development, software architecture and engineering practices are my main focus and passion, but I want to understand all the areas of the Software Development Life cycle and be able to build and launch any product on my own, "from idea to production".

That´s what I aim for, and try to balance my learnings to reflect that.

It´s almost impossible to be a complete expert full-stack dev these days. The tech world is just too broad. but I also don't believe in "Single Language" developers.

The ability to learn and adapt fast is an essential skill.

I think the sweet spot is somewhere in between. I identify a lot with the concept of [T-Shaped developer](https://medium.com/quick-code/what-it-is-a-t-shaped-developer-and-why-you-should-be-one-e87293e4bb84).

Nowadays, the term full-stack developer is also very subjective as there are many more areas besides the traditional Frontend/Backend.

I like this definition by Adam Wathan:

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Being full stack doesn’t mean you know every single thing about every technology you could possibly use to create software for the web. It means you can create and deploy a web application by yourself. Rails + jQuery + Heroku is “full stack” by my definition.</p>&mdash; Adam Wathan (@adamwathan) <a href="https://twitter.com/adamwathan/status/1186388252745457665?ref_src=twsrc%5Etfw">October 21, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And this is the kind of full-stack I want to be.

In the next sections, I will present some of my favorite technologies and tools for all the areas of Web Development.

Bear in mind, that I am not an expert on all of these. Far from it.

The backend technologies and some infrastructure yes, I have deep experience and use them a daily basis.

Others, it´s more a theoretical knowledge from reading articles and books and small experiments, but I am convinced of the value of these and plan to use them in real projects when I have a chance.

## Backend

So let's start with my main area of expertise, Backend development.

I have two main languages in my stack. PHP and Golang.

### PHP and Symfony

PHP and Symfony are the technologies that I am more comfortable with, since I worked with them for the most part of my career, from the old PHP 5.3 and Symfony 1.4 to the shiny PHP 7.3 and Symfony 4.

PHP might not be the most popular and pretty language today, far from it, but it´s a very mature language that has received some great improvements in the past few years. It also has some great libraries and frameworks and a strong community.

It´s a "boring" language and IMO, having a boring language in your stack, that you can rely upon to build working software fast without thinking too much is a must-have for any developer.

I wouldn't probably be so keen on PHP without [Symfony](https://symfony.com/) tough.

Symfony is an amazing and mature framework that focuses on good OOP design and Design patterns. It has very good documentation and a strong focus on Developer experience and performance.

If you like OOP, Design patterns and Clean code, Symfony is a joy to work with.

I am not working with Symfony anymore at work, but I have worked for many years and I can build products very fast with it.

### Golang

I have been working with Golang professionally for more than one year and it´s been a fantastic experience.

I think it complements PHP really well, as some of the strong points of Go are precisely some of the PHP weakest points like concurrency and long-running processes.

Go it's incredibly light-weight and strongly typed, which I like. It´s not really an OOP language but has some powerful concepts like interfaces that help to build well structured and modular codebases.

Goroutines are awesome for building highly concurrent applications.

Being a compiled language makes it easy to distribute and install, making it one of the best languages ideal for Command-line applications, System Tools, and utilities and microservices and APIs.

Go took the world of DevOps tooling by storm, being the language of choice for popular software like [Kubernetes](http://kubernetes.io), [Docker](https://www.docker.com/) or [Terraform](https://www.terraform.io/)

I am writing more and more Go and it´s becoming my primary language.

With Symfony and Go in my stack, I believe I can solve 99% of problems related to Backend development.

### The future

I will continue using more and more Go, but I will always have Symfony in a special place in my heart.

[Typescript](https://www.typescriptlang.org/) is a language that I have an eye on as it gets more and more popular.

I have never really done everything with it, but if one day I want to replace PHP as the OOP language in my stack, Typescript is looking like a strong candidate.

I would also like to play with a more functional language. Scala, Haskell, not sure yet.

---

## Frontend

One of my goals for next year is to improve my front-end skills.

With a new JS framework every week, and me not wanting to become a frontend developer, choosing a stack that is stable and mature, with good backward compatibility records, good documentation, and a big community around it, are very important factors to look into.

Right now there are two major ecosystems, who met these criteria: [React](https://reactjs.org/) and [Vue](https://vuejs.org/).

I choose Vue because I prefer the way it is designed with templates instead of JSX for example and I think it´s easier to understand.

Vue has a great ecosystem of tools and libraries.

With Vue itself for Single page applications, [NuxtJS](https://nuxtjs.org/) when there is a need for Server-Side rendering and [Gridsome](https://gridsome.org/) for more static sites, I can build all kinds of frontends.

I could even hook [Nativescript](https://nativescript-vue.org/) to build native mobile applications.

If you prefer the React ecosystem, the same kind of tools exist. [Next.js](https://nextjs.org/) instead of Nuxt and [GatsbyJS](https://www.gatsbyjs.org/) instead of Gridsome.

Some of the React tools are more mature, like Gatsby compared with Gridsome, but still, I hoping them to catch up.

A big pain for many backend developers is CSS. I also really suck at design.

[Tailwind CSS](https://tailwindcss.com/) is a great option and I am looking forward to the components of [Tailwind UI](https://www.tailwindui.com/).

Or you could go with classic Bootstrap and buy some themes from sites like [Themeforest](https://themeforest.net/).

## Scripting

Every developer needs to do some kind of utility scripts once in a while, from data migration utilities to deployment scripts.

Python is one of the most popular languages for these kinds of scripts because it´s really simple to learn and comes pre-installed in many systems.

But Go also fits really nice on this. You can run it locally with a simple "go run" and you can compile it in a single binary with all the bundled dependencies (which is a pain in python), to run on a remote system.

I can write Python, but since I have much more experience with Go, it´s becoming a natural choice for this kind of scripts.

With a little help of bash for more basic things ;)

## Datastores

Almost every application needs to store data in some form.

I use [MySQL](https://www.mysql.com/) for Relational data, [Redis](https://redis.io/) for in-memory database, cache, etc and [ElasticSearch](https://www.elastic.co/) or [Algolia](https://www.algolia.com/) for full text search.

[Cloud Firestore](https://firebase.google.com/docs/firestore) is really interesting when I don't want to worry about setup a database and NoSQL storage is enough. It´s really great for prototypes, small personal apps, and frontend/mobile-focused applications.

I am starting to look more int some "Cloud-native" solutions like [FaunaDB](https://fauna.com/), [ArangoDB](https://www.arangodb.com/) and [CockroachDB](https://www.cockroachlabs.com/get-cockroachdb/).

## Messaging

There are many use cases where a Message Queue system is useful like long-running processes or communication between different services.

At my current job, I use [Apache Kafka](https://kafka.apache.org/) and it works great for complex, event-driven systems.

For personal projects, in most cases, I want a simpler and managed solution. This is where [Amazon SQS](https://aws.amazon.com/sqs/) and [Google Cloud Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) comes in. They are free for most basic workloads.

## Object storage

For storing user uploaded files, [Google Cloud Storage](https://cloud.google.com/storage/) and [DigitalOcean spaces](https://www.digitalocean.com/products/spaces/) are two good options.

Another great service, more specialized in media upload is [Cloudinary](https://cloudinary.com/).

## CMS and BaaS

To provide content editing capabilities without much effort, [Netlify CMS](https://www.netlifycms.org/) is great for a Git-based workflow and [Prismic](https://prismic.io/) for an API like workflow.

For a self-hosted solution, [Directus](https://directus.io/) or [Strapi](https://strapi.io/).


## Infrastructure

Code that is not in production is not really useful.

I believe every developer should understand the basic concepts of infrastructure and application deployment.

I am a big fan of the concepts of "Operate what you build" and "Full-Cycle developers" of Netlfix, where the team that develops a system is also responsible for operating and supporting that system.

You can read more about it in [this](https://medium.com/netflix-techblog/full-cycle-developers-at-netflix-a08c31f83249) blog post.

Cloud services make all this easier for developers by abstracting the low-level complexities of networking, storage, etc.

For generic all-purpose hosting, [DigitalOcean](https://www.digitalocean.com/) is my platform of choice. It´s very developer-friendly and provides great services at affordable prices.

Their services offering is not as rich as bigger players like AWS or Google Cloud, but the introduction of managed Kubernetes clusters and managed databases were a great step forward.

I am also pretty curious about their future [PaaS](https://www.digitalocean.com/nanobox) after they have acquired [Nanobox](https://blog.digitalocean.com/digitalocean-acquires-nanobox/) earlier this year.

In the cases where DigitalOcean doesn't cover all my needs, I go to [Google cloud](https://cloud.google.com/).

Tools like [Cloud Run](https://cloud.google.com/run/), [Cloud Functions](https://cloud.google.com/functions/), [Container Registry](https://cloud.google.com/container-registry/), [Cloud Pub/sub](https://cloud.google.com/pubsub), [Cloud scheduler](https://cloud.google.com/scheduler/) and [Cloud firestore](https://cloud.google.com/firestore/) provides the foundations for building all kinds of applications.

These tools have a great free tier, allowing building small projects for free.

For provision infrastructure [Terraform](https://www.terraform.io/) and [Ansible](https://www.ansible.com/) work very well.

When I just need to deploy a frontend or a static site, I use [Netlify](https://www.netlify.com/).

[Namecheap](https://www.namecheap.com/) to manage my domains and [Cloudflare](https://www.cloudflare.com/) for DNS and CDN.

For monitoring, both Google Cloud and DigitalOcean offer good basic monitoring built-in.

As an alternative [Datadog](https://www.datadoghq.com/) and [Sentry](https://sentry.io/welcome/) are some great tools.

I am still looking for a good Logging Solution. [Logz.io](https://logz.io/) looks nice and it´s based on the ELK stack which is very popular and what I use at work. Their Community plan is also very generous for small projects.

[UptimeRobot](https://uptimerobot.com/) and [Opsgenie](https://www.atlassian.com/software/opsgenie) to guarantee I get notified when a site is down.

## Tooling

I am using [GitLab](https://about.gitlab.com/) for private projects and CI/CD, but with the available free plan for private repositories and the introduction of GitHub Actions and Package registry, I might move everything to [GitHub](https://github.com/). It´s a tough decision as I love the Product vision of GitLab, but GitHub is still more polished in some areas.

[Codacy](https://www.codacy.com/) gives me automated code reviews & code analytics and it´s free for 4 users.

For coding, I use [VScode](https://code.visualstudio.com/), together with [JetBrains](https://www.jetbrains.com/) IDEs.

[Docker](https://www.docker.com/) and [Docker-Compose](https://docs.docker.com/compose/) provides a streamligned development envrionment.

[Postman](https://www.getpostman.com/) for testing REST APIs, [Cacher](https://www.cacher.io/) for storing code snippets, [Dbeaver](https://dbeaver.io/) for connecting to databases.


---

## Conclusion

I really like my stack and I believe I can build almost anything web-related with it.

It´s not a static list.

In tech, everything evolves at a very fast pace.

It´s important to keep updated and experiment with new tech on a regular basis and my stack will keep evolving based on that.

But it´s very important to avoid "Hype Driven development".

Always have some "boring" mature tools in your stack, which allow you to keep building things in a fast and sustainable way.

In the end, people are what matters, so focus on building useful things that improve people´s lives, independent of the stack!

![No Innovation maters more than which saves lives](/blog/xx4bopxyr3vhyv468qm8.jpg)
