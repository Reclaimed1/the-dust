import Nav from "../cmp/Nav"
import Footer from "../cmp/Footer"
import MakeLifeEasy from "../cmp/MakeLifeEasy"
export default function AboutUs() {
  return (
    <div >
      <div className="z-1">
      <Nav/>
      </div>
      <div className="relative h-500 lg:h-400">
        <div className="bg-[#e0e1e1dc] px-7 rounded-md shadow-lg/40 mx-3 py-5 lg:mx-10 lg:py-10 lg:my-10">
         <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:py-10 lg:px-18">
          <div>
            
              <img className="w-100 pb-3 lg:w-200 lg:h-100" src="about.jpg" alt="ehn no dey" />
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#e4dfdf] shadow-sm/20 py-3 px-4 rounded-md">
                  <h1 className="font-bold text-xl">3.5</h1>
                  <p>Years of Experience</p>
                </div>
                <div className="bg-[#e4dfdf] shadow-sm/20 py-3 px-4 rounded-md">
                  <h1 className="font-bold text-xl">400+</h1>
                  <p>Cleaning Gig</p>
                </div>
                <div className="bg-[#e4dfdf] shadow-sm/20 py-3 px-4 rounded-md">
                  <h1 className="font-bold text-xl">900+</h1>
                  <p >Positive reviews</p>
                </div>
                <div className="bg-[#e4dfdf] shadow-sm/20 py-3 px-4 rounded-md">
                  <h1 className="font-bold text-xl">10</h1>
                  <p>States Covered</p>
                </div>
              </div>
          </div>

          <div className="lg:px-10 lg:space-y-5">
            <p className="text-orange-500">How it started</p>
            <h1 className="text-4xl font-bold lg:text-6xl">Our Dream Is Keeping Nigeria Clean One House At A Time</h1>
          <div className="py-5 lg:text-lg">
            <p>The Dust was founded by Mr Junaid and his vision is a clean nigeria, even if he had to do it one house at a time</p>
          <br />
          <p>Welcome to The Dust Where Clean Meets Comfort
At The Dust, we believe a clean space is a happy place. More than just a cleaning service, we’re your trusted partner in creating healthier, more organized, and truly refreshing environments. Based in the heart of Nigeria, we are a passionate team of professionals with a clear mission: to take the stress out of cleaning so you can focus on what truly matters.

From cozy apartments and bustling offices to event venues and everything in between, we bring the same level of care and attention to every space. Our clients rely on us for our reliability, eye for detail, and unwavering commitment to quality.</p>
          </div>
          </div>

         </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 lg:px-18">
  <div className="bg-[#e4dfdf] rounded-md shadow-xl/20 px-3 py-4 lg:px-10"> 
<p className="text-orange-500">Our Vision</p>
<br />
<div>
<h1>Proudly Nigerian, Globally Inspired</h1>
</div>
<p>At The Dust, we blend local values with international standards to offer a service that’s professional, personal, and affordable. We take pride in uplifting communities by promoting clean, healthy, and organized living and working spaces.</p>
  </div>
  
  <div className="bg-[#e4dfdf] rounded-md shadow-xl/20 px-3 py-4 lg:px-10"> 
<p className="text-orange-500">Our Mission</p>
<br />
<div>
<h1>Ready to Experience the Difference?</h1>
</div>
<p>Let us take care of the dust, so you can enjoy the rest. Contact us today to book your service or request a free quote. At The Dust, we don’t just clean—we care</p>
  </div>
</div>

        </div>
        <div className="absolute bottom-130 w-full lg:bottom-100 ">
        <MakeLifeEasy />
        </div>
      <div className="absolute bottom-0 w-full">
      <Footer />
      </div>
      </div>
    </div>
  )
}