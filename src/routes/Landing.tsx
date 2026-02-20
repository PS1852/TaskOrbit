import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Zap, Shield, CheckCircle2 } from 'lucide-react';

// ---------------------------------------------------------------------------
// Feature list data
// ---------------------------------------------------------------------------
const FEATURES = [
    {
        icon: <Zap className="text-amber-500" size={30} aria-hidden="true" />,
        title: 'Lightning Fast',
        desc: 'Built on Vite + React 19 — your workspace is always instant, every time.',
    },
    {
        icon: <Layout className="text-orbit-500" size={30} aria-hidden="true" />,
        title: 'Intuitive Kanban',
        desc: 'A beautiful, decluttered board that puts your tasks front and centre.',
    },
    {
        icon: <Shield className="text-emerald-500" size={30} aria-hidden="true" />,
        title: 'Your Data, Secure',
        desc: 'All session and task data is stored locally — never leaves your device.',
    },
];

const TESTIMONIALS = [
    { name: 'Priya S.', role: 'Product Manager', quote: 'TaskOrbit transformed how my team plans sprints. The Kanban board is the cleanest I have ever used.' },
    { name: 'Alex R.', role: 'Freelance Developer', quote: 'The analytics ring alone is worth it. I can see my weekly completion rate at a glance.' },
    { name: 'Meera K.', role: 'Startup Founder', quote: 'We moved 30 tasks from Notion to TaskOrbit in under 10 minutes. The simplicity is unbeatable.' },
];

// ---------------------------------------------------------------------------
// Landing
// ---------------------------------------------------------------------------
export function Landing() {
    return (
        <div className="flex flex-col">

            {/* ——— Hero ——— */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden flex flex-col items-center text-center">
                {/* Gradient backdrop */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orbit-50 to-white dark:from-neutral-900 dark:to-neutral-950" />

                {/* Decorative blobs */}
                <div aria-hidden="true" className="absolute top-1/4 -left-64 w-96 h-96 bg-orbit-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob dark:opacity-10" />
                <div aria-hidden="true" className="absolute top-1/3 -right-64 w-96 h-96 bg-purple-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 dark:bg-purple-900/30 dark:opacity-20" />
                <div aria-hidden="true" className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 dark:bg-pink-900/30 dark:opacity-20" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase text-orbit-600 dark:text-orbit-400 bg-orbit-50 dark:bg-orbit-900/30 border border-orbit-200 dark:border-orbit-800 px-4 py-1.5 rounded-full">
                        🚀 Productivity, reimagined
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
                        Manage your tasks in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orbit-500 to-purple-600">
                            one simple orbit
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10">
                        TaskOrbit is the modern project management platform for teams that move fast.
                        Visualise work, crush goals, and ship faster — all in one beautiful place.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/signup"
                            className="group inline-flex items-center justify-center gap-2 bg-orbit-500 hover:bg-orbit-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orbit-500/30 transition-all hover:-translate-y-1"
                        >
                            Start for free
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <Link
                            to="/pricing"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:border-orbit-400 hover:text-orbit-500 transition-all hover:-translate-y-1"
                        >
                            View Pricing
                        </Link>
                    </div>

                    {/* Social proof micro-badges */}
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
                        {['No credit card required', 'Free forever tier', 'Setup in 30 seconds'].map((t) => (
                            <span key={t} className="flex items-center gap-1.5">
                                <CheckCircle2 size={15} className="text-orbit-500" aria-hidden="true" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ——— Features ——— */}
            <section className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            Why choose TaskOrbit?
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
                            Built for individuals and teams who want clarity without complexity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {FEATURES.map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow group"
                            >
                                <div className="mb-6 p-4 bg-white dark:bg-neutral-800 inline-block rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    {icon}
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">{title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ——— Testimonials ——— */}
            <section className="py-24 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-14">
                        What our users say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map(({ name, role, quote }) => (
                            <figure
                                key={name}
                                className="bg-white dark:bg-neutral-950 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <blockquote className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6">
                                    "{quote}"
                                </blockquote>
                                <figcaption className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-orbit-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                                        {name[0]}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-neutral-900 dark:text-white text-sm">{name}</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{role}</p>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* ——— CTA ——— */}
            <section className="py-24 bg-orbit-500 relative overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_white,_transparent)]" />
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Ready to get into orbit?
                    </h2>
                    <p className="text-orbit-100 mb-8 text-lg">
                        Join thousands of teams already using TaskOrbit to ship faster and stress less.
                    </p>
                    <Link
                        to="/signup"
                        className="inline-flex items-center gap-2 bg-white text-orbit-600 hover:bg-orbit-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:-translate-y-1"
                    >
                        Create your free account
                        <ArrowRight size={20} aria-hidden="true" />
                    </Link>
                </div>
            </section>

            {/* ——— Footer ——— */}
            <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="font-bold text-white text-lg mb-1">TaskOrbit</p>
                        <p className="text-sm">© {new Date().getFullYear()} TaskOrbit. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm">
                        <a href="mailto:contact@taskorbit.in" className="hover:text-white transition-colors">contact@taskorbit.in</a>
                        <a href="tel:+918055550123" className="hover:text-white transition-colors">+91 80 5555 0123</a>
                        <a
                            href="https://linkedin.com/company/taskorbit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
