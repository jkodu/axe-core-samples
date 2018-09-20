const gulp = require('gulp')
const markdown = require('gulp-markdown')
const rename = require('gulp-rename')

gulp.task('index', () => {
  gulp.src('README.md')
    .pipe(markdown())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('docs'))
})

gulp.task('default', ['index'], () =>
  gulp.src(['node_modules/axe-core/axe.js', 'src/*.*'])
    .pipe(gulp.dest('docs/'))
)