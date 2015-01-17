

// Inspired by this tutorial  
// http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup

var destBase = 'build';

var dirs = {
  dest : {
    base : destBase,
    css : destBase + '/css',
    images : destBase + '/images',
    fonts : destBase + '/fonts',
    js : destBase + '/js',
    js_ext : destBase + '/js/external',
    archives : 'archives'
  },
  src : {
    sass : 'scss',
    files : 'files',
    coffee : 'coffee',
    compass : 'config/compass.rb',
    bower : 'bower_components'
  }
}


module.exports = {
  name : 'todolist',
  browsersync: {
    development: {
      server: {
        baseDir: [dirs.dest.base]
      },
      port: 9999,
      files: [
        dirs.dest.css + '/*.css',
        dirs.dest.js + '/**/*.js',
        dirs.dest.images + '/**',
        dirs.dest.fonts + '/*'
      ]
    }
  },
  coffee: {
    src: [
      dirs.src.coffee + '/todolistmain.litcoffee',
      dirs.src.coffee + '/GeneralBehavior.coffee',
      dirs.src.coffee + '/TodoListApp.coffee',
      dirs.src.coffee + '/TodoListApp.EntryInput.coffee',
      dirs.src.coffee + '/TodoListApp.ListInput.coffee',
      dirs.src.coffee + '/TodoListApp.ListsView.coffee',
      dirs.src.coffee + '/TodoListApp.EntriesView.coffee',
      dirs.src.coffee + '/TodoListApp.Configuration.coffee',
      dirs.src.coffee + '/TodoListApp.TopBar.coffee'
    ],
    dest: dirs.dest.js,
    options: {
      bare: false,
      literate: true
    },
    joinedFile: 'todolist.js'
  },
  coffeelint: {
    src : dirs.src.coffee + '/*.{coffee,litcoffee}'
  },
  copyBower: 
    [ 
      { src: dirs.src.bower + '/**/*.css',
        dest: dirs.dest.css
      },
      { src: dirs.src.bower + '/**/*.js',
        dest: dirs.dest.js_ext
      },
      { src: dirs.src.bower + '/**/fonts/*',
        dest: dirs.dest.fonts
      },
      { src: dirs.src.bower + '/**/img/*',
        dest: dirs.dest.base,
        renameFunc : function (path) {
          path.dirname = "img";
        }
      } 
    ],
  copyFiles: 
    [ { src: dirs.src.files + '/**/*',
        dest: dirs.dest.base
      } 
    ],
  delete: {
    src: [dirs.dest.base]
  },
  dirs : dirs,
  jshint: {
    src: dirs.dest.js + '/*.js'
  },
  manifest: {
    src: dirs.dest.base + '/**/*',
    dest: dirs.dest.base,
    options: {
      hash: true,
      timestamp: true,
      network: ['http://*', 'https://*', '*'],
      filename: 'app.manifest',
      exclude: ['app.manifest']
     }
  },
  optimize : {
    html: {
      src: dirs.dest.base + '/**/*.html',
      dest: dirs.dest.base + '/',
      options: {
        collapseWhitespace: true
      }
    },
    images: {
      src:  dirs.dest.images + '/**/*.{jpg,jpeg,png,gif}',
      dest: dirs.dest.images + '/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
    js: {
      src:  dirs.dest.js + '/*.js',
      dest: dirs.dest.js + '/',
      options: {
        compress: true
      }
    }
  },
  sass: {
    src:  dirs.src.sass + '/**/*.{sass,scss}',
    dest: dirs.dest.css,
    options: {
      noCache: true,
      compass: true,
      bundleExec: true,
      sourcemap: false,
      sourcemapPath: '../../_assets/scss'
    },
    autoprefixerOptions: {
      browsers: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
      ],
      cascade: true
    },
    compassOptions: {
      config_file: dirs.src.compass,
      css: dirs.dest.css,
      image: dirs.dest.images,
      js: dirs.dest.js,
      sass: dirs.src.sass,
      sourcemap: false,
      style: "compressed",
      time: true,
    },
    minifyOptions : {
      keepSpecialComments: 0
    }
  },
  watch: {
    sass: dirs.src.sass + '/**/*.{sass,scss}',
    files: dirs.src.files + '/**/*',
    coffee: dirs.src.coffee + '/**/*.{coffee,litcoffee}',
    bower: dirs.src.bower_components + '/**/*.{js,css,png,gif,jpeg,jpg}',
  },
};

