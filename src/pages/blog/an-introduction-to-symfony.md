---
title: An introduction to Symfony | The foundation of modern PHP applications
date: 2018-12-24
slug: an-introduction-to-symfony
summary: In this post I will give a brief introduction to Symfony and how you can use it to build modern and performant PHP applications.
tags: ['development','php', 'symfony']
published: true
devto_url: https://dev.to/brpaz/an-introduction-to-symfony--the-foundation-of-modern-php-applications-ehj
layout: ../../layouts/Post.astro

---

In this post I will give a brief introduction to [Symfony](https://symfony.com/) and demonstrate how you can use it to build modern and performant PHP applications.

This article is based on the latest Symfony version, at the time of the writing (Symfony 4.2)

## What is Symfony

According to the official website:

> Symfony is a set of PHP Components, a Web Application framework, a Philosophy, and a Community — all working together in harmony.

IMO, this definition truly shows the main ideas behind Symfony.
Symfony shouldn't be seen as a full stack web framework like Laravel or Rails, which includes by default, everything you need to build a traditional website, like Database access or Templating engine, stuff that you might not need if your are building an API for example.
Instead its a set of modular components that you can combine in multiple ways to build powerful applications.
It follows a start small and add more functionality as you need approach.

These components can be used together for a full Symfony experience or in isolation in all kinds of PHP projects. Symfony components are the foundation of many popular PHP projects including Laravel, Drupal, Prestashop and more.

You can find a list of all the available components [here](https://symfony.com/components).

## Why Symfony

There are many reasons to choose Symfony as your PHP Framework of choice:

* When creating a new Symfony Project, only the core components needed to bootstrap the framework and to handle HTTP lifecyle are installed, makes it incredible lightweight and ideal for Microservices or APIs. You can then add additional components as you need to build more complex applications.
* Incredibly modular thanks to its component system.
* Clean code following OOP Design Patterns and best practices like Dependency Injection.
* Implements many of [PHP-FIG](https://www.php-fig.org/) standards, such as PSR-2 (code styling), PSR-3 (Logger interface), PSR-4 (autoloader), PSR-6 (caching interface), PSR-11 (service container), allowing for easy intertop with other libraries.
* Not tied to a specific database system / ORM, templating engine, etc.
* Great documentation.
* Constant focus on improving development experience and performance.
* Stable and Mature but always using the latest PHP features.
* Well defined release process and long term support, with great compromise with Backwards compatibility, making it perfect for the enterprise or more complex projects.
* Its the fastest PHP framework by far according to [PHP Benchmarks](http://www.phpbenchmarks.com/en/).
* Lots of great platforms built on top of Symfony, that allows for Rapid Application Development like [API Platform](https://api-platform.com/). [EasyAdminBundle](https://symfony.com/doc/master/bundles/EasyAdminBundle/index.html) or [Sylius](https://sylius.com/).

## Who uses Symfony

Symfoyn is used by many popular companies around the world, including
[Spotify](https://spotify.com), [Blablacar](https://www.blablacar.com), [Trivago](https://trivago.com), [Course Hero](https://www.coursehero.com/) and even [YouPorn](https://youporn.com).

So if you doubt about performance or scalability of Symfony and PHP in general, just remember that YouPorn is built with Symfony ;)

## Getting started

---

### System requirements

Symfony 4 requires PHP 7.1.3 or higher to run, in addition to other minor requirements. To make things simple, Symfony provides a [tool](https://symfony.com/doc/current/reference/requirements.html) to quickly check if your system meets all those requirements.

### Creating a new Symfony project

The simplest way to create a new Symfony project is to use [composer](https://getcomposer.org/)

```bash
composer create-project symfony/skeleton devto-symfony
```

This command will download all the needed dependencies and create the basic directory structure.

Next, we will install the [symfony/web-server-bundle](https://packagist.org/packages/symfony/web-server-bundle), which provides a layer on top of the built-in PHP webserver optimized for Symfony Applications.

```bash
cd devto-symfony
composer require server --dev
```

Now you can start your application with the following command:

```bash
 php bin/console server:run
```

If you open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your web browser you should see the Symfony welcome page.

**Note:** Symfony recently announced a new [symfony cli](https://symfony.com/doc/master/cloud/getting-started) and local web server, that will probably become the new standard way of creating a new Symfony project.

## The bundle system

In the previous step we installed what is called a Symfony bundle (symfony/web-server-bundle). Bundles are an important concept in Symfony world.

A bundle is similar to a plugin/module in other software, that allows to share code across Symfony applications or to glue 3rd party code with the framework.

The core features of Symfony framework are also implemented with bundles. In previous versions of Symfony it was recommended to organize your own application code in bundles but that is not the case in Symfony 4 as bundles are now exclusively used as they were imagined by the Symfony team. To share code between applications and integrate 3rd party code with Symfony. You can read more about bundles [here](https://symfony.com/doc/current/bundles.html).

### The Directory structure

Lets take a look at the the directory structure of a Symfony 4 project.

```bash
.
├── bin
├── composer.json
├── composer.lock
├── config
├── phpunit.xml.dist
├── public
├── src
├── symfony.lock
├── templates
├── tests
├── translations
├── var
└── vendor
└── .env
```

I think the directory names are pretty explanatory:

* bin -> Here goes any executable files or scripts. You should already have al least "console.php" file, which is the Symfony Console executable. You will use the console very often to run useful commands.
* config -> Stores the application configurations files. Routing, Service definitions and bundles configuration all goes in this directory.
* src -> This is the folder where you will put your application code. You can organize the contents inside in the src/ folder how do you want.
* public -> The main entrypoint for the application (index.php) and any public accessible files like js or css files will go to this directory.
* templates -> Twig views. You can delete this directory if not needed.
* tests -> Your PHPUnit tests
* translations -> Any Translation files your application might need.
* var -> Cache, Logs and other temporary files.
* vendor -> Any 3rd party packages installed with composer
* .env -> The file to store your application environment variables during development.

### Basic Request flow

Symfony uses the Front Controller Pattern to handle any request to the application.

![request flow](https://symfony.com/doc/current/_images/request-flow.png)

1. A client (e.g. a browser) sends an HTTP request
2. Each request executes the same, single file (public/index.php). This file acts as the front controller to the application.
3. The front controller boots Symfony Kernel and passes the request information
4. Internally, Symfony uses routes and controllers to create the Response for the page.
5. Symfony turns your Response object into the text headers and content (i.e. the HTTP response), which are sent back to the client.

### Routing

Symfony allows you to define your routes in multiple formats like Annotations, YAML, XML and PHP. see the [Routing](https://symfony.com/doc/current/routing.html) chapter in the Official Documentation for more details.

Here is an example of Routes defined in using YAML:

```yaml
# config/routes.yaml
blog_list:
    path:     /blog
    controller: App\Controller\BlogController::list

blog_show:
    path:     /blog/{slug}
    controller: App\Controller\BlogController::show
```

The recommended way is to use annotations, which I didn't like that much in the beginning but now I think its quite useful that the route definition is close to to the Controller action. Still, there are some limitations when using annotations like less control of the order the routes are loaded.

## Configuration

Symfony follows the [12factor app](https://12factor.net/) recommendations and use environment variables to define application level configurations. In development these can be defined in an ".env" file like in many other popular frameworks.

For static configurations that dont change by environment, bundle configurations, service and routing configurations, it uses YAML files located in the config/ directory.

### Service Container

Dependency Injection is a first class citizen of Symfony. Symfony implements a DI Container following the [PSR-11](https://www.php-fig.org/psr/psr-11/meta/) interface.

Some characteristics of the Symfony container:

* Container is compiled and cached so there is no performance penalty.
* Autowiring allows services to be created without having to write any configuration by just using the type hint of your methods.
* Lazy services
* Service Tagging

### Persistence Layer

As mentioned previously, Symfony doesn't force you to use any Persistence Layer or ORM. Still, [Doctrine](https://www.doctrine-project.org/) is the recommended one and have a deep integration with symfony, but you can even use Laravel´s Eloquent, if you like.

### Templating engine

As with Persistence Layer, Symfony doesnt force you into any Templating engine, but has a deep integration with [Twig](https://twig.symfony.com/). Twig syntax is really nice and its inspired by Jinja2 from Python.

---

## Building an example Application

Previously we created a new Symfony Project, lets now add a bit of code.
For this article, we will create a simple API endpoint to return a list of books from an sqllite database. This will allow to demonstrate some basic concepts like creating a controller and working with the database as well as some useful console commands.

First lets install [Maker bundle](https://symfony.com/doc/current/bundles/SymfonyMakerBundle/index.html) which provides some very code generation commands.

```bash
composer require symfony/maker-bundle --dev
```

Note the "--dev" flag, as we only want to have this bundle accessible in the development environment,.

We will use Doctrine as our Persistence Layer so lets install the required bundles:

```bash
composer require doctrine/doctrine-bundle doctrine/doctrine-migrations-bundle
```

Now open your .env file located in the root folder of the project and look for

"###> doctrine/doctrine-bundle ###" section.

This section was automatically added when we installed the Doctrine Bundle, thanks to [Symfony Flex](https://github.com/symfony/flex).

Symfony Flex is a composer plugin, that allows things like auto bundle configuration based on [Recipes](https://flex.symfony.com/). You can read more about it [here](http://fabien.potencier.org/symfony4-demo.html).

Besides adding this line to the .env file, the Doctrine recipe also added the necessary config files to the config folder as well as registering the bundle in the config/bundles.php file. Pretty neat, dont you think?

Since we will be using sqllite we need to install php-sqllite extension.

On ubuntu 18.04 you can install it using apt: ```sudo apt -y install php-sqlite3```

We then need to change the DATABASE_URL variable to use our database:

```bash
DATABASE_URL=sqlite:///%kernel.project_dir%/var/data.db
```

### Create your Database and Entities

Now lets create the application database. For that you can run the following command provided by DoctrineBundle:

```bash
php bin/console doctrine:database:create
```

Ok. Now lets create our "Book" entity. Thanks to maker bundle we can do it interactively.

just run ```php bin/console make:entity``` and answer the questions like:

* Book;
* name;string;50;no;
* isbn:string;50;no;
* author;255;no;
* year;integer;yes
* category;string;30;no

Type enter to finish the creation of the entity.

Your "src/Entity/Book.php" should then look like this:

```php
<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 */
class Book
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $isbn;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $author;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $year;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getIsbn(): ?string
    {
        return $this->isbn;
    }

    public function setIsbn(string $isbn): self
    {
        $this->isbn = $isbn;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(?int $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }
}

```

This command provides an quick way to generate the base skeleton of your entities. Its your choice to use it or do it manually.

The next step is to create the respective table in the database. There is many ways we can achieve this, but I recommend using Migrations.

We will use the command ```php bin/console doctrine:migrations:diff``` to generate a new migration class by comparing our Entities to our Database schema. By default the Migrations will be placed in "src/Migrations" folder.

Now, to apply the migration, execute:

```bash
php bin/console doctrine:migrations:migrate
```

By now, you should have a book table in your database.

Now lets create some dummy data. We will also use a migration for this. Another alternative would be to use the [DoctrineFixturesBundle](https://symfony.com/doc/master/bundles/DoctrineFixturesBundle/index.html).

Run:

```bash
php bin/console doctrine:migrations:generate
```

to create an empty migration class.
Open the generated file and replace the "up" function with the following contents:

```php
public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("INSERT INTO book ('name', 'isbn', 'author', 'year', 'category')
          VALUES
            ('Programming PHP', '0596006810', 'Rasmus Lerdorf,  Kevin Tatroe, Peter MacIntyre', 2006, 'Programming'),
            ('PHP Cookbook', '0596101015', 'Adam Trachtenberg,  David Sklar', 2006, 'Programming'),
            ('PHP Design Patterns', '0596101015', 'Aaron Saray', 2009, 'Programming')
            ");

    }
```

Now run, ```php bin/console doctrine:migrations:migrate``` to run the migration.
Your books table should now be populated with the data we created.

### TheBookListService

Now that we have created our Entities, lets create the service that will be responsible to fetch the Books from the database.

Create a new file in "src/Service/BookListService.php" with the contents:

```php

<?php

namespace App\Service;

use App\Entity\Book;
use App\Repository\BookRepository;

class BookListService
{
    /**
     * @var BookRepository
     */
    protected $booksRepository;

    public function __construct(BookRepository $repo)
    {
        $this->booksRepository = $repo;
    }

    /**
     * @return Book[]
     */
    public function get(): array
    {
        return $this->booksRepository->findAll();
    }
}
```

In this example you can see autowiring in action. Symfony will automatically inject the BookRepository class without the need for any extra configuration.

The BookRepository class was automatically generated when we create the Entity using the "make:entity" command. If you create your Entity manually, You should create this class manually in "src/Repository/BookRepository.php".

```php
<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Book::class);
    }
```

You will then need to associate the repository and entity class by adding an annotation to the Entity:

```php

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 */
class Book

```


### The Controller

Now lets create our BookController class. Maker bundle also provides an easy way to generate new Controller classes.

```
php bin/console make:controller BookController
```

A new file will be generated in your "src/Controller" folder. Note that maker bundle expects you to follow a specific structure inside your "src" folder like Controller, Entity, Repository etc. This is fine for smaller projects and works out of the box with all the default Symfony configurations.
For bigger projects I recommend grouping your classes by business feature. That will require some extra configurations to ensure Symfony finds the classes in the correct places. but that its outside of the scope of these article.

Now modify the generated controller action to look like this:

```php
 /**
     * @Route("/books", name="books")
     * @param BookListService $listService
     * @return JsonResponse
     */
    public function index(BookListService $listService, SerializerInterface $serializer)
    {
        $books = $listService->get();

        return new JsonResponse(
            $serializer->serialize($books, 'json'),
            200,
            [],
            true
        );


    }
```

Here the routing are defined via annotations, but you can use YAML or PHP if you prefer. The "index" method arguments are autowired. You can also inject them into the controller constructor. This gives you a lot of flexibility, if you have services that are used only by a specific action on your controller.

We use the Symfony serializer component to serialize our Book object into json.

If you open [http://127.0.0.1:8080/books](http://127.0.0.1:8080/books), You should see a json response with the list of Books we created.

And that`s all for this demo application. If you follow along you can see it was very straightforward. I could have entered in more details in some things, but this article would be too big.

Hope it was enough for you to see the basics and the potential of Symfony.

---

## Why Symfony over Laravel

I dont want to start a war about frameworks here. We have enough of these already. I recognize the contribute that Laravel gave to revitalizing the PHP community and I think its not a bad framework in general.
The biggest differences are some core design decisions that makes me prefer Symfony much more and IMO makes it much more suitable for projects that are more than prototypes or small applications.

### Symfony is smaller and more flexible

By default, Symfony comes only with the core components needed to bootstrap the framework and handle the http request/response and then you can add more components as you need them. This is perfect for Microservices or smaller applications.

On the other hand, Laravel comes with all the bells and whistles by default, making it a lot heavier and with lots of dependencies you might not need.

Yes you can use [Lumen](https://lumen.laravel.com/) for your Laravel Microservices but still is a different framework. Symfony used to have Silex but they decided to abandon it and make Symfony Microservice friendly instead.

Symfony also have [website-skeleton](https://github.com/symfony/website-skeleton) if you want to build a traditional website with templates, forms etc, which is great.

### Laravel abuse of Singletons, Facades and Static methods

Laravel is knwown for having lots of Helper classes, most accessible using Facades or Static methods.

While it might look that is faster to develop using these "shortcuts" in the beginning, it will make your application much harder to maintain and test as it grows.

Symfony on the other way, use Dependency injection for everything, making it a lot easier to write clean, modular and testable code.

### Active Record vs Data Mapper

Probably my biggest complaint about Laravel is their ORM, Eloquent. Not the ORM per se, but the underlying Design pattern, "Active Record".

In "Active record" your Entity classes are generally a direct map to your database tables. This makes your Business domain too coupled with your database structure.

Another problem is testability. Since in Active Record, your Entities generally extends some sort of base class who creates a connection to a database its really hard to implement proper unit tests than involves entities without an active database connection. There is no simple way you can mock the "save" method for example, as you call it in a new instance of an object you create.

Active record can also have worse performance as it is harder to control and optimize the queries done by the ORM.

I prefer to have better separation of concerns and a more "DDD" approach where Entities are just POPOs with the minimum details about the associated persistence and then having the Persistence layer and use the repository pattern to centralize all my queries.

Doctrine allows all that as it implements Data Mapper Pattern. Repositories are a great way to separate persistence code from your Domain entities.

You can read a bit more about these patterns here:

* [ORM Patterns: The Trade-Offs of Active Record and Data Mappers for Object-Relational Mapping - Thoughtful Code](https://www.thoughtfulcode.com/orm-active-record-vs-data-mapper/)

## Conclusion

This was a long article!. There is so much more that I could have discussed in more detail but may be in other article or series.

I hope you get at least an idea how Symfony works and how its a great choice for building modern PHP applications.

If you have any questions or comments, feel free to use the comment box bellow.

Meanwhile, if you want to dig deep into Symfony feel free to check the following resources:

* [Symfony Documentation](https://symfony.com/doc/current/index.html#gsc.tab=0) - The official Symfony Documentation.
* [SymfonyCasts](https://symfonycasts.com/tracks/symfony) - The Best PHP
& Symfony Tutorials
* [Tobias Nyholm "Deep dive into Symfony 4 internals"](https://www.youtube.com/watch?v=pz6VdH4_BSg)
[The Symfony Blog](https://symfony.com/blog/) - The official Symfony blog

Thank you.
