// src/components/ToDoApp.js
import { useState } from "react";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (input.trim() === "") return;

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].text = input;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, { text: input, done: false }]);
    }

    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setInput(tasks[index].text);
    setEditingIndex(index);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Lista de Tarefas
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 rounded-l-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              editingIndex !== null
                ? "Editar tarefa..."
                : "Adicionar nova tarefa..."
            }
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition"
          >
            {editingIndex !== null ? "Salvar" : "Adicionar"}
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition ${
                task.done
                  ? "bg-blue-100 line-through text-blue-400"
                  : "bg-blue-200 text-blue-900"
              }`}
              onClick={() => toggleTask(index)}
            >
              <span className="flex-1">{task.text}</span>
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startEditing(index);
                  }}
                  className="ml-4 text-sm text-yellow-500 hover:text-yellow-700"
                >
                  Editar
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTask(index);
                  }}
                  className="ml-4 text-sm text-red-500 hover:text-red-700"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
