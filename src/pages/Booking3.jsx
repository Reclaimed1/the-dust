
import { useEffect, useState } from 'react';
import Nav from '../cmp/Nav'
import Bedrooms from '../cmp/Bedrooms';
export default function Booking3() {
const [page, setPage] = useState('');
useEffect(() => {
    setPage(<Bedrooms/>);
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