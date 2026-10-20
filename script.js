(() => {
  const filters = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.sticker-card');
  const trackEvent = (name, params) => {
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
  };
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
      trackEvent('sticker_category_filter', { sticker_series: category });
    });
  });

  // Tracks the five currently linked sticker products separately.
  // The same handler will cover newly published products once their links are added.
  document.querySelectorAll('.sticker-card .card-cta').forEach(link => {
    link.addEventListener('click', () => {
      const card = link.closest('.sticker-card');
      const title = (card?.querySelector('h3')?.textContent || '').replace(/\s+/g, ' ').trim();
      const idMatch = new URL(link.href).pathname.match(/\/product\/(\d+)\//);
      trackEvent('sticker_store_click', {
        sticker_id: idMatch ? idMatch[1] : '',
        sticker_name: title,
        sticker_series: card?.dataset.category || 'other',
        link_url: link.href
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
