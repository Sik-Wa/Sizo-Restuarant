import {Routes,Route} from 'react-router-dom'
import Orders from './Pages/Orders'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Testimonials from './Pages/Testimonials'
import Faqs from './Pages/Faqs'

function App() {


  return (
    <>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Testimonials' element={<Testimonials/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Faqs' element={<Faqs/>}/>
    </Routes>
    </>
  )
}

export default App
