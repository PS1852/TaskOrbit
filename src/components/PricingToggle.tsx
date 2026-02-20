import { useState } from 'react';

// ---------------------------------------------------------------------------
// PricingToggle — monthly/yearly billing switch with animated pill
// ---------------------------------------------------------------------------
export function PricingToggle() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="flex flex-col items-center">
            {/* Toggle pill */}
            <div
                className="flex items-center relative bg-orbit-50 dark:bg-neutral-800 p-1.5 rounded-full border border-orbit-100 dark:border-neutral-700 w-64 shadow-inner mb-12"
                role="group"
                aria-label="Billing period"
            >
                <button
                    type="button"
                    id="toggle-monthly"
                    aria-pressed={!isYearly}
                    onClick={() => setIsYearly(false)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-full z-10 transition-colors duration-300 ${!isYearly ? 'text-white' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300'
                        }`}
                >
                    Monthly
                </button>
                <button
                    type="button"
                    id="toggle-yearly"
                    aria-pressed={isYearly}
                    onClick={() => setIsYearly(true)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-full z-10 transition-colors duration-300 ${isYearly ? 'text-white' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300'
                        }`}
                >
                    Yearly
                    <span className="ml-1 text-xs bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-1.5 py-0.5 rounded-full font-bold">
                        −25%
                    </span>
                </button>
                {/* Sliding indicator */}
                <div
                    aria-hidden="true"
                    className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-orbit-500 shadow-md shadow-orbit-500/30 rounded-full transition-transform duration-300 ease-in-out ${isYearly ? 'translate-x-[calc(100%+0px)]' : 'translate-x-0'
                        }`}
                />
            </div>

            {/* Plan cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto px-4 md:px-0">

                {/* Starter */}
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Starter Orbit</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-6 text-sm">Perfect for individuals starting out.</p>
                    <div className="mb-8">
                        <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">
                            ${isYearly ? '9' : '15'}
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-400"> /mo</span>
                        {isYearly && (
                            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Billed as ${9 * 12}/yr</p>
                        )}
                    </div>
                    <ul className="space-y-3 mb-8 flex-1 text-sm text-neutral-600 dark:text-neutral-300">
                        {['Up to 100 tasks', 'Basic Analytics', 'Standard Support', '1 workspace'].map((f) => (
                            <li key={f} className="flex items-center gap-2">
                                <span className="text-orbit-500 font-bold">✓</span> {f}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/signup"
                        className="block w-full py-3 rounded-lg font-semibold text-center bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                        Get Started
                    </a>
                </div>

                {/* Pro */}
                <div className="bg-white dark:bg-neutral-900 border-2 border-orbit-500 rounded-2xl p-8 shadow-lg shadow-orbit-500/10 hover:shadow-xl hover:shadow-orbit-500/20 transition-shadow flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-orbit-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        POPULAR
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Pro Orbit</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-6 text-sm">For teams and power users.</p>
                    <div className="mb-8">
                        <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">
                            ${isYearly ? '29' : '39'}
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-400"> /mo</span>
                        {isYearly && (
                            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Billed as ${29 * 12}/yr</p>
                        )}
                    </div>
                    <ul className="space-y-3 mb-8 flex-1 text-sm text-neutral-600 dark:text-neutral-300">
                        {['Unlimited tasks', 'Advanced Analytics', 'Priority Support', 'Unlimited workspaces', 'Custom Views & Filters'].map((f) => (
                            <li key={f} className="flex items-center gap-2">
                                <span className="text-orbit-500 font-bold">✓</span> {f}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/signup"
                        className="block w-full py-3 rounded-lg font-semibold text-center bg-orbit-500 text-white hover:bg-orbit-600 transition-colors shadow-md shadow-orbit-500/30"
                    >
                        Upgrade to Pro
                    </a>
                </div>

            </div>
        </div>
    );
}
