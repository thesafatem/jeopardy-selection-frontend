import React from 'react';
import AuthForm from "./AuthForm";
import './Auth.css'

const SignIn: React.FC = () => {
    const handleSignIn = async (email: string, password: string) => {
        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="container">
            <AuthForm onSubmit={handleSignIn} />
        </div>
    )
}

export default SignIn;