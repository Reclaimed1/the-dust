import { useNavigate } from "react-router-dom"
export default function Bathrooms() {
    const navigate = useNavigate();
    function handleClick(e) {

        e.preventDefault();
        navigate("/booking3")
      }
  return (
    <div>
       <div className="transition-fade flex flex-col text-[#759455] space-y-5 items-center justify-center h-115">
        <h1 className="font-bold text-3xl">BATHROOMS</h1>
            <p className="text-xl">How many Bathrooms do you have</p>
            <div className="grid grid-cols-3 gap-5 text-center md:grid-cols-6">
               <div onClick={handleClick}className="bg-[#759455] rounded-sm p-9 hover:scale-110 transition-all hover:bg-[#afe876]">
                <h1 className="bg-white text-4xl p-2 rounded-4xl">0</h1>
               </div>
                <div onClick={handleClick}className="bg-[#759455] rounded-sm p-9 hover:scale-110 transition-all hover:bg-[#afe876]">
                <h1 className="bg-white text-4xl p-2 rounded-4xl">1</h1>
               </div>
                <div onClick={handleClick}className="bg-[#759455] rounded-sm p-9 hover:scale-110 transition-all hover:bg-[#afe876]">
                <h1 className="bg-white text-4xl p-2 rounded-4xl">2</h1>
               </div>
                <div onClick={handleClick}className="bg-[#759455] rounded-sm p-9 hover:scale-110 transition-all hover:bg-[#afe876]">
                <h1 className="bg-white text-4xl p-2 rounded-4xl">3</h1>
               </div>
                <div onClick={handleClick}className="bg-[#759455] rounded-sm p-9 hover:scale-110 transition-all hover:bg-[#afe876]">
                <h1 className="bg-white text-4xl p-2 rounded-4xl">4</h1>
               </div>
                <div onClick={handleClick}className="bg-[#759455] rounded-sm p-9 hover:scale-110 transition-all hover:bg-[#afe876]">
                <h1 className="bg-white text-4xl p-2 rounded-4xl">5+</h1>
               </div>
            </div>
       </div>
     </div>
  )
}