---
title: How to start a software project with a quality mindset
slug: how-to-start-a-software-project-with-a-quality-mindset
publishDate: 2018-10-28
excerpt:  Building quality software is not an easy task and requires a lot of practice and experience. In this post, I talk about some topics that I consider essential to implement from day 1 of your project, in order to build a quality driven and sustainable software project.
tags: ['development', 'quality']
published: true
devto_url: https://dev.to/brpaz/how-to-start-a-software-project-with-a-quality-mindset-3e7i

---

Building quality software is not an easy task and requires a lot of practice and experience.

Important activities like writing unit tests or documentation are still seen by many as "extra" and are the first thing that developers cut when a deadline approaches.

Skipping these activities might give you an illusion that you are faster in the short term, but eventually, you will pay the price in the long term, as the software becomes more and more tangled and complex, harder to understand and maintain and with an ever-growing technical debt.

Bugs will appear more often. People will start fearing making big changes and refactors on the codebase due to the lack of automated tests.

Developers will be frustrated working in such a messy codebase. Product Owners will be frustrated as well because building and releasing new features take more and more time.

> Product managers must understand that maintainability is a crucial part of product delivery because it’s what allows you to continue to deliver features. Tech debt has compound interest. So every corner you insist gets cut to deliver features is borrowing against the future. - Brian P Hogan

Quality is not something you can easily add later on.

You can try it, but believe me, the more time you wait and let the tech debt increase, the harder it will be to catch up. No Developer wants to be months just writing unit tests for older code that she might not even wrote in the first place. No Product Owner will accept being months without shipping new features and just cleaning code.

To avoid these problems and to have a more sustainable development cycle, is why you should start thinking about quality even before writing a single line of code.

Software quality is much more than writing tests and have bug free software. It can be applied to all the stages of the software development lifecycle and can include a wide range of things, from having a working and easy to set up local development environment, to an automated deployment process.

In the next sections, I will talk about some topics that I consider essential to implement from day 1 of your project, in order to build a quality driven and sustainable software project.

Each of the sections could be a post on its own, so I will try to focus more on concepts and not entering too much in implementation details.

**Note**: During this article, I will refer some tools that I like and that you could use for different use cases in the development lifecycle. These tools are just suggestions. The focus of this article is not tooling, but processes and practices. Use whatever tooling you like or are familiar with it.

---

## Define the development process, tooling, etc

One of the first things you should do is define what your development process will look like and the main tools and technologies that you will use.

Where the application code and artifacts be stored? How issues will be tracked? What will be the process of adding new changes to the codebase? Will changes need to go through any code review process? Which steps are part of that code review process? Which Git flow model will be used? Who can contribute and merge code?

All these questions must be answered and documented. Good documentation is crucial for various reasons and I will talk more about it in the next section.

## Build the foundations for good documentation

Documentation is a very important but often seen as a minor task in Software development. It is even more important if you work on a team, open source project or if you are building something that will be used by third parties Ex: A public facing API.

If you start thinking about documentation from the start and doing it regularly, it will a much simpler and enjoyable task.

To start, a simple "README" file introducing the project, explaining how to run it locally and how to contribute is a minimum, but you should be prepared to document everything from your technology stack and tools, development process, coding standards, important architectural and technical decisions, API endpoints, etc.

You might also want to write some kind of "Product manual" for your end users.

If you have everything well documented, not only it will help sharing knowledge between your team members and making sure that everyone is aligned, but it will also make much easier for anyone new to get onboarded to the project and to start contributing to the project right away.

First, you should find a place to host all your documentation. It should be easy to add/update content and accessible to everyone.

