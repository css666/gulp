var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename  = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var date=new Date();
var year=date.getFullYear().toString(); //获取当前年份
var mon=(date.getMonth()+1).toString(); //获取当前月份
var da=date.getDate().toString(); //获取当前日
var h=date.getHours().toString(); //获取小时
var curTime=year+mon+da+h;
// var curTime='2017081411';
gulp.task('script', function() {
     gulp.src(['js/*.js'])  //这里如果是 有很多js文件 ['js/*.js']
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))  // 上面如果是 ['js/*.js'],要把所有的文件都添加.min.js后缀
    .pipe(gulp.dest('dist/js'));
})
gulp.task('css', function() {
     gulp.src(['css/*.css'])  //这里如果是 有很多js文件 ['js/*.js']
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))  // 上面如果是 ['js/*.js'],要把所有的文件都添加.min.js后缀
    .pipe(gulp.dest('dist/css'));
})


gulp.task('html',function(){
	var options = {
	collapseWhitespace:true,
	collapseBooleanAttributes:true,
	removeComments:true,
	removeEmptyAttributes:true,
	removeScriptTypeAttributes:true,
	removeStyleLinkTypeAttributes:true,
	minifyJS:true,
	minifyCSS:true
	};
	gulp.src(['html/*.cshtml'])
	.pipe(htmlmin(options))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/html')); 
});