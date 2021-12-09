---
title: Take control of your Application windows with on Linux Devilspie
slug: take-control-of-your-application-windows-on-linux-with-devilspie
date: 2018-11-08
summary: In this post, I will introduce you to an amazing Linux application, called Devilspie.
tags: ['linux']
published: true
devto_url: https://dev.to/brpaz/take-control-of-your-application-windows-on-linux-with-devilspie-f55
layout: ../../layouts/Post.astro
---

In this post, I will introduce you to an amazing Linux application, called [Devilspie](http://www.nongnu.org/devilspie2/).

## What is Devilspie

Devilspie is a window matching utility, that allows the user to perform scripted actions on windows as they are created.

Some of the possible actions include:

* Auto minimize / maximize
* Place in a specific workspace
* Place at a specific position on the screen
* Set other window properties like "always on top"

This enables you to fully control how windows are displayed, on a per application basis.

For example, you can have some application always start minimized (I will show an example of this in this article), or having Slack always start on workspace 2, or having your terminal windows always opening on top right corner of your screen with "always on top" set to true.
The flexibility and possibilities Devilspie gives to you are endless.

You can even do more complex stuff like put the first instance of an application on workspace 1, the 2nd instance on workspace 2 and so on.

## A real world example

Now I will show you, how Devilspie solved a concrete problem I was having for some time.

I use [Franz](https://github.com/meetfranz/franz) as my messaging app for services like WhatsApp, Slack, Facebook Messenger and many more.

I wanted it to auto start with the system so I can start receiving notifications on new messages. Franz has a configuration that enables this, but has an annoying drawback. It starts the application maximized, instead of starting in the System Tray.

Devilspie, allowed me with very few lines of code, to create a script that will detect when a new Franz window is created and automatically minimize it.

Keep reading for the details of the implementation.

## Usage

The first thing we have to do is to install Devilspie. Note that I am using Devilspie2, which is a fork of the original Devilspie that uses Lua as its script engine instead of  symbolic expressions of the original Devilspie, making it much easier to understand and maintain.

On Debian based systems you can install it from the official repositories.

```bash
sudo apt-get install -y devilspie2 lua5.2
```

Its also present on AUR repository, for Arch users.

Next, we need to create a directory where we will place our scripts:

```bash
mkdir ~/.config/devilspie2
```

I choose to place it in .config folder, but you can place it anywhere you want.

Now open your terminal and execute devilspie with the following command:

```bash
devilspie2 --folder  ~/.config/devilspie2 --debug
```

the `--folder` option sets the path to the folder where Devilspie will look for its scripts. Point it to the directory created above.

You should now see some output with information about your current opened windows.

If you open any application, you should see that Devilspie detect it and sows some more details on the console output. The output is useful to get information like "window name", "application name" or "xid", that you will need to use on your scripts to be able to identify your application.

Now lets create our script, that will minimize Franz window.

Create a new file in the Devilspie folder. You can name it whatever you want. Just make sure, it has .lua extension.

Add the following contents and save it:

```lua
if (get_window_name()=="Franz") then
    debug_print( "minimize Franz window")
    minimize()
end
```

As you can see its really simple to understand what it does.

When a new Window is opened, Devilspie will check if it matches the specified window name, and call the minimize function.

Some functions you can use in your scripts:

* `get_window_name()` -> Returns the window name
* `get_application_name()` -> Returns the application name
* `set_window_workspace( 2 )` -> Sets the workspace of the window.
* `set_window_geometry( x, y, width, height )` -> Sets the window size
* `make_always_on_top()` -> Makes the window always you top.

You can find a more complete list of functions in [this](https://gist.github.com/brpaz/47c357c23cc677391e45ed252b96d78f) Gist.

You can then restart Devislpie and test the script, by launching the application and see if is minimized as expected.
If everything worked fine, you can then add the devilspie command to your startup applications, to ensure it is always ready to respond to new window events.

## Conclusion

As you can see Devilspie allows you to have a greater control and flexibility of how your application windows are created and placed on your desktop. Lua scripting is also really simple to understand.

While writing this article, I also found [kpie](https://github.com/skx/kpie), which is apparently a more recent alternative to Devilspie, that also uses Lua for scripting. You might want to look at it.

Hope you enjoyed it. Feel free to ask any questions in the comments section below.

See you.

---
## Reference

* [Devilspie2 for Automatic Placement of Windows on a Linux Desktop – Justin Gedge](https://www.justingedge.com/linux/devilspie2-automatic-window-placement/)
* [Scripted window actions on Ubuntu with Devilspie 2](https://www.howtoforge.com/tutorial/ubuntu-desktop-devilspie-2/)
