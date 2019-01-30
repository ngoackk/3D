const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'www/js')
   .sass('resources/assets/sass/app.scss', 'www/css');
   // .copyDirectory('resources/assets/sass/font-awesome', 'www/css/font-awesome');
    
