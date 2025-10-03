const form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  });

  xhr.addEventListener('load', () => {
    if (xhr.status === 200 || xhr.status === 201) {
      progress.value = 1.0;
    }
  });

  xhr.send(formData);
});
