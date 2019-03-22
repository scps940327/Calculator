import React from "react";

class CalcBlock extends React.Component {
   render() {
      return (
        <div className="row no-gutters">
        	<div className="col-3 p-2">
        		<button className="btn text-primary" onClick={this.props.reset()}>{this.props.data[0]}</button>
        	</div>
        	<div className="col-3 p-2">
        		<button className="btn text-primary" onClick={this.props.delWord()}>{this.props.data[1]}</button>
        	</div>
        	<div className="col-6 p-2">
        		<button className="btn btn-trans text-right" onClick={this.props.calcResult()}>{this.props.data[2]}</button>
        	</div>
        </div>
      );
   }
}

export default CalcBlock;