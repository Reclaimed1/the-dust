import Nav from "../cmp/Nav"
import Footer from "../cmp/Footer"
import { useState } from "react"
export default function Contact() {
  const [fname, setFname]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const [sname , setSname]=useState("");
  const [message, setMessage]=useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if(fname.trim() === "") {
      alert("Please Enter Your first Name");
      return;
    }
    if(email.trim() === "") {
      alert("Please Enter Your Email");
      return;
    }
    if(phone.trim() === "") {
      alert("Please Enter Your Phone Number");
      return;
    }
    if(message.trim() === "") {
      alert("Please Enter Your First Name");
      return;
    }
    if(sname.trim() === "") {
      alert("Please Enter Your Last Name");
      return;
    }
    alert("Form Submitted Successfully!");
    setSname("");
    setEmail("");
    setPhone("");
    setFname("");
    setMessage("");
  }  
  return ( 
       <div className="relative h-350 lg:h-290 lg:bg-[#e7e6e6]">
<Nav/>
<div className="grid grid-cols-1 md:grid-cols-2">
  <div className="hidden md:block">
    <img className="lg:px-9 lg:py-6 " src="contact.jpg" alt="" />
  </div>
<form className="px-4 py-4 lg:bg-white lg:rounded-xl lg:my-5 lg:mx-3  " action="" >
  <div className="">
<h1 className="text-2xl font-bold">Lets's Get In Touch</h1>
<p>Or just reach out manually to contact@thedust.com</p>
<div className="flex py-7 lg:relative">
  <div className=" ">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="absolute top-70 left-5 lucide lucide-user-round-icon lucide-user-round lg:top-18 lg:left-1"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
  <label htmlFor="">First Name</label>
  <input value={fname} onChange={(e) => setFname(e.target.value)} className="border rounded-full px-5 py-1.5 my-2 w-full" type="text" placeholder="Enter your first name" />
  </div>
  <div className="mx-4">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="absolute top-70 right-56 lucide lucide-user-round-icon lucide-user-round lg:top-18 lg:right-140.5"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
  <label htmlFor="">Last Name</label>
  <input value={sname} onChange={(e) => setSname(e.target.value)}  className="border rounded-full px-5 py-1.5 my-2 w-full" type="text" placeholder="Enter your last name" />
  </div>
</div>
<div>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="absolute top-97 left-5 lucide lucide-mail-icon lucide-mail lg:left-246 lg:top-104"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  <label htmlFor="">Email Address</label>
  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="border rounded-full px-5 py-1.5 my-2 w-full lg:px-7" placeholder="Enter your email address....." />
</div>
<div>
  <label htmlFor="">Phone Number</label>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="absolute top-116.5 left-5 lucide lucide-phone-icon lucide-phone lg:left-246 lg:top-124 lg: "><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border rounded-full px-5 py-1.5 my-2 w-full lg:px-7   [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" name="" id="" placeholder="+2348123456789"/>
</div>
<div>
  <label htmlFor="">Message</label>
  <textarea onChange={(e) => setMessage(e.target.value)} value={message} rows="5" className="border rounded-md px-2 py-1.5 my-2 w-full" placeholder="Enter your main message here" name="" id=""></textarea>
</div>
<div className="rounded-full bg-[#93C461] text-center py-2 mx-10 lg:mt-1">
  <a className="w-full" onClick={handleSubmit} href="">Submit Form</a>
</div>
</div>
</form>
</div>
<div className="absolute bottom-0 w-full">
<Footer/>
</div>
    </div>
  )
}