 const container = document.getElementById('sliderContainer');
  const pbImage = document.getElementById('pbImage');
  const sliderBar = document.getElementById('sliderBar');
  const handle = document.getElementById('handle');

  function updateSlider(x) {
    const bounds = container.getBoundingClientRect();
    let position = x - bounds.left;

    if (position < 0) position = 0;
    if (position > bounds.width) position = bounds.width;

    const percentage = (position / bounds.width) * 100;
    pbImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    sliderBar.style.left = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  container.addEventListener('mousedown', startDrag);
  container.addEventListener('touchstart', startDrag);

  function startDrag(e) {
    e.preventDefault();
    const move = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    updateSlider(move);

    function onMove(e) {
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    }

    function onStop() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onStop);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onStop);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onStop);
  }