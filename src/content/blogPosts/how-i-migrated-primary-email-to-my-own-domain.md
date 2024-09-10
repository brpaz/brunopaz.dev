---
title: How I migrated my primary email address to a new provider and my own domain
slug: how-i-migrated-primary-email-to-my-own-domain
publishDate: 2021-02-06
excerpt: I spent my last weekend migrating my primary email address to my own domain. In this post I will explain the reasons for this change and challenges I faced with this process.
published: true
tags: ['productivity']

---

I spent my last weekend migrating my primary email address to my own domain. In this post, I will explain the reasons for this change and the challenges I faced with this process.

## Why changing my email address

I had the same email address for like 15 years or more. I was still using the mail service provided by my first ISP, which I created when I was a teenager. Unlike many, I hadn´t any "non-professional" Hotmail account and I didn't enter on the Gmail bandwagon when it becomes popular.

My email address was simple, `<firstname><lastname>` and it fitted my needs for many time.

I still have a Gmail address for my Google account but it is some random email, that doesn´t even have my name on it.

For some years, I was using that Gmail account as a frontend to my primary email though, thanks to the IMAP account sync feature. The Webmail client of my provider, while not bad, had very few features compared to Gmail.

This setup has a problem, which is it can take some time for my emails to arrive at the inbox as Google only syncs like 5 to 5 minutes.
I could have tried to use any other email client, directly connected to my original email via IMAP, but then I would lose some nice features of Gmail, like filters. While there are clients like [Mailspring](https://getmailspring.com/) for desktop that have implemented their own filters/rules systems, I prefer these to be done server-side by the email provider itself as I consider a core feature, and I might want to use different clients in Desktop and Mobile for example while having the same functionality.

That´s one of the reasons to change. I wanted more features that my email provider could give and stop using have Gmail as a Proxy as a workaround for some.

Another reason is that I wanted to have my email address associated with my own domain. Why? The main reason is to avoid lock-in. An email address today is like an ID Card on the internet. You use it for everything, from logging in into your bank to some random forum. I believe that such an important thing shouldn´t be locked in an external provider. I don´t expect my old provider to die any time soon as it still has many users, but who knows.

Having it associated with my own domain, which I already had for my website, makes perfect sense. Changing the hosting platform is a matter of pointing the DNS records to a new address. You could even host it yourself. (I wouldn´t recommend it, simply because of the extra maintenance for such a critical thing that I want to just work all the time and forget about it).

I haven´t done this before, mostly because of the effort that would take to change all the websites that I add associated with the old address. But I got motivated to do it and in the end, it was not that bad.

## Finding the right provider

The first task was to find the right provider to host my new email. My main requirements were that it must support my own domain, have advanced filter capabilities and allow to sync my old email directly to the inbox (similar to Gmail Imap Sync) to facilitate the transition process. That´s because my old email provider doesn't support automatic forwarding. Privacy features were also an important point to consider.

One important thing if you want to go this route, is that you have to be prepared to pay for Email. You won´t find any trustworthy provider for free. But there are some really nice options for just a couple of bucks.

The two main options I considered were [Fastmail](https://fastmail.com) and [Zoho Mail](https://www.zoho.com/mail/).

I started with Zoho Mail and I really like it but it didn´t support syncing my old email account to the same Inbox. Zoho supports IMAP accounts, but unlike Gmail, it creates a separate inbox with some limitations like the impossibility to use filters. Not ideal.

This led to me trying Fastmail. Fastmail is a very popular privacy-focused Email provider. Their UI is a bit dated, and their mobile apps don´t look native, but it has a good set of features. It allows syncing other accounts using IMAP to the same inbox and has a very advanced filter system. You can get a "Standard" Account with custom domains support for 5$/month.

It would be my choice, mostly because my initial plan was to have both emails in the same inbox and gradually updating all the websites I had to the new email. But since I was so productive that ended up migrating everything in a weekend, this feature was far less important. With 90% of my email already going to the new address, I wouldn´t mind having separate inboxes and checking my old inbox from time to time, until everything is migrated.

So, I ended up choosing Zoho mail. The UI is a lot more modern, cheaper (12€/year for the lite Plan), and my account is hosted on the EU, which is nice to have.

It also has one really cool feature in the Filters system that Fastmail didn´t have, which is to automatically upload email attachments to Google Drive or Zoho Docs based on filters. This allows, for example, to create a filter for my DigitalOcean invoices to be automatically uploaded to the
"Invoices/DigitalOcean" folder on my Drive Account. Pretty neat.

Fastmail would be a solid choice though and I am sure there are more good providers. If you are ok to pay more and try a different approach to email, [Hey](https://hey.com/) from Basecamp, should be introducing custom domains for personal accounts soon.

If you are deep into the Google ecosystem and want to keep using the Gmail interface, [G-Suite](https://workspace.google.com/) is always an option.

## Migrating all the websites to the new email

This was the most time consuming and boring part of the process. As you can imagine, with a 15 y.o email address, the number of websites that I had associated with was enormous.

I started by finding all the websites associated with my old email address in my password manager and go one by one to change it.

This was also a great opportunity to delete some old accounts that I didn´t use anymore.

I was a bit worried that some sites wouldn´t allow me to change the email address but 90% of then was an easy process. Some I had to contact support to request the email change. A very few didn´t support changing email addresses but were mostly older platforms like forums that were not critical. Most of then I didn't use it anymore, so no big deal.

I found out that deleting old accounts was probably more complex than changing the email. A few sites didn´t have that functionality. some, I had to contact support to request the account deletion. I contact support when available and all of them ended up deleting my account, the others I simply ignored.

After that, I also had to remember any places where I could have used my old email. Newsletters subscriptions for example, and then offline services that have my personal details like my bank, insurance, etc.

I really don´t use email for communicating with friends or family, so I didn´t need to tell anyone that my email has changed. If you do, you could check your contacts list and send an email informing them of your change.

I managed to do all this is a weekend, which was quite a success.

Most of the emails I am receiving are arriving at my new address. I am still actively monitoring my old email and will keep doing some for the next weeks or months, to find possible places that I might have forgotten to update. This is also a good opportunity to find out any old newsletters that I might be subscribed to and to clean up that. Since the change, I already unsubscribed from a dozen or more sites. In a few weeks, the only email I should expect to see in my old account is SPAM and an occasional real email from a place I forgot to update.

## There is a need for a better online identity management system

All this work, made me realize that there is definitely a space for innovation on how we manage our online identity and how we authenticate ourselves on websites and applications. We can do better than the traditional username/password flow. I am the same person. Still, I had to change my identity on hundreds of websites. I would have liked to change only in a single place and then that information would be made accessible to all the websites I want.

Passwordless authentication with magic links is not a good option. First, it wouldn´t solve this specific problem, as I wasn´t changing passwords but the email address. It would just make everything even more dependent on your email. Second, I personally hate that flow. With a password manager, I can log in in any website in a fraction of a second with auto-fill. With Magic links, I would need to open my email, waiting for it to arrive, click on the link... Not the best use of my time. It also assumes easy access to email account every time which might not be the case If I am at my work computer for example.

[WebAuthn](https://webauthn.io/) looks like an interesting technology but requires a specific device like a Yubikey to work. While this can provide an extra level of security, it is less practical for the regular user, as you have to remember to carry an extra device with you all the time. A small device that can be lost or stolen. And it seems that at the moment, it still misses basic functionality like login into the same website from multiple devices. Still, I will keep a look at how this tech evolves in the next years.

I feel like the system that it´s closer to how I imagine authentication to work, and that is already widely used is OAuth/Social logins. The problem is that, with the current providers, you are dependent on a big tech like Google, Facebook, Twitter, to provide the functionality and that creates a big lock-in. What if I want to delete my Google or Facebook account? I would lose access to all the sites that I used their Social Login. And I don´t want to start discussing possible privacy issues with some of these services. That´s why I rarely use Social Logins and still prefer the old username/password flow.

I would be interested to see an open and decentralized platform that can handle an "Online Identity", based upon standards like OAuth or something better, that can be trusted and widely adopted.

[OpenID](https://openid.net/) works mostly like this and it already exists for some time. Still, it looks like didn´t have many traction and I don´t remember seeing a website supporting for ages. I wonder why.

## Conclusion

Migrating to a new email provider can be complex and time consuming depending on the number of services that are associated with your email. I had more than 100 websites with my old email. Still, with some planning, I felt it wasn´t that bad as I anticipated.

Nowadays, your email address is like your ID card on the internet. "Owning" it provides peace of mind and reduce the dependency on your email provider. Changing your provider is as simple as changing your DNS and there many privacy focus services that you can use.

I definitely recommend this.
