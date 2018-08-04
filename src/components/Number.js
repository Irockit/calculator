import React from 'react';

const Numbers = (props) => (
        <button onClick={(e) => {
            props.pressed(props.text);
        }}>{props.text}</button>
);

export default Numbers;