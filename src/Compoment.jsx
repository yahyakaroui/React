import { useMemo, useState } from 'react'

const createId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const randomHexColor = () => {
  const value = Math.floor(Math.random() * 0xffffff)
  return `#${value.toString(16).padStart(6, '0')}`
}

export function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount)

  const increment = () => setCount((current) => current + step)
  const decrement = () => setCount((current) => current - step)
  const reset = () => setCount(initialCount)

  return (
    <section className="exercise counter">
      <h3>Compteur : {count}</h3>
      <div className="exercise-actions">
        <button type="button" onClick={increment}>
          +{step}
        </button>
        <button type="button" onClick={decrement}>
          -{step}
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  )
}

export function ListManager({
  initialItems = [],
  placeholder = 'Entrez un nouvel élément',
}) {
  const [items, setItems] = useState(() => initialItems)
  const [value, setValue] = useState('')

  const addItem = (event) => {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    setItems((current) => [...current, trimmed])
    setValue('')
  }

  const removeItem = (indexToRemove) => {
    setItems((current) => current.filter((_, index) => index !== indexToRemove))
  }

  return (
    <section className="exercise list-manager">
      <h3>Liste :</h3>
      <ul className="exercise-list">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="exercise-list-item">
            <span>{item}</span>
            <button type="button" onClick={() => removeItem(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <form className="exercise-form" onSubmit={addItem}>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </section>
  )
}

export function ColorBox({ initialColor = '#ff5722', colorOptions = [] }) {
  const [color, setColor] = useState(initialColor)

  const changeColor = () => {
    if (colorOptions.length > 0) {
      const index = Math.floor(Math.random() * colorOptions.length)
      setColor(colorOptions[index])
      return
    }
    setColor(randomHexColor())
  }

  return (
    <section className="exercise color-box">
      <div
        className="color-box-swatch"
        style={{ backgroundColor: color }}
      ></div>
      <button type="button" onClick={changeColor}>
        Changer de couleur
      </button>
      <p className="color-box-value">{color}</p>
    </section>
  )
}

export function NotesManager({ initialNotes = [] }) {
  const [notes, setNotes] = useState(() => initialNotes)
  const [value, setValue] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    if (value.trim() === '') return
    const numericValue = Number(value)
    if (!Number.isFinite(numericValue)) return
    if (numericValue < 0 || numericValue > 20) return
    setNotes((current) => [...current, numericValue])
    setValue('')
  }

  const removeNote = (indexToRemove) => {
    setNotes((current) => current.filter((_, index) => index !== indexToRemove))
  }

  const average = useMemo(() => {
    if (notes.length === 0) return 0
    const total = notes.reduce((sum, note) => sum + note, 0)
    return total / notes.length
  }, [notes])

  return (
    <section className="exercise notes-manager">
      <h3>Notes :</h3>
      <ul className="exercise-list">
        {notes.map((note, index) => (
          <li key={`${note}-${index}`} className="exercise-list-item">
            <span>{note}</span>
            <button type="button" onClick={() => removeNote(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <p className="exercise-summary">
        Moyenne : {notes.length ? average.toFixed(2) : '0'}
      </p>
      <form className="exercise-form" onSubmit={addNote}>
        <input
          type="number"
          min="0"
          max="20"
          step="0.1"
          value={value}
          placeholder="Ajouter une note (0-20)"
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </section>
  )
}

const PRIORITIES = ['Haute', 'Moyenne', 'Basse']

const normalizePriority = (priority) =>
  PRIORITIES.includes(priority) ? priority : 'Moyenne'

export function TodoListWithPriorities({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(() =>
    initialTasks.map((task) => ({
      id: task.id ?? createId(),
      name: task.name ?? '',
      priority: normalizePriority(task.priority),
      done: Boolean(task.done),
    })),
  )
  const [taskName, setTaskName] = useState('')
  const [priority, setPriority] = useState('Moyenne')
  const [search, setSearch] = useState('')

  const addTask = (event) => {
    event.preventDefault()
    const trimmed = taskName.trim()
    if (!trimmed) return
    setTasks((current) => [
      ...current,
      {
        id: createId(),
        name: trimmed,
        priority: normalizePriority(priority),
        done: false,
      },
    ])
    setTaskName('')
    setPriority('Moyenne')
  }

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  const removeTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  const completedCount = tasks.filter((task) => task.done).length

  const filteredTasks = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return tasks
    return tasks.filter((task) => task.name.toLowerCase().includes(query))
  }, [tasks, search])

  return (
    <section className="exercise todo-list">
      <h3>Todo List avec Priorités</h3>
      <div className="exercise-search">
        <input
          type="text"
          value={search}
          placeholder="Rechercher une tâche"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <ul className="exercise-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`exercise-list-item ${task.done ? 'is-done' : ''}`}
          >
            <span>
              {task.name} - <strong>{task.priority}</strong>
            </span>
            <div className="exercise-actions">
              <button type="button" onClick={() => toggleTask(task.id)}>
                {task.done ? 'Non terminé' : 'Terminé'}
              </button>
              <button type="button" onClick={() => removeTask(task.id)}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="exercise-summary">Total des tâches : {tasks.length}</p>
      <p className="exercise-summary">Tâches terminées : {completedCount}</p>
      <form className="exercise-form" onSubmit={addTask}>
        <input
          type="text"
          value={taskName}
          placeholder="Nom de la tâche"
          onChange={(event) => setTaskName(event.target.value)}
        />
        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          {PRIORITIES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </section>
  )
}

export function StatePropsWorkshop() {
  return (
    <div className="state-props-workshop">
      <Counter initialCount={10} step={5} />
      <ListManager initialItems={['React', 'Angular', 'Vuejs']} />
      <ColorBox
        initialColor="#ff5722"
        colorOptions={['#ff5722', '#00e676', '#1e88e5', '#ffca28']}
      />
      <NotesManager initialNotes={[12, 14.5, 9, 17]} />
      <TodoListWithPriorities
        initialTasks={[
          { name: 'Finir le projet React', priority: 'Haute' },
          { name: 'Préparer le repas', priority: 'Moyenne' },
          { name: 'Aller courir', priority: 'Basse' },
        ]}
      />
    </div>
  )
}
