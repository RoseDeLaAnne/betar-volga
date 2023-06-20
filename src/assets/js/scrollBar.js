const container = document.querySelector('.scroll-container');
const content = document.querySelector('.scroll-x-content');
const scrollbar = document.querySelector('.scrollbar-x');
const thumb = document.querySelector('.thumb-x');

thumb.addEventListener('mousedown', function (event) {
  const startX = event.clientX;
  const startScrollLeft = content.scrollLeft;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    const deltaX = event.clientX - startX;
    const scrollPercentage = deltaX / container.offsetWidth;
    content.scrollLeft = startScrollLeft + scrollPercentage * content.scrollWidth;
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});

content.addEventListener('scroll', function () {
  const scrollPercentage = content.scrollLeft / content.scrollWidth;
  const thumbPosition = scrollPercentage * scrollbar.offsetWidth;
  thumb.style.left = thumbPosition + 'px';
});
