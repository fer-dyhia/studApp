import React from "react"
import logo from "../../images/logo.png"
import {RiCloseCircleFill} from "react-icons/ri"

const ImageSending = () => {
    return (
        <div className="mr-3">
            <RiCloseCircleFill className="absolute text-gray-600 cursor-pointer"/>
            <img className="w-16 h-16" src={logo}/>
        </div>
    )
}

export default ImageSending