import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg_icon.png'
import mail_icon from '../../Assets/mail_icon.png'
import phone_icon from '../../Assets/phone_icon.png'
import location_icon from '../../Assets/location_icon.png'
import white_arrow from '../../Assets/white_arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a10f959e-6134-4c11-93e2-540b97104632");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p> Feel free to reach out through contact form or find our contact information below.Your feedback, questions, and suggestions are important to us as we strive to provide execptional service to our university community</p>
        <ul>
            <li> <img src={mail_icon}alt="" />basseyiyene@gmail.com</li>
            <li> <img src={phone_icon}alt="" />+2349082605884</li>
            <li> <img src={location_icon}alt="" />77 Massachusetts Ave, Cambridge <br/> Ma 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label> Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label> Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone Number' required />
            <label> Write your Message Here</label>
           <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
           <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
