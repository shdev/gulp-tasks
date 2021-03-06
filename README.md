# gulp-tasks

these are gulp task which are copied or inspired by this wonderful tutorial <http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup>


## Install 

 * Clone the gulp-task into your webapp develop directory with  `git submodule add https://github.com/shdev/gulp-tasks.git gulp`
 * copy the files from `gulp/template` as sibling of the gulp directory `cp gulp/template/* .` 
 * install the dependencies with `npm`

 ```bash
 npm install --save-dev bower coffee-script del gulp gulp-autoprefixer gulp-changed gulp-coffee gulp-coffeelint gulp-compass gulp-concat gulp-filter gulp-git gulp-htmlmin gulp-imagemin gulp-jshint gulp-manifest gulp-minify-css gulp-plumber gulp-rename gulp-ruby-sass gulp-sass gulp-size gulp-sourcemaps gulp-tap gulp-tar gulp-uglify gulp-util jshint-stylish preen require-dir run-sequence gulp-gzip browser-sync gulp-html-validator gulp-batch
 ```
 
 * install the dependencies from `gem` if you use [SASS](http://sass-lang.com) with [COMPASS](http://compass-style.org)
 
 ```bash
 sudo gem install sass compass
 ```
 
 * configure gulpconfig.js for your needs.

## Update

* go to the `gulp` directory this should be a git submodule like described above. 
* `git fetch && git pull`

## Tasks

* TODO create list of tasks
 
## Gitignore

If don't have done it before insert gitgnores for example from [githubs gitignore](https://github.com/github/gitignore) for

* node
* bower
* sass

or do it [with oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) gitignore plugin

in your basedir

```bash
gi node >> .gitignore && gi bower >> .gitignore && gi sass >> .gitignore
```
 