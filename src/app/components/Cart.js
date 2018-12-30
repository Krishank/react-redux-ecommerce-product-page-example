import React from "react";
import PropTypes from 'prop-types';

export class Cart extends React.Component {

  filterData(products){
    let filteredData = {};
    return products.filter((product, index)=>{

      return product.addedInCart === true;
    })
  }

  genrateCart(products){
    return this.filterData(products)>0 && this.filterData(products).map((product, index)=>{
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
    render(){
      return(
            <React.Fragment>

                {this.genrateCart(this.props.products)}

            </React.Fragment>

      )
    }
}
