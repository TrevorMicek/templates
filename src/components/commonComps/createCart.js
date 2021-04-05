import React from 'react';
const createComponent = (cart, add) => {
   
    for (let i=0;i<cart.length;i++) {
       
        console.log(cart[i].add[i].quantity)
        return add(cart[i].id, cart[i].onRefresh)
        
    }
   }
   export default createComponent