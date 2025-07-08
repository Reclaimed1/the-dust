import Nav from '../cmp/Nav'
import Swup from 'swup';
import BodyTlanding from '../cmp/BodyTlanding';
import BodyMidlanding from '../cmp/BodyMidlanding';
import BodyBottomlanding from '../cmp/BodyBottomlanding';
import Footer from '../cmp/Footer';
const swup = new Swup();

export default function Landing() {
  return (
    <div className=''>
        <Nav />
        <BodyTlanding />
        <BodyMidlanding />
        <BodyBottomlanding />
        <Footer />
    </div>
  )
}