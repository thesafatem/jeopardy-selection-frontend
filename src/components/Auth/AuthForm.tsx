import React, { useState } from 'react';

interface IAuthFormProps {
    onSubmit: (email: string, password: string) => Promise<void>;
    isSignUp?: boolean;
}

const AuthForm: React.FC<IAuthFormProps> = ({onSubmit, isSignUp = false}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await onSubmit(email, password);
        } catch (error) {
            setError((error as Error).message)
        }
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading}>
                {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
        </form>
    )
}

export default AuthForm