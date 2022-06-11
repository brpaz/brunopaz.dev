---
title: Serverless beyond FaaS
slug: serverless-beyond-faas
summary: Serverless is for some time, the new hype in the infrastructure world. But it is offten confused with Lambdas. In this post I will show why Lambdas are only a sub part of Serverless.
date: 2020-07-07
description: Serverless is more than FaaS.
tags: serverless,devops
published: true
featured: true
devto_url: https://dev.to/brpaz/serverless-beyond-faas-5fo
layout: ../../layouts/Post.astro
setup: |
  import Image from '../../components/blog/Image.astro'
---

Microservices are dead!! Serverless is for some time, the new hype in the infrastructure world.

One of the main advantages of a Serverless Architecture is that it frees developers from having to worry about server maintenance, scalability, etc, as these will be handled automatically by the Serverless platform provider, so they can focus entirely on building great products.

This is great, mostly for single devs and small teams as server management, even at a small scale, can become a complex and time-consuming task.

One particular type of Serverless, and perhaps the most popular one, to the point it´s often mixed up with the concept itself, is Functions as Service (FaaS), also known as lambdas, due to [AWS Lambda](https://aws.amazon.com/lambda/), which is one of the most popular providers of this technology.

The main idea behind lambdas is that you build small independent functions, each one responsible for a small part of your application.

Considering a traditional REST API, you can imagine that any Controller Action would be a separate function.

<Image name="srlu3tkztl4dwuoi3hi9.jpg" alt="Serverless Architecture evolution" />

So now, instead of having 50 Microservices, you have 1000 functions! ;)

<Image name="w8smkpat272msl3p95i1.jpg" alt="Meme: Deploy all the functions!" />

It´s true that with a FaaS platform, you won´t need to worry about managing the servers, scalability, etc that would take a lot of effort to do it right, in a big Microservices Architecture.

But you still have to deal with all the coordination between  the functions.
You will also have extra complexity for devs to develop and test locally.

And because each provider implements its FaaS platform differently, the lock-in is very high.

Besides, the application will have to be designed in a specific way, tied, to a specific deployment style, so you really can´t move back from a full FaaS architecture to another kind of architecture that easily.

The idea of this article is not against Lambdas. There are lots of great use cases for them, like Event-driven applications, very specific tasks like Image Processing, Sending emails, and even as a small backend for static sites.

**What I would like you to remember from this article, is that Lambda´s != Serverless and there is Serverless beyond Lambdas!**

I have seen devs, trying to squeeze existing applications into Lambdas, like it´s the only way to deploy applications.

Or people creating issues on Open Source projects like [Strapi](https://strapi.io/), asking to make it run on Lambda. Or discussing ways to run Laravel on Lambda, or Rails on Lambda.

I understand the appeal. no server maintenance, almost zero cost for small/medium size projects. But we don´t need to be constrained by FaaS limitations to enjoy the benefits of Serverless. There are alternatives.

One great example is [Google Cloud Run](https://cloud.google.com/run).

Google cloud Run fits perfectly my vision of Serverless.

You just need to have a Docker image and you can deploy it with a single command:

```bash
gcloud run deploy --image "myimage" --platform managed
```

No need to change the way you build applications. No limitations on technology. If it can be containerized you can deploy it on Cloud Run.

With Cloud Run, you get all the main selling points of serverless:

* No need to worry about server maintenance.
* Automatic Autoscaling (including scaling to zero, when the application is not in use)
* Pay only for what you use.

Without the limitations of Lambdas.

I think we need more platforms like Cloud Run, with I feel like an evolution of more traditional PaaS like Heroku.

Cloud Run, is build on top of [Knative](https://knative.dev/). which is an open-source Kubernetes-based platform to deploy and manage modern serverless workloads, so others could use the same foundations.

I know AWS has [Fargate](https://aws.amazon.com/fargate/), which seems to require some more configuration but should be the closest equivalent of Cloud Run in AWS.

I am also looking forward to what comes out from the [DigitalOcean/Nanobox](https://www.digitalocean.com/nanobox/) integration.

## Conclusion

Serverless is a great concept and I believe will keep maturing in the next years.

It won´t replace traditional servers for more complex applications or when more control is needed.

But, for smaller teams and single developers, who want to build a product without having concerns about scalability and server maintenance and with the extra benefit of only Pay for what is used, is perfect.

It´s important to understand that Serverless is not just FaaS. Platforms like Google Cloud Run are a great example and might be a much simpler alternative for deploying your applications instead of trying to squeeze them into a Lambda.
