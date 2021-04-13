import React from 'react';
const createComponent = (cart, add) => {
    for (let i=0;i<cart.length;i++) {
       if (cart[i][i] === undefined) {
            return {}
       } else {
        const productName = cart[i][i].id
        const storedProduct = cart[i][i].onRefresh
      
       add(productName, storedProduct)
       }  
    }
   }
   export default createComponent