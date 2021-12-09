---
title: Building a basic CI/CD pipeline for a Golang application using GitHub Actions
slug: docker-phpstorm-and-xdebug-the-definitive-guide
date: 2019-08-19
summary: GitHub has announced last week exciting new features for GitHub Actions, including built-in support for CI/CD pipelines. It this post I will show the capabilities of the new GitHub Actions for CI/CD by creating a simple pipeline for a Golang application.
tags: ['development','ci/cd', 'github']
devto_url: https://dev.to/brpaz/building-a-basic-ci-cd-pipeline-for-a-golang-application-using-github-actions-icj
published: true
layout: ../../layouts/Post.astro
featured: true
---


[GitHub](https://github.com) has announced last week exciting new features for [GitHub Actions](https://github.com/features/actions), including built-in support for CI/CD pipelines.

You can watch the full announcement on [Youtube](https://www.youtube.com/watch?v=E1OunoCyuhY).

This is a huge milestone for GitHub and one of the most anticipated features since platforms like [GitLab](https://about.gitlab.com/product/continuous-integration/) and [Bitbucket](https://bitbucket.org/product/features/pipelines) already have solutions for this for many time.

It´s another good example of the tremendous evolution of the company under Microsoft and Nat Friedman leadership.

GitHub Actions will allow building a complete CI/CD Pipeline, deeply integrated with the GitHub ecosystem, without the need to use a third-party service like Travis CI or Circle CI, following the trend for "All in one" solutions where GitLab is probably the best example.

The feature is in beta for a limited group of users and is expected to be released for all users in November this year. It will be free for Open source projects and have 2000 free build minutes per month for Private repositories. (by user, not repo).

You can [request early access](https://github.com/features/actions/signup) now. I already have it and I am writing this post to show what you can do!

## What we will build

To demonstrate the new features of GitHub Actions, we will build a "Hello world" Golang app with a very basic pipeline that after each Pull Request or push to master branch, will lint our code, run unit tests and generate code coverage report using [Codecov](https://codecov.io/).

Then when a new "tag" is created in the repository, it will create a new GitHub release using [GoReleaser](https://goreleaser.com/) tool.

## The project code

The example repository is accessible [here](https://github.com/brpaz/github-actions-demo-go), Feel free to fork it or just follow along.

I won't go into many details about the code of the application itself. It´s a standard "Hello world" app that prints the text "Hello GitHub actions" to the standard output.

Here is the code for the main.go file:

```go
package main

import (
	"fmt"
	"github.com/brpaz/go-github-actions/hello"
)

func main() {
	fmt.Println(hello.Greet())
}
```

And here is the "Greet" function:


```go
package hello

// Greet Greets GitHub Actions
func Greet() string {
	return "Hello GitHub Actions"
}
```

And the respective unit test:

```go
package hello

import "testing"

func TestGreetsGitHub(t *testing.T) {
    result := Greet()
    if result != "Hello GitHub Actions" {
        t.Errorf("Greet() = %s; want Hello GitHub actions", result)
    }
}
```

## The pipeline

GitHub Actions are based on the concept of Workflows. A workflow is nothing more than a set of jobs and steps that are executed when some condition or event is met. (Ex: a push to the repository, a pull request, a deployment, etc).

You can have multiple workflows by project, each one responding to a different set of events.

In our example, we will have two workflows. The "Build" or "Main" workflow which will be triggered when there is a push the master branch or when a PR is created and the "Release" workflow which will run when a new tag is pushed to GitHub, that will create a new release of the application.

Each Workflow is composed of one or more Jobs. Our "Build" Workflow will have 3 Jobs (Lint, Build and Test) and our "Release" workflow will have a single "release" job.

Each job is made of steps. For Example, the "Unit Test" job will have steps for checkout the source code, run the tests and generating code coverage report.

The best part is that you don't have to reinvent the wheel and you can reuse existing actions built by GitHub itself or the community and even just regular Docker images in your steps.

We will see examples of all of them in the article.

Workflows are defined in YAML files located in `.github/workflows` directory of your repository.

Each file in the directory represents a different Workflow.

Here is how our Build workflow looks like:


```yml
name: Build and Test
on:
  push:
    branches:
      - master
  pull_request:

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - name: Set up Go
        uses: actions/setup-go@v1
        with:
          go-version: 1.12

      - name: Check out code
        uses: actions/checkout@v1

      - name: Lint Go Code
        run: |
          export PATH=$PATH:$(go env GOPATH)/bin # temporary fix. See https://github.com/actions/setup-go/issues/14
          go get -u golang.org/x/lint/golint
          make lint

  test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - name: Set up Go
        uses: actions/setup-go@v1
        with:
          go-version: 1.12

      - name: Check out code
        uses: actions/checkout@v1

      - name: Run Unit tests.
        run: make test-coverage

      - name: Upload Coverage report to CodeCov
        uses: codecov/codecov-action@v1.0.0
        with:
          token: ${{secrets.CODECOV_TOKEN}}
          file: ./coverage.txt

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - name: Set up Go
        uses: actions/setup-go@v1
        with:
          go-version: 1.12

      - name: Check out code
        uses: actions/checkout@v1

      - name: Build
        run: make build
```

We start by defining a name for the workflow and when it will be run.
In our case, we want it to run when there is a push to master or a pull request. There are many events you can listen to. You can read more about it [here](https://help.github.com/en/articles/configuring-a-workflow#triggering-a-workflow-with-events)

The workflow contains 3 jobs, "lint", "test" and "build".

Let´s give a quick look at the "lint" job:

```yaml
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - name: Set up Go
        uses: actions/setup-go@v1
        with:
          go-version: 1.12

      - name: Check out code
        uses: actions/checkout@v1

      - name: Lint Go Code
        run: |
          export PATH=$PATH:$(go env GOPATH)/bin # temporary fix. See https://github.com/actions/setup-go/issues/14
          go get -u golang.org/x/lint/golint
          make lint
```

Here, we specify that we want this job to run on an ubuntu machine. ("runs-on" keyword).

Actions have support for Linux, Mac, and Windows as well as Docker. In the future, it will be possible to use your own machines also as runners.

Then, we define the steps that compose our job.

First thing is to install Go. GitHub already provides an action for it, so let's use it:

```yaml
 - name: Set up Go
   uses: actions/setup-go@v1
   with:
     go-version: 1.12
```

I think the syntax is pretty explanatory. The `with` keyword allows us to specify the arguments required by the action. In this case, the "setup-go" action allows us to specify the go version to use.

Next step is to check-out the source code. Again we will use a built-in action:

```yaml
 - name: Check out code
   uses: actions/checkout@v1
```

And finally we will install and run `golint` tool:

```yaml
- name: Lint Go Code
  run: |
    export PATH=$PATH:$(go env GOPATH)/bin
    go get -u golang.org/x/lint/golint
    make lint
```

And that´s it. The rest of the jobs are pretty similar. Let´s take a look to the "Test" job.

```yaml
  test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - name: Set up Go
        uses: actions/setup-go@v1
        with:
          go-version: 1.12

      - name: Check out code
        uses: actions/checkout@v1

      - name: Run Unit tests.
        run: make test-coverage

      - name: Upload Coverage report to CodeCov
        uses: codecov/codecov-action@v1.0.0
        with:
          token: ${{secrets.CODECOV_TOKEN}}
          file: ./coverage.txt
```

The only new thing here is that we are using a third-party [action](https://github.com/codecov/codecov-action), in this case, to publish the test coverage report to CodeCov.

The usage is exactly the same as built-in actions. In here we are also using a new GitHub functionality "secrets" to store our "Codecov token" required by the CodeCov action. You can configure your secrets by accessing to your project settings -> secrets tab.

You can create your own actions in any language (Just add a Dockerfile) or if you like Typescript you can use their [actions toolkit](https://github.com/actions/toolkit).

And with this, we finished our first workflow ;)

Let´s create a new branch and do a code change to see the PR workflow in action.

```
git checkout -b greet-devto
```

Now change our "Greet" function to "greet" also Dev.to users:

```go
func Greet() string {
	return "Hello GitHub Actions. Dev.to is awesome"
}
```


We also need to update the respective unit test accordingly:

```go
func TestGreetsGitHub(t *testing.T) {
	result := Greet()
	if result != "ello GitHub Actions. Dev.to is awesome" {
		t.Errorf("Greet() = %s; want ello GitHub Actions. Dev.to is awesome", result)
	}
}
```

Now push the branch and create a Pull Request to the master branch. The "Build" workflow will start immediately.

The merge will be blocked until the workflow passes and you will be able to see the status directly in the Pull Request:

![PR Status checks](/img/blog/1qlqdjtvq7vwsj8afb45.png)

Remember we have added Codecov integration? With one line of code in the workflow, we get full integration with Codecov with PR status checks and Coverage report as a PR comment:

![Codecov report on PR](/img/blog/ispe3mcllj37fzgzkwfl.png)

## The release workflow

It´s time to create our "Release" Workflow". Each workflow is a separate file, so we will create `.github/workflows/release.yml` with the following contents:

```yaml
name: Release
on:
  create:
    tags:
      - v*

jobs:
  release:
    name: Release on GitHub
    runs-on: ubuntu-latest
    steps:
      - name: Check out code
        uses: actions/checkout@v1

      - name: Validates GO releaser config
        uses: docker://goreleaser/goreleaser:latest
        with:
          args: check

      - name: Create release on GitHub
        uses: docker://goreleaser/goreleaser:latest
        with:
          args: release
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

We specify that we only want to trigger it on newly created tags and we define a "release" job.

**Note: The `on` condition seems to have some issues. For example, when I push a tag it´s also running the build workflow. Remember Actions is still beta, so take that into account.**

The job will check-out the code and use [GoReleaser](https://goreleaser.com/) official docker image to do all the work.

When using docker it´s possible to define the "args" and the "entrypoint" of the container. In this case, we will use the default entrypoint, but define a different argument on the "Validate" and "Create Release" steps.

We also specify the `GITHUB_TOKEN` environment variable required by Go Releaser to create our release on GitHub. This variable will be passed to the container. Note that `secrets.GITHUB_TOKEN` variable is injected automatically by the Actions platform, so no need to create it ourselves.

If you create a tag and push to the repository:

```
git tag v0.1.0
git push --tags
```

A new release will be created on GitHub with the application artifacts and Changelog generated by Go Releaser tool.

![Release](/img/blog/bram0f07yr8xi07lwmes.png)

And we have our first pipeline built with GitHub actions. ;)

Very basic example, but I think enough to give you a good idea about how it works.

---

## Conclusion

I am very impressed with the way GitHub Actions work right now and looking forward to the final release.

I believe GitLab is still superior for more advanced use cases as it supports for example manual approvals and parametrized builds, essential features for the enterprise, but we can´t forget that GitHub Actions is still in beta and I guess these features will come sooner or later.

Actions also have some nice features that GitLab doesn't, as Matrix builds.

The features that Actions have currently, should be more than enough for 90% of projects and I believe will be huge for Open source and personal projects.

And with all the GitHub community building all kinds of open-source actions, we can expect amazing things.

With the 3 major Git hosting providers supporting CI Pipelines, with Jenkins still very popular in enterprise and some new more specialized tools like [Codefresh](https://codefresh.io/), I am curious about the future of more traditional CI only platforms like Travis or Circle CI.

Exciting times in this space for sure.

Thanks for reading and please if you had the chance to try the beta, give your feedback in the comment section.

---

## Reference

* [Features • GitHub Actions](https://github.com/features/actions)
* [About GitHub Actions - GitHub Help](https://help.github.com/en/articles/about-github-actions)
