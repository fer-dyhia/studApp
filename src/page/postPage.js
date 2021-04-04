import React from 'react'
import {FaSearch  } from 'react-icons/fa';
import {FaPhotoVideo  } from 'react-icons/fa';
import {BsCardText } from 'react-icons/bs';
import {HiOutlineEmojiHappy } from 'react-icons/hi';
import {FiLink } from 'react-icons/fi';
import TextField from '@material-ui/core/TextField';

const postpage = () => {
    return(
        <div className=" rounded-full mt-3  ml-7 mb-10 mr-3 border-4  ">
        <div className=" w-3/5 mt-2 mx-3 items-center  ">

              <form className="mt-3 ml-20">
              <TextField className="w-96 rounded-full" id="outlined-read-only-input"  label="Publier"/>
              </form>  

           <div className=" ml-2 flex flex-row ">   
                <button className="hover:bg-gray-700 bg-green-light  text-black font-bold  px-6  inline-flex items-center rounded-full">
                        <BsCardText className="text-black h-5 w-5 mr-2"></BsCardText>
                       <span >Text</span>
                </button>
                <button className=" hover:bg-gray-700  bg-green-light  text-black font-bold py-2 px-6 rounded-full inline-flex items-center">
                      <FaPhotoVideo className="text-black h-5 w-5 mr-2"></FaPhotoVideo>
                       <span >Photo</span>
                </button>

                <button className="hover:bg-gray-700 bg-green-light  text-black font-bold py-2 px-6 rounded-full inline-flex items-center">
                        <HiOutlineEmojiHappy className="text-black h-5 w-5 mr-2"></HiOutlineEmojiHappy>
                       <span  >Emoji</span>
                </button>


                <button className=" hover:bg-gray-700 bg-green-light text-black font-bold py-2 px-6 rounded-full inline-flex items-center">
                        <FiLink className="text-black h-5 w-5 mr-2"></FiLink>
                       <span  >Lien</span>
                </button>
                <span className=" w-screen md:w-1/3 h-10 cursor-pointer text-sm rounded-full inline-flex items-center">
                         <buttom className=" hover:bg-gray-700 m-3 mr-5 w-5 h-5"> 
                                    <FaSearch></FaSearch>

                            </buttom>
                     </span>
 </div>

        </div>


      </div>
    )}
    export default postpage;