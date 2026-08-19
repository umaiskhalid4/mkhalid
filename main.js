(function () {
  "use strict";

  // ---- footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- mobile nav toggle ----
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- scroll reveal ----
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- active nav link on scroll ----
  var navLinks = document.querySelectorAll(".primary-nav a[data-nav]");
  var sections = Array.prototype.map.call(navLinks, function (a) {
    var id = a.getAttribute("href").replace("#", "");
    return document.getElementById(id);
  }).filter(Boolean);

  function setActiveNav() {
    var scrollPos = window.scrollY + 120;
    var current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      a.classList.toggle("is-active", !!current && current.id === id);
    });
  }
  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();
})();
