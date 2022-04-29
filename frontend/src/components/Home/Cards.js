import React from 'react'
import "./Cards.css"

const Cards = (props) => {
    var sectionStyle = {
        backgroundImage:"url(../../assets/images/didi.png)",
        color:"red"
    };
  return (
    <div id='card' style={sectionStyle}>
        {props.item.title}
        <br/>
        {props.item.img_url}
        {props.item.subtitle}
    </div>
  )
}

export default Cards


