import React from "react";
import PropTypes from 'prop-types';

export class Products extends React.Component {
  getIndex(elm) {
    return elm.currentTarget.getAttribute('index');
  }

  showBtn(elm) {
    const index =  this.getIndex(elm);
    this.props.onUpdate('PRODUCT_HOVER_IN', index);
  }

  hideBtn(elm) {
    const index =  this.getIndex(elm);
    this.props.onUpdate('PRODUCT_HOVER_OUT', index);
  }

  addToCartHandler(elm) {
    const index =  this.getIndex(elm);
    this.props.onUpdate('ADD_TO_CART', index);
  }

  genrateProducts(productsData) {
    return productsData && productsData.map( (product, index)=> {
      const inlineStyle = {
        minHeight: "300px",
        marginBottom: "100px !important"
      }
      return (
        <div className="col-lg-4 col-md-6 mb-4" style={inlineStyle} index={index} key={index} onMouseEnter={(index)=>this.showBtn(index)} onMouseLeave={(index)=>{this.hideBtn(index)}}>
            <div className="card h-100">
              <a href="#"><img className="card-img-top"  alt="" src={product.image}/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{product.name}</a>
                </h4>
                <h5>${product.price}</h5>
                <p className="card-text">{product.dec}</p>
              </div>
              <div className="card-footer" raiting={product.raiting}>
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
            {(() => {

              if(product.addToCart) {
                return <button className=" col-lg-12 col-md-6 btn btn-primary" index={index} onClick={(index)=>this.addToCartHandler(index)} >{product.btnText}</button>
              }
            })()}

         </div>
      )

  });
  }
  render(){
        return(
              <React.Fragment>
                     {this.genrateProducts(this.props.products)}
              </React.Fragment>
            );
    }
  }
