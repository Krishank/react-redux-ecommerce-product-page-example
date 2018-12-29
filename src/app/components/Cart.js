import React from "react";
import PropTypes from 'prop-types';


export const Cart = React.memo(function Cart(props) {

  function filterData(products){
    let filteredData = {};
    return products.filter((product, index)=>{

      return product.addedInCart === true;
    })
  }

  function genrateCart(products){
    return filterData(products).map((product, index)=>{
      let total = 0;
      total= total+parseFloat(product.price, 10)
      return (
        <div className="list-group" key={index}>
          <a href="#" className="list-group-item">
            Item: {product.name}
            <hr/>
            Price: {product.price}
          </a>
          <a href="#" className="list-group-item">Total: {total}</a>
        </div>
      )
    });
  }

    return(
          <React.Fragment>

              {genrateCart(props.products)}

          </React.Fragment>

    )
});
