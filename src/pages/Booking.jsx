import Swup from 'swup';

import Nav from '../cmp/Nav'
import Footer from '../cmp/Footer'
export default function Booking() {
       const swup = new Swup();
  return (
    <div className=' '>
        <Nav/>
        <div id="swup" className='my-6 px-7 transition-fade flex flex-col items-center text-center justify-center h-[50%] lg:space-y-9 lg:my-20'>
            <h1 className='text-3xl text-[#93C461] font-bold lg:text-5xl'>What services do you need?</h1>
            <div className='grid grid-cols-2 gap-5 my-5 text-white lg:grid-cols-3'>
            <a href='/booking2' className='bg-[#93C461] hover:scale-115 transition-all rounded-sm space-y-5 justify-center items-center flex flex-col p-5'>
               <img className='w-20 ' src="house.jpg" alt="" />
               <h1 className='text-lg'>Regular Domestic Clean</h1>
            </a>
             <a href='/booking2' className='bg-[#93C461] hover:scale-115 transition-all rounded-sm space-y-5 justify-center items-center flex flex-col p-5'>
               <img className='w-20 ' src="company.jpg" alt="" />
               <h1 className='text-lg'>Commercial Cleaning</h1>
            </a>
             <a href='/booking2' className='bg-[#93C461] hover:scale-115 transition-all rounded-sm space-y-5 justify-center items-center flex flex-col p-5'>
               <img className='w-20 ' src="carpett.jpg" alt="" />
               <h1 className='text-lg'>Carpet Cleaning</h1>
            </a>
             <a href='/booking2' className='bg-[#93C461] hover:scale-115 transition-all rounded-sm space-y-5 justify-center items-center flex flex-col p-5'>
               <img className='w-20 ' src="spring.jpg" alt="" />
               <h1 className='text-lg'>spring cleaning</h1>
            </a>
             <a href='/booking2' className='bg-[#93C461] hover:scale-115 transition-all rounded-sm space-y-5 justify-center items-center flex flex-col p-5'>
               <img className='w-20 ' src="tenancyy.jpg" alt="" />
               <h1 className='text-lg'>End-of-tenancy clean</h1>
            </a>
             <a href='/booking2' className='bg-[#93C461] hover:scale-115 transition-all rounded-sm space-y-5 justify-center items-center flex flex-col p-5'>
               <img className='w-20 ' src="professonal.jpg" alt="" />
               <h1 className='text-lg'>Other Cleaning</h1>
            </a>
            </div>
              </div>

    </div>
  )
}