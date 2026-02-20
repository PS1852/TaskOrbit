import type { Task, TaskStatus } from '../hooks/useTasks';
import { Trash2, Edit2, Play, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface TaskCardProps {
    task: Task;
    onUpdateStatus: (id: string, status: TaskStatus) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, updates: Partial<Task>) => void;
}

/** Maps each status to a colour scheme for the badge. */
const STATUS_STYLES: Record<TaskStatus, string> = {
    'todo': 'bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700',
    'in-progress': 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/40 dark:text-blue-400 dark:border-blue-800',
    'done': 'bg-green-50 text-green-600 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
};

const STATUS_CYCLE: Record<TaskStatus, TaskStatus> = {
    'todo': 'in-progress',
    'in-progress': 'done',
    'done': 'todo',
};

// ---------------------------------------------------------------------------
// TaskCard
// ---------------------------------------------------------------------------
export function TaskCard({ task, onUpdateStatus, onDelete, onEdit }: TaskCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleSave = () => {
        const trimmed = editTitle.trim();
        if (trimmed) {
            onEdit(task.id, { title: trimmed });
        } else {
            setEditTitle(task.title); // revert if empty
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') { setEditTitle(task.title); setIsEditing(false); }
    };

    const cycleStatus = () => onUpdateStatus(task.id, STATUS_CYCLE[task.status]);

    const StatusIcon =
        task.status === 'done' ? CheckCircle2 :
            task.status === 'in-progress' ? Play :
                Circle;

    const statusIconClass =
        task.status === 'done' ? 'text-green-500 bg-green-50 dark:bg-green-900/30' :
            task.status === 'in-progress' ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/40' :
                'text-neutral-400 hover:text-orbit-500';

    return (
        <article
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            aria-label={`Task: ${task.title}`}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3 gap-2">
                {isEditing ? (
                    <input
                        autoFocus
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-b border-orbit-500 text-neutral-900 dark:text-white px-1 py-0.5 outline-none font-medium text-sm"
                        aria-label="Edit task title"
                    />
                ) : (
                    <h3
                        className={`font-semibold text-sm flex-1 cursor-pointer leading-snug ${task.status === 'done'
                                ? 'text-neutral-400 dark:text-neutral-500 line-through'
                                : 'text-neutral-900 dark:text-white'
                            }`}
                        onClick={() => setIsEditing(true)}
                        title="Click to edit"
                    >
                        {task.title}
                    </h3>
                )}

                {/* Action buttons — visible on hover */}
                <div
                    className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    role="group"
                    aria-label="Task actions"
                >
                    <button
                        type="button"
                        onClick={() => setIsEditing((v) => !v)}
                        className="p-1.5 text-neutral-400 hover:text-orbit-500 rounded-md transition-colors"
                        aria-label="Edit task"
                    >
                        <Edit2 size={14} />
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(task.id)}
                        className="p-1.5 text-neutral-400 hover:text-red-500 rounded-md transition-colors"
                        aria-label="Delete task"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>

            {/* Description */}
            {task.description && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3 flex-1">
                    {task.description}
                </p>
            )}

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800">
                <button
                    type="button"
                    onClick={cycleStatus}
                    className={`text-xs px-2.5 py-1 rounded-md font-medium border capitalize cursor-pointer hover:opacity-80 transition-opacity ${STATUS_STYLES[task.status]}`}
                    aria-label={`Status: ${task.status.replace('-', ' ')}. Click to advance.`}
                >
                    {task.status.replace('-', ' ')}
                </button>

                <button
                    type="button"
                    onClick={cycleStatus}
                    className={`p-1.5 rounded-full transition-colors ${statusIconClass}`}
                    aria-label="Advance task status"
                >
                    <StatusIcon size={17} aria-hidden="true" />
                </button>
            </div>
        </article>
    );
}
