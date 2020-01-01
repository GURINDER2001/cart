$(function () {
    let productName = $('#productName')    
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')
    
    $('#btnProductAdd').click(function () {

        add_Product(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database");
                window.location.href="/";
            }
        )
     

    })

})