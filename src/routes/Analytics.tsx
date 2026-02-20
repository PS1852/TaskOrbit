import { useTasks } from '../hooks/useTasks';

// ---------------------------------------------------------------------------
// Analytics — visualises task completion with CSS-only charts
// ---------------------------------------------------------------------------
export function Analytics() {
    const { tasks } = useTasks();

    const total = tasks.length;
    const done = tasks.filter((t) => t.status === 'done').length;
    const inProgress = tasks.filter((t) => t.status === 'in-progress').length;
    const todo = tasks.filter((t) => t.status === 'todo').length;

    /** Returns a rounded percentage; safe against division by zero */
    const pct = (n: number) => (total === 0 ? 0 : Math.round((n / total) * 100));

    const donePercent = pct(done);
    const inProgressPercent = pct(inProgress);
    const todoPercent = pct(todo);

    // SVG ring circumference for r=40
    const CIRC = 251.2;

    const stats = [
        { label: 'Total Tasks', value: total, className: 'text-neutral-900 dark:text-white' },
        { label: 'Completed', value: done, className: 'text-green-600 dark:text-green-400' },
        { label: 'In Progress', value: inProgress, className: 'text-blue-600 dark:text-blue-400' },
        { label: 'To Do', value: todo, className: 'text-neutral-900 dark:text-white' },
    ];

    const bars = [
        { label: 'Completed', pct: donePercent, bar: 'bg-green-500', text: 'text-green-600 dark:text-green-400' },
        { label: 'In Progress', pct: inProgressPercent, bar: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400' },
        { label: 'To Do', pct: todoPercent, bar: 'bg-neutral-400 dark:bg-neutral-500', text: 'text-neutral-600 dark:text-neutral-300' },
    ];

    const ring =
        donePercent === 100 ? "Amazing! You've cleared every task. 🎉" :
            donePercent > 50 ? 'Great progress! Keep up the momentum.' :
                "You have tasks waiting — let's get started!";

    return (
        <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8 bg-neutral-50 dark:bg-neutral-950">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">Analytics</h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                    Track your project trajectory and team performance.
                </p>

                {/* Stat cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map(({ label, value, className }) => (
                        <div
                            key={label}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm"
                        >
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
                            <p className={`text-4xl font-bold ${className}`}>{value}</p>
                        </div>
                    ))}
                </div>

                {/* Charts row */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Bar chart */}
                    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
                        <h2 className="font-semibold text-neutral-900 dark:text-white mb-6">Task Distribution</h2>
                        <div className="space-y-6" role="list" aria-label="Task distribution">
                            {bars.map(({ label, pct: p, bar, text }) => (
                                <div key={label} role="listitem">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className={`font-medium ${text}`}>{label}</span>
                                        <span className="text-neutral-500">{p}%</span>
                                    </div>
                                    <div
                                        className="w-full bg-neutral-100 dark:bg-neutral-800 h-3 rounded-full overflow-hidden"
                                        role="progressbar"
                                        aria-valuenow={p}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-label={`${label}: ${p}%`}
                                    >
                                        <div
                                            className={`${bar} h-full rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: `${p}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Donut ring */}
                    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-neutral-900 dark:text-white mb-6 self-start">Productivity Ring</h2>

                        <div className="relative w-44 h-44" aria-label={`Completion rate: ${donePercent}%`}>
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
                                {/* Track */}
                                <circle
                                    cx="50" cy="50" r="40"
                                    fill="transparent"
                                    stroke="currentColor"
                                    className="text-neutral-100 dark:text-neutral-800"
                                    strokeWidth="20"
                                />
                                {/* Progress */}
                                <circle
                                    cx="50" cy="50" r="40"
                                    fill="transparent"
                                    stroke="currentColor"
                                    className="text-orbit-500 transition-all duration-1000 ease-out"
                                    strokeWidth="20"
                                    strokeDasharray={`${donePercent * (CIRC / 100)} ${CIRC}`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold text-neutral-900 dark:text-white">{donePercent}%</span>
                                <span className="text-xs text-neutral-500 mt-0.5">Done</span>
                            </div>
                        </div>

                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-6 max-w-xs">{ring}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
