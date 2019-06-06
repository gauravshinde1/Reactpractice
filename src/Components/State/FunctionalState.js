import React from 'react';


const FunctionalState = () => {
    const state={
        name:'Gaurav'
    }
    return (
        <div onClick={ () => {state.name = "sdfg" }}>
            {state.name}
        </div>
    )
}

export default FunctionalState;
