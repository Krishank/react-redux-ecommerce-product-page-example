import React from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import { ErrorBoundary } from "./ErrorBoundary";
import { Cart } from "../components/Cart";
import { Products } from "../components/Products";
import { updateProducts } from '../actions/productsActions';


export class ProductsContainer extends React.Component {

    render() {

        return (
            <React.Fragment>
              <div className="col-lg-3">

                <h1 className="my-4">Cart</h1>
                <ErrorBoundary erroMessage="Failed in Cart Component">
                  <Cart products={this.props.products} onUpdate={(action, payload)=>{this.updateState(action, payload)}} />
                </ErrorBoundary>
            </div>

              <div className="col-lg-9">
                <div className="row">
                  <ErrorBoundary erroMessage="Failed in Products Component">
                    <Products products={this.props.products} onUpdate={(action, payload)=>{this.updateState(action, payload)}} />
                  </ErrorBoundary>
              </div>
              </div>
            </React.Fragment>
        );
    }
}



//Map which all global State we wanna use as prop in this component
const mapStateToProp = (state)=>{
  return{
    products: state.products
  }
}

// Now this will Update our State
const mapDispatchToProp = (dispatch)=>{
  return{
    updateProducts:(products)=>{
      dispatch(updateProducts(name));
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductsContainer);
