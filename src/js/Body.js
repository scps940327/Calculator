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
	    calc: ['AC', 'del', '='],
	    formula: [],
	    formulaType: [],
	    formulaResult: '',
	    result: 0,
	  }

	  this.addWord = this.addWord.bind(this);
	  this.delWord = this.delWord.bind(this);
	  this.reset = this.reset.bind(this);
	  this.calcResult = this.calcResult.bind(this);
	}
	componentDidMount(){
		window.addEventListener('keypress',(e) => {
			let ketBoardWord = String.fromCharCode(e.which);
			console.log(ketBoardWord, e.which);

			if(e.which == 13){
				this.calcResult();
			}
			else if(ketBoardWord > -1 && ketBoardWord < 10){
				this.addWord(e, ketBoardWord, 'num');
			}
			else if (ketBoardWord == '.') {
				this.addWord(e, ketBoardWord, 'num');
			}
			else if (e.which == 42 || e.which == 43 || e.which == 45) {
				this.addWord(e, ketBoardWord, 'func');
			}
			else if ( e.which == 47) {
				this.addWord(e, '÷', 'func');
			}
		})
	}
	addWord(e, enterWord, enterWordType){
		let formulaResult = this.state.formula,
		formulaResultType = this.state.formulaType;
		enterWord = (enterWord !== undefined) ? enterWord : e.target.textContent;
		enterWordType = (enterWordType !== undefined) ? enterWordType : e.target.dataset.type;

		if(this.state.formula.length == 0){ //first word
			if(enterWordType != 'func' && enterWord > -1 && enterWord < 10){
				formulaResult[0] = enterWord;
				formulaResultType[0] = enterWordType;

				this.setState({
		  		formula: formulaResult,
		  		formulaType: formulaResultType
				});
			}
		}
		else{  //not first word
			if(enterWordType == 'func'){
				if(formulaResultType[formulaResultType.length - 1] == 'func'){
					formulaResult.pop().push(enterWord);
				}
				else{
					formulaResult.push(enterWord);
					formulaResultType.push(enterWordType);
				}
			}
			else if (formulaResultType[formulaResultType.length - 1] == 'num') {
				if((formulaResult[formulaResult.length - 1] % 1 != 0 && enterWord != '.') || formulaResult[formulaResult.length - 1] % 1 == 0){
					formulaResult[formulaResult.length - 1] = formulaResult[formulaResult.length - 1] + enterWord.toString();
				}
				else if (formulaResult[formulaResult.length - 1] == 0 && enterWord == '.') {
					formulaResult[formulaResult.length - 1] = formulaResult[formulaResult.length - 1] + enterWord;
				}
			}
			else if(enterWord > -1 && enterWord < 10){
				formulaResult[formulaResult.length] = enterWord;
				formulaResultType[formulaResultType.length] = enterWordType;
			}

			this.setState({
	  		formula: formulaResult,
	  		formulaType: formulaResultType,
			});
		}
	}
	delWord(e){
		let formulaResult = this.state.formula,
		formulaResultType = this.state.formulaType;

		if(formulaResult.length > 0){
			if(formulaResultType[formulaResultType.length - 1] == 'num' && formulaResult[formulaResult.length - 1] > 9){
					formulaResult[formulaResult.length - 1] = parseInt(formulaResult[formulaResult.length - 1]/10);
			}
			else{
				formulaResult.pop();
				formulaResultType.pop();
			}

			this.setState({
	  		formula: formulaResult,
	  		formulaType: formulaResultType
			});
		}
	}
	reset(){
		this.setState({
  		formula: [],
  		formulaType: [],
  		result: 0
		});
	}
	calcResult(){
		let formulaResult = this.state.formula.slice(0),
		formulaResultType = this.state.formulaType.slice(0);

		console.log(formulaResult);

		if(formulaResult.length > 0 && formulaResultType[formulaResultType.length - 1] != 'func'){
			let i = 0;

			while(i < formulaResult.length){
				switch (formulaResult[i]) {
					case '':
						i = formulaResult.length;
						break;
					case "×":
						formulaResult[i - 1] = formulaResult[i - 1] * formulaResult[i + 1];
						formulaResult.splice(i, 2);
						break;
					case "÷":
						formulaResult[i - 1] = formulaResult[i - 1] / formulaResult[i + 1];
						formulaResult.splice(i, 2);
						break;
					case "/":
						formulaResult[i - 1] = formulaResult[i - 1] / formulaResult[i + 1];
						formulaResult.splice(i, 2);
						break;
					default:
						i ++;
						break;
				}
			}

			i = 0;
			while(i < formulaResult.length){
				switch (formulaResult[i]) {
					case '':
						i = formulaResult.length;
						break;
					case "+":
						formulaResult[i - 1] = Number(formulaResult[i - 1]) + Number(formulaResult[i + 1]);
						formulaResult.splice(i, 2);
						break;
					case "-":
						formulaResult[i - 1] = Number(formulaResult[i - 1]) - Number(formulaResult[i + 1]);
						formulaResult.splice(i, 2);
						break;
					default:
						i ++;
						break;
				}
			}

			formulaResult = parseFloat(Number(formulaResult[0]).toPrecision(12))/1;

			this.setState({
				formula: [formulaResult,],
  			formulaType: ['num',],
	  		result: formulaResult
			});
		}
	}
	render() {
	  return (
	  	<div className="content_wrapper">
	  		<div className="text-right pt-3 pb-1 px-3 bg-secondary">
	  			<div className="result_txt_wrapper" style={{height: '16px', lineHeight: '16px', fontSize: '16px'}}>
	  				<div className="text-primary">{this.state.formula}</div>
	  			</div>
	  			<div className="result_txt_wrapper" style={{height: '56px', lineHeight: '56px', fontSize: '56px'}}>
	  				<div>{this.state.result}</div>
	  			</div>
	  		</div>
				<div className="row mx-0 no-gutters py-2">
					<div className="col-9">
						<NumberBlock data={this.state.number} addWord = {() => this.addWord} />
					</div>
					<div className="col-3">
						<FunctionsBlock data={this.state.functions} addWord = {() => this.addWord} />
					</div>
					<div className="col">
						<CalcBlock data={this.state.calc} delWord = {() => this.delWord} reset = {() => this.reset} calcResult = {() => this.calcResult}/>
					</div>
				</div>
			</div>
	  );
	}
}


export default Body;
ReactDOM.render(<Body/>, document.getElementById('root'));