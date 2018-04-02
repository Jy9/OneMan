//query
var app = getApp();
var URL = app.globalData.URL;
//var URL = "http://localhost:3000/"
var query = function (obj) {
  wx.request({
      url: URL + obj.url,
    method: "POST",
    data: obj.data,
    success: obj.success
  })
}
var uploadImg = function (obj) {
    wx.uploadFile({
        url: URL+'upload/image',
        filePath: obj.path,
        name: 'image',
        success: obj.success
    })
}

module.exports = {
    uploadImg: uploadImg,
    query:query
};