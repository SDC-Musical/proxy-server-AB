const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/sellers/:id', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true
}));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
