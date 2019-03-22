import React from "react";

class FunctionsBlock extends React.Component {
	render() {
    return (
      <div className="row no-gutters">
      	{this.props.data.map((function_item, i) =>
      	<div className="col-12 p-2" key={'function_item'+function_item}><button className="btn btn-secondary" onClick={this.props.addWord()} data-type={'func'}>{function_item}</button></div>)}
      </div>
    );
	}
}

export default FunctionsBlock;