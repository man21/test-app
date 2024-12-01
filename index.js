const express = require('express');
const app = express();
const port = 3000;

// Route to serve static text
app.get('/', (req, res) => {

  res.send('<h1>Hello, V11 </h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
