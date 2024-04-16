const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Define your website's origin
const allowedOrigin = 'https://hayatriya.github.io/cors/';

// Enable CORS with specific origin
app.use(cors({
  origin: allowedOrigin
}));

// Sample data
const data = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' }
];

// Endpoint to provide data
app.get('/data', (req, res) => {
  // Set Access-Control-Allow-Origin header to the allowed origin
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

