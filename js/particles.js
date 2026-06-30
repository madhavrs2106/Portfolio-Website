/* ===================================================
   PARTICLES.JS CONFIGURATION
   Subtle floating dots in the hero background, tuned to
   the portfolio's primary color (#38BDF8).
=================================================== */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof particlesJS === 'undefined') return;

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 900 }
      },
      color: { value: '#38BDF8' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.35,
        random: true,
        anim: { enable: true, speed: 0.4, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 2.5,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#3B82F6',
        opacity: 0.18,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: false },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.4 } }
      }
    },
    retina_detect: true
  });
});
