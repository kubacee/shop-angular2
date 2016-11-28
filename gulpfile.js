var gulp = require("gulp");
//var bower = require("gulp-bower");
var elixir = require("laravel-elixir");
require('laravel-elixir-livereload');
var elixirTypscript = require('elixir-typescript');



elixir(function (mix) {
    mix.copy('node_modules/core-js', 'public/core-js');
    mix.copy('node_modules/zone.js', 'public/zone-js');
    mix.copy('node_modules/systemjs', 'public/systemjs');
    mix.copy('node_modules/reflect-metadata', 'public/reflect-metadata');
    mix.copy('node_modules/@angular', 'public/@angular');
    mix.copy('node_modules/rxjs', 'public/rxjs');

    mix.typescript(
        '/**/*.ts',
        'public/js',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );
    // mix.livereload();
    // mix.browserSync({proxy: 'localhost:8000'});

});