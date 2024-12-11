document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');
  const preloaderSeen = localStorage.getItem('preloaderSeen');

  if (!preloaderSeen) {
    preloader.style.opacity = 1;
    localStorage.setItem('preloaderSeen', 'true');

    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 800); // Match this with the transition duration
      }, 1500); // Preloader duration
    });
  } else {
    preloader.style.display = 'none';
  }
});
/*===== Preload =====*/

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// SCROLL REVEAL ANIMATION
ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 90,
  delay: 9,
}).reveal(`
  .home__data, .about__img, .skills__subtitle, .skills__text,
  .home__img, .about__subtitle, .about__text, .skills__img,
  .home__social-icon, .skills__data, .contact__input
`, {
  interval: 9,
  delay: el => el.classList.contains('home__img') || el.classList.contains('about__subtitle') || el.classList.contains('about__text') || el.classList.contains('skills__img') ? 300 : 0,
  reset: false
});


/*==================== Lazy load images ====================*/
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => observer.observe(img));
});

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}
/*==================== Lazy load images ====================*/

/*==================== Google Analytics ====================*/
// Example: Load Google Analytics script asynchronously
loadScript(
  "https://www.googletagmanager.com/gtag/js?id=G-3MLPC8S1ZV",
  function () {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-3MLPC8S1ZV");
  }
);

/*==================== Google Tag Manager ====================*/
// Asynchronously load Google Tag Manager script
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-NJCR78XS");

/*==================== load Hotjar Analytics ====================*/
// Asynchronously load Hotjar Analytics script
(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = {
    hjid: 4988883,
    hjsv: 6,
  };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

/*==================== Linkedin Tag Manager ====================*/
// Linkedin Tag Manager

(function () {
  // Create a script element
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";

  // Insert the script tag into the document
  var firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  // Add the LinkedIn Insight tag script
  var _linkedin_partner_id = "6238212";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
})();


/*==================== typed ====================*/

// ========================================================================= //
//  Typed Js
// ========================================================================= //

// JavaScript (using vanilla JS)
document.addEventListener('DOMContentLoaded', function () {
  const options = {
    strings: [
      'BTC',
      'ETH',
      'XRP',
      'SOL',
      'DOGE',
      'TRX',
      'XLM'
    ],
    typeSpeed: 50, // Typing speed in milliseconds
    backSpeed: 30, // Backspacing speed in milliseconds
    backDelay: 1500, // Time before backspacing
    startDelay: 500, // Time before typing starts
    loop: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    smartBackspace: true // Only backspace what doesn't match next string
  };

  // Initialize Typed
  const typed = new Typed('#typed-text', options);
});

// Alternative version if you prefer using jQuery
/* 
$(document).ready(function() {
  new Typed('#typed-text', {
    strings: [
      'IT Product Designer',
      'UI UX Designer',
      'FrontEnd Developer',
      'Entrepreneur',
      'Collaborative Partner',
      'Team Worker'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    smartBackspace: true
  });
}); 
*/

/*==================== typed ====================*/


/*==================== PopUp ====================*/
document.getElementById('videoButton').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('youtubeVideo').src = "https://www.youtube.com/embed/gCh_dHHKhOI"; // Replace VIDEO_ID with your YouTube video ID
  document.getElementById('videoPopup').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function () {
  document.getElementById('videoPopup').style.display = 'none';
  document.getElementById('youtubeVideo').src = ""; // Stop the video
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('videoPopup')) {
    document.getElementById('videoPopup').style.display = 'none';
    document.getElementById('youtubeVideo').src = ""; // Stop the video
  }
});

/*==================== PopUp ====================*/