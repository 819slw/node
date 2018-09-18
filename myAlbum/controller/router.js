var file = require('../models/file');

exports.shouwIndex = function (req, res) {
  file.showAllAlbum((err, albums) => {
    res.render('index', {
      albums
    });
  });
};

exports.showImgPage = function (req, res) {
  // 拿到当前相册的名称 
  var albumName = req.params.albumName;
  console.log(albumName);
  file.showImg(albumName, (err, albumImg) => {
    res.render('showImg', {
      albumImg,
      albumName
    });
  })
}