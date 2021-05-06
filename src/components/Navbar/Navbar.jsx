import React from 'react';
import Logo from "../../assests/logo/logo.png"

const Navbar = () => {
    const [time,setTime] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    },[time])
  return (
    <div className="sleeksky-navbar">
      <div>
        <img src={Logo} alt="logo"/>
      </div>
      <div className="sleeksky-current-time">
          <h1>Current Time is: {time}</h1>
      </div>
    </div>
  )
}

export default Navbar
