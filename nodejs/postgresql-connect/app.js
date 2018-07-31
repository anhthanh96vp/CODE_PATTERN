import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

const app = express();



// CẤU HÌNH EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// CẤU HÌNH STATIC 2 KIỂU VIẾT
app.use(express.static(path.join(__dirname, 'public')));
// app.use("/static", express.static(__dirname + "/public"))



/* 
  //    MIDDELEWARE VIEW DEFAULT
  app.use('/', indexRouter);
  */
//  app.use('/users', usersRouter);

//MIDDELEWARE VIEW SỬA LẠI CHO GỌN
// Import thư mục router rồi Include router index
const routers = require(__dirname + "/routers")
app.use(routers)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
