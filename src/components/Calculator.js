import React from 'react';
import Results from './Results';
import Resets from './Resets';
import Pad from './Pad';
import Functions from './Functions';

export default class Calculator extends React.Component{
    state = {
        result: undefined
    };

    handleResult = (result) => {
        this.setState((prevState) => {
            return {
                result
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Calculator</h1>
                <Results result={this.state.result} />
                <div className="calculator-body">
                    <Pad handleResult={this.handleResult} />
                    <Functions />
                </div>
            </div>
        );
    }
}