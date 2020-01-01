
$(function() {
 let productList= $('#product-list')
 let cartItems =$('#cart_items')

 fetchproduct(function (products){
     productList.empty()
     for(product of products){
         productList.append(createcard(product))
     }
 })
})


