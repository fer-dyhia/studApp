import { useState, useEffect } from 'react'
import validation2 from './validation2'

const useSignIn = (callback, validation2) => {
    const [details, setDetails] = useState({ pseudo: '', email: '', password: '' })

    const [errors, setErrors] = useState({})
    const [isLoging, setIsLoging] = useState(false)

    const handleSubmit2 = (e) => {
        e.preventDefault()

        setErrors(validation2(details))
        setIsLoging(true)
    }

    const handleChange2 = (e) => {
        const { name, value } = e.target
        setDetails({
            ...details,
            [name]: value,
        })
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isLoging) {
            callback()
        }
    }, [errors])

    return { handleChange2, details, handleSubmit2, errors }
}

export default useSignIn
