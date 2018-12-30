import React from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import { ErrorBoundary } from "./ErrorBoundary";
import { Cart } from "../components/Cart";
import { Products } from "../components/Products";
import { updateProducts, onMouseIn, onMouseOut, addToCart, removeFromCart } from '../actions/productsActions';



//Map which all global State we wanna use as prop in this component
const mapStateToProps = (state)=>{
  return{
    products: state.productsReducer.products
  }
}

// Now this will Update our State
const mapDispatchToProps = (dispatch)=>{
  return{
    updateProducts:()=>{
      dispatch(updateProducts());
    },
    onMouseIn:(data, index)=>{
      dispatch(onMouseIn(data, index));
    },
    onMouseOut:(data, index)=>{
      dispatch(onMouseOut(data, index));
    },
    addToCart:(data, index)=>{
      dispatch(addToCart(data, index));
    },
    removeFromCart:(data, index)=>{
      dispatch(removeFromCart(data, index));
    }
  }
}



class ProductsContainer extends React.Component {

  constructor(props){
    super();
    this.state = {
      "products": props.products
    };

  }
    updateState(action, index){
      const data = this.props.products;

        switch (action) {
          case "PRODUCT_HOVER_IN":
                this.props.onMouseIn(data, index);
            break;

          case "PRODUCT_HOVER_OUT":
                this.props.onMouseOut(data, index);
            break;

          case "ADD_TO_CART":
                this.props.addToCart(data, index);
            break;

          case "REMOVE_FROM_CART":
                this.props.removeFromCart(data, index);
            break;

          default:

        }
        this.setState({
          ...this.state,
          "products": this.props.products
        });
    }

    render() {
        return (
          <React.Fragment>
            <div className="col-lg-3">
              <h1 className="my-4">Cart</h1>
              <ErrorBoundary erroMessage="Failed in Cart Component">
                <Cart products={this.props.products} />
              </ErrorBoundary>
            </div>

            <div className="col-lg-9">
              <div className="row">
                <ErrorBoundary erroMessage="Failed in Products Component">
                  <Products products={this.props.products} onUpdate={(action, index)=>{this.updateState(action, index)}} />
                </ErrorBoundary>
            </div>
            </div>
          </React.Fragment>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
