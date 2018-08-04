import React from 'react';

import Numbers from './Numbers';
import Resets from './Resets';

export default class Pad extends React.Component{
    state = {
        currentNumber: [],
        positive: true,
        float: false
    };

    handleNumberPressed = (object) => {
        if(object === "." && !this.state.float){
            this.setState((prevState) => {
                return {
                    currentNumber: prevState.currentNumber.concat(object),
                    float: true
                }
            });
            this.props.handleResult((this.state.positive? '': '-')+this.state.currentNumber.concat(object).join(''));
        }else if (/\d/.test(object)){
            this.setState((prevState) => {
                return {
                    currentNumber: prevState.currentNumber.concat(object)
                }
            });
            this.props.handleResult((this.state.positive? '': '-')+this.state.currentNumber.concat(object).join(''));
        }else if (object === "+-"){
            this.setState((prevState) => {
                return {
                    positive: !prevState.positive
                }
            });
            this.props.handleResult((!this.state.positive? '': '-')+this.state.currentNumber.join(''));
        }
    }

    handleBackSpace = () => {
        
    }

    render(){
        return (
            <div>
                <Resets />
                <Numbers numberPressed={this.handleNumberPressed}/>
            </div> 
        );
    }
}