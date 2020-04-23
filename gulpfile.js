const gulp          = require('gulp');
const concat        = require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');

//Порядок подключения css файлов
const cssFiles  = [
    './src/css/main.css',
    './src/css/media.css'
]
//Порядок подключения js файлов
const jsFiles  = [
    './src/js/lib.js',
    './src/js/main.js'
]

//Таск на стили CSS
function styles() {
    //Шаблон для поиска файлов CSS
    //Всей файлы по шаблону './scr/css/**/*.css'
    return gulp.src(cssFiles)
    //Объединение файлов в один
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 version'],
        cascade: false
    }))
    //Выходная папка для стилей
    .pipe(gulp.dest('./build/css'))
}

//Таск на скрипты
function scripts() {
    //Шаблон для поиска файлов JS
    //Всей файлы по шаблону './scr/js/**/*.js'
    return gulp.src(jsFiles)
    //Объединение файлов в один
    .pipe(concat('script.js'))
    //Выходная папка для стилей
    .pipe(gulp.dest('./build/js'))
}


//Таск вызываеющий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);