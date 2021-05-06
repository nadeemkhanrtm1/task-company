import React from 'react'

const Footer = ({clicked}) => {
    //clicked is coming from Content.jsx as an props We have destructed here using {clicked} = props;
    return (
        <div className="sleeksky-footer">
            You Clicked {clicked} times
        </div>
    )
}

export default Footer
