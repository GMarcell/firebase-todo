import React from 'react';

function Test(props) {
    return (
        <div className='popup-box'>
            <div className='box'>
                <span className="close-icon" onClick={props.handleClose}>x</span>
            </div>
        </div>
    );
}

export default Test; 
