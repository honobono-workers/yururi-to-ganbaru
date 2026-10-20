(() => {
  const filters = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.sticker-card');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      filters.forEach(other => {
        const active = other === button;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      cards.forEach(card => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
      });
    });
  });
  document.querySelectorAll('img[data-fallback]').forEach(image => {
    image.addEventListener('error', () => {
      const fallback = image.dataset.fallback;
      if (fallback && !image.src.endsWith(fallback)) image.src = fallback;
    });
  });
})();
