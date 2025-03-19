const Product = require('../Models/Product');

exports.browseStore = async (req, res) => {
    const Products = await Product.find();

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
      // console.log('product', product);
    //   res.json(product);
      res.render('item', { title: `Item ${product.name}`, Product:product});
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
        ,2500);
   } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//   router.get(["/getAllItems"], async function (request, response, next) {
//     items = await itemData.getAllItems(ItemModelDB);
//     var data = { items: items };
  
//     setTimeout(
//       ()=>response.status(200).json({
//         response: data,
//         status: 200,
//       })
//       ,3000);
  
//   });

  
// exports.getItem = async (req, res) => {
//     const itemId = req.params.itemId;
//     const Product = await Product.find({_id: itemId});
//     console.log('Producs', Product);
//         res.render('item', { title: `Item ${Product.name}`, Product });
// }




// router.get("/item/:itemCode", async function (request, response, next) {
//     var itemCode = request.params.itemCode;
//     var item = await itemData.getItem(ItemModelDB, itemCode);
//     console.log("item", item);
  
//     var data = {
//       categories: categories,
//       item: item,
//     };
  
//     // response.status(200).json({
//     //   message: "Successfully responded",
//     //   test: "test string",
//     //   status: 200,
//     //   data: item[0],
//     // });
//     // response.send(item);
//     response.render("item", {
//       test: "test string",
//       data: data,
//       userdata: "",
//     });
//   });