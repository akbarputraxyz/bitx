import bar from './bar.js';

bar();


/*==================== SEO ====================*/

// SEO Optimization and Metadata Management
(function () {
    // Function to set dynamic meta tags
    function setMetaTags() {
        // Primary keywords
        const keywords = [
            'akbar putra xyz',
            'akbarputra37',
            'personal website',
            'portfolio',
            // Add more relevant keywords
        ];

        // Create or update meta tags
        const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords.join(', '));
        document.head.appendChild(metaKeywords);

        // Add description meta tag
        const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', 'Website of Akbar Putra - Personal portfolio and professional showcase');
        document.head.appendChild(metaDescription);

        // Add Open Graph tags for social media sharing
        const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.setAttribute('content', 'Akbar Putra - Personal Website');
        document.head.appendChild(ogTitle);

        const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.setAttribute('content', 'Personal website and portfolio of Akbar Putra');
        document.head.appendChild(ogDescription);

        // Add schema.org structured data
        const schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Akbar Putra",
            "url": window.location.origin,
            "sameAs": [
                // Add your social media profiles if applicable
            ]
        });
        document.head.appendChild(schemaScript);
    }

    // Function to submit sitemap to search engines
    function submitSitemap() {
        const sitemapUrl = `${window.location.origin}/sitemap.xml`;

        // Google Search Console submission
        fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`)
            .catch(error => console.log('Google sitemap submission error'));

        // Bing Webmaster Tools submission
        fetch(`https://www.bing.com/webmaster/ping.aspx?sitemap=${encodeURIComponent(sitemapUrl)}`)
            .catch(error => console.log('Bing sitemap submission error'));
    }

    // Run on page load
    window.addEventListener('load', () => {
        setMetaTags();
        submitSitemap();
    });
})();

// Add metadata dynamically
document.title = "Akbar Putra XYZ - Personal Portfolio";
const metaDescription = document.createElement('meta');
metaDescription.name = "description";
metaDescription.content = "Discover Akbar Putra's portfolio on UI/UX design, web development, and programming expertise. Find more on akbarputra37.";
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = "keywords";
metaKeywords.content = "Akbar Putra, Akbar Putra XYZ, akbarputra37, portfolio, web developer, UI/UX design";
document.head.appendChild(metaKeywords);

// Open Graph metadata for better social media previews
const metaOGTitle = document.createElement('meta');
metaOGTitle.setAttribute("property", "og:title");
metaOGTitle.content = "Akbar Putra XYZ - Personal Portfolio";
document.head.appendChild(metaOGTitle);

const metaOGDescription = document.createElement('meta');
metaOGDescription.setAttribute("property", "og:description");
metaOGDescription.content = "Explore Akbar Putra's work in web development and design.";
document.head.appendChild(metaOGDescription);

const metaOGImage = document.createElement('meta');
metaOGImage.setAttribute("property", "og:image");
metaOGImage.content = "https://www.wildanakpn.xyz/image-preview.jpg"; // Update with your image URL
document.head.appendChild(metaOGImage);


/*==================== SEO ====================*/