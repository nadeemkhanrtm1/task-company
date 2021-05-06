import React from 'react'

const Sidebar = ({handleClick}) => {
    //handleClick is coming from Content.jsx as an props We have destructed here using {handlClick} = props;
    return (
        <div className="sleeksky-sidebar">
            <button onClick={handleClick}>Click Here </button>
        </div>
    )
}

export default Sidebar
