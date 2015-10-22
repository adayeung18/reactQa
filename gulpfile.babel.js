/**
 * Created by zhangfan on 15/10/3.
 */
import gulp from "gulp";
import connect from "gulp-connect";
import browserify from "gulp-browserify";
import concat from "gulp-concat";
import gulpBabel from "gulp-babel";
import reactify from "reactify";

const port = process.env.port || 5000;
function handleError(err){
    console.error(err.toString());
    this.emit("end");
}
gulp.task("babel", () =>
    gulp.src("./src/js/**/*.js")
        .pipe(gulpBabel())
        .on("error", handleError)
        .pipe(gulp.dest("./temp"))
);
gulp.task("browserify", ["babel"], () =>{
    gulp.src("./temp/main.js")
        .pipe(browserify({
            transform: reactify,
            debug: false
        }))
        .on("error", handleError)
        .pipe(gulp.dest("./dist/js"))
});
gulp.task("connect", () => {
    connect.server({
        root: [__dirname],
        port: port,
        livereload: true
    })
});
gulp.task("js", () => {
    gulp.src("./dist/**/*.js")
        .pipe(connect.reload())
});
gulp.task("html", () => {
    gulp.src("./src/**/*.html")
        .pipe(connect.reload())
});
gulp.task("watch", () => {
    gulp.watch("./dist/**/*.js", ["js"]);
    gulp.watch("./src/*.html", ["html"]);
    gulp.watch("./src/**/*.js", ["browserify"]);
});
gulp.task("default", ["browserify"]);
gulp.task("server", ["browserify", "connect", "watch"]);