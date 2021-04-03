import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnlineUsers } from "../../../Redux/Actions/userActions";
import logo from "../../images/logo.png";

const PeopleList = (props) => {
 const userData=useSelector((state)=>state.user)
 const [user,setUser]=useState("")
 console.log(userData.followers)
 const removeSelected=()=>{setUser("");props.select("")}
 const selectUser=(follower) => {
   console.log(follower)
   setUser(follower.username);
   props.select({username:follower,userImage:follower.imageUrl});
 }

 const selectChat = (e,username) => {
  for (
    let index = 0;
    index < e.currentTarget.parentNode.children.length;
    index++
  ) {
    e.currentTarget.parentNode.children[index].classList.remove("active");
  }
  setUser(username);
  props.select(username);
  e.currentTarget.classList.add("active");}
  console.log(user)
  return (
    
    
      <div>
        {userData.followers.length>0 ? userData.followers.map((follower) => {
          return(
          <div   onClick={(e)=>selectChat(e,follower)}
            className={`bg-gray-50 rounded-md flex flex-1 items-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg mb-1 chatlist__item ${
             props.active ? props.active : ""}`}>
            
          <div class="flex flex-col rounded-full w-12 h-12 bg-transparent justify-center items-center mx-4">
            <img
              className="rounded-full h-16 w-16"
             src={follower.imageUrl}          
            />
          </div>
          <div class="flex-1 pl-1 mr-16">
            <div class="font-medium flex-col justify-evenly ">
             {follower.username} 
            </div>
          </div>
          
          {/* {console.log(follower.username==user)}
          {follower.username==user ?(<button   className="w-24 p-2 rounded-full text-black transition duration-500 ease-in-out bg-white hover:bg-gray-100 hover:text-gray-800 border-2 border-gray-500 shadow-md focus:outline-none" onClick={console.log("hesss")}>
            Add
          </button>) :(<button  className="w-24 p-2 rounded-full text-white transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-600 shadow-md focus:outline-none" onClick={removeSelected}>
            Add
          </button>)

        }
           */}

        </div>
          )
        }):null}
</div>
      
   
  );
};
export default PeopleList;
