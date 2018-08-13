const mix = require('laravel-mix');

mix.combine([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',    
    'assets/js/jquery-ui.min.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'assets/js/app.js'
], 'public/js/app.js');
mix.sass('assets/sass/app.scss','public/css/custom.css');
mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/jquery-ui/themes/base/all.css',
    'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
    // 'node_modules/owl.carousel2/dist/assets/owl.theme.default.min.css',
    'assets/css/fonts.css',
], 'public/css/app.css');