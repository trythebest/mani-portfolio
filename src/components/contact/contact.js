import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";



export default function Contact() {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_606bwe5',
      'template_2sfnkln',
      form.current,
      'h7z9-3P3LpBac-c_-'
    )
      .then((result) => {
        
        toast.success("Success",{theme:"dark",autoClose:2000,draggable:"true"});
        console.log("success",result.text);
      }, (error) => {
        toast.error("error", { theme: "dark", autoClose: 2000 });
        console.log(error.text);
      });
  };
  return (
    <div className=" p-2 body">
      <div className=" contact" id="contact">
        <div className="heading">
          <p>Contact</p>
        </div>
        <p className="pb-5">Submit the form below to get touch with me</p>

        <div className="f-card" class="row">
          <div>
          <form  class="col-md-6" ref={form} onSubmit={sendEmail} >
            <input type="text" name="user_name" placeholder="Enter your name" className="p-2" required />
            <input type="email" name="user_email" placeholder="Enter your email" className="p-2" required />
            <textarea name="message" rows={8} placeholder="Enter your message" className="p-2" required />
            <input type="submit" value="Let's talk" />
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
    </div>

  )
}