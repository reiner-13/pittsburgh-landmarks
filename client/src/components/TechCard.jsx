import React from 'react';

const TechCard = ({ techName, techImg }) => {
    return (
        <div className="card mx-5 my-4 p-0 border border-dark border-3 bg-warning-subtle" style={{'width': '300px'}}>
            <img className="card-img-top mx-auto my-4" src={techImg} alt="Node.js" style={{'height': '200px', 'width': '200px'}}/>
            <div className="card-body pt-0">
                <h4 className="card-text text-center">{techName}</h4>
            </div>
        </div>
    );
};

export default TechCard;