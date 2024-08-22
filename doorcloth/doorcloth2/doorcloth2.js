var fileInput = document.getElementById('file');
var fileNameDisplay = document.querySelector('.upload-name');

fileInput.addEventListener('change', function () {
  var fileName = fileInput.files[0].name;
  fileNameDisplay.value = fileName;
});
