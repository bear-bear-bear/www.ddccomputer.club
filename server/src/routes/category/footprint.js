import { acquisitionPost } from '../../controllers/post';

const footprint = require('express').Router();


footprint.get('/acquisition', (req, res) => {
  res.render('import/footprint/acquisition', {});
});

footprint.post('/acquisition/post', acquisitionPost);

footprint.get('/awards', (req, res) => {
  res.render('import/footprint/awards', {});
});

footprint.get('/portfolio', (req, res) => {
  res.render('import/footprint/portfolio', {});
});



export default footprint;
