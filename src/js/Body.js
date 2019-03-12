import React from "react";
import ReactDOM from "react-dom";

import NumberBlock from "./components/container/NumberBlock";
import FunctionsBlock from "./components/container/FunctionsBlock";
import CalcBlock from "./components/container/CalcBlock";

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
         	<div className="col-9">
         		<NumberBlock data={this.state.number} />
         	</div>
         	<div className="col-3">
         		<FunctionsBlock data={this.state.functions} />
         	</div>
         	<div className="col">
         		<CalcBlock data={this.state.calc} />
         	</div>
         </div>
      );
   }
}


export default Body;
ReactDOM.render(<Body/>, document.getElementById('root'));