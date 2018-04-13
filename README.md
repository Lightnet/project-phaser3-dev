# Project-Phaser3-Dev

Created by: Lightnet

License: MIT

# Information:
 Blank project and prototype development build. The project is design to bundle script together into one file. Note this babel 6.26.0 that compile to javascript for html to run.

```
require('phaser/dist/phaser');

```
This is from phaser package for easy to access and export to bundle file.

# Layout:
```
 Dev folder:
  - assets (files)
  - dist (server files)
  - node_moduels (npm)
  - public (web host / static)
  - src (client and server)
  - main.js (server app)
  - .babel (compile es6 to javascript)
  - gulpfile.js (auto build script tasks)
  - index.html (default page)
```

# Notes:
 * this.load.setBaseURL('http://localhost:3000'); //you can change until this project is set for default settings is not production.
 * The Babel javascript config file .babelrc and gulpfile.js has two since one is for node and other is browser setting builds.

# Links:
 * https://phaser.io/tutorials/getting-started-phaser3/part5