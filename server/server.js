require('newrelic');
require('dotenv').config();
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/sellers', createProxyMiddleware({
  target: `http://${process.env.SELLER_CATALOG_HOST}:${process.env.SELLER_CATALOG_PORT}/bundle-seller-catalog.js`,
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
