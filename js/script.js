document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const scriptURL = "https://script.google.com/macros/s/AKfycbzdsmPRu-J5eMje_FTGNCLv6kb1meN6T9B6jUdmOJJVD3M6lta0cxfdBRdDKF3VUB7l/exec";
  
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    
        fetch(scriptURL, {
          method: "POST",
          body: new FormData(form)
        })
        .then(() => {
          alert("Terima kasih! Pesan Anda telah dikirim.");
          form.reset();
        })
        .catch((error) => {
          console.error("Error!", error.message);
          alert("Terjadi kesalahan. Coba lagi nanti.");
        });
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
  
  