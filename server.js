var express = require('express');
var ejs = require('express-ejs-layouts');

const PORT = 80;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use('/dist', express.static('dist'));


app.get('/', function (req, res) {
  res.render('index.ejs', {url:req.headers.host});
});
app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
