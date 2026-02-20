import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { Rocket, Loader2 } from 'lucide-react';

export function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password || !name) return;

        setLoading(true);
        await signup(email, name);
        setLoading(false);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 px-4 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orbit-400/20 rounded-full filter blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full filter blur-[100px] translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-md w-full relative z-10">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex justify-center bg-orbit-500 p-3 rounded-2xl text-white mb-6 shadow-xl shadow-orbit-500/20">
                        <Rocket size={32} />
                    </Link>
                    <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white">Create an account</h2>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">Start managing your tasks today</p>
                </div>

                <div className="bg-white dark:bg-neutral-900 py-8 px-6 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="appearance-none block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orbit-500 focus:border-orbit-500 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="appearance-none block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orbit-500 focus:border-orbit-500 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="appearance-none block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orbit-500 focus:border-orbit-500 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !email || !name}
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-md shadow-orbit-500/20 text-sm font-semibold text-white bg-orbit-500 hover:bg-orbit-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orbit-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-6"
                        >
                            {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
                            Create account
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">Already have an account? </span>
                        <Link to="/login" className="font-medium text-orbit-500 hover:text-orbit-400 transition-colors">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
