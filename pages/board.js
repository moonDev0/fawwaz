// pages/board.js
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import Layout from './layout';
import { useTaskStore } from '@/store/Board';


const TaskCard = ({ task, onDelete }) => (
  <div className="bg-white p-3 rounded-lg shadow hover:bg-gray-50 flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">{task.title}</h3>
      <p className="text-xs text-gray-500">{task.description}</p>
    </div>
    <button
      className="bg-red-500 text-white text-xs p-1 ml-4 rounded"
      onClick={() => onDelete(task.id)}
    >
      Delete
    </button>
  </div>
);

export default function Board() {
  const { columns, setColumns, addTask, deleteTask } = useTaskStore();
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [selectedColumn, setSelectedColumn] = useState('To Do');

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceColumn = [...columns[source.droppableId]];
    const destColumn = [...columns[destination.droppableId]];

    const [movedTask] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedTask);

    setColumns({
      ...columns,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  const handleAddTask = () => {
    const newTaskId = `${Math.random()}`; // Generate unique ID
    addTask(selectedColumn, { id: newTaskId, ...newTask });
    setNewTask({ title: '', description: '' }); // Reset input fields
  };

  return (
    <Layout>
      <div className="p-4 pl-[300px]">
        <h1 className="text-3xl font-bold mb-6 text-center">Note Board</h1>

        {/* Add Task Form */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Add Note</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              placeholder="Task title"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              placeholder="Task description"
              className="border p-2 rounded w-full"
            />
            <select
              value={selectedColumn}
              onChange={(e) => setSelectedColumn(e.target.value)}
              className="border p-2 rounded"
            >
              {Object.keys(columns).map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddTask}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Note
            </button>
          </div>
        </div>

        {/* Task Board */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-3 space-x-4">
            {Object.keys(columns).map((columnId) => (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <h2 className="text-lg font-bold mb-2">{columnId}</h2>
                    <div className="space-y-4">
                      {columns[columnId].map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskCard
                                task={task}
                                onDelete={(taskId) => deleteTask(columnId, taskId)}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </Layout>
  );
}
