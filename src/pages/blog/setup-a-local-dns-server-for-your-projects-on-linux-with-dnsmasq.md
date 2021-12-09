---
title: Setup a local DNS server for your projects on Linux with Dnsmasq
slug: setup-a-local-dns-server-for-your-projects-on-linux-with-dnsmasq
date: 2019-08-16
summary: In this article, I will explain how to setup a local DNS server on Linux. I will use Dnsmasq, a lightweight DNS server which comes pre-installed in Operating Systems like Ubuntu or Fedora.
tags: ['linux']
published: true
devto_url: https://dev.to/brpaz/setup-a-local-dns-server-for-your-projects-on-linux-with-dnsmasq-blm
layout: ../../layouts/Post.astro
---

In this article, I will explain how to setup a local DNS server on Linux.

I will use Dnsmasq, a lightweight DNS server which comes pre-installed in Operating Systems like Ubuntu or Fedora.

All the instructions on this article are based on a Fedora 30 installation. The concepts will be the same for any other *Nix based OS, but the install commands or locations of some files might differ a little.

## Why setup your own DNS server?

There are many reasons why you might want to setup your local DNS server
like Caching, but for me, one of the most useful reasons is to resolve local development domains automatically to your localhost.

For simple projects, using "localhost" and a "port", will probably be enough, but for more complex projects where you need to have multiple applications running at the same time (Ex: A Microservices oriented project), it will start to become more complicated to remember all the ports and to avoid conflicts, so a domain-based approach is easier.

There are also some cases where your business logic depends on the domain of the application.

An application where each user logs-in via a subdomain or when you have different domains per country and the content is loaded based on that domain for example.

In these cases, it's essential to have a "real" domain on your local environment to mimic the expected behavior in production.

A common approach to this is to add your domains to the `hosts` file of your system.
While this works fine, it is not very scalable as you need to add each new domain manually to the file and it doesn't support wildcard subdomains for example.

A local DNS server can make this a one-time setup.

## Installing and configuring Dnsmasq

Dnsmasq comes pre-installed in Ubuntu and Fedora. In Ubuntu is not really `dnsmasq` but `dnsmasq-base`, a stripped version of DNSmasq that is tightly integrated with the system Network manager. that is enough for our needs.

For other OSes you might need to check the respective OS documentation, but if not already installed, you should be able to install it using the OS default package manager.

After installing Dnsmasq you need to enable "NetworkManager" to use it as the default DNS server.

Create a new file `/etc/NetworkManager/conf.d/dnsmasq.conf` and add the following content:

```ini
[main]
dns=dnsmasq
```

Restart the "NetworkManager" service to persist your changes.

```bash
sudo systemctl restart NetworkManager
```

Now check the `/etc/resolv.conf` and check if there is an entry for nameserver `127.0.0.1`.

## Add your local domains to Dnsmasq

The next step is to configure your DNS zones for your domains.

You can specify as many domains as you want, but personally, I am using "lh" (localhost) TLD for all my local domains.

Go to `/etc/NetworkManager/dnsmasq.d` and create a new file with the name of your TLD, in my case `lh.conf` with the following contents:


```ini
address=/lh/127.0.0.1
```

Alternatively, if you have installed full Dnsmasq and not using the one that comes with NetworkManager, the configuration should be added to `/etc/dnsmasq.d/`.

This instructs Dnsmasq to resolve any query to the `lh` TLD to your local machine.
You don't have to always point to `127.0.0.1` tough. If you are using VMs, for example, you cant point to your VM IP address.

A good example of this use case is when using [minikube](https://github.com/kubernetes/minikube).

I have created an `mkube` entry in Dnsmasq to resolve to the Minikube VM IP Address, so I can create an `app1.mkube`, `app2.mkube` and they will reach Minikube automatically.

Finally, you need to restart the services to reload your changes:

```bash
sudo systemctl restart dnsmasq NetworkManager
```

To check everything is working, open your terminal and type `dig test.lh`.

You should see that it resolves to `127.0.0.1`. You can test any other subdomains and they all should resolve to your machine.

And voilá, you have setup a very simple DNS Server. No need to worry about ports or host file again. Any *.lh request will resolve to your machine.

## Next steps

The next steps would be setup an HTTP server at your localhost to handle your requests and proxy to the correct application based on the domain name.

If you are using Docker, I recommend giving [Traefik](https://traefik.io/) a try.

Install Traefik on your machine listening on port 80. Traefik will listen to Docker events and automatically reload its configuration when a container status changes.

You can set a hostname for the application and Traefik will do the necessary mapping, so for example, `my-app.docker.lh` will be proxied automatically to the correct internal port of the container.

You might need to setup some labels on your container, nothing more. Traefik and Dnsmasq will handle the rest.

This setup is out of the scope of this article. I might write another article about this.

## Note for Ubuntu users

If you are using Ubuntu please check [this](https://askubuntu.com/questions/1029882/how-can-i-set-up-local-wildcard-127-0-0-1-domain-resolution-on-18-04?rq=1) question on Stack Overflow.

## Conclusion

For smaller or single application projects, a port-based approach is perfectly fine and there is no reason to not stick with it.

But if you work on many projects at the same time, projects with complex microservices architecture, or when your application have a logic based on the domain or subdomain, Dnsmasq provides a very simple way of managing your domains without having to manually deal with the `hosts` file.

## Reference

* [Using the NetworkManager's DNSMasq plugin - Fedora Magazine](https://fedoramagazine.org/using-the-networkmanagers-dnsmasq-plugin/)

