var gulp =require("gulp"),
    connect = require("gulp-connect"),
    cssmin = require('gulp-cssmin'),
    $ = require("gulp-load-plugins")();  /* https://www.npmjs.com/package/gulp-load-plugins */

gulp.task("js-min",function(){
    return gulp.src([
        "bower_components/jquery/dist/jquery.js",
        "bower_components/semantic-ui/dist/semantic.js",
        "bower_components/moment/moment.js",
        "bower_components/fullcalendar/dist/fullcalendar.js",
        "bower_components/vue/dist/vue.js",
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter("default"))
    .pipe($.uglify())
    .pipe($.concat("m5.js"))
    .pipe(gulp.dest("Content/dist"));
});

/****************************************************************************/
var foldersToMove = [
    "node_modules/bootstrap/dist/*.*",
    "node_modules/jquery/dist/*.*",
    "node_modules/crosscover/dist/**",
];
gulp.task("move_bower_dist", function () {
    return gulp.src(foldersToMove, { base: "./node_modules/" })
        .pipe(gulp.dest("vendor"));
});

/****************************************************************************/
gulp.task("js-layout-dev", function () {
    return gulp.src([
        "bower_components/jquery/dist/jquery.js",
        "bower_components/bootstrap/dist/js/bootstrap.js",
        "bower_components/vue/dist/vue.js",
        "bower_components/vue-validator/dist/vue-validator.js",
        "Scripts/myPlugin.js"
    ])
    .pipe($.concat("layout-dev.js"))
    .pipe(gulp.dest("Content/dist"));
});

gulp.task("js-layout", function () {
    return gulp.src([
        //"bower_components/jquery/dist/jquery.js",
        //"bower_components/bootstrap/dist/js/bootstrap.js",
        //"bower_components/vue/dist/vue.js",
        //"bower_components/vue-validator/dist/vue-validator.js",
        "Scripts/myPlugin.js"
    ])
    //.pipe($.jshint())
    //.pipe($.jshint.reporter("default"))
    .pipe($.uglify())
    .pipe($.concat("layout.js"))
    .pipe(gulp.dest("Content/dist"));
});

gulp.task("js-showroom", function () {
    return gulp.src([
        "Scripts/src/showroom/showroom.js"
    ])
    .pipe($.uglify())
    .pipe($.concat("min1.js"))
    .pipe(gulp.dest("Scripts/src/showroom"));
});

//啟用WebServer.
gulp.task("connect", function(){
    connect.server({
        root:"",
        livereload:true
    });
});

gulp.task("html", function(){
    gulp.src("./17Y/*.*")
        .pipe(connect.reload());
});

//----------------------------------------------------------------------
var minifyHTML = require('gulp-minify-html');

gulp.task('minify-html-showroom', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src('Content/views/showroom/tmp.html')
        .pipe(minifyHTML(opts))
        .pipe($.concat("tmp.min.html"))
        .pipe(gulp.dest("Content/views/showroom"));
    //.pipe(gulp.dest("Content/views/showroom-tmp.html"))
});
//-------------------------------------------------------------------------

gulp.task('css-min', function () {
    gulp.src([
            "bower_components/semantic-ui/dist/semantic.css",
            "bower_components/fullcalendar/dist/fullcalendar.css"
        ])
    .pipe(cssmin())
    .pipe($.concat("main.min.css"))
    .pipe(gulp.dest('Content/dist'));
});

//gulp.task("default",["connect","watch"]);
//gulp.task("default", ["js-layout", "css-min", "minify-html-showroom", "js-showroom"]);
//gulp.task("showroom", ["js-showroom"]);
gulp.task("vendor", ["move_bower_dist"]);