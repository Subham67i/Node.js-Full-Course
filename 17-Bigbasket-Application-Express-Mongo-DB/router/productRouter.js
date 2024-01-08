const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/**
 * USAGE : Get all the products 
 * URL : http://127.0.0.1:5000/api/products
   REQUEST : GET 
   method : router.get()
   fields : no-fields
 */

 router.get('/products' , async(request , response)=>{
   try{
       let products = await Product.find();
       response.status(200).json(products);
   }
   catch(error){
    console.log(error);
     response.status(500).json({
       error : error.message
     })

   }
 });
 
 /*
 * USAGE : Get a products 
 * URL : http://127.0.0.1:5000/api/products/:id
   REQUEST : GET 
   method : router.get()
   fields : no-fields
 */
   router.get('/products/:id' , async(request , response)=>{
    let productId = request.params.id;
    try{
      let products = await Product.findById(productId);
      response.status(200).json(products);
  }
  catch(error){
   console.log(error );
    response.status(500).json({
      error : error.message
    })
  }
 });

/** USAGE : Create a  product
 *  URL : http://127.0.0.1:5000/api/products/
    REQUEST : POST 
    method : router.post()
    fields : name , image ,price ,qty , info   
 */
router.post('/products', async (request , response)=>{
    let newProduct = {
        name : request.body.name,
        image : request.body.image,
        price : request.body.price,
        qty : request.body.qty,
        info : request.body.info,
    };
    try{
      // if product is already exists
      let product = await Product.findOne({name : newProduct.name});
      if(product){
          return response.status(401).json({
              msg : 'Product is alerady Exists'
          })
      }
      // save to database 
      product = new Product(newProduct);
      product = await product.save();

      response.status(200).json({
        result : 'Product Creation Success',
        product : product
      });
  }
  catch(error){
   console.log(error );
    response.status(500).json({
      error : error.message
    })
  }
    
});

/**
 * Update a product
 * URL : http://127.0.0.1:5000/api/products/:id
   REQUEST : PUT  
   method : router.put()
   fields : no-fields
 */

   router.put('/products/:id' , async(request, response ) => {
      let productId = request.params.id;
      let updateProduct = {
        name : request.body.name,
        image : request.body.image,
        price : request.body.price,
        qty : request.body.qty,
        info : request.body.info,
      };
      try{
        // if product is already exists
        let product = await Product.findById(productId);
        if(!product){
            return response.status(401).json({
                msg : 'Product is not Exists'
            })
        }
        // update to database 
       product = await Product.findByIdAndUpdate(productId , {
         $set : updateProduct
       },{new : true})
  
        response.status(200).json({
          result : 'Product updation is  Success',
          product : product
        });
    }
    catch(error){
     console.log(error );
      response.status(500).json({
        error : error.message
      })
    } 
   });

   /**
    * Delete a  product
    * URL : http://127.0.0.1:5000/api/products/:id
      REQUEST : DELETE
      method : router.delete()
      fields : no-fields
    */
   router.delete('/products/:id' , async(request,response) =>{
      let productId = request.params.id;
      try{
        // if product is already exists
        let product = await Product.findById(productId);
        if(!product){
            return response.status(401).json({
                msg : 'Product is not Exists'
            })
        }
        // delete form database 
       product = await Product.findByIdAndDelete(productId);
  
        response.status(200).json({
          result : 'Product Deletion is  Success',
          product : product
        });
    }
    catch(error){
     console.log(error );
      response.status(500).json({
        error : error.message
      })
    } 
   })


   



module.exports = router;
