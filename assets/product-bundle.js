// Bundle Products Add Cart
// var add_to_cart = document.querySelector("[add_to_cart]");
// add_to_cart.addEventListener("click",(event)=>{
//   event.preventDefault();
  
//   // for (checkbox_data of checkbox_value){
//   //     checkbox_data.checked = true;
//   //     var addon_id  = checkbox_value.checked;
//   //     var bundle_id = checkbox_data.value;
//   //     var array = []
//   //     array.push(checkbox_value[i].value);
//   //     console.log(array)
//   //   }
//   var array = []
//   var checkboxes = document.querySelectorAll("[checkbox_check]");
//   for (var i = 0; i < checkboxes.length; i++) {
//     checkboxes.checked = true;
//     array.push(checkboxes[i].value)
//     let formData = {
//       'items': [{
//         'id': array[i],
//         'quantity': 1
//       }]
//     };
//     (function(i){
//       setTimeout(function(){ 
//         fetch(window.Shopify.routes.root + 'cart/add.js', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         })
//       },1200*i);
      
//     }(i));
//   }
//   setTimeout(function(){ 
//     document.getElementById('main_button').click(); 
//   },1200)  
// })

// Bundle Products Update  Cart
