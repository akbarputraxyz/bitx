/*==================== ServiceWorker 1 ====================*/
// Increment and display visitor count using localStorage
if (typeof (Storage) !== "undefined") {
    let visitorCount = localStorage.getItem("visitorCount") || 0;
    localStorage.setItem("visitorCount", ++visitorCount);
    document.getElementById("visitorCount").innerText = visitorCount;
} else {
    console.log("localStorage is not supported.");
}

// Cookie functions
const setCookie = (name, value, days) => {
    const expires = days ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}` : "";
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getCookie = name => {
    const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return value ? value[2] : null;
};

const eraseCookie = name => {
    document.cookie = `${name}=; Max-Age=-99999999;`;
};

// Example usage
setCookie('username', 'akbarputra.xyz', 7);
console.log(getCookie('username'));
eraseCookie('username');

// Cache resources
const cacheResources = async () => {
    if ('caches' in window) {
        const cache = await caches.open('akbarputra.xyz-cache-v1');
        await cache.addAll([
            '/index.html', '/styles.css', 'assets/css/styles.css',
            '/script.js', '/main.js', '/images/logo.png', '.png', '/main.json'
        ]);
    }
};

const fetchResource = async event => {
    const cache = await caches.open('akbarputra.xyz-cache-v1');
    const response = await cache.match(event.request);
    return response || fetch(event.request);
};

// Register service worker and handle caching
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('ServiceWorker registration successful: ', reg.scope))
            .catch(err => console.log('ServiceWorker registration failed: ', err));
    });

    self.addEventListener('install', event => event.waitUntil(cacheResources()));
    self.addEventListener('fetch', event => event.respondWith(fetchResource(event)));
}

// Add meta tags on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    const meta = (name, content) => {
        const metaTag = document.createElement('meta');
        metaTag.name = name;
        metaTag.content = content;
        document.head.appendChild(metaTag);
    };

    meta("keywords", "keyword1, keyword2, keyword3");
    meta("description", "Wildan Akbar Putra Nugraha | IT Product Designer Customer-Centric or UI/UX Designer");
    meta("Wildan Akbar Putra Nugraha | IT Product Designer Customer-Centric or UI/UX Designer", "Wildan Akbar Putra Nugraha | IT Product Designer Customer-Centric or UI/UX Designer");
});

/*==================== ServiceWorker 1 ====================*/

/*==================== ServiceWorker 2 ====================*/
// Save and load data to/from localStorage
const websiteData = {
    name: "Akbar Putra",
    url: "https://www.akbarputra.xyz"
};
document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('websiteData', JSON.stringify(websiteData));
    const data = localStorage.getItem('websiteData');
    data ? console.log('Website data:', JSON.parse(data)) : console.log('No data found');
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// Cache assets
const CACHE_NAME = 'akbarputra-xyz-cache-v1';
const urlsToCache = ['/', '/index.html', '/styles/main.css', '/scripts/main.js'];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request).then(fetchResponse => {
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') return fetchResponse;
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
            return fetchResponse;
        }))
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(caches.keys().then(cacheNames =>
        Promise.all(cacheNames.map(cacheName => cacheWhitelist.includes(cacheName) || caches.delete(cacheName)))
    ));
});

// Lazy load images
document.addEventListener("DOMContentLoaded", () => {
    const lazyloadImages = document.querySelectorAll("img.lazyload");
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazyload");
                    observer.unobserve(image);
                }
            });
        });
        lazyloadImages.forEach(image => imageObserver.observe(image));
    } else {
        const lazyload = () => {
            lazyloadImages.forEach(img => {
                if (img.offsetTop < (window.innerHeight + window.pageYOffset)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazyload');
                }
            });
            if (lazyloadImages.length === 0) {
                ["scroll", "resize", "orientationChange"].forEach(event => window.removeEventListener(event, lazyload));
            }
        };
        ["scroll", "resize", "orientationChange"].forEach(event => window.addEventListener(event, lazyload));
    }
});

/*==================== ServiceWorker 2 ====================*/

/*==================== ServiceWorker 3 ====================*/
// LOCAL STORAGE VISITOR COUNT
if (typeof Storage !== "undefined") {
    const key = "visitorCount";
    let count = parseInt(localStorage.getItem(key) || "0", 10);
    localStorage.setItem(key, ++count);
    document.getElementById("visitorCount").innerText = count;
} else {
    console.log("localStorage not supported.");
}

// EXPRESS SERVER SETUP
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('A simple Node App is running on this server'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/*==================== ServiceWorker 3 ====================*/


self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/styles/main.css',
          '/script/main.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  