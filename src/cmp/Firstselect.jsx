import Swup from 'swup';
const swup = new Swup();
export default function Firstselect() {
  return (
    <div>
         <div id="swup" className='transition-fade items-center justify-center w-80 mx-auto text-center text-[#93C461] my-10 space-y-5 md:w-110 md:space-y-9'>
                <h1 className="text-5xl font-bold md:text-7xl ">Welcome to The Dust</h1>
                <p className='md:text-xl'>We will just ask you some quick questions to see how we can help you, thank you</p>
                <a className='text-white bg-[#93C461] px-2 rounded-md text-xl py-1.5 md:px-4' href="/Booking">Let's do it!</a>
          </div>

    </div>
  )
}

