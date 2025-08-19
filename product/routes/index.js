var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add-product', function(req, res, next) {
  res.render('add-product', { title: 'Add Product' });
});

router.post('/add-product', function(req, res, next) {
  const Product = require('../models/product');
  
  const newProduct = new Product({
    pname: req.body.pname,
    pdetail: req.body.pdetail,
    pprice: req.body.pprice
  });

  newProduct.save()
    .then(() => res.redirect('/display'))
    .catch(err => res.status(500).send("Error saving product: " + err.message));
});

// Display all products (list)
router.get('/display',  async function(req, res, next) {
  try {
    const Product = require('../models/product');
    const products = await Product.find();
    res.render('display', { products, product: null });
  } catch (err) {
    res.status(500).send('Error retrieving products: ' + err.message);
  }
});

router.get('/edit/:id',   async function(req, res, next) {
  try {
    const Product = require('../models/product');
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.render('edit', { product });
  } catch (err) {
    res.status(500).send('Error retrieving product: ' + err.message);
  }
});

// Delete product
router.get('/delete/:id', async function(req, res, next) {
  try {
    const Product = require('../models/product');
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send('Product not found');
    res.redirect('/display');
  } catch (err) {
    res.status(500).send('Error deleting product: ' + err.message);
  }
});

// Handle edit submission
router.post('/edit/:id',   async function(req, res, next) {
  try {
    const Product = require('../models/product');
    const updated = await Product.findByIdAndUpdate(req.params.id, {
      pname: req.body.pname,
      pdetail: req.body.pdetail,
      pprice: req.body.pprice
    }, { new: true });
    if (!updated) return res.status(404).send('Product not found');
    res.redirect('/display/' + updated._id);
  } catch (err) {
    res.status(500).send('Error updating product: ' + err.message);
  }
});

module.exports = router;
