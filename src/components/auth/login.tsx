import { signIn, signUp } from "@/config/auth-service"
import { useState } from "react"
import { Link, useNavigate } from "react-router"

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        if (formData.email === "" || formData.password === "") {
            setError('All fields are required')
            setLoading(false)
            return
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long')
            setLoading(false)
            return
        }
        try {
            const { error } = await signIn(formData.email, formData.password)
            if (error) throw error;
            setSuccess(true)
            setTimeout(() => {
                navigate('/')
            }, 3000)
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    // return jsx
    return (
        <div className="container mx-auto pt-10">
            <h2 className="text-2xl font-bold text-center">Login to taskflow-react</h2>
            <form className="flex flex-col gap-4 w-1/3 mx-auto" onSubmit={handleSubmit}>
                {error && <div role="alert" className="alert alert-error mt-4 text-white">{error}</div>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email..." className="input outline-none w-full" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password..." className="input outline-none w-full" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success" disabled={loading}>{loading ? 'Signing in...' : 'Signin'}</button>
                <p className="text-center">Don't have an account? <Link to="/signup" className="link link-hover text-primary">Signup</Link></p>
            </form>
        </div>
    )
}
