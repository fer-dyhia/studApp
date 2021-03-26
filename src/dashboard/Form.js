import React, { useState } from 'react'
import Signup from './SignUp'
import FormSuccess from './FormSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return <div>{!isSubmitted ? <Signup submitForm={submitForm} /> : <FormSuccess />}</div>
}

export default Form
