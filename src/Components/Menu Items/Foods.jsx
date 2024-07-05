import { Link } from "react-router-dom";
import vid from "../../assets/Food.mp4";
import vid1 from "../../assets/chapatti.mp4";
import vid2 from "../../assets/coffee.mp4";
import vid3 from "../../assets/meat.mp4";
const Foods = () => {
  return (
    <div>
      <div className=" w-full mx-auto  min-h-screen  flex-col items-center justify-center overflow-hidden ">
        <div className=" w-full grid grid-cols-1 md:grid-cols-4 items-center justify-center  gap-1">
          <div
            className=" mt-5 w-full bg-cover overflow-hidden  
          flex col-span-4 md:row-span-10 h-[300px] md:h-[800px]"
          >
            <video autoPlay loop muted>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div>
          <div>
            <h2 className=" flex items-center justify-center underline font-semibold">
              OUR MENU
            </h2>
            <div className=" mt-4 text-left">
              <p className=" block text-sm break-all">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ipsa quam magnam incidunt ut, excepturi corrupti tempora
                accusantium explicabo voluptas? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis, qui temporibus
                asperiores in error autem laboriosam sequi earum eos magni
                repellendus, molestiae illo voluptates eligendi assumenda nobis
                eius. Incidunt itaque harum quisquam ex reiciendis ipsam ab enim
                magnam tenetur? Minus necessitatibus aliquam eligendi nobis, at
                perspiciatis illum magnam excepturi vitae!
              </p>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 md:grid-cols-4 items-center justify-center mt-4  gap-2">
          <div
              className="  w-full bg-cover overflow-hidden  
          flex col-span-4 md:col-span-2 h-[300px] md:h-[500px]"
            >
              <div className=" w-full bg-cover">

             
              <video autoPlay loop muted>
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className=" flex items-center justify-center">
                <h1>stuff</h1>
              
              </div>
              </div>
            </div>
            <div
              className="  w-full bg-cover overflow-hidden  
          flex col-span-4 md:col-span-2 h-[300px] md:h-[500px]"
            >
              <div className=" w-full bg-cover">

             
              <video autoPlay loop muted>
                <source src={vid2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className=" flex items-center justify-center">
                <h1>stuff</h1>
              
              </div>
              </div>
            </div>
           
            <div
              className="  w-full bg-cover overflow-hidden  
          flex col-span-4 md:col-span-4 h-[300px] md:h-[800px]"
            >
              <div className=" w-full bg-cover overflow-hidden">
              <video autoPlay loop muted>
                <source src={vid3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </div>
              <div>
              <h1>stuff</h1>
              </div>
              <div>
                
              
              </div>
            </div>
            <div
              className="  w-full bg-cover overflow-hidden  
          flex col-span-4 md:col-span-2 h-[300px] md:h-[500px]"
            >
              <div className=" w-full bg-cover">

             
              <video autoPlay loop muted>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className=" flex items-center justify-center">
                hey
              
              </div>
              </div>
            </div>
            <div
              className="  w-full bg-cover overflow-hidden  
          flex col-span-4 md:col-span-2 h-[300px] md:h-[500px]"
            >
              <div className=" w-full bg-cover">

             
              <video autoPlay loop muted>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className=" flex items-center justify-center">
                hey
              
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col  items-center justify-center gap-4 bg-black md:gap-10 border border-gray-400">
        <div className=" mt-4 flex flex-col items-center justify-center md:py-8 ">
          <div className=" mt-14 bg-secondary text-white">
            <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
              <div className=" w-full md:w-1/4">
                <h1 className=" font-semibold text-2xl pb-4">SIZO</h1>
                <p className=" mb-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  autem ea alias labore voluptatem sed assumenda, ipsum maxime
                  ratione ipsa?
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
                <Link
                  to="/"
                  className="mt-2 underline flex text-center justify-center font-semibold text-xl pb-4 pt-5 md:pt-0"
                >
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
                <Link
                  to="/"
                  className=" mt-2 underline flex text-center justify-center font-semibold text-xl pb-4 pt-5 md:pt-0"
                >
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
                <span className=" text-primary font-semibold mx-2">Sikwa</span>|
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
