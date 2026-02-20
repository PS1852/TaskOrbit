import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

// ---------------------------------------------------------------------------
// Settings — account profile and notification preferences
// ---------------------------------------------------------------------------
export function Settings() {
    const { user } = useAuth();
    const [emailDigest, setEmailDigest] = useState(true);
    const [desktopNotifs, setDesktopNotifs] = useState(false);

    return (
        <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8 bg-neutral-50 dark:bg-neutral-950">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">Account Settings</h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                    Manage your profile information and notification preferences.
                </p>

                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm overflow-hidden divide-y divide-neutral-200 dark:divide-neutral-800">

                    {/* Profile section */}
                    <section className="p-6" aria-labelledby="profile-heading">
                        <h2 id="profile-heading" className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
                            Profile Information
                        </h2>
                        <div className="space-y-4 max-w-md">
                            <div>
                                <label htmlFor="settings-name" className="block text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                                    Full Name
                                </label>
                                <input
                                    id="settings-name"
                                    type="text"
                                    readOnly
                                    disabled
                                    defaultValue={user?.name ?? ''}
                                    className="w-full px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800 border border-transparent rounded-lg text-neutral-900 dark:text-white cursor-not-allowed text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="settings-email" className="block text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                                    Email Address
                                </label>
                                <input
                                    id="settings-email"
                                    type="email"
                                    readOnly
                                    disabled
                                    defaultValue={user?.email ?? ''}
                                    className="w-full px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800 border border-transparent rounded-lg text-neutral-900 dark:text-white cursor-not-allowed text-sm"
                                />
                            </div>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500">
                                This is a demo environment. Profile changes are not persisted.
                            </p>
                        </div>
                    </section>

                    {/* Notifications section */}
                    <section className="p-6" aria-labelledby="notif-heading">
                        <h2 id="notif-heading" className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
                            Notifications
                        </h2>
                        <div className="space-y-5">

                            <Toggle
                                id="toggle-email-digest"
                                label="Email Digests"
                                description="Receive weekly updates on task progress."
                                checked={emailDigest}
                                onChange={setEmailDigest}
                            />

                            <Toggle
                                id="toggle-desktop-notifs"
                                label="Desktop Notifications"
                                description="Get pinged when a task status changes."
                                checked={desktopNotifs}
                                onChange={setDesktopNotifs}
                            />

                        </div>
                    </section>

                    {/* Danger zone */}
                    <section className="p-6 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="danger-heading">
                        <h2 id="danger-heading" className="text-base font-semibold text-red-600 mb-1">
                            Danger Zone
                        </h2>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                            Permanently delete your account and all associated data. This cannot be undone.
                        </p>
                        <button
                            type="button"
                            className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-900/30 rounded-lg font-medium text-sm transition-colors"
                            onClick={() => window.alert('Account deletion is disabled in demo mode.')}
                        >
                            Delete My Account
                        </button>
                    </section>

                </div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Toggle — accessible on/off switch sub-component
// ---------------------------------------------------------------------------
interface ToggleProps {
    id: string;
    label: string;
    description: string;
    checked: boolean;
    onChange: (v: boolean) => void;
}

function Toggle({ id, label, description, checked, onChange }: ToggleProps) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div>
                <label htmlFor={id} className="font-medium text-sm text-neutral-900 dark:text-white cursor-pointer">
                    {label}
                </label>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{description}</p>
            </div>
            <button
                type="button"
                id={id}
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orbit-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 shrink-0 ${checked ? 'bg-orbit-500' : 'bg-neutral-300 dark:bg-neutral-700'
                    }`}
                aria-label={label}
            >
                <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-7' : 'translate-x-1'
                        }`}
                />
            </button>
        </div>
    );
}
