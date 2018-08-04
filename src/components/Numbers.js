import React from 'react';
import Number from './Number';


const Numbers = (props) => (
    <div className="numbers">
        <div className="num-row">
        <Number pressed={props.numberPressed} text={"7"}/>
        <Number pressed={props.numberPressed} text={"8"}/>
        <Number pressed={props.numberPressed} text={"9"}/>
        </div>
        <div className="num-row">
        <Number pressed={props.numberPressed} text={"4"}/>
        <Number pressed={props.numberPressed} text={"5"}/>
        <Number pressed={props.numberPressed} text={"6"}/>
        </div>
        <div className="num-row">
        <Number pressed={props.numberPressed} text={"1"}/>
        <Number pressed={props.numberPressed} text={"2"}/>
        <Number pressed={props.numberPressed} text={"3"}/>
        </div>
        <div className="num-row">
        <Number pressed={props.numberPressed} text={"+-"}/>
        <Number pressed={props.numberPressed} text={"0"}/>
        <Number pressed={props.numberPressed} text={"."}/>
        </div>
    </div>
);

export default Numbers;