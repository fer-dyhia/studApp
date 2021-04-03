import React from "react"
import logo from "../../images/logo.png"
const ImgSent =(props) => {
    return (
        <div className="h-44 w-48">
            <img src={props.imageUrl} className="w-full h-full rounded-lg"/>
        </div>
    )
}

export default ImgSent