var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css');
var cssWrap = require('gulp-css-wrap');

var customThemeName='.custom-theme'

gulp.task('css-wrap', function() {
  return new Promise(function(resolve, reject) {
     let result = gulp.src( path.resolve('./theme/index.css'))
    .pipe(cssWrap({selector:customThemeName}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
   resolve(result); 
  })
});

gulp.task('move-font', function() {
  return new Promise(function(resolve, reject) {
    let result  =  gulp.src(['./theme/fonts/**']).pipe(gulp.dest('dist/fonts'));
    resolve(result);
  })
});

gulp.task('default', gulp.series('css-wrap', 'move-font', (resolve) =>  {
  console.log("default")
  resolve()
}));
