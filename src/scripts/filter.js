//  INDEX PAGE: Controls tag filter behaviour


document.addEventListener('DOMContentLoaded', () => {
  const btns   = document.querySelectorAll('.filter-btn');
  const cards  = document.querySelectorAll('.card');
  const footer = document.getElementById('product-count');

  function updateCount(visible) {
    if (!footer) return;
    footer.textContent = `${visible} of ${cards.length} product${cards.length !== 1 ? 's' : ''}`;
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;

      // Update active button
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show or hide cards
      let visible = 0;
      cards.forEach(card => {
        const tags = card.dataset.tags.split(',');
        const show = tag === 'all' || tags.includes(tag);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      updateCount(visible);
    });
  });

  // Set initial count
  updateCount(cards.length);
});
