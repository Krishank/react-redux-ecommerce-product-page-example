import React from "react";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


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

                </div>

                <div className="row">
                      <Footer/>
                </div>
            </div>
        );
    }
}

export default App;

// Map which all global State we wanna use as prop in this component
// const mapStateToProp = (state)=>{
//   return{
//     math: state.mathReducer,
//     user: state.userReducer
//   }
// }
//
// // Now this will Update our State
// const mapDispatchToProp = (dispatch)=>{
//   return{
//     setName:(name)=>{
//       dispatch(setName(name));
//     }
//   }
// }

//export default connect(mapStateToProp, mapDispatchToProp)(App);
