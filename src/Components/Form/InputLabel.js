import React from 'react'

const InputLabel = ({
    labeltext,
    place,
    type
}) => {
    return (
        <React.Fragment>
            <div className="col">
                <label>{labeltext}</label>
                <input type={type} className="form-control" placeholder={place} required/>
            </div>
        </React.Fragment>
           
    
    )
}

export default InputLabel
