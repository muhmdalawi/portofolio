const scriptURL =
                'https://script.google.com/macros/s/AKfycbyZPuKhiwX_JBCvzwOsYYX3RDq_WraRCego-h8HEncwVafnWn5ELmaaFS8WxxAXsfl9uQ/exec'
            const form = document.forms['submit-to-google-sheet'];
            const btnSubmit = document.querySelector('.btn-submit');
            const btnReset = document.querySelector('.btn-reset');
            const btnLoading = document.querySelector('.btn-loading');
            const MyAlert = document.querySelector('.my-alert');

            form.addEventListener('submit', e => {
                e.preventDefault()

                //ketika tombol submit diklik

                btnLoading.classList.toggle('d-none');
                btnSubmit.classList.toggle('d-none');
                btnReset.classList.toggle('d-none');

                fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form)
                    })
                    .then(response => {
                        btnLoading.classList.toggle('d-none');
                        btnSubmit.classList.toggle('d-none');
                        btnReset.classList.toggle('d-none');
                        MyAlert.classList.toggle('d-none');
                        //RESET
                        form.reset();
                        console.log('Success!', response)
                    })
                    .catch(error => console.error('Error!', error.message))
            })
  

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
  
  
