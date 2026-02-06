import { useState } from "react";

function TodoList({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  // Ajouter une tâche
  const addTask = () => {
    if (taskName.trim() === "") return;

    setTasks([
      ...tasks,
      { name: taskName, priority, completed: false },
    ]);
    setTaskName("");
    setPriority("Moyenne");
  };

  // Supprimer une tâche
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Marquer comme terminée
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Statistiques
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;

  // Recherche
  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>Todo List avec Priorités</h2>

      {/* Recherche */}
      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name} - <strong>{task.priority}</strong>
            </span>

            <button onClick={() => toggleTask(index)}>
              {task.completed ? "Annuler" : "Terminé"}
            </button>

            <button onClick={() => deleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <p>Total des tâches : {totalTasks}</p>
      <p>Tâches terminées : {completedTasks}</p>

      {/* Ajout */}
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>

      <button onClick={addTask}>Ajouter</button>
    </div>
  );
}

export default TodoList;
