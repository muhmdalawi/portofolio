const scriptURL = 'https://script.google.com/macros/s/AKfycbyZPuKhiwX_JBCvzwOsYYX3RDq_WraRCego-h8HEncwVafnWn5ELmaaFS8WxxAXsfl9uQ/exec';
const form = document.forms['submit-to-google-sheet'];
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const messageDisplay = document.getElementById('messageDisplay');
const messagesList = document.getElementById('messagesList');

form.addEventListener('submit', e => {
  e.preventDefault();

  btnLoading.classList.remove('hidden');
  btnSubmit.classList.add('hidden');

  const formData = new FormData(form);
  const nama = formData.get('nama');
  const pesan = formData.get('pesan');
  const initial = nama.charAt(0).toUpperCase();

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(() => {
      btnLoading.classList.add('hidden');
      btnSubmit.classList.remove('hidden');
      myAlert.classList.remove('hidden');

      const msg = document.createElement('div');
      msg.classList.add('message-item', 'animate-in');
      msg.innerHTML = `
        <div class="avatar">${initial}</div>
        <div class="message-content">
          <strong>${nama}</strong><br>
          ${pesan}
        </div>
      `;
      messagesList.prepend(msg);
      messagesList.scrollTop = 0;

      form.reset();

      setTimeout(() => {
        myAlert.classList.add('hidden');
      }, 4000);
    })
    .catch(error => {
      btnLoading.classList.add('hidden');
      btnSubmit.classList.remove('hidden');
      console.error('Error!', error.message);
      alert("Terjadi kesalahan saat mengirim.");
    });
});

function loadMessages() {
  fetch('https://opensheet.elk.sh/1jTUtebQ1X-NmhTvmNo5XpNOVhyAKWDGqXu91KSz2ca4/Sheet1')
    .then(res => res.json())
    .then(data => {
      messagesList.innerHTML = '';

      if (data.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent = 'Tidak ada pesan.';
        emptyMsg.style.opacity = '0.6';
        emptyMsg.style.fontStyle = 'italic';
        messagesList.appendChild(emptyMsg);
        return;
      }

      data.reverse().slice(0, 5).forEach(entry => {
        const initial = entry.nama?.charAt(0)?.toUpperCase() || '?';
        const msg = document.createElement('div');
        msg.classList.add('message-item');
        msg.innerHTML = `
          <div class="avatar">${initial}</div>
          <div class="message-content">
            <strong>${entry.nama}</strong><br>
            ${entry.pesan}
          </div>
        `;
        messagesList.appendChild(msg);
      });
    })
    .catch(err => {
      console.error('Gagal memuat pesan:', err);
      messagesList.innerHTML = '<p style="opacity: 0.6; font-style: italic;">Gagal memuat pesan.</p>';
    });
}

document.addEventListener("DOMContentLoaded", loadMessages);




function openModal(imageSrc, description) {
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalDesc').textContent = description;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

