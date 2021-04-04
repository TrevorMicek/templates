import React from 'react';
const createComponent = (cart, add) => {
   
    for (let i=0;i<cart.length;i++) {
        return add(cart[i].id, cart[i].add)
    }
   }
   export default createComponent