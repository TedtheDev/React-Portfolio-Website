const path = require('path');
const app = require('express')();

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/build/bundle.js', (req,res) => {
  res.sendFile(path.resolve(__dirname, './build/bundle.js'));
})

app.get('*', (req,res) => {
  res.redirect('/');
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('listening on port ' + port);
});
