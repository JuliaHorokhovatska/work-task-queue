const gulp = require('gulp');
const purify = require('gulp-purifycss');
const svgSprite = require('gulp-svg-sprite');

gulp.task('purifyCSS', () => {
  return gulp.src('./dist/frontend/browser/styles.*.css')
    .pipe(
      purify(
        ['./src/app/**/*.ts', './src/app/**/*.html'],
        {
          info: true, // Outputs reduction information
          minify: true, // Minifies the files after reduction
          rejected: false, // Logs the CSS rules that were removed
          whitelist: ['*transition*', '*dimmer*'] // Ignored css classes
        }
      ),
    )
    .pipe(gulp.dest('./dist/frontend/browser/'));
});

const config = {
  mode: {
    symbol: {
      inline: true,
      sprite: 'sprites.svg'
    }
  }
};

gulp.task('svgSprite', function () {
  return gulp.src(['src/assets/icons/*.svg']) // Path to your SVG icons
    .pipe(svgSprite(config))
    .pipe(gulp.dest('public/assets/')); // Output path for the sprite
});

