const { task, src } = require("gulp");
const jsdoc = require("gulp-jsdoc3");

task("doc", function (cb) {
  //src(["README.md", "./module/**/*.js"], { read: false }).pipe(jsdoc(cb));
  src(["README.md", "./module/*.js"], { read: false }).pipe(jsdoc(cb));
});
