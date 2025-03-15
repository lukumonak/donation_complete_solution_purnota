import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();



    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://donation-complete-solution-purnota-80e5.onrender.com/api/user/signUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
            navigate('/login')

        }
    }
    return { signup, isLoading, error }
}
