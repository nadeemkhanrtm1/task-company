import React from 'react'
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar'

const Content = () => {
    //state assign
    const [array,setArray] = React.useState([]);
    //element pick up variable for scrollDown
    const scrollDown = React.useRef(null);
    //array for updation in state
    const array1 = []
    //method when click on button
    const handleClick = () => {
        array1.push(new Date().toLocaleTimeString());
        setArray((pre)=>[...pre,array1])
    }
    //render when array state is updated
    React.useEffect(()=>{
        if(scrollDown){
            scrollDown.current.scrollTop = scrollDown.current.scrollHeight;
        }
    },[array])
  return (
    <React.Fragment>
    <div className="sleeksky-content">
      <Sidebar handleClick={handleClick}/>
      <div className="sleeksky-clickable-content" ref={scrollDown}>
        {
        array.map((item,index)=>(
            <React.Fragment>
            <h1 key={index+1} className="clicked-content">You clicked at {item}</h1>
            <hr/>
            </React.Fragment>
        ))
        }
      </div>
    </div>
    <Footer clicked={array.length}/>
</React.Fragment>
  )
}

export default Content;
