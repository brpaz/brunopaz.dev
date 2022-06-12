---
title: Using Docker Multi-stage builds during development
slug: using-docker-multi-stage-builds-during-development
date: 2018-10-20
summary: Docker Multi-stage builds is a great way to build smaller Docker images optimized for production use without having things like build tools in the final image. But what about development? You might need these build tools. In this article I will show you how you can have the best of both worlds with the same Dockerfile and Multi-stage builds.
tags: ['development','docker']
published: true
devto_url: https://dev.to/brpaz/using-docker-multi-stage-builds-during-development-35bc
layout: ../../layouts/Post.astro
---

Multi-stage builds is a feature introduced Docker 17.05 that allows you to create multiple intermediate images from the same Dockerfile.

With multi-stage builds, you can use multiple FROM statements in your Dockerfile. Each FROM instruction can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image. You can read more about Multi-stage builds [here](https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage).

This is very useful for example, to not include your application build dependencies in your final image, allowing you to have a much more smaller image.

Having a single binary in production image is great, but what about development? You will probably need your build dependencies to be present, and its recommended to have the same Dockerfile for both production and development.

For some time, It wasn't really clear how to do this, but its just one flag away.

The trick is to use "target" flag of the build command that allows you to specify which stage you want to stop your build.

For example:

Consider the following Dockerfile, which is responsible for building a [Jekyll](https://jekyllrb.com/) based static site.

```docker
FROM ruby:2.5.1-alpine3.7  AS build-env
RUN apk update && apk add --no-cache nodejs build-base
RUN apk add yarn --no-cache --repository http://dl-3.alpinelinux.org/alpine/v3.8/community/ --allow-untrusted
RUN mkdir -p /app
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install -j 4
COPY . ./
COPY package.json yarn.lock ./
RUN yarn install
RUN make _site

VOLUME /app

FROM nginx:1.13.0-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build-env /app/_site ./

EXPOSE 80
```

As you can see, this Dockerfile has 2 "FROM" instructions. Each of them represents a stage in a Multi-stage build.

In the first stage, I install all the necessary tools to build a Jekyll application like ruby and bundler and yarn for frontend dependencies required by this specefic site.

The final result of this stage is a folder called "_site" with a bunch of HTML, Javascript and CSS. In production I just want to serve this static content, and I dont need all the ruby dependencies needed for building the site in the final image, so I create a new stage based on nginx-alpine image and I just copy the generated site contents from the build stage into it.

If I build the image now, the final image will just have the generated site.

This is great for production use, but during development I dont want to have to build the site everytime I do a change, and want to have nice things like "hot-reload" and "on the fly" assets compilation.

Thats where the "target" flag enters in action. This flag allows you to specify in which stage do you want your build to stop. so if you specify:

```bash
docker build . --target=build-env
```

You will have an image exactly with the contents of that stage. With docker-compose its even simpler.

```yaml
version: '3.4'
services:
  web:
    build:
      context: .
      target: build-env
    volumes:
      - .:/app
    ports:
      - '8082:80'
    command: 'env PORT=4001 HOST=0.0.0.0 yarn run dev'
```

*Note*: target requires compose version > 3.4.

So when running ```docker-compose up``` in my dev environment I will end up with an image with all the development dependencies and the source code mounted as volume, where I can use live reload to immediately see my changes.

And thats it.

Understanding how Multi-stage builds works, opens your mind for a lot of possible use cases, like for example having a stage that installs your test dependencies to run unit tests, before the production build.
