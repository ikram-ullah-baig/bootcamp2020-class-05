import React, { useReducer } from 'react';
import  numberReducer  from "./numberReducer";

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 53);
    return (
        <div>
            Child (2) <strong>{state}</strong>
            <br />
            <button onClick={()=> { dispatch({type:'INCREMENT', val: 20}); }}>Increment</button>
            <button onClick={()=> { dispatch({type:'DECREMENT', val: 30}); }}>Decrement</button>

        </div>
    );
}

export default Child2;