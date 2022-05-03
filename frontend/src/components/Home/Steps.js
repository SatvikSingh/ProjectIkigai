import React from 'react'
import './Steps.css'
const Steps = (props) => {
    var sectionStyle = {
        backgroundImage: `url(${props.item.img_url})` ,
        backgroundSize: "100% 100%"
   };
  return (
    <div id="stepbox" style={sectionStyle}>
        <div id='stepcontent'>
          <div id='step-heading'>{props.item.title}</div>
          <div id='step-desc' style={{fontSize:"12px"}}>{props.item.desc}</div>
        </div>
    </div>
  )
}

export default Steps