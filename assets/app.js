const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menu?.setAttribute('aria-expanded','false');
}));
const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } }), {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.querySelectorAll('a.disabled').forEach(a => a.addEventListener('click', e => e.preventDefault()));
