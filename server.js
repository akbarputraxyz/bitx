const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Basic rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, this is a rate-limited server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const clamdjs = require('clamdjs');

const app = express();
app.use(bodyParser.json());

const clamav = clamdjs.createScanner('localhost', 3310);

// Middleware to scan uploaded files
const scanFile = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  const filePath = `./uploads/${file.name}`;

  try {
    await fs.outputFile(filePath, file.data);
    const result = await clamav.scanFile(filePath);
    if (result.includes('FOUND')) {
      await fs.remove(filePath);
      return res.status(400).send('Malware detected!');
    }
    next();
  } catch (err) {
    next(err);
  }
};

// Endpoint to handle file uploads
app.post('/upload', scanFile, (req, res) => {
  res.send('File uploaded and scanned successfully.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const clamdjs = require('clamdjs');

const app = express();
app.use(bodyParser.json());
app.use(fileUpload());

const clamav = clamdjs.createScanner('localhost', 3310);

// Middleware to scan uploaded files
const scanFile = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  const filePath = `./uploads/${file.name}`;

  try {
    await fs.outputFile(filePath, file.data);
    const result = await clamav.scanFile(filePath);
    if (result.includes('FOUND')) {
      await fs.remove(filePath);
      return res.status(400).send('Malware detected!');
    }
    next();
  } catch (err) {
    next(err);
  }
};

// Endpoint to handle file uploads
app.post('/upload', scanFile, (req, res) => {
  res.send('File uploaded and scanned successfully.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/service-worker.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'service-worker.js'));
  });

  


  const express = require('express');
  const helmet = require('helmet');
  
  const app = express();
  app.use(helmet());
  
  app.get('/', (req, res) => {
      res.send('Hello, SEO World!');
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });

  
  const express = require('express');
  const helmet = require('helmet');
  const expressSitemapXml = require('express-sitemap-xml');
  
  const app = express();
  app.use(helmet());
  
  const urls = [
      { url: '/', lastMod: new Date(), changeFreq: 'daily', priority: 1.0 },
      { url: '/about', lastMod: new Date(), changeFreq: 'monthly', priority: 0.8 },
      { url: '/contact', lastMod: new Date(), changeFreq: 'monthly', priority: 0.8 },
  ];
  
  app.use(expressSitemapXml(() => urls, 'https://www.wildanakpn.xyz'));
  
  app.get('/', (req, res) => {
      res.send('Hello, SEO World!');
  });
  
  app.get('/about', (req, res) => {
      res.send('About Page');
  });
  
  app.get('/contact', (req, res) => {
      res.send('Contact Page');
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });

  


  const fs = require('fs');
  const { generateRobotsTxt } = require('robots-txt-generator');
  
  const config = {
      policy: [
          {
              userAgent: '*',
              allow: '/',
              disallow: ['/private', '/temp'],
          },
      ],
      sitemap: 'https://www.wildanakpn.xyz/sitemap.xml',
      host: 'https://www.wildanakpn.xyz',
  };
  
  const robotsTxtContent = generateRobotsTxt(config);
  fs.writeFileSync('public/robots.txt', robotsTxtContent);
  


  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  

  const express = require('express');
  const helmet = require('helmet');
  
  const app = express();
  
  // Enable HSTS with Helmet
  app.use(
    helmet.hsts({
      maxAge: 31536000, // 1 year in seconds
      includeSubDomains: true, // Apply HSTS to all subdomains
      preload: true, // Preload HSTS to the browser
    })
  );
  
  app.get('/', (req, res) => {
    res.send('Hello, HSTS World!');
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  