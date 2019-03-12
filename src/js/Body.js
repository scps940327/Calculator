import React from "react";
import ReactDOM from "react-dom";

class Body extends React.Component {
   constructor() {
      super();
      this.state = {
		number: ['.', '00', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		functions: ['÷', '×', '+', '-'],
        calc: ['AC', 'del', '=']
      }
   }
   render() {
      return (
         <div className="row">
         </div>
      );
   }
}


export default Body;
ReactDOM.render(<Body/>, document.getElementById('root'));