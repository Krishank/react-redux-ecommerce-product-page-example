import React from "react";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import ProductsContainer from './ProductsContainer';

class App extends React.Component {
    render() {
      const navData = [
        {
          "text":"Home",
          "link":"#"
        },
        {
          "text":"Products",
          "link":"#"
        },
        {
          "text":"About",
          "link":"#"
        },
        {
          "text":"Service",
          "link":"#"
        },
        {
          "text":"Contact",
          "link":"#"
        }
      ];
        return (
            <div className="container">
                <div className="row" style={{marginBottom: 100 + 'px'}}>
                    <Header navData={navData} />
                </div>

                <div className="row">
                  <ProductsContainer />
                </div>

                <div className="row">
                      <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
