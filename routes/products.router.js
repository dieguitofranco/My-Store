const express = require('express');

const router = express.Router();

var products = [];


router.get('/', (req, res) => {
  res.json(products);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product.id == id);
  if (!product) {
    res.status(404).send('Producto no encontrado');
    return;
  }
  res.json(product);
})

router.get('/:id/price', (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product.id == id);
  if (!product) {
    res.status(404).send('Producto no encontrado');
    return;
  }
  res.json({price: product.price});
})

router.get('/:id/:price', (req, res) => {
  const {id, price} = req.params;
  const product = products.find(product => product.id == id && product.price == price);
  if (!product) {
    res.status(404).send('Producto no encontrado');
    return;
  }
  res.json(product);
})

router.post('/',(req, res)=>{
  const body = req.body
  products.push({id: req.body.id, name: req.body.name, price: req.body.price})
  res.json({
    message : "Creado",
    data: body.id
  })
})

module.exports = router
