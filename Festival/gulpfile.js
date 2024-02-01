const {src, dest, watch, parallel} = require("gulp");
const sass = require('gulp-sass') (require("sass"));
const plumber= require('gulp-plumber');

function css(done){

    src('src/scss/**/*.scss')// identifica el archivo sass
    .pipe(plumber())
    .pipe(sass()) // aplica sass, compila
    .pipe( dest("build/css")) // lo guarda en el disco duro 

    .on('end', done);// callback que avisa a gulp cuando llega al final
}

function javascript(done){
    src('src/js/**/*.js')
    .pipe (dest('build/js'));
}

function dev(done){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript);

    done();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel (dev, javascript);
