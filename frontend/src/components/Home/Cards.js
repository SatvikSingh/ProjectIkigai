import React from 'react'
import "./Cards.css"
const Cards = (props) => {
    var sectionStyle = {
        backgroundImage: `url(${props.item.img_url})` ,
        backgroundSize: "100% 100%"
    };
    
  return (
    <div id='card' style={sectionStyle}>
        {/* {props.item.title} */}
        <br/>
        {/* {props.item.subtitle} */}
        <br/>
        <br/>
    </div>
  )
}

export default Cards


