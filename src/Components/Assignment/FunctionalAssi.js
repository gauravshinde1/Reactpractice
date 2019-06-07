import React from 'react'

const FunctionalAssi = (props) => {
    return (
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card" >
                    <img className="card-img-top" src={props.image} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.heading}</h5>
                        <p className="card-text">{props.paragraph}</p>
                        {props.children}
                    </div>
                    
                </div>
            </div>            
        </React.Fragment>
    )
}

export default FunctionalAssi;
