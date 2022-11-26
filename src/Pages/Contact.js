import React, { useContext } from "react";
import logo from "../assets/images/logo.PNG";
import bashy from "../assets/images/bashy.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { AppContext } from "../store/appReducers";

const Contact = () => {
const appCtx = useContext(AppContext)

  return (
    <main className="w-full relative h-screen bg-black overflow-hidden ">
      {   appCtx.showModal  &&  <Menu/>}
      <header className="z-5 flex w-full h-[40px] bg-black justify-between items-center mx-4 ">
        <div className="max-w-[30px] h-[30px] flex items-center justify-between border-2 border-yellow-300">
          <img className="object-cover w-full h-full" src={logo} alt="logo" />
        </div>

        <div className="flex bg-black w-[500px] justify-start  mr-4 items-center  ">
         <Link to='/'><p className=" text-xs ml-4 text-gray-300 font-thin cursor-pointer active:text-yellow-300 hover:text-yellow-300 focus:text-yellow-300">
            Home
          </p></Link> 

          <Link to='/portfolio'  ><p className=" text-xs ml-4 text-gray-300 font-thin cursor-pointer active:text-yellow-300 hover:text-yellow-300 focus:text-yellow-300">
            About
          </p></Link>
          
        <Link to='/journey' ><p className=" text-xs ml-4 text-gray-300 font-thin cursor-pointer active:text-yellow-300 hover:text-yellow-300 focus:text-yellow-300">
            Journey
          </p></Link>  
        <Link  to='/portfolio'  >

         <p className=" text-xs ml-4 text-gray-300 font-thin cursor-pointer active:text-yellow-300 hover:text-yellow-300 focus:text-yellow-300">
            Reinansance Hueman
          </p>
        </Link> 
        <Link to='/community'  > <p className=" text-xs ml-4 text-gray-300 font-thin cursor-pointer active:text-yellow-300 hover:text-yellow-300 focus:text-yellow-300">
            Blog
          </p></Link> 
          <Link to='/contact-form'  >
          <p className=" text-xs ml-4 text-gray-300 font-thin cursor-pointer active:text-yellow-300 hover:text-yellow-300 focus:text-yellow-300">
            Podcast
          </p>
          </Link>
          <Link to='/contact'>
          <p className=" text-xs ml-4 text-gray-300 font-thin cursor-pointer active:text-yellow-300 hover:text-yellow-300 focus:text-yellow-300">
            Contact
          </p>
          </Link>
         
        </div>
      </header>
      <section className="h-[calc(100%-40px)] mt-[20px] w-full mx-4  flex-col flex md:flex-row justify-between items-center">
        <div  className="w-full  lg:w-[40%] mt-2 lg:mt-0 h-1/2 lg:h-full flex  flex-col items-center justify-center lg:justify-end">
  <div className="w-[550px]  mb-12 h-[70px]  ">
  <h1 className="text-3xl  md:text-5xl  text-left flex items-start justify-start  text-yellow-300">Reach out to me on </h1>
          <h1 className="text-3xl  md:text-5xl  text-left flex items-start justify-start  text-yellow-300">my social media handles </h1>
       <p className="text-gray-300 text-sm md:text-md">Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.</p>   
  </div>
       
       
    
          <div className="w-3/5 h-[400px]  flex-col justify-start mt-4 items-center">
            <div className="w-full h-1/2 flex justify-start items-center">
              <div className="bg-black h-[45px] w-[120px] cursor-pointer flex justify-between  items-center ml-2  ">
             <div className="text-yellow-300 shadow-sm bg-gray-700 flex rounded-xl justify-center items-center h-full w-3/5" >
             <FaInstagram className="text-yellow-300 shadow-sm  h-3/5 w-3/5   " />
           
              </div> 
              <p  className="text-gray-300 ml-1">Instagram</p>
              </div>
              <div className="bg-black h-[45px] w-[100px] cursor-pointer flex justify-between  items-center ml-2  ">
             <div className="text-yellow-300 shadow-sm bg-gray-700 flex rounded-xl justify-center items-center h-full w-3/5"> 
              <FaLinkedinIn className="text-yellow-300 shadow-sm  h-3/5 w-3/5  " /></div>
                <p  className="text-gray-300 ml-1">Linkedln</p>
              </div>
            </div>
         
            <div className="w-full h-1/2 flex justify-start -mt-20 items-center">
              <div className="bg-black h-[45px] w-[100px] cursor-pointer flex justify-between  items-center ml-2  ">
               <div  className="text-yellow-300 shadow-sm bg-gray-700 flex rounded-xl justify-center items-center h-full w-3/5" >
                <FaTwitter className="text-yellow-300 shadow-sm  h-3/5 w-3/5  " /></div> 
                <p  className="text-gray-300">Twitter</p>
              </div>
              <div className="bg-black h-[45px] w-[120px] cursor-pointer flex justify-between  items-center ml-2  ">
             <div   className="text-yellow-300 shadow-sm bg-gray-700 flex rounded-xl justify-center items-center h-full w-3/5" >
               <FaFacebookF className="text-yellow-300 shadow-sm  h-3/5 w-3/5  " /></div>  
                <p  className="text-gray-300 ml-1">Facebook</p>
              </div>
            </div>
            </div>
          </div>
 
        <div className="w-full lg:w-1/2 mt-2 lg:mt-0 h-1/2 lg:h-full  bg-black flex items-center justify-center lg:justify-end">
        <img src={bashy} alt="bashy" className="w-full h-full object-cover" />
      </div>
      </section>
    </main>
  );
};

export default Contact;
