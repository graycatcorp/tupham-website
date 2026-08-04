/* Tupham AI — shared site behaviors (progressive enhancement) */
(function () {
  'use strict';
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('nav');
    var progress = document.getElementById('progress');
    var ticking = false;

    function onScroll() {
      var y = window.scrollY || 0;
      if (nav) nav.classList.toggle('solid', y > 24);
      if (progress) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = 'scaleX(' + (h > 0 ? Math.min(y / h, 1) : 0) + ')';
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    /* Mobile menu */
    var burger = document.getElementById('burger');
    var mob = document.getElementById('mobnav');
    if (burger && mob) {
      var toggle = function (open) {
        burger.classList.toggle('on', open);
        mob.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        mob.setAttribute('aria-hidden', open ? 'false' : 'true');
        mob.toggleAttribute('inert', !open);
      };
      mob.setAttribute('aria-hidden', 'true');
      mob.setAttribute('inert', '');
      burger.addEventListener('click', function () { toggle(!mob.classList.contains('open')); });
      mob.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { toggle(false); });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mob.classList.contains('open')) {
          toggle(false);
          burger.focus();
        }
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 1000 && mob.classList.contains('open')) toggle(false);
      });
    }

    /* Reveal on scroll */
    var reveal = document.querySelectorAll('[data-reveal],[data-reveal-stagger]');
    if ('IntersectionObserver' in window && !rm) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveal.forEach(function (el) { io.observe(el); });
    } else {
      reveal.forEach(function (el) { el.classList.add('in'); });
    }

    /* Animated counters */
    var counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window && counters.length) {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { run(e.target); co.unobserve(e.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { co.observe(el); });
    }
    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      if (rm) { el.textContent = prefix + fmt(target, dec) + suffix; return; }
      var dur = 1700, start = performance.now();
      (function tick(now) {
        var p = Math.min((now - start) / dur, 1);
        var v = (1 - Math.pow(1 - p, 3)) * target;
        el.textContent = prefix + fmt(v, dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + fmt(target, dec) + suffix;
      })(start);
    }
    function fmt(n, dec) {
      return n.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    }

    /* FAQ accordion */
    document.querySelectorAll('.faq-q').forEach(function (btn, index) {
      var answer = btn.closest('.faq-item').querySelector('.faq-a');
      if (answer) {
        answer.id = answer.id || 'faq-answer-' + (index + 1);
        btn.setAttribute('aria-controls', answer.id);
        btn.setAttribute('aria-expanded', 'false');
      }
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var open = item.classList.contains('open');
        var ans = item.querySelector('.faq-a');
        if (open) {
          item.classList.remove('open');
          ans.style.maxHeight = null;
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          ans.style.maxHeight = ans.querySelector('.faq-a-inner').scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
    window.addEventListener('resize', function () {
      document.querySelectorAll('.faq-item.open .faq-a').forEach(function (ans) {
        var inner = ans.querySelector('.faq-a-inner');
        if (inner) ans.style.maxHeight = inner.scrollHeight + 'px';
      });
    }, { passive: true });

    /* Smooth anchor scroll */
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var t = document.querySelector(a.getAttribute('href'));
        if (t) {
          e.preventDefault();
          window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: rm ? 'auto' : 'smooth' });
        }
      });
    });

    /* Year stamp */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
