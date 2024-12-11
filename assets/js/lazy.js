// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => {
  res.send('A simple Node App is ' +
    'running on this server')
  res.end()
})

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));


/*==================== Lazy load images ====================*/
document.addEventListener("DOMContentLoaded", () => {
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

  document.querySelectorAll("img.lazy").forEach(img => observer.observe(img));
});

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}
/*==================== Lazy load images ====================*/


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
/*==================== Lazy load images ====================*/


/*==================== Lazy Again ====================*/
(function ($) {
  $.fn.lazyload = function (options) {
    var settings = $.extend({
      threshold: 0,
      event: "scroll",
      effect: "show",
      container: window,
    }, options);

    var elements = this;

    if (settings.event === "scroll") {
      $(settings.container).on("scroll", function () {
        elements.each(function () {
          if ($.belowthefold(this, settings) || $.rightoffold(this, settings)) return;
          $(this).trigger("appear");
        });
        elements = $(elements).filter(function () {
          return !this.loaded;
        });
      });
    }

    this.each(function () {
      var element = this;
      $(element).attr("data-original", $(element).attr("src") || settings.placeholder).attr("src", settings.placeholder);
      element.loaded = false;
      $(element).one("appear", function () {
        if (!this.loaded) {
          $("<img />").on("load", function () {
            $(element).hide().attr("src", $(element).data("original"))[settings.effect](settings.effectspeed);
            element.loaded = true;
          }).attr("src", $(element).data("original"));
        }
      });
      if (settings.event !== "scroll") $(element).on(settings.event, function () {
        if (!element.loaded) $(element).trigger("appear");
      });
    });

    $(settings.container).trigger(settings.event);
    return this;
  };

  $.belowthefold = function (element, settings) {
    return ($(settings.container).height() + $(settings.container).scrollTop()) <= $(element).offset().top - settings.threshold;
  };

  $.rightoffold = function (element, settings) {
    return ($(settings.container).width() + $(settings.container).scrollLeft()) <= $(element).offset().left - settings.threshold;
  };

})(jQuery);

$(function () {
  $("img.lazy").lazyload({
    effect: "fadeIn",
    threshold: -50
  });
});
/*==================== Lazy Again ====================*/

/*==================== Lazy Tambah ====================*/

document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazyload");
          lazyImage.classList.add("lazyloaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    lazyImages.forEach(function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazyload");
      lazyImage.classList.add("lazyloaded");
    });
  }
});


/*==================== Lazy Tambah ====================*/


document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazyload");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    lazyImages.forEach(function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazyload");
    });
  }
});


/*==================== Lazy Tambah ====================*/

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('img[data-src]');
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        loadOptimizedImage(img);
        observer.unobserve(img);
      }
    });
  }, observerOptions);

  images.forEach(image => {
    observer.observe(image);
  });
});

function loadOptimizedImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) return;

  const imgLoader = new Image();
  imgLoader.src = src;
  imgLoader.onload = () => {
    img.src = src;
    img.classList.add('loaded');
    img.removeAttribute('data-src');
  };
}

/*==================== Lazy Tambah ====================*/

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll('img.lazy');

  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    rootMargin: "0px 0px 50px 0px"
  });

  lazyImages.forEach(img => {
    observer.observe(img);
  });
});

/*==================== Lazy Tambah ====================*/


/*==================== Lazy fast ====================*/

// Performance Optimization Script
(function () {
  // Lazy loading for images
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      let imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove('lazy');
            imageObserver.unobserve(image);
          }
        });
      }, {
        rootMargin: "0px 0px 50px 0px"
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      let active = false;

      const lazyLoad = () => {
        if (active === false) {
          active = true;

          setTimeout(() => {
            lazyImages.forEach(img => {
              if ((img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0) && getComputedStyle(img).display !== "none") {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
            });

            active = false;
          }, 200);
        }
      };

      document.addEventListener("scroll", lazyLoad);
      window.addEventListener("resize", lazyLoad);
      window.addEventListener("orientationchange", lazyLoad);
    }
  }

  // Preload critical resources
  function preloadCriticalResources() {
    const criticalStyles = [
      '/css/critical.css',
      '/css/main.css'
    ];

    const criticalScripts = [
      '/js/vendor.js',
      '/js/main.js'
    ];

    // Preload CSS
    criticalStyles.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    // Preload Scripts
    criticalScripts.forEach(src => {
      const script = document.createElement('link');
      script.rel = 'preload';
      script.as = 'script';
      script.href = src;
      document.head.appendChild(script);
    });
  }

  // Optimize font loading
  function optimizeFontLoading() {
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Your+Primary+Font&display=swap'
    ];

    fonts.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
    });
  }

  // Performance monitoring
  function initPerformanceMonitoring() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;

        // Log performance metrics (you can replace with your analytics solution)
        console.log(`Page load time: ${loadTime}ms`);

        // Optional: Send to analytics service
        if (window.ga) {
          ga('send', 'timing', {
            'timingCategory': 'Page Load',
            'timingVar': 'load',
            'timingValue': loadTime
          });
        }
      });
    }
  }

  // Initialize all optimization techniques
  function init() {
    initLazyLoading();
    preloadCriticalResources();
    optimizeFontLoading();
    initPerformanceMonitoring();
  }

  // Run optimizations when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// Enable lazy loading for images
document.querySelectorAll('img').forEach(img => img.loading = 'lazy');

// Minify CSS and JS - use a tool or build process (e.g., Terser for JS) before deploying on Vercel
// Reduce render-blocking elements: defer loading non-essential scripts

// Example of deferring a non-essential script
const analyticsScript = document.createElement('script');
analyticsScript.src = "https://www.example.com/analytics.js"; // Example: non-critical script
analyticsScript.defer = true;
document.body.appendChild(analyticsScript);

// Prefetch DNS for external resources
const dnsPrefetch = document.createElement('link');
dnsPrefetch.rel = "dns-prefetch";
dnsPrefetch.href = "//www.example.com";
document.head.appendChild(dnsPrefetch);

// Asynchronous Google Fonts loading example
const fontLink = document.createElement('link');
fontLink.rel = "preconnect";
fontLink.href = "https://fonts.googleapis.com";
document.head.appendChild(fontLink);

const fontStyles = document.createElement('link');
fontStyles.rel = "stylesheet";
fontStyles.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
fontStyles.media = "print"; // load only on demand
fontStyles.onload = () => fontStyles.media = "all";
document.head.appendChild(fontStyles);



/*==================== Lazy fast ====================*/