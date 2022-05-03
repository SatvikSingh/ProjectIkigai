import React from 'react'
import  "./Contactform.css"
const ContactForm = () => {
  return (
    <div id='contactform'>
      <div id='leaveusamessage'>
        Leave us a message
      </div>
      <form>
        <div id='contactrow1'>
          <input type="text" placeholder='Name' id='contactname' className='contactformitem'></input>
          <input type="number" placeholder='Age' id='contactage' className='contactformitem'></input>
        </div>
        <div id='contactrow2'>
          <input type="email" placeholder='Email' id='contactemail' className='contactformitem'></input>
          <input type="number" placeholder='Number' id='contactnumber' className='contactformitem'></input>
        </div>
        <textarea rows="4" cols="30" placeholder='Your Message' id='contactmsg' className='contactformitem'></textarea>
        <button id="contactformbtn" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm