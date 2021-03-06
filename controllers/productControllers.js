const Product = require("../models/Product");



module.exports.retrieveAllActive = (req, res) => {
  Product.find({ isActive: true })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports.createProduct = (req,res) =>{
    let newProduct = new Product({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    })
    newProduct.save().then(product => res.send(product)).catch(err => res.send(err));
}