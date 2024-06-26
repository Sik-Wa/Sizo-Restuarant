import  { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import img from '../../assets/menu.jpg'
export const Hero = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={img}
        subheading="MUNATI !!"
        heading="WA-SIZO-SALUNA."
      >
        <Content />
      </TextParallaxContent>
     
    <Cards/>
    <Times/>
    <Footer/>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl flex items-center justify-center font-bold md:col-span-4">
      HELLO 
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl break-all">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <Link to='/' className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);

//  put this in the div  
 
 export const Cards = () => {
   return (
     <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    
     

    
 <h2 className="col-span-1 text-3xl flex items-center justify-center font-bold md:col-span-4">
        <div style={{backgroundImage:`url(${img})`}} className=" col-span-2 w-full bg-black bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Check out our Menu.</p>
             <p className=" text-sm">
              Explore the core essence of our existence.
               
             </p>
             <Link className=" px-2 py-2 rounded flex items-center justify-center font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>See Menu</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl flex items-center justify-center text-white ">
          MENU 
          </Link>
          </div>
    </h2>
    <h2 className="col-span-1 text-3xl flex items-center justify-center font-bold md:col-span-4">
    <div className="col-span-2 w-full bg-black bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Learn about our roots.</p>
             <p className=" text-sm">
              
             </p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>Click</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl flex items-center justify-center text-white ">
          Our Origin
          </Link>
          </div>
    </h2>
    <h2 className="col-span-1 text-3xl flex items-center justify-center font-bold md:col-span-4">
    <div className="col-span-2 w-full bg-black bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">.</p>
             <p className=" text-sm break-all">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Odit similique ipsa ipsam. Facilis iusto placeat amet. Voluptas qui porro fuga.
             </p>
             <Link className=" px-2 py-2 rounded items-center justify-center flex font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>See Menu</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl flex items-center justify-center text-white ">
          Book/Reserve
          </Link>
          </div>
    </h2>
    </div>
    
   )
 }


 
 export const Times = () => {
   return (
     <div className=" flex flex-col  items-center justify-end gap-4 bg-pink-300 md:gap-10 border border-gray-400">
      <div className=" mt-4 flex flex-col items-center justify-center md:py-8 ">
      <h2 className=" font-extrabold text-4xl">Time and Days</h2>
      <h3 className=" font-bold text-lg">Tuesday - Thursday <br /> 
      <span className=" font-medium text-base flex items-center justify-center"> 06:30 - 22:30</span></h3>
      <h3 className=" font-bold text-lg">Friday<br /> 
      <span  className=" font-medium text-base flex items-center justify-center"> 06:30 - 23:30</span></h3>
      <h3 className=" font-bold text-lg">Saturday<br /> 
      <span  className=" font-medium text-base flex items-center justify-center"> 06:30 - 23:30</span></h3>
      <h3 className=" font-bold text-lg">Sunday<br /> 
      <span  className=" font-medium text-base text-gray-500
       flex items-center justify-center line-through ">OFF</span></h3>
     
      </div>
     </div>
   )
 }
 
 


export const Footer = () => {
  return (
    
    <div className=" flex flex-col  items-center justify-center gap-4 bg-black md:gap-10 border border-gray-400">
    <div className=" mt-4 flex flex-col items-center justify-center md:py-8 ">
   <div className=" mt-14 bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">SIZO</h1>
          <p className=" mb-2 text-sm">
    
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem
            ea alias labore voluptatem sed assumenda, ipsum maxime ratione ipsa?
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            pages Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/about"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our Menu
            </Link>
            <Link
              to="/services"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Order
            </Link>
          </div>
        </div>

        <div>
          <Link to='/' className="mt-2 underline flex text-center justify-center font-semibold text-xl pb-4 pt-5 md:pt-0">
            Make a reservation
          </Link>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Breakfast
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Lunch
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Dinner
            </Link>
            <Link
              to="/"
              className=" rounded border flex text-center justify-center hover:translate-x-3 transition duration-200 ease-linear"
            >
              Book us
            </Link>
          </div>
        </div>

        <div>
          <Link to='/' className=" mt-2 underline flex text-center justify-center font-semibold text-xl pb-4 pt-5 md:pt-0">
            Learn More
          </Link>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our History
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our Location
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our Team
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
             Contact us
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-primary font-semibold mx-2">
            Sikwa
          </span>
          | All rights reserved
        </p>
      </div>
    </div>
    </div>
   </div>
  )
}



