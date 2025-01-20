const Product = require('../Models/Product');

exports.browseStore = async (req, res) => {
    const Products = await Product.find();
    console.log('Products', Products),
        res.render('store', { title: 'Store', Products });

}

