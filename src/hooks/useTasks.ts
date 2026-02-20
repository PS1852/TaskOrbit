import { useState, useEffect } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
}

const STORAGE_KEY = 'taskorbit_tasks';

const INITIAL_TASKS: Task[] = [
    {
        id: '1',
        title: 'Complete Onboarding',
        description: 'Finish setting up your TaskOrbit workspace.',
        status: 'done',
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Invite Team Members',
        description: 'Add your first three team members to get started.',
        status: 'todo',
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        title: 'Create Your First Project',
        description: 'Use the dashboard to create and organise your tasks.',
        status: 'in-progress',
        createdAt: new Date().toISOString(),
    },
];

// ---------------------------------------------------------------------------
// useTasks — CRUD + localStorage persistence
// ---------------------------------------------------------------------------
export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? (JSON.parse(stored) as Task[]) : INITIAL_TASKS;
    });
    const [isLoading] = useState(false);

    /** Persistence is handled by the effect below */
    useEffect(() => {
        // Hydration handled in initializer
    }, []);

    /** Persist whenever tasks change (skip initial hydration tick) */
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        }
    }, [tasks, isLoading]);

    const addTask = (title: string, description: string): void => {
        const newTask: Task = {
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            status: 'todo',
            createdAt: new Date().toISOString(),
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const updateTaskStatus = (id: string, status: TaskStatus): void => {
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    };

    const editTask = (id: string, updates: Partial<Task>): void => {
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
    };

    const deleteTask = (id: string): void => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    return { tasks, isLoading, addTask, updateTaskStatus, editTask, deleteTask };
}
