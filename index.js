const path = require('path');
const app = require('express')();

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/build/bundle.js', (req,res) => {
  res.sendFile(path.resolve(__dirname, './build/bundle.js'));
})

app.listen(8000, () => {
  console.log('listening on port 8000');
});
