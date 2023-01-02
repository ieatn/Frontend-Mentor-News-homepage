const navBtn = document.querySelector('.nav-btn')
const navClose = document.querySelector('.nav-close')

navBtn.addEventListener('click', () => {
  console.log('navBtn clicked');
  navBtn.classList.toggle('hidden');
  navClose.classList.toggle('hidden');
});

navClose.addEventListener('click', () => {
  console.log('navClose clicked');
  navClose.classList.toggle('hidden');
  navBtn.classList.toggle('hidden');
});
