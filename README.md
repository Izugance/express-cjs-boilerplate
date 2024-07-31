# Introduction
This is a simple boilerplate setup for ExpressJS-powered API-only backend applications. It comes with prepopulated
scripts for generic things, which rely on certain packages.

The following dependencies are in the `package.json` file.
They can be modified depending on your needs.
1. Dependencies:
- bcrypt
- body-parser
- cookie-parser
- cors
- dotenv
- express
- express-async-handler
- express-session
- helmet
- http-status-codes
- jsonwebtoken.

2. Dev dependencies:
- jest
- nodemon.

# Setup
To use this structure, you can clone this repository. You then delete the associated
`.git` folder (which is most likely hidden) in the top-level directory, and initialize a
new git repository for your project.

If the previously listed dependencies match your use-case, you could then run
```
>>> npm install
```
from the command line from anywhere in your project to install dependencies in `package.json`.

You can then modify the structure and the prepopulated files and install other dependencies as you wish.

# Notes
The versions for the listed packages might not match your use-case when you clone the
repo. If this is the case, you could edit the `package.json` package versions or run 
```
>>> npm install <package1>, <package2>, ...
```
where `<package1>, <package2>, ...` is a list of packages you want to update/install.

Also, make sure to edit `"name"`, `"author"`, `"description"`, `"version"`, and other keys in `package.json`.

Get building!
