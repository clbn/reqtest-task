var getFileTypeByName = function(fileName) {
  if (fileName.match(/\.docx?$/)) { return 'word'; }
  if (fileName.match(/\.xlsx?$/)) { return 'excel'; }
  if (fileName.match(/\.pdf$/)) { return 'pdf'; }
  if (fileName.match(/\.txt$/)) { return 'text'; }
  if (fileName.match(/\.(png|gif|jpe?g)$/)) { return 'image'; }
  return 'default';
}

var getDocItem = function(file) {
  var url = './download.html?AttachmentId=' + encodeURIComponent(file.AttachmentId) + '&FileName=' + encodeURIComponent(file.FileName);
  return $(document.createElement('li'))
    .addClass('doc-item')
    .addClass('type-' + getFileTypeByName(file.FileName))
    .html(
      '<a href="' + url + '">' +
        '<span class="doc-id">#' + file.AttachmentId + '</span> ' +
        '<span class="doc-name">' + file.FileName + '</span> ' +
        '<span class="doc-date">' + file.DateAdded + '</span> ' +
        '<span class="doc-size">' + file.FileSize + '</span>' +
        '</a>'
    );
}

var showLoadedDocuments = function(data) {
  var docList = $('#doc-list');
  docList.removeClass('loading');
  $.each(data, function(i, file) {
    var docItem = getDocItem(file);
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
