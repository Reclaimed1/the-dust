import BookAndContact from "./BookAndContact"

export default function BodyTlanding() {
  return (
    <div>
        <div className="bg-[#175046] py-10 text-center px-7">
            <div className=" text-white font-bold leading-relaxed  text-5xl py-7 mb-5 md:text-6xl md:mb-3">
                <h1 className="font-serif">Professional Cleaning service</h1>
            </div>
            <div className="space-y-12 mb-15 md:text-xl md:mx-40">
            <p className="text-white  font-serif ">The Dust cleaning provides trusted, high quality
                cleaning services for residential and commercial properties. We ofer a range of customizable options
                like one-time, recurring, post-construction and deep cleaning services.
            </p>
            <BookAndContact />
        </div>
        </div>
    </div>
  )
}