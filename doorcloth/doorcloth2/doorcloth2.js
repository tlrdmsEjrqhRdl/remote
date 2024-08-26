var fileInput = document.getElementById('file');
var fileNameDisplay = document.querySelector('.upload-name');

fileInput.addEventListener('change', () => {
  var fileName = fileInput.files[0].name;
  fileNameDisplay.value = fileName;
});

function checkOnlyOne(element) {
  const checkboxes = document.getElementsByName('gubunchoice');

  checkboxes.forEach((cb) => {
    cb.checked = false;
  });

  element.checked = true;
}
