---
title: My experience and learnings from working in a microservices oriented project
slug: my-experience-and-learnings-from-working-in-a-microservices-oriented-project
date: 2018-12-01
summary: In this post I will talk about my experience and learnings from working in a Flights Booking application, following a microservices oriented architecture.
tags: ['microservices', 'development']
published: true
devto_url: https://dev.to/brpaz/my-experience-and-learnings-from-working-in-a-microservices-oriented-project-li5
layout: ../../layouts/Post.astro
---

In the past few years, Microservices have become a very hot topic in our industry and seen as the recommended way to build more decoupled, scalable and easy to maintain applications.

For more or less an year, I worked in a project that followed a Microservices oriented architecture from scratch.
In this post I will share my experience and learnings from it.

## The project

To give you some context, the project I worked on was building a Flights booking web application, similar to [Skyscanner](https://www.skyscanner.net/).

The main user flow is really simple. The user is presented with a search form, where he can put where he wants to go, dates etc.

After he clicks the search button, a list of available flights are presented.

Then the user, can select one of the flights presented, and start the checkout process where he will enter his personal details, following by the selecting the payment method. In the end of the journey, he will get a confirmation email of his flight.

## The start - Identify your service boundaries

The most important thing to start with a Microservices Architecture is do identify your service boundaries. Think about your Domain Model and the relationship between your Domain entities. [This](https://docs.microsoft.com/en-us/azure/architecture/microservices/domain-analysis) guide from Microsoft is a great resource, that explains this topic in more detail.

This is really important. If the service boundaries are not well defined, you might end up with services that are too coupled with each other. In case of doubt, start with a bigger boundaries. Its easier to break down into smaller units later on, than the other way around.

From the main user flow I described above, we can clear identify some potential services. A search service, that will be responsible for querying our flights providers and show a list of available flights. An "orders" service, that will manage the Booking / Checkout process. A payments service, that will handle all stuff related to Payments and even an Messaging service that will be responsible to send the confirmation emails to the users.

This separation of concerns makes a lot of sense in terms of Business domain, but you can also see advantages in terms of scalability and operations.

You will have much more searches than bookings, so the search service will probably need to scale a lot more than the orders service. Being a separate service allows that.

Also search service will need to do a lot of processing to fetch the available flights from multiple partners. Being a separate service allow us to choose the most appropriate language and tooling for the job. Besides different teams can work on these services separately.

That´s what we ended up building.

Flights business is really complex, so we ended up breaking down the Search service even more into smaller specialized services all working together.

We also had some other smaller services that I wont enter in detail.

In general, this structure was a great success, but of course there were also some less positive things that I will talk about next.

## A state machine service that shouldn't have been born

In the company, we identified a common need across different projects. Every project needed to have some sort of State machine at some point. This project was not an exception. We needed to have a state machine for orders and payments.

So we decided to do a generic state machine service that could be potentially used by every other project in the company. While it sounds a great idea in theory, it wasn't that great in practice. Let me explain why.

The first problem is the term "generic" state machine. Generalization and Abstraction is of course a good idea in general, but it can often lead to over engineering and be a lot more complex and time consuming than doing something a little more specific.

To be able to properly generalize and abstract a solution, its vital to have a clear understanding of all the business requirements and how they will eventually evolve over time and the specific needs of each potential user of the service.

That was not the case. It took us a lot more time trying to anticipate all the possible features and needs than if we focused to build something more specific based on what we new from this particular project.

The second problem is that, if you think about our Domain model and what I talked about service boundaries, a state machine on his own is doesn't make much sense. It cant work on his own and has to be associated with some business entity, in this case orders or payments. It clear belongs to the orders / payments boundary.
The tight coupling between these was evident as both services ended up calling each other multiple times in a single request for every operation with all the associated overhead.

With the current implementation, Orders service cant work without State Machine service and State Machine service cant work without Orders service. This issue was even bigger as both services communicate synchronously, and that leaves to the next learning of this project, Prefer Asynchronous communication when possible.

What could have been done if we wanted to reuse some code, was to build a library and some SDK instead of creating a completely separate service.

## Prefer Asynchronous communication

While each service should be an independent deployable unit, they work together to build your application, so of course there are some dependencies between them and they have to communicate in some way. But that dependency doesn't have to be an hard dependency that if some service is down, it will bring all your application down.
How could you avoid that? By using Asynchronous communication like message queues.

An example in this project was the Payments service. When the user made a booking, the Orders service will do a synchronous HTTP call to the Payments service to do the payment. The Payment service will then do another request to an external payment provider do effectively do the payment.

This process is slow and and there are many things that can fail in the middle. Using asynchronous communication makes your services more resilient to failure as you can implement mechanisms like retry in a case of error in an easier way.


## Conclusion

The advantages of a Microservices architecture are clear, from a better separation of concerns resulting in more decoupled applications, the possibility to scale each service independently or to write each service into the most appropriate programming language.

But Microservices are not a silver bullet. The Orchestration / Deployment of the application is more complex, Debugging is more difficult and the way each service communicates with others needs to be well thought.

You need to plan very well your architecture if you want to follow that route. Correctly identifying service boundaries based on your Domain Model is the first step of a successful Microservices based implementation.

Due to the nature of the project I worked on, the service boundaries were clear defined and made total sense to go to a Microservices approach. If that´s not so clear or it is expected to change a lot, Its nothing wrong to start with a more monolith and extract some parts later if needed to.

The word Monolith has a bad connotation in general, but the truth is, nothing stops you from having a monolith that is modular, have a great separation of concerns, low coupling and high cohesion. Popular design patterns like SOLID can help a lot. If you do that, it will be relatively easy to start moving specific parts of the application to separate services as your application grows.

Every application is different. Its your job as a Software Engineer to analyze the requirements and choose the most appropriate path.

Hope you enjoyed the article. If you have any questions or comments, feel free to use the comment box below.


## Reference

* [What are microservices?](https://microservices.io/)
* [BoundedContext](https://martinfowler.com/bliki/BoundedContext.html)
* [Domain analysis for microservices | Microsoft Docs](https://docs.microsoft.com/en-us/azure/architecture/microservices/domain-analysis)
* [Microservices Are Something You Grow Into, Not Begin With - DEV Community](https://dev.to/nickjj/microservices-are-something-you-grow-into-not-begin-with-2llj)
* [Designing a Successful Microservices Engineering Culture - DEV Community](https://dev.to/jakelumetta/designing-a-successful-microservices-engineering-culture-3n07)
