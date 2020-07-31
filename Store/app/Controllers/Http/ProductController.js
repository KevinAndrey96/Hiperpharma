'use strict'
const Product = use('App/Models/Product')

class ProductController {
    
    

    async index({ params, view }) {

        

        const product = await Product.find(params.id);
        product.price=new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
          }).format(product.price)
    
        return view.render("product_detail", {product});
      }

}

module.exports = ProductController
