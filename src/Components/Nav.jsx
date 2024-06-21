import { useState } from "react"
import { Link } from "react-router-dom"
import {AiOutlineClose} from 'react-icons/ai'
import {RiMenuUnfoldFill} from 'react-icons/ri'

 
 const Nav = () => {
    const [menu,setMenu] = useState(false);
    const handleChange = () => {
        
        setMenu(!menu);
        
    };
   return (
    <header className=" w-full z-50 fixed py-4 px-3 
     bg-gradient-to-br from-transparent bg-slate-200 
     shadow shadow-black">
        {/* Desktop nav section  */}
        <nav className=" container flex justify-between">
{/* THe logo section */}
<div className=" flex items-center gap-2 text-lg font-mono">
<Link to="/">SIZO</Link>
</div>
{/* Nav in large devices */}
<div className=" hidden md:flex gap-10  items-center font-sans text-xl">
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Home
</Link>
<Link to='/Menu'  className=" transition-shadow shadow-black duration-200 ease-linear">
See Menu
</Link>
<Link to='/Orders'  className=" transition-shadow shadow-black duration-200 ease-linear">
Order-Up
</Link>
<Link to='/Testimonials'  className=" transition-shadow shadow-black duration-200 ease-linear">
Testimonials
</Link>
<Link to='/About'  className=" transition-shadow shadow-black duration-200 ease-linear">
About us
</Link>
<Link to='/Faqs'  className=" transition-shadow shadow-black duration-200 ease-linear">
Faqs
</Link>
</div>
{/* Hamburger Menu Section */}

<div className=" md:hidden flex items-center ">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange}  />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange}  />
          )}
        </div>

{/* The mobile section */}
<div className={`${menu ? " translate-x-0" : " -translate-x-full"}
  md:hidden flex flex-col absolute rounded shadow shadow-black 
        bg-slate-400 text-white from-transparent to-slate-400 
        left-0 top-16 font-serif text-xl text-center pt-8 pb-4 gap-8
        w-3/4 h-fit transition-transform ease-in-out duration-500`}>
            
            <Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Home
</Link>
<Link to='/Menu'  className=" transition-shadow shadow-black duration-200 ease-linear">
See Menu
</Link>
<Link to='/Orders'  className=" transition-shadow shadow-black duration-200 ease-linear">
Order-Up
</Link>
<Link to='/Testimonials'  className=" transition-shadow shadow-black duration-200 ease-linear">
Testimonials
</Link>
<Link to='/About'  className=" transition-shadow shadow-black duration-200 ease-linear">
About us
</Link>
<Link to='/Faqs'  className=" transition-shadow shadow-black duration-200 ease-linear">
Faqs
</Link>
</div>
        </nav>
    </header>
   )
 }
 
 export default Nav