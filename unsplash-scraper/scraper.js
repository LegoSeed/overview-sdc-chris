// unsplash scraper
const axios = require('axios');
const fs = require('fs');
const https = require('https');
const path = require('path');
const { auth } = require('./config.js');

// Node.js Function to save image from External URL.
function saveImageToDisk(url, localPath) {
  const file = fs.createWriteStream(localPath);
  https.get(url, (response) => {
    response.pipe(file);
  });
}

const searchAndSaveUnsplash = function (searchTerm, qty, page, relativePath) {
  const unsplashURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&per_page=${qty}&client_id=${auth}`;

  axios.get(unsplashURL)
    .then(({ data }) => {
      data.results.forEach((result, i) => {
        saveImageToDisk(result.urls.regular, `${relativePath}${i + (Math.random().toFixed(2))}.jpg`);
      });
    })
    .catch((err) => console.log(err));
};
const searchTerms = ['toy', 'lego', 'play', 'game', 'fun'];
searchAndSaveUnsplash('toy', 30, 83, path.join(__dirname, '../images/toy_'));
