import { Link, useLocation, NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';
import { Rocket, LogOut, LayoutDashboard, Settings as SettingsIcon, Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';

// ---------------------------------------------------------------------------
// Navbar — hidden on auth pages; responsive with mobile drawer
// ---------------------------------------------------------------------------
export function Navbar() {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    // Hide navbar on full-page auth screens
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
    if (isAuthPage) return null;

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium flex items-center gap-1.5 transition-colors ${isActive
            ? 'text-orbit-500'
            : 'text-neutral-600 dark:text-neutral-300 hover:text-orbit-500'
        }`;

    return (
        <nav
            className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md sticky top-0 z-50"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2" aria-label="TaskOrbit Home">
                        <div className="bg-orbit-500 p-1.5 rounded-lg text-white">
                            <Rocket size={22} aria-hidden="true" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
                            TaskOrbit
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/pricing"
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-orbit-500 transition-colors"
                        >
                            Pricing
                        </Link>

                        {user && (
                            <>
                                <NavLink to="/dashboard" className={navLinkClass}>
                                    <LayoutDashboard size={15} aria-hidden="true" />
                                    Dashboard
                                </NavLink>
                                <NavLink to="/analytics" className={navLinkClass}>
                                    <Activity size={15} aria-hidden="true" />
                                    Analytics
                                </NavLink>
                                <NavLink to="/settings" className={navLinkClass}>
                                    <SettingsIcon size={15} aria-hidden="true" />
                                    Settings
                                </NavLink>
                            </>
                        )}
                    </div>

                    {/* Right-hand controls */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hidden md:block">
                                    Hi, {user.name}
                                </span>
                                <button
                                    type="button"
                                    onClick={logout}
                                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-red-500 transition-colors"
                                    aria-label="Log out"
                                >
                                    <LogOut size={16} aria-hidden="true" />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    to="/login"
                                    className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-orbit-500 transition-colors"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="text-sm font-medium bg-orbit-500 hover:bg-orbit-600 text-white px-4 py-2 rounded-md transition-colors shadow-sm shadow-orbit-500/20"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="md:hidden p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-4 space-y-3">
                    <Link
                        to="/pricing"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-orbit-500 py-2"
                        onClick={() => setMobileOpen(false)}
                    >
                        Pricing
                    </Link>
                    {user && (
                        <>
                            <NavLink to="/dashboard" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                                <LayoutDashboard size={15} /> Dashboard
                            </NavLink>
                            <NavLink to="/analytics" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                                <Activity size={15} /> Analytics
                            </NavLink>
                            <NavLink to="/settings" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                                <SettingsIcon size={15} /> Settings
                            </NavLink>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
