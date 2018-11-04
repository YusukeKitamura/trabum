const mix = require('laravel-mix');

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

mix.js('resources/js/login.js', 'public/js')
    .js('resources/js/dashboard/index.js', 'public/js/dashboard.js')
    .js('resources/js/users/index.js', 'public/js/users.js')
    .sass('resources/sass/dashboard.scss', 'public/css')
    .sass('resources/sass/users.scss', 'public/css')
    .sass('resources/sass/login.scss', 'public/css')
    .stylus('resources/stylus/vendor.styl', 'public/css')
    .extract([
        'vue',
        'vuex',
        'vue-router',
        'vuetify',
        'vuetify/es5/util/colors',
        'axios',
        'lodash',
        'moment'
    ])
    .version()

mix.browserSync({
    proxy: 'trabum.test'
})
