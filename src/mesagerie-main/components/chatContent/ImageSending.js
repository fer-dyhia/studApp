import React from "react"
import logo from "../../images/logo.png"
import {RiCloseCircleFill} from "react-icons/ri"

const ImageSending = (props) => {
    return (
        <div className="mr-3 pb-2">
            <RiCloseCircleFill onClick={()=>props.removeImage()} className="absolute text-gray-600 cursor-pointer hover:text-red-500 transition duration-500 ease-in-out "/>
            <img className="w-26 h-24 rounded-lg " src={props.image}/>
        </div>
    )
}

export default ImageSending