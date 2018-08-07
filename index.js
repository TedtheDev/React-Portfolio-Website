require('dotenv').config();
const path = require('path');
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mailgun = require('./controllers/mailgun');

if(process.env.NODE_ENV !== 'production') {
  app.use(cors());
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/build/bundle.js', (req,res) => {
  res.sendFile(path.resolve(__dirname, './build/bundle.js'));
})

app.post('/api/message', mailgun)

app.get('*', (req,res) => {
  res.redirect('/');
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('listening on port ' + port);
});
