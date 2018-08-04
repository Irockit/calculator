import React from 'react';

const Results = (props) => (
    <div>
        <input text="Equation" />
        <p>{props.result}</p>
    </div>
);

export default Results;