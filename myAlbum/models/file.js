//读取uploads文件夹下面的有多少个文件
const fs = require('fs');
exports.showAllAlbum = function (callback) {
  fs.readdir('./uploads', (err, files) => {
    if (err) {
      callback(err, null);
      return;
    }
    var arr = [];
    (function iterator(i) {
      if (i >= files.length) {
        callback(null, arr);
        return;
      } else {

      }
      fs.stat('./uploads/' + files[i], (err, stats) => {
        if (err) {
          callback(err, null);
          return;
        }
        // 判断是否为文件夹
        if (stats) {
          arr.push(files[i]);
        }
        iterator(++i);
      })
    })(0)
  })
}

exports.showImg = function (albumName, callback) {
  fs.readdir('./uploads/' + albumName, (err, files) => {
    if (err) {
      callback('文件读取失败', null);
      return;
    }
    var arr = [];
    (function iterator1(i) {
      if (i >= files.length) {
        callback(null, arr);
        return;
      }
      fs.stat('./uploads/' + albumName + '/' + files[i], (err, stats) => {
        if (err) {
          callback('获取图片失败', null);
          return;
        }
        // 判断是否为文件
        if (stats.isFile()) {
          let url = '/uploads/' + albumName + '/' + files[i];
          arr.push(url);
        }
        iterator1(++i);
      })
    })(0)
  })
}