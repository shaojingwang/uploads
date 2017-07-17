/*
  Browser client javascript for clearing files of the recent list.
  Also empty the recent.txt file!
*/

function clearRecentFiles( itemsCls, callback ) {
  $.ajax({
    url: '/clearRecentFiles',
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    timeout: 3000,
    success: function( data ) {
      if( data.code != 0 ){
        $("." + itemsCls).remove();
        callback();
      }
    },
    error: function(r) {}
  });
};
