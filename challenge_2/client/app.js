$("#ajaxUploadText").on('submit', function (evt) {
  evt.preventDefault();
  $.ajax({
    url: '/upload_text_ajax',
    type: 'POST',
    data: $("#ajaxText").val(),
    contentType: 'application/json',
    success: function (data) {
      var blob = new Blob([data]);
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "converted.csv";
      link.click();
    }
  });
  return false;
});

$("#ajaxUploadFile").on('submit', function (evt) {
  evt.preventDefault();
  var form = $("#ajaxUploadFile")[0];
  var formData = new FormData(form);
  $.ajax({
    url: '/upload_file_ajax',
    type: 'POST',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    success: function (data) {
      console.log('file uploaded')
      var blob = new Blob([data]);
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "converted.csv";
      link.click();
    }
  });
  return false;
});
