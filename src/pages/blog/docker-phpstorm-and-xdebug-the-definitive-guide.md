---
title: Docker, PHPStorm and Xdebug, The definitive guide
slug: docker-phpstorm-and-xdebug-the-definitive-guide
date: 2018-09-06
summary: In this article I will walk through the process of correctly configuring XDebug with PHPStorm and Docker in a Symfony 4 project.
tags: ['development','docker','php', 'xdebug']
devto_url: https://dev.to/brpaz/docker-phpstorm-and-xdebug-the-definitive-guide-14og
published: true
layout: ../../layouts/Post.astro
---

Docker has changed dramatically the way we develop applications. Thanks to it, it  is really easy for everyone to run a complex application with a single command, without having to worry about the inner details like dependencies. These advantages are even greater when working on a team or enterprise context. I still remember being like the first 3 days when I joined my current company, configuring the project and all the related libraries and tools. Docker make it such much easier, faster and consistent.

But everything comes with a price. There is an extra complexity of maintaining all the Docker stuff. Also some things that were very easy in a normal development environment running locally, like debugging your application from your IDE, now requires some extra configuration. And in case of getting Xdebug to work, its not an easy task. I couldn't find a single guide that have all the steps from start to finish. Thats why I decided to write this article. It will guide you to step by step through the process of installing and configuring Xdebug and PHPStorm with a Dockerized Symfony 4 application.


## Pre-requisites

* This was tested on an Ubuntu 18.04 machine with PHPStorm 2018.1.4 and latest versions of [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/). Some things might work a little different in other Operating Systems.
* I assume you have a basic Knowledge of Docker, PHP and XDebug.
* You can clone [this](https://github.com/brpaz/symfony-docker-xdebug-demo) repository as base to follow this gude as it contains a basic Symfony Flex application with all the Docker stuff explained in this article included.

## Step 1 - Dockerize the application

Of course, to be able to use Xdebug you must install it on your Docker container.
The way to do this, will depend of your base image. I always use alpine based images. I wont enter in detail about how to Dockerize a Symfony application. You can follow along with the [Dockerfile](https://github.com/brpaz/symfony-docker-xdebug-demo/blob/master/Dockerfile) included in the demo repository.


Here is the relevant excerpt of the Dockerfile that installs Xdebug:


```bash
ARG WITH_XDEBUG=false

RUN if [ $WITH_XDEBUG = "true" ] ; then \
	    pecl install xdebug; \
	    docker-php-ext-enable xdebug; \
	    echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini; \
	    echo "display_startup_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini; \
	    echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini; \
	    echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini; \
	fi ;
```

I dont want have to have a separate Dockerfile for development and production, so I have defined a build argument that will tell whether we want to install Xdebug or not.

Then, on my Docker-compose file I have the following definition for my application:

```yaml
version: "3"

services:

  php:
    build:
      context: .
      args:
        - WITH_XDEBUG=true
    env_file: .env
    volumes:
      - .:/var/www/app:rw
```

[See](https://github.com/brpaz/symfony-docker-xdebug-demo/blob/master/docker-compose.yml) for the full docker-compose file.

Nothing really fancy about this. The important bit is the "env_file" instruction which tells Compose to load environment variables from a ".env" file, which is the standard way for Symfony 4 applications.

We will use that file to add some required environment variables for Xdebug. If you prefer in you can also add directly to the docker-compose file using the "environment" section.

## Environment Variables

We will define the following environment variables:

* PHP_IDE_CONFIG - This variable defines the server configuration associated with the application. More on this later.
* XDEBUG_CONFIG - This variable allows to define some Xdebug configurations. The "remote host" is the private ip of your host machine (the one your PHPStorm is running). The "remote_port" is the port that PHPStorm will be listening for incoming Xdebug connections. These two settings allow PHPStorm and Xdebug to communicate. It wont work without this.

We will add them to our ".env" file like this:

```
PHP_IDE_CONFIG=serverName=symfony-demo
XDEBUG_CONFIG=remote_host=192.168.1.102 remote_port=9001
```

And thats it in terms of code.

Next lets dig into PHPStorm configurations.

## PHPStorm configurations

The first thing you should do is to check your Debug settings. In PHPStorm, go to File -> Settings -> Languages and Frameworks -> PHP > Debug.

Make sure you have the some port that you have configured previously in "XDEBUG_CONFIG" environment variable:

![](https://i.imgur.com/lt8ayc9.png)

Next, we need to configure a server. This is how PHPStorm will map the file paths in your local system to the ones in your container.

Go to File -> Settings -> Languages and Frameworks -> PHP -> Servers

![](https://i.imgur.com/zTF9QFb.png)

Give a name to your server. It should match the value you have defined in your "PHP_IDE_CONFIG" environment variable. We will call it "symfony-demo".

The "host" and "port" is how will access your application. In my case is localhost:8888.

And then the "Path mappings".

In the "Project files" section you have to map the root path of your application to the path inside the container. In my case its "/var/www/app".

Click "Apply" to save your configurations.

The last part is to configure the remote debugger of your project.

On the top right, click on "edit configurations":

![](https://i.imgur.com/G4r1uoo.png)

Click in the green "plus" sign at the top left and select "PHP Remote Debug" from the list.

Now configure it like this:

![](https://i.imgur.com/hTi2lM6.png)

Make sure you associate it with the previously created "server" definition. Use "PHPSTORM" as idekey.

Your IDE should be now correctly configured. Lets test.

## Testing

* Open "src/Controllers/HelloController.php" and place a breakpoint in the "hello" method.

* Start your Docker container with ```docker-compose up```

* Then click on "Start Listening for PHP Debug connections" icon on top right corner of PHPStorm.

![](https://i.imgur.com/e6kD7BT.png)

* Open http://localhost:8888?XDEBUG_SESSION_START=PHPSTORM

If everything went well you should see the execution stop at your breakpoint.

![](https://i.imgur.com/UxgccEi.png)


And thats it. You should now have a fully configured development environment with Docker and Xdebug integrated with PHPStorm IDE.

If you have any issues or questions feel free to comment bellow or in the GitHub Repository.

Thank you and good debugging ;)
