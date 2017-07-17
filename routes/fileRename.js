/*
  Rename file for Qiniu & AWS uploads.
  Exports to ./routes/index.js
*/


function rename( filename ) {
  var name = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var length = 4;
  for(var i = 0; i < length; i++){
    name += possible.charAt( Math.floor(Math.random() * possible.length) );
  }
  var timestamp = new Date().getTime();
  name = timestamp + '_' + name + '_' + filename;
  return name;
};


exports.FileRename = rename;
