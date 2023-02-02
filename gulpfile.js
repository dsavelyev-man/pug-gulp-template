const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');

exports.views = () => {
    return src('./src/*.pug')
        .pipe(
            pug({
                // Your options in here.
            })
        )
        .pipe(dest('./dist'));
};

exports.default = (cb) => {
    watch("src/*.pug", exports.views)
    cb()
}