For a more technical documentation, I would say the simplest way to start is to write Markdown files in a "docs" folder on your project repo. You can convert it to a website using something like [VuePress](//vuepress.vuejs.org/) or [Gatsby](https://www.gatsbyjs.org/). The advantage of this approach is that the documentation is closer to the code and in version control, making it much simpler for developers to keep updated.

For a more "general" or product documentation, [Confluence](https://confluence.atlassian.com/) is one of the most popular tools in the enterprise but there are many "wiki" systems out there that you can use. [Notion](https://www.notion.so/e566f30ed11148d8aa6ec12cae3a79f3) is getting very popular. [Outline](https://www.getoutline.com/) is also an interesting choice and its open source.

If you are building an API, take a look at [OpenAPI Specification](https://swagger.io/specification/).

I prefer to use Open standards as they facilitate integrating with other tools to build powerful workflows and avoid lock-in, so Markdown and Open API are definitely great choices.

## Define and enforce coding standards and guidelines

This is particularly important when working in a team and will help your code to be consistent and easier to read.

Who hasn't reviewed a PR, that was a very small feature, and ended up with lots of changed files because the developer has their editor configured to use 2 spaces, where the original developer was using 4 spaces? This will add lots of overhead on your code review process and useless changes in the codebase.

You don´t need to reinvent the wheel. Most programming languages have some sort of recommended style guidelines. PHP has [PSR-2](https://www.php-fig.org/psr/psr-2/), Javascript have [AirBnb](https://github.com/airbnb/javascript) or [Standard](https://standardjs.com/), Python have [pep8](https://www.python.org/dev/peps/pep-0008/).

Because these are popular standards, the probability that your developers will already be familiar with them is quite high. Of course, these are just guidelines, you are free to adapt them to your liking. Just make sure everything is well documented and agreed by your team.

But having coding standards is useless if they are not followed by everyone. Checking the usage of these standards should never be a manual process as there are many tools that can do it automatically.

[ESLint](https://eslint.org/) for Javascript or [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) for PHP can be used to detect code standards violations. Some Tools like [Prettier](https://prettier.io/), [gofmt](https://golang.org/cmd/gofmt/) or [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) can even format your code and fix style issues automatically, according to the defined standards.

Make sure your developers understand well these tools and have them running in their development environment and IDEs. You should also enable these checks on your Delivery Pipeline. More on this later.

A good way to ensure that any commit done in the repository will follow the specified guidelines is to take advantage of [git hooks](https://githooks.com/) to run these tools on each commit or push. I recently found [pre-commit](https://pre-commit.com/) which helps setting up git hooks in your project. You might want to give it a try.

Regarding indentation rules and the eternal debate of tab vs spaces, you can use [EditorConfig](https://editorconfig.org/) which is compatible with all popular code editors.

You can go even further, by defining standards for other things like commit messages or changelogs, using tools like [Commitizen](https://github.com/commitizen/cz-cli) or [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog).

Besides style related standards, you can also define more architectural standards like saying for example that the project must follow "Hexagonal Architecture".

This kind of standards are harder to enforce automatically and should be checked on pair programming or code review sessions. Again, good documentation and also training is essential if you want everyone to follow these.

To facilitate creating a new project with all these tools already configured and ready to start development, you can build some base project templates, that a developer can clone. GitHub just introduced [repository templates](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) and you can also use tools like [SAO](https://saojs.org/) or [Yeoman](https://yeoman.io/) for that purpose.

## Setup static analysis tools to detect code smells early

There are many factors that influence the quality and maintainability of a codebase. The term "Code smell" is often used to indicate any characteristic in the source code that could possibly indicate a deeper problem.

Dead code, Code Duplication and High levels of Cyclomatic Complexity are good examples of code smells that should be analyzed and fixed as soon as possible.

While coding standards guarantees consistency in the code, Static analysis detects potential structural problems in the codebase. Both are complementary and are the first gatekeepers towards a clean codebase.

Every programming language has some sort of static analysis tools. Take some take to investigate and configure them in your project.

If you want to go further and have a more detailed view and metrics about your project code quality, take a look at tools like [SonarQube](https://www.sonarqube.org/), [Code Climate](https://codeclimate.com/) or [Codacy](https://www.codacy.com/).

While I don't consider these tools essential in the beginning, they can provide some extra value and better visibility of quality related metrics that can be very useful especially in bigger teams.

## Automated tests suite

Having a strong automated test suite is essential not only to avoid bugs but also to give you more confidence in making refactors and big changes. The more confidence you have in your test suite, the faster you will be able to deploy new features into production without the fear of regressions.

Practices like "Continuous Delivery" are only possible with a good automated test suite.

Automated tests (more specific unit tests) are also a great driver to write better code, since you will be "forced" to write simpler and more decoupled code and to apply popular design patterns like Dependency Injection and other S.O.L.I.D principles, in order for it be testable.

Tests can also be used as a form of documentation of existing features and all the possible scenarios and use cases.

Start with unit tests, followed by integration/service tests and add a couple of E2E tests, just to guarantee that your application can serve requests.

Create a simple "hello world" test for each type before start adding features. This will guarantee that you have all the infrastructure setup in order to execute those tests, making it faster to add more as you keep developing new features.

Automated Tests is a very broad and interesting topic. If you want to understand better what type of tests you should have in your application and how to structure them, the following articles are a good start:

- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Guidelines for Structuring Automated Tests | ThoughtWorks](https://www.thoughtworks.com/insights/blog/guidelines-structuring-automated-tests)
- [Software Testing Anti-patterns · Codepipes Blog](http://blog.codepipes.com/testing/software-testing-antipatterns.html)

## Development environment

I have worked in some projects where it literally took days for any new developer just to have the project running on his local machine. The lack or outdated documentation and insufficient tooling were most of the time the cause of this.

This process should be the simpler and painless as possible, so any new developers can start developing ASAP.

I believe that you should be able to have a development environment configured, just by executing a single command. Thanks to tools like [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/), together with a Makefile or some shell scripts this is much easier to do nowadays.

Having an automated and isolated project setup will also guarantee that all developers will have the same version of dependencies and runtimes, reducing the chance of bugs due to different versions.

You should aim to have your local environment the closest possible to the production environment. If you use Docker in production, you can take advantage of [Docker Multi stage builds](https://docs.docker.com/develop/develop-images/multistage-build) and use the same base images you will use in production.

This setup is not something you will build once and be done with it. It will require regular maintenance as you add new services or configurations. I recommend that any change you do in your application that requires a change in your local development script, to do it right away, so it won't be forgotten. Its a responsibility for everyone working on the project to keep it up to date.

If you can test your script regularly on a new machine (it can be a virtual machine) the better. Heck, you can even add some automated tests that at least check if all the application services start properly. ;) The sky is the limit.

But the development environment is not only about the application itself. Take the time to fine-tune your code editor / IDE and any auxiliary tooling (Ex: Live reloading). Many IDEs have configuration files that you can share via version control with your team, so global configurations are kept in sync and consistent between all your team members.

## The Delivery Pipeline

Let's talk about the missing piece in the puzzle where we glue everything we discussed til now together, which is the delivery pipeline.

The delivery pipeline defines all the stages your code will have to pass from a commit in VCS to production.

Having a basic delivery pipeline properly configured from the start will ensure that you have a stable and automated mechanism of delivering your app to the end customer and that any code will have to pass your defined quality checks before being able to be deployed to production. You can then focus on building features and deliver faster and with quality.

The complexity of the pipeline can vary from project to project. To start, the stages I consider essential are "Build Stage", "Static Analysis Stage", "Unit Tests Stage", "Integration Tests Stage", "Acceptance Stage" and "Deployment Stage".

Later on, and depending on your needs you might think in adding more stages like Security and Performance tests, for example.

### Build stage

Nothing really fancy about this stage. This stage takes your code from the version control system and builds a deployable artifact. It can be a docker image, a tarball, rpm, etc, pushing the generated artifact to some artifact repository.

### Static Analysis Stage

This stage should validate coding standards and running static analysis checks to detect structural issues in the code. All the tools that we discussed in the "Coding standards" and "Static Analysis" sections should be executed in this stage.

### Unit Tests Stage

This stage should run your application unit tests. Even if you just have a "hello world" unit test, in the beginning, having it already available in the pipeline, will allow you to build on it much faster later, as the infrastructure to run the tests will already be in place.

### Integration Tests stage

This stage will run your Integration tests (Ex: Database tests) or Service Tests.

In this stage, you will probably need to some additional services like the database you are testing against for database integration tests or a mock server for stubbing external dependencies of your application during service tests.

Most of the popular CI / CD tools nowadays supports Docker natively so it's very easy to spawn a MySQL container, for example, to use it your tests.

### Acceptance Stage

In this stage, your application should be deployed to some staging environment, where we can trigger some high-level automated tests like End-to-End tests (E2E).

You can also use the staging environment to do some manual, exploratory or UI tests or to share any work in progress feature.

In terms of automated tests, your focus should be on Unit and Integration tests according to the [Testing Pyramid](https://martinfowler.com/bliki/TestPyramid.html).

A simple test checking that your application returns 200 OK in the homepage and the main user flow test can be enough, to begin with, in this Acceptance stage. This test will catch any environment misconfiguration and guarantee that the application is accessible to the end user.

### Deployment Stage

After your code passes all the previous stages, it should be ready to be deployed to production.

The deployment itself can be a manual or automatic step. You might not need to create this stage from day 1 but you should have at least staging environment, to see your application running in another environment than your local one.

There are lots of great tools to define your Delivery Pipeline. [Jenkins](https://jenkins.io/) is still used a lot in the enterprise, but I prefer more modern tools like [CircleCI](https://circleci.com/), [GitLab](https://about.gitlab.com/product/continuous-integration/) or [Drone CI](https://drone.io/).

GitLab and Drone are Open Source and you can install them on your own infrastructure but if you are just starting you should look for their Cloud solutions. GitLab is an all in one solution and it gives everything you need from Version Control, Issue boards, CI Pipeline, Integration with Kubernetes for deployments and many more as its a great tool to start fast your pipeline.

To learn more about how to properly build a Continuous Delivery Pipeline, take a look at these articles:

- [Continuous Delivery Pipeline 101 | Atlassian](https://www.atlassian.com/continuous-delivery/pipeline)
- [5 Traits of a Good Delivery Pipeline | ThoughtWorks](https://www.thoughtworks.com/insights/blog/5-traits-good-delivery-pipeline)

## Extra: Look for automation opportunities

Think about every repeated manual process you do and look for ways to automate it. From bash scripts to run tests or to download database dumps, to GitHub WebHooks, Chatbots, integrations between multiple tools and APIs. Everything is possible.

---

## Conclusion

The maintainability and quality of a project will be heavily influenced by the way you start it.

It's much easier to start building a project with quality in mind than to add it later on.

Defining your software development life cycle including git-flow, contributions guidelines, coding standards guidelines, having a robust delivery pipeline and great documentation are essential first steps for a successful, maintainable and bug-free project.

Do I need all this for all kinds of projects? Like everything in Software Engineering, there isn't a "one size, fits all". There are many factors to consider. Very small app or MVP? maybe not. A project that you want to be solid and/or that have expectations to grow big over the years, definitely.

For MVPs, its a good practice to try to write the fewer code as possible and leverage existing services. Then after your first launch and if your idea was validated, take the time to rebuild it properly from scratch, following these practices, instead of rushing into adding new features on top.

If it takes more than a couple of weeks to do so, maybe you spent too many time on your MVP or if your MVP is very complex by nature, in that case "losing" some time, in the beginning, to set it up properly wouldn't make that much difference and will save you a lot of issues and headaches in the future if your project grows.

And with some experience and good tooling, it won't really take that much extra time and effort to follow the steps approached in this article.

Thanks for reading.

## Worth Reading

- [Is High-Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html)
- [Why we always start with Continuous Integration and Continuous Delivery](https://tailordev.fr/blog/2017/04/05/why-we-always-start-with-ci-cd/?utm_content=buffera2717&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
- [Adopting Continuous Delivery](https://www.youtube.com/watch?v=ZLBhVEo1OG4)
- [Why do engineering teams struggle to deploy faster? One word: automation](https://codefresh.io/continuous-deployment/engineers-struggle-with-ci-cd-automation-to-deploy-more-often/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/)
