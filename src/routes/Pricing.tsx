import { PricingToggle } from '../components/PricingToggle';

export function Pricing() {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-neutral-950 pt-20 pb-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        No hidden fees. No surprise charges. Choose the plan that fits your workstyle and budget.
                    </p>
                </div>

                <PricingToggle />

                <div className="mt-24 max-w-3xl mx-auto border-t border-neutral-200 dark:border-neutral-800 pt-16">
                    <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                            <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Can I switch plans later?</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Absolutely. You can upgrade or downgrade your plan at any time through your account settings. Prorated charges will apply automatically.</p>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                            <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">What payment methods do you accept?</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">We accept all major credit cards, PayPal, and Apple Pay. For enterprise plans, we also support wire transfers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
