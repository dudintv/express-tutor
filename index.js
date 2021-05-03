import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'

const PORT = process.env.PORT ?? 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('ejs'));
console.log(app.get('views'));

app.use(requestTime);
app.use(logger);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My main EJS data title'
  });
})

// app.use(express.static(path.resolve('static')));

// app.get('/download', (req, res) => {
//   console.log(req.requestTime);
//   res.download(path.resolve('static', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`START on ${PORT} port!`);
});
