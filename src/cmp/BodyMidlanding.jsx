import BookAndContact from "./BookAndContact"
import Ins from "./ins"
export default function BodyMidlnading() {
  return (
    <div>
        <div className="md:relative md:mb-100 md:bg-gradient-to-b from-[#175046] to-white md:pt-20">
            <div className=" px-5 py-6 bg-[#B6F378] md:w-3/7 md:pl-50 md:py-30 md:pr-10  ">
              <p>
                <span className="block py-3 font-bold text-xl md:text-2xl">About Us</span>

<span className="md:text-xl">At The Dust, we believe a clean space is a happy place. Based in 
Nigeria, we are a dedicated team of professionals who take pride in 
delivering top-notch residential and commercial cleaning services. With 
a focus on reliability, attention to detail, and customer satisfaction,
 were committed to making your environment spotless and stress-free.
  Whether its your home, office, or special event venue, we show up 
  ready to make it shine.</span>
</p>

<p className="pt-4 italic">Let us handle the mess—so you can enjoy the rest....<spam className='text-blue-500 underline'><a href="/about">Read More</a></spam></p>
            </div>
            <div className="mx-2 md:absolute top-95 left-190 ">
              <img src="midpic.png" alt="" />
            </div>
        </div>
        <div className="text-center py-6 bg-[#f6f9f8e4]">
        <div>
          <div className="text-3xl md:text-4xl font-bold py-6">
          <h1>Why choose Our House Cleanig Services?</h1>
          </div>
          <div className="py-3 pb-5 md:text-xl md:mx-100">
          <p>We take pride in out exceptional house cleaning services, but thats not all, 
            we go the extra mile to provide increddible benefits that truly enhance your overall 
            experience with us!.
          </p>
          </div>
          <div className="py-8">
          <BookAndContact />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-7 md:px-18">
         <div className=" bg-white rounded-md shadow-md p-5 mx-6">
          <div className="block w-10 mx-auto bg-[#f6f9f8e4] rounded-full p-1" >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#70bd27" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
          </div>
          <div className="text-[#4b682de4] font-semibold text-md py-5">
          Experienced & professional
          </div>
          <p>Our skilled team brings years of expertise and a commitement to high-quality, reliable cleaning-every time. </p>
         </div>
         
         <div className=" bg-white rounded-md shadow-md p-5 mx-6">
          <div className="block w-10 mx-auto bg-[#f6f9f8e4] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#70bd27" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-search-icon lucide-file-search"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="m9 18-1.5-1.5"/><circle cx="5" cy="14" r="3"/></svg>
          </div>
     <div className="text-[#4b682de4] font-semibold text-md py-5">
          Background & reference checked
          </div>
          <p>All cleaners are carefully vetted through Background checks and verified references fro your epace of mind </p>
         </div>

         <div className=" bg-white rounded-md shadow-md p-5 mx-6">
          <div className="block w-10 mx-auto bg-[#f6f9f8e4] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#70bd27" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
          </div>
     <div className="text-[#4b682de4] font-semibold text-md py-5">
          English speaking
          </div>
          <p>All cleaners speak fluent English fro clear Communication </p>
         </div>

         <div className=" bg-white rounded-md shadow-md p-5 mx-6">
          <div className="block w-10 mx-auto bg-[#f6f9f8e4] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#70bd27" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
          </div>
               <div className="text-[#4b682de4] font-semibold text-md py-5">
          Interviewed in-person
          </div>
          <p>Every cleaner is personally interviewed to ensure quality and professionalism </p>
         </div>

         <div className=" bg-white rounded-md shadow-md p-5 mx-6">
          <div className="block w-10 mx-auto bg-[#f6f9f8e4] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#70bd27" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          </div>
               <div className="text-[#4b682de4] font-semibold text-md py-5">
          Highly rated by customers
          </div>
          <div className="mx-6">
          <p>Consistently rated 5 stars by our happy customers. </p>
          <p>Loved and highly rated by our clients.</p>
          </div>
         </div>

         <div className=" bg-white rounded-md shadow-md p-5 mx-6">
          <div className="block w-10 mx-auto bg-[#f6f9f8e4] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#70bd27" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
          </div>
               <div className="text-[#4b682de4] font-semibold text-md py-5">
          Cost effective
          </div>
          <p>Our prices are unbeatable for services we are ready to offer, there is always a price for you </p>
         </div>
          </div>
          <Ins/>
          </div>
    </div>
  )}