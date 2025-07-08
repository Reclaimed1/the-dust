import Swup from "swup"
const swup = new Swup();
import spinner from '../assets/let.gif'
export default function BodyLoading() {
  return (
    <div>
        <div id="swup" className="transition-fade flex flex-col items-center justify-center w-full space-y-10  text-center">
         <h1 className="text-5xl font-bold">Verifying your browser</h1>
         <p>please wait while we verify if you are human...</p>
         <p>Please keep your face in front of the camera and shhh</p>
        <img className="w-30" src={spinner} alt="" />
        </div>
    </div>
  )
}