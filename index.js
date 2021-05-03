import express from 'express'
import path from 'path'

const PORT = process.env.PORT ?? 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('static', 'index.html'));
})

app.get('/features', (req, res) => {
  res.sendFile(path.resolve('static', 'features.html'));
})

app.listen(PORT, () => {
  console.log(`START on ${PORT} port!`);
});
