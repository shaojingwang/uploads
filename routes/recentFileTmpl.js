/*
  Generate the template of one item for recent file list
  Exports to ./routes/index.js
*/

function recentFileTmpl( ip, url, time ) {
  var tmpl = '<span class="recent-item clearfix">\
                <b class="recent-ip recentIp">'+ ip +'</b>\
                <a class="recent-url recentUrl" href="'+ url +'" target="_blank">'+ url +'</a>\
                <s class="recent-time recentTime">'+ time +'</s>\
              </span>';
  return tmpl;
};

exports.template = recentFileTmpl;
