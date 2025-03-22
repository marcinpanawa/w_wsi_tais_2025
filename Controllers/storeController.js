const Product = require('../Models/Product');
const Comment = require('../Models/Comment');
exports.browseStore = async (req, res) => {
    const Products = await Product.find();
    console.log('Products', Products);
        res.render('store', { title: 'Store', Products });
}



exports.fetchStore = async (req, res) => {
    const Products = await Product.find();

        res.render('fetchStore', { title: 'fetchStore', Products });
}



exports.getItem = async (req, res) => {
    try {
      const product = await Product.findById(req.params.itemId); // Use the Product model
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      const product_id = req.params.itemId;
      const comments = await Comment.find({ product_id })
      .populate('user_id', 'username') // Pobierz dane użytkownika
      .populate('product_id', 'name') // Pobierz dane produktu
      .sort({ created_at: -1 }); // Sortowanie od najnowszych

    //   res.json(product);
      res.render('item', { title: `Item ${product.name}`, Product:product, Comments: comments, itemId: req.params.itemId});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getAllItems = async (req, res) => {
    try {
      const Products = await Product.find();
      if (!Products) {
        return res.status(404).json({ message: 'Product not found' });
      }

      setTimeout(
        ()=>res.status(200).json({
          response: Products,
          status: 200,
        })
        ,500);
   } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
