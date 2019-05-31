var file = require('../models/file');
//上传图片时使用的
var formidable = require('formidable');
var fs = require('fs');
exports.shouwIndex = function (req, res, next) {
  file.showAllAlbum((err, albums) => {
    if (err) {
      next();
      return;
    }
    res.render('index', {
      albums
    });
  });
};

exports.showImgPage = function (req, res, next) {
  // 拿到当前相册的名称 
  var albumName = req.params.showImg;
  if (albumName != 'favicon.ico') {
    file.showImg(albumName, (err, albumImg) => {
      if (err) {
        next();
        return;
      }
      res.render('showImg', {
        albumImg,
        albumName
      });
    })
  }
}

exports.uploadsImg = function (req, res, next) {
  file.showAllAlbum((err, albums) => {
    if (err) {
      next();
      return;
    }
    res.render('uploadsImg', {
      albums
    });
  });
}

// 处理图片上传
exports.doupload = function (req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = "./uploads" //上传的地址
  console.log('dasdasdas');
  form.parse(req, function (err, fields, files) {
    var oldpath = files.img.path;
    var newpath = form.uploadDir + '/' + fields.fileName + '/' + files.img.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) {
        res.send('改名失败');
      } else {
        fs.unlink(oldpath, function (err) {
          if (!err) console.log('删除成功');
          res.send('上传成功');
        })
      }
    });
  });

}