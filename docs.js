var showDocuments = function(data) {
  var documents = data.d;
  for (var i in documents) {
    if (documents.hasOwnProperty(i)) {
      var d = documents[i];
      var item = $(document.createElement('div'))
        .addClass('item')
        .html('#' + d.AttachmentId + ' &mdash; ' + d.FileName + '<br/>(' + d.FileSize + ', ' + d.DateAdded + ')');
      $('#doc-list').append(item);
    }
  }
}

var initPage = function() {
  $.getJSON('./server/documents.php', showDocuments);
}

$(document).ready(initPage);
