var showLoadedDocuments = function(data) {
  var documents = data.d;
  for (var i in documents) {
    if (documents.hasOwnProperty(i)) {
      var d = documents[i];
      var url = './download.html?AttachmentId=' + encodeURIComponent(d.AttachmentId) + '&FileName=' + encodeURIComponent(d.FileName);
      var item = $(document.createElement('div'))
        .addClass('item')
        .html('#' + d.AttachmentId + ' &mdash; <a href="' + url + '">' + d.FileName + '</a><br/>(' + d.FileSize + ', ' + d.DateAdded + ')');
      $('#doc-list').append(item);
    }
  }
}

var initPage = function() {
  $.getJSON('./server/documents.php', showLoadedDocuments);
}

$(document).ready(initPage);
