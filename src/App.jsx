import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Swup from 'swup';

import Details from './cmp/Details';
import Landing from './pages/Landing'
import Loading from './pages/Loading'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Booking from './pages/Booking'
import Booking2 from './pages/Booking2' 
import Booking3 from './pages/Booking3';
function App() {
    const App = () => {
         const swup = new Swup();
      }
  return (
    
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/loading' element={<Loading />}/>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/booking' element={<Booking/>}></Route>
      <Route path='/booking2' element={<Booking2/>}></Route>
      <Route path='/details' element={<Details/>}></Route>
      <Route path='booking3' element={<Booking3/>}></Route>
    </Routes>
   </Router>
    </>
  )
}

export default App
