const express = require('express');
const path = require('path');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function(req, res) {
  res.send('backend-shops');
});



app.listen(path.resolve(__dirname, '..', 'tmp', 'socket'), err => {
    if (err) throw err;
    console.log(
      'backend-shops listenning'
    );
  });
  