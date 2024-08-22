function updateFileName() {
  const fileInput = document.getElementById('file');
  const fileNameInput = document.getElementById('file-name');
  const file = fileInput.files[0];
  if (file) {
    fileNameInput.value = file.name;
  } else {
    fileNameInput.value = '첨부파일';
  }
}
