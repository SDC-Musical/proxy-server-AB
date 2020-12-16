require('newrelic');
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/sellers', createProxyMiddleware({
  target: 'http://localhost:3002/bundle-seller-catalog.js',
  changeOrigin: true,
  pathRewrite: {
    '^/sellers': ''
  }
}));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
