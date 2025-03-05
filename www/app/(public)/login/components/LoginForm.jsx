'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import authenticateUser from '@/app/(private)/hooks/users/authenticateUser';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, clearError } = authenticateUser()
    const router = useRouter()

    // Ensure fields are filled during page load if browser autofill is enabled
    useEffect(() => {
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');
        setEmail(emailInput.value || '');
        setPassword(passwordInput.value || '');
    }, []);

    // Trigger error toast on error changes
    useEffect(() => {
        if (error) {
            toast.error(error)
        }
        clearError()
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);
        const isLoggedIn = await login(email, password)
    
        if (isLoggedIn) {
            // Trigger success toast
            toast.success('Successfully logged in.');
            
            // Wait 1500ms and redirect user
            setTimeout(() => {
                router.push('/roulette')
            }, 1500)
            
        }
    };

    return (
        <div className="flex items-center justify-center w-full py-8">
            <div>
                <Toaster
                    toastOptions={{
                        style: {
                          background: 'rgb(30 41 59)',
                          color: 'rgb(209 213 219)',
                          boxShadow: '0px 3px 16px rgba(10, 41, 48, 0.1)',
                        },
                    }}
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
            <div className="w-full max-w-sm p-6 bg-slate-900 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-yellow-500 mb-4">Log In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300">Email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="johndoe@example.com"
                            className="bg-slate-950 w-full px-4 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out" 
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300">Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            className="bg-slate-950 w-full px-4 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out" 
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-2 text-white bg-yellow-500 rounded-md hover:bg-amber-500 transition duration-300 ease-in-out">
                        Log In
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-300">
                    Don't have an account? <a href="#" className="text-yellow-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;