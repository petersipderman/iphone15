const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the directory where your HTML, CSS, and JS files are located.
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
