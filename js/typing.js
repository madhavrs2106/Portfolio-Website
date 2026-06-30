/* ===================================================
   TYPED.JS — Hero role animation
=================================================== */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Typed === 'undefined') return;

  new Typed('#typed-role', {
    strings: [
      'Data Analyst',
      'Machine Learning Enthusiast',
      'Front-End Developer'
    ],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1600,
    startDelay: 400,
    loop: true,
    showCursor: true
  });
});
