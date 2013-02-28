var showLoadedDocuments = function(data) {
  $('#doc-list').removeClass('loading');
  var documents = data.d;
  for (var i in documents) {
    if (documents.hasOwnProperty(i)) {
      var d = documents[i];
      var url = './download.html?AttachmentId=' + encodeURIComponent(d.AttachmentId) + '&FileName=' + encodeURIComponent(d.FileName);
      var item = $(document.createElement('li'))
        .addClass('doc-item')
        .html(
          '<span class="doc-id">#' + d.AttachmentId + '</span> ' +
          '<a class="doc-name" href="' + url + '">' + d.FileName + '</a> ' +
          '<span class="doc-date">' + d.DateAdded + '</span> ' +
          '<span class="doc-size">' + d.FileSize + '</span>'
        );
      $('#doc-list').append(item);
    }
  }
}

var initPage = function() {
  $('#doc-list').addClass('loading');
  // setTimeout() here is for testing on slow connections only and should be removed in production
  setTimeout(function() {
    $.getJSON('./server/documents.php', showLoadedDocuments);
  }, 2000);
}

$(document).ready(initPage);
