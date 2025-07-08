import { useState } from "react"


export default function Nav() {
    const [menue, setMenue] = useState(false)
    const des=menue ? 'block' : 'hidden';
    
function handleMenue() {
    setMenue(!menue)
}
  return (
    <div className="sticky top-0 z-50">
        <div className="flex justify-between bg-[#15312c] py-2 md:px-7">
        <div></div>
        <div className="flex justify-between text-white space-x-3 md:space-x-10">
            <div className="flex ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>01126112
</div>
<div className="flex">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>contact@thedust.com
       </div>
        </div>
        <div className="flex space-x-2 md:space-x-5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>   
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#175046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
        </div>
        </div>
        <div className="flex justify-between bg-[#175046] relative px-4 py-3 md:px-18 ">
        <div>
            <img src="logo.png" alt="" />
        </div>
    
        <div className={` z-10 bg-[#93C461] absolute top-17 right-0 w-40 rounded-md shadow-xl/30 text-center md:flex md:relative md:right-0 md:top-0 md:w-full  md:bg-[#175046] md:shadow-none ${des}`}>
            <div className="space-y-4 py-2 text-md my-3 md:flex md:space-x-10 ml-auto  ">
                <div className="md:flex md:space-x-20   md:mr-80 md:font-semibold md:text-xl md:text-white ">
        <a className="block hover:underline underline-offset-6 hover:text-white md:flex" href="/">Home</a>
        <a className="block hover:underline underline-offset-6 hover:text-white md:flex" href="/about">About Us</a>
        <a className="block hover:underline underline-offset-6 hover:text-white md:flex" href="/loading">Services</a>
        <a className="block hover:underline underline-offset-6 hover:text-white md:flex" href="#try">Cities</a>
        <a className="block hover:underline underline-offset-6 hover:text-white md:flex" href="/contact">Contact Us</a>
        </div>
        <div className="block md:flex md:py-1.5 transition-all hover:scale-110 rounded-md mx-2 md:mx-6  bg-[#5e7d3f] text-white hover:text-gray-300 md:ml-30">
        <a  className="px-3 py-2" href="/Loading">BOOK NOW</a>
        </div>
        </div>
           </div>

         <div>
            
            <svg className="block md:hidden lucide lucide-menu-icon lucide-menu mt-6" onClick={handleMenue} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
        </div>
    </div>
   
    </div>
  )
}