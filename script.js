document.getElementById('file-upload-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fileInput = document.getElementById('file-input');
  if (!fileInput.value) {
    alert("Please choose a file to upload");
  }
  else {
    const file = fileInput.files[0];
  
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/upload', true);
    xhr.send(formData);
  }
});
