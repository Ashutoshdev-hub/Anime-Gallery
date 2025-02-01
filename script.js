function filterGallery(category) {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        const isVisible = category === 'all' || photo.classList.contains(category);
        photo.style.display = isVisible ? '' : 'none';
    });
  }
  
  document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('img01');
        const captionText = document.getElementById('caption');
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    });
  });
  
  const closeButton = document.querySelector('.close');
  closeButton.onclick = function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('myModal');
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    }
  });
  