import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

// ---------------------------------------------------------------------------
// NotFound — 404 fallback page
// ---------------------------------------------------------------------------
export function NotFound() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-950">
            <div className="text-center max-w-md">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-orbit-500/10 dark:bg-orbit-500/20 mb-6 animate-float">
                    <Rocket size={48} className="text-orbit-500" aria-hidden="true" />
                </div>

                <h1 className="text-7xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
                    404
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    Oops — this page floated away into deep space.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center bg-orbit-500 hover:bg-orbit-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md shadow-orbit-500/20 transition-all hover:-translate-y-0.5"
                >
                    Return to Mission Control
                </Link>
            </div>
        </div>
    );
}
