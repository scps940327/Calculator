import React from "react";

class NumberBlock extends React.Component {
	shouldComponentUpdate() {
		return false;
	}
	render() {
	  return (
	    <div className="row no-gutters">
	    	{this.props.data.reverse().map((number_item, i) =>
	    	<div className="col-4 p-2" key={'number_item'+ number_item}><button className="btn" onClick={this.props.addWord()} data-type="num">{number_item}</button></div>)}
	    </div>
	  );
	}
}

export default NumberBlock;