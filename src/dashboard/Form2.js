import React, { useState } from 'react'
import Signin from './SignIn'
import FormSuccess from './FormSuccess'

const Form2 = (error) => {
    const [isLoginned, setIsLoginned] = useState(false)

    function loginForm() {
        setIsLoginned(true)
    }
    return <div>{!isLoginned ? <Signin loginForm={loginForm} /> : <FormSuccess />}</div>
}

export default Form2
