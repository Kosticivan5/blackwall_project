const toggleBtn = document.querySelector('.toggle-btn');
const links = document.querySelector('.links');
const container = document.querySelector('.links-container');
const btns = document.querySelector('.buttons');
const img = document.querySelector('.main-img');

toggleBtn.addEventListener('click', () => {
  let linksHeight = links.getBoundingClientRect().height;
  let containerHeight = container.getBoundingClientRect().height;
  let buttonsHeight = btns.getBoundingClientRect().height;
  const height = (linksHeight += buttonsHeight);
  if (containerHeight === 0) {
    container.style.height = `${height}px`;
  } else {
    container.style.height = 0;
  }
});
