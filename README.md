# Raspberry Node.js Radio

## Setup

Before installing the project you will need few packages / programms.

Update and upgrade your raspberry first

```
sudo apt-get update
```

after update run upgrade:

```
sudo apt-get upgrade
```


### Node.js


Install the latest stable version of Node.js. First download it with:

`curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`

and then install it:

`sudo apt install -y nodejs`

### Git

You will need git to clone the repository or pull if some updates are available

`sudo apt install git-all`

### Development files for ALSA software

You will need to install `sudo apt-get install libasound2-dev`

Src: https://packages.debian.org/de/stretch/libasound2-dev

## Installing the project

You are ready to install the project.

Open your raspberry terminal and clone the repository with `git clone https://github.com/ilijanovic/nodeRadio.git`

After cloning navigate into the folder with `cd nodeRadio`

Now you need to install the npm packages with `npm install`.

>This could lead to some accessing errors. There are several ways to solve the error
>1. Try with sudo: `sudo npm i`
>2. Try to reclaim ownership: `sudo chown -R $(whoami) ~/.npm`
>3. Try with unsafe perm: `npm i --unsafe-perm`

## Start app

You can now run the app in the developer mode with: `npm run dev`

The app is now available under `localhost:3000`

