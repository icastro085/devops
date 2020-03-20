const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send('Hello World! Test 1');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
