import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTasks, type TaskStatus } from '../hooks/useTasks';
import { TaskCard } from '../components/TaskCard';
import { Plus, X } from 'lucide-react';

// ---------------------------------------------------------------------------
// Dashboard — Kanban board with CRUD and localStorage persistence
// ---------------------------------------------------------------------------
export function Dashboard() {
    const { user } = useAuth();
    const { tasks, addTask, updateTaskStatus, editTask, deleteTask } = useTasks();

    const [isAdding, setIsAdding] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const columns: Array<{ id: TaskStatus; label: string }> = [
        { id: 'todo', label: 'To Do' },
        { id: 'in-progress', label: 'In Progress' },
        { id: 'done', label: 'Done' },
    ];

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim()) return;
        addTask(newTitle, newDesc);
        setNewTitle('');
        setNewDesc('');
        setIsAdding(false);
    };

    const handleCancel = () => {
        setIsAdding(false);
        setNewTitle('');
        setNewDesc('');
    };

    const totalDone = tasks.filter((t) => t.status === 'done').length;

    return (
        <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8 bg-neutral-50 dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                            Dashboard
                        </h1>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                            Welcome back, <span className="font-medium text-neutral-700 dark:text-neutral-300">{user?.name}</span>.
                            {' '}{totalDone} of {tasks.length} tasks completed.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 bg-orbit-500 hover:bg-orbit-600 text-white px-4 py-2.5 rounded-lg font-medium shadow-md shadow-orbit-500/20 transition-colors shrink-0"
                    >
                        <Plus size={18} aria-hidden="true" />
                        New Task
                    </button>
                </div>

                {/* Add-task form */}
                {isAdding && (
                    <section
                        aria-label="Create new task"
                        className="mb-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Create New Task</h2>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <form onSubmit={handleAdd} className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Task title *"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                autoFocus
                                required
                                className="w-full px-4 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orbit-500 bg-white dark:bg-neutral-950 dark:text-white text-sm"
                            />
                            <textarea
                                placeholder="Description (optional)"
                                value={newDesc}
                                onChange={(e) => setNewDesc(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orbit-500 bg-white dark:bg-neutral-950 dark:text-white text-sm resize-none"
                            />
                            <div className="flex gap-3 justify-end pt-1">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={!newTitle.trim()}
                                    className="px-4 py-2 text-sm font-medium bg-orbit-500 hover:bg-orbit-600 disabled:opacity-50 text-white rounded-lg transition-colors"
                                >
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </section>
                )}

                {/* Kanban columns */}
                <div className="grid md:grid-cols-3 gap-6 items-start">
                    {columns.map(({ id, label }) => {
                        const col = tasks.filter((t) => t.status === id);
                        return (
                            <section
                                key={id}
                                aria-label={`${label} column`}
                                className="bg-neutral-100/60 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 flex flex-col"
                            >
                                <header className="flex items-center gap-2 mb-4 px-1">
                                    <h2 className="font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
                                        {label}
                                    </h2>
                                    <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs px-2 py-0.5 rounded-full font-medium">
                                        {col.length}
                                    </span>
                                </header>

                                <div className="space-y-3 min-h-[4rem]">
                                    {col.length === 0 ? (
                                        <div className="text-center py-8 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-400 dark:text-neutral-500 text-xs">
                                            No tasks yet
                                        </div>
                                    ) : (
                                        col.map((task) => (
                                            <TaskCard
                                                key={task.id}
                                                task={task}
                                                onUpdateStatus={updateTaskStatus}
                                                onDelete={deleteTask}
                                                onEdit={editTask}
                                            />
                                        ))
                                    )}
                                </div>
                            </section>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
