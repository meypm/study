document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var headerInner = document.querySelector('.header-inner');

  if (!burger || !headerInner) return;

  burger.addEventListener('click', function () {
    headerInner.classList.toggle('nav-open');
  });
});
