const Product = require('../Models/Product');

exports.browseStore = async (req, res) => {
    const Products = await Product.find();
        res.render('store', { title: 'Store', Products });
}

