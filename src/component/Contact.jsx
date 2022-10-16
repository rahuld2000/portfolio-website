import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
const Cont = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kptrsrl', 'template_tb312ve', form.current, 'mQH6OaIvSgt56xW5X')

        e.target.reset();
    };
    function handletweet(){
        window.open("https://twitter.com/RahulDhiman30")
    }
    function handlelinkedin(){
        window.open("https://www.linkedin.com/in/rahul-dhiman-b2a9721a3/")
    }

    return (
        <div id='contact' className="cont_main skill_main">
            <div className="cont_head skill_head">
                <h2>Contact Me</h2>
                <p>Get in touch</p>
            </div>
            <div className="cont_bot">
                <div className="cont_social">
                    <h1>Social</h1>
                    <ul>
                        <li onClick={handletweet}><i className="fa-brands fa-twitter"></i> Twitter</li>
                        <li onClick={handlelinkedin}><i className="fa-brands fa-linkedin"></i> LinkedIn</li>
                        <li>
                            <h3><i className="fa-solid fa-envelope"></i> Mail</h3>
                            <p>rahuldhiman.rd14@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Mail me!</h1>
                    <form className="cont_me" ref={form} onSubmit={sendEmail}>
                        <div className='cont_item'>
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Your name" required />
                        </div>
                        <div className='cont_item'>
                            <label>E-mail</label>
                            <input type="email" name="email" placeholder="Insert your mail" required />
                        </div>
                        <div className='cont_item'>
                            <label>Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Your message.."></textarea>
                        </div>
                        <button>Send Message <i className="fa-solid fa-envelope"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Cont;