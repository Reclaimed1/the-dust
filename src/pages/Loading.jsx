import Swup from 'swup';
const swup = new Swup();
import Nav from '../cmp/Nav';
import Footer from '../cmp/Footer';
import Firstselect from '../cmp/Firstselect';
import BodyLoading from '../cmp/BodyLoading';
import { useState,useEffect, use } from 'react';
export default function Loading() {
  const [Page1 , setPage1] = useState(false);
  const [page, setPage] = useState('');
  useEffect(() => {
    setPage(<BodyLoading />);
  },[])
// bg-[#93C461] rounded-md w-30 text-center py-1.5 mx-auto item-center
 const tpage=Page1 ? 'hidden' : ' block';
 const tbutton=Page1 ? 'block ' : 'hidden';
 function handlePage1() {
setPage1(!Page1)
 }
useEffect(() => {
  setInterval(() => {
    setPage(<Firstselect />);
  }, 5000);
},[])
 
  return (
    <div className='h-screen relative'>
        <Nav />
        <div id="swup"  className={` ${tpage}`} >
        {page} 
       </div>
       
<div className={`transition-fade ${tbutton} `}>
{/* <a href="/Booking">Click here to proceed</a> */}
</div>
<div className='absolute bottom-0 w-full'>
  <Footer/>
</div>
    </div>
  )
}