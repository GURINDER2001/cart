function fetchproduct(done){
    $.get('/api/products',function(data){
        done(data)
    })
}
 


function add_Product (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function(data) {
        done(data)
    })
}

function add_Logger (Fname, Lname, Cont,Uname,Psd, done) {
    $.post('api/passroot/signup', {
        firstname: Fname,
        lastname: Lname,
        contact: Cont,   
        username: Uname,
        password: Psd
    }, function(data) {
        done(data)
    })
}

// function check_Logger (Uname,Psd) {
//     $.post('/api/logger/check', { 
//         Username: Uname,
//         Password: Psd

        
//     }).then(
//         alert("clicked"+Uname)
//     ).catch( 
//         alert("error")
//     )
    
//}
function delete_prod(name,done){
    alert("clicked")
    $.delete('/api/products',
     {
         name:names
        }, function(data) {
            done(data)
        }
    )
        }
        
        

function deletedd(event,names,btn){
    
    for(var i=0;i<btn.length;i++){
        if(event.target==btn[i]){
            
           $.ajax({
               url:'http://localhost:9876/api/products/',
               method:'DELETE',
               data:{name:names[i].innerHTML},
               success:function () {
                window.alert("deleted" + + " to Database");
                window.location.href="/";
               },
            error:function (error){alert(error)}
            })
            location.reload()
            
        }
    }
}


function createcard(product){
    
    return $(`<div class="col-3 card m-4 p-2">
                <h4 id="product_Name" class="product-name">${product.name}</h4>
                <div class="product-manufacturer">${product.manufacturer}</div>
                <div id="prc" class=" prc"> Rs. ${product.price}</div>
                
            
                <div class="row">
                <button class="delete col-10 btn btn-primary m-3 p-2 btn-block" id="delete" onClick="deletedd(event,document.getElementsByClassName('product-name'),document.getElementsByClassName('delete'))" ">delete</button>
                   <button class="acb col-10 btn btn-primary m-3 p-2 btn-block" id="addtocart" onClick="cartCard(event,document.getElementsByClassName('product-name'),document.getElementsByClassName('product-manufacturer'),document.getElementsByClassName('prc'),document.getElementsByClassName('acb'))" ">ADD TO CART</button>
                  </div>
                 </div>`)
}


function removeall(){
   var nde =document.getElementById("cart_items")
   while (nde.hasChildNodes()) {
    nde.removeChild(nde.lastChild);
}
updateNums ()
updateCartTotal()
// document.getElementById("Tprice").innerHTML="Rs.0"    
}

function del_item(event){
    var itemcard=document.getElementsByClassName("cartitm")
    var delbtn=document.getElementsByClassName("delitm")
    for(var i=0;i<delbtn.length;i++){
        if(event.target==delbtn[i]){
            itemcard[i].remove();
        }
        updateNums()
        updateCartTotal()
}
}


function updateNums(){  
    var nums= document.getElementById("cart_items").childElementCount;
    
    document.getElementById("cartnum").innerHTML="("+nums+")"
     }

     function updateCartTotal(){
         total=0
         var n= document.getElementsByClassName("pric")
        for(var i=0 ;i<n.length;i++){
        
            var prices=document.getElementsByClassName("pric")[i].innerHTML.replace("Rs."," ")
            var quant=document.getElementsByClassName("qnty")[i].value
            total=total+(prices*quant)
        }
            
             
        console.log(total);
          document.getElementById("Tprice").innerHTML="Rs."+total
         

     }
function cartCard(event,prdName,prdManufacturer,prdPrice,bttn){
    var itemName=document.getElementsByClassName("item-name");
       
    for(var i=0;i<bttn.length;i++){
        if(event.target==bttn[i]){
            for(var j=0;j<itemName.length;j++){
                if(itemName[j].innerHTML==prdName[i].innerHTML){ 
                alert("ALREADY ADDED TO CART")
                return
                }
            }
        
        var para = document.createElement("div");
        para.innerHTML='<div class="col-12 card cartitm"><div class="row"><h3 class="col-sm-11 item-name">'+prdName[i].innerHTML+'</h3><button class="col-sm-1 btn btn-link delitm" onclick="del_item(event)">🗑️ </button></div><div class="row"><div id="pric" class="pric col-sm-10">'+prdPrice[i].innerHTML+'</div><input class="qnty col-sm-2" id="Qty" type="number" max="10" min="1" onchange=" updateCartTotal()" value="1"></div></div>'
         var node=para.firstChild

        document.getElementById("cart_items").appendChild(node)
       
            updateNums();
            updateCartTotal()
                     }
    }
}
  
    