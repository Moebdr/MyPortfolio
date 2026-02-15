import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import emailjs from '@emailjs/browser';
 import { ToastContainer, toast } from 'react-toastify'

export default function Footer() {
  return (
    <footer className="bg-gray-900   " id="footer">
      <div className="container grid justify-between gap-5 flex-col md:grid-cols-2 lg:grid-cols-2 p-5 bg-blue-950 ">
        <div className="text-white flex flex-col  gap-10">
          <div className="max-w-50  mx-auto bg-gray-900 rounded-full ">
            <img
              src={logo}
              alt=""
              srcset=""
              className="aspect-square max-w-full"
            />
          </div>
          <p className="capitalize text-sm md:text-lg lg:text-xl">
            Dear visitor, Thank you for reaching out. I truly value
            the trust you've placed in me. I am eager to bring our ideas to life
            and am prepared to cooperate fully to ensure our mutual success.
            Looking forward to hearing from you soon."
          </p>
        </div>

        <div className=" border-1 border-gray-600 rounded-2xl p-5 bg-gray-900">
         <MycontactForm/>
        </div>
      </div>  

    </footer>
  );
}



function MycontactForm() {
const [sending,setIsSending] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    const loadingToast = toast.loading("Sending ...");
    setIsSending(true);
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,
       import.meta.env.VITE_TEMPLATE_ID, 
       form.current, 
       import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          setIsSending(false);
          toast.update(loadingToast, { render: "Message Deliverd successfully🎉", type: "success", isLoading: false, autoClose: 3000 })
      }, (error) => {
          toast.update(loadingToast, { render: "Somting Wong Try again ❌", type: "error", isLoading: false, autoClose: 3000 })
          setIsSending(false);
      })
        
      };
 

  return (
    <form  ref={form} className="text-white flex flex-col outline-0 text-xs md:text-sm lg:text-md  gap-3 " onSubmit={sendEmail}>
      <legend className="text-sm md:text-lg lg:text-xl p-2 text-center">Direct Message </legend>
      <label htmlFor="username" className="  capitalize ">
       
        Your Name <br />
        <input
        name="username"
          type="text"
          placeholder="your Name"
          className="border-b w-full p-2 border-blue-500 " required
        />
      </label>
      <label htmlFor="email" className=" capitaliz">
        Email
        <br />
        <input
        name="email"
          type="email"
          placeholder="your Email"
          className="border-b w-full p-2 border-blue-500  " required
        />
      </label>
      <label htmlFor="userMessage" className="  capitaliz">
        {" "}
        Message <br />
        <textarea
        name="message"
          placeholder="leave a message for me"
          className=" border-1 w-full p-2 border-blue-500 resize-x  p-2 "
        ></textarea>
      </label>
      <button
        type="submit"
        className="cursor-pointer bg-black p-2 hover:bg-white hover:text-black transition border border-gray-500"
      >
        { sending ? "Sending...":'Send'}
      </button>
      <ToastContainer />
    </form>
  );

  }