import React, { Component } from 'react'

import Ident from '../header/ident'
import Funct from '../header/funct'

import profilepic from '../../img/me.jpg'

const Header = (props) => {
    return (
        <div class='relative flex flex-row shadow-lg h-48 w-full'>
            <img className='absolute w-full h-full z-0' src={props.cover} />

            <Ident name={props.name} domain='Computer Science Student' img={props.img} />

            <Funct />
        </div>
    )
}

export default Header
