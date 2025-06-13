const scriptURL = 'https://script.google.com/macros/s/AKfycbyZPuKhiwX_JBCvzwOsYYX3RDq_WraRCego-h8HEncwVafnWn5ELmaaFS8WxxAXsfl9uQ/exec';

const form = document.forms['submit-to-google-sheet'];
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault();

  btnLoading.classList.remove('hidden');
  btnSubmit.classList.add('hidden');

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    btnLoading.classList.add('hidden');
    btnSubmit.classList.remove('hidden');
    myAlert.classList.remove('hidden');
    form.reset();

    setTimeout(() => {
      myAlert.classList.add('hidden');
    }, 5000);
  })
  .catch(error => {
    btnLoading.classList.add('hidden');
    btnSubmit.classList.remove('hidden');
    console.error('Error!', error.message);
  });
});

  

  function openModal(imageSrc, description) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalDesc').textContent = description;
    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }
  
  