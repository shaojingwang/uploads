/*
  Generate uptoken for Qiniu upload.
  Exports to ./routes/index.js
*/

var qiniu = require('qiniu');

function uptoken(bucketname) {
  var putPolicy = new qiniu.rs.PutPolicy(bucketname);
  return putPolicy.token();
}

exports.Uptoken = uptoken;
