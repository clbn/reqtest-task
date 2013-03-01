// This function should be in the global scope for using in jQuery Templates
var getFileTypeByName = function(fileName) {
  if (fileName.match(/\.docx?$/)) { return 'word'; }
  if (fileName.match(/\.xlsx?$/)) { return 'excel'; }
  if (fileName.match(/\.pdf$/)) { return 'pdf'; }
  if (fileName.match(/\.txt$/)) { return 'text'; }
  if (fileName.match(/\.(png|gif|jpe?g)$/)) { return 'image'; }
  return 'default';
};

(function() {

  var docList = null;

  var showLoadedDocuments = function(data) {
    docList.removeClass('loading');
    $('#doc-item-template').tmpl(data).appendTo('#doc-list');
  }

  var showErrorMessage = function(jqXHR, textStatus, errorThrown) {
    docList.removeClass('loading')
      .addClass('error')
      .html('Can\'t load documents: ' + jqXHR.status + ' ' + errorThrown);
  }

  var loadDocuments = function() {
    $('button').remove();
    docList.addClass('loading');
    $.ajax({
      url: './server/documents.php',
      dataType: 'json'
    }).done(showLoadedDocuments)
      .fail(showErrorMessage);
  }

  $(document).ready(function() {
    docList = $('#doc-list');
    $('button').on('click', loadDocuments);
  });

})();
