//  PRODUCT PAGE - image gallery thumbnail switcher


document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs  = document.querySelectorAll('.gallery-thumb');

  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Fade swap
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = thumb.dataset.src;
        mainImg.style.opacity = '1';
      }, 200);

      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});
