import React from "react";

class NumberBlock extends React.Component {
   render() {
      return (
        <div className="row">
        	{this.props.data.map((number_item, i) =>
        	<div className="col-4" key={'number_item'+number_item}>{number_item}</div>)}
        </div>
      );
   }
}

export default NumberBlock;