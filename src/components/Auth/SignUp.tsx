import React from 'react';
import AuthForm from "./AuthForm";
import './Auth.css';
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const handleSignUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password, firstName, lastName})
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message)
            }
            const { user: { authToken } } = data;
            localStorage.setItem('authToken', authToken);
            navigate('home', { replace: false });
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="container">
            <AuthForm onSubmit={handleSignUp} isSignUp />
        </div>
    )
}

export default SignUp