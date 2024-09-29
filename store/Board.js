// store/useTaskStore.jsimport { create } from 'zustand';
import { create } from 'zustand';


export const useTaskStore = create((set) => ({
  columns: {
    'To Do': [
      { id: '1', title: 'Task 1', description: 'Description for Task 1' },
      { id: '2', title: 'Task 2', description: 'Description for Task 2' },
    ],
    'In Progress': [
      { id: '3', title: 'Task 3', description: 'Description for Task 3' },
    ],
    'Done': [
      { id: '4', title: 'Task 4', description: 'Description for Task 4' },
    ],
  },

  addTask: (columnId, task) =>
    set((state) => ({
      columns: {
        ...state.columns,
        [columnId]: [...state.columns[columnId], task],
      },
    })),

  deleteTask: (columnId, taskId) =>
    set((state) => ({
      columns: {
        ...state.columns,
        [columnId]: state.columns[columnId].filter((task) => task.id !== taskId),
      },
    })),

  setColumns: (columns) => set(() => ({ columns })),
}));
