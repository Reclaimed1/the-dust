import Swup from 'swup';
const swup = new Swup();
import { useEffect, useState } from 'react';
import Nav from '../cmp/Nav'
import Bathrooms from '../cmp/Bathrooms';
export default function Booking2() {
const [page, setPage] = useState('');
useEffect(() => {
    setPage(<Bathrooms/>);
},[])
  return (
    <div id="swup" className='transition-fade'>
<Nav/>
<div>
{page}
</div>
    </div>
  )
}