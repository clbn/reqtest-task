var showLoadedDocuments = function(data) {
  var docList = $('#doc-list');
  docList.removeClass('loading');
  $.each(data, function(i, doc) {
    var url = './download.html?AttachmentId=' + encodeURIComponent(doc.AttachmentId) + '&FileName=' + encodeURIComponent(doc.FileName);
    var docItem = $(document.createElement('li'))
      .addClass('doc-item')
      .html(
        '<span class="doc-id">#' + doc.AttachmentId + '</span> ' +
        '<a class="doc-name" href="' + url + '">' + doc.FileName + '</a> ' +
        '<span class="doc-date">' + doc.DateAdded + '</span> ' +
        '<span class="doc-size">' + doc.FileSize + '</span>'
      );
    docList.append(docItem);
  });
}

var showErrorMessage = function(jqXHR, textStatus, errorThrown) {
  $('#doc-list')
    .removeClass('loading')
    .addClass('error')
    .html('Can\'t load documents: ' + jqXHR.status + ' ' + errorThrown);
}

var loadDocuments = function() {
  $('button').remove();
  $('#doc-list').addClass('loading');
  // setTimeout() here is for testing slow connections only and should be removed in production
  setTimeout(function() {
    $.ajax({
      url: './server/documents.php',
      dataType: 'json'
    }).done(showLoadedDocuments)
      .fail(showErrorMessage);
  }, 2000);
}

$(document).ready(function() {
  $('button').on('click', loadDocuments);
});
