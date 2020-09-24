const pageFetcher = function(url, path) {
  const request = require('request');
  const fs = require('fs');
  request(url, (error, response, body) => {
    if (error) {
      throw error;
    }
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile(path, body, (err) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}!`);
    });
  });
};

module.exports = pageFetcher;