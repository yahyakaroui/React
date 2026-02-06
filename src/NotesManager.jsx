import { useState } from "react";

function NotesManager({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  // Ajouter une note
  const addNote = () => {
    const note = Number(newNote);

    if (note >= 0 && note <= 20) {
      setNotes([...notes, note]);
      setNewNote("");
    } else {
      alert("La note doit être comprise entre 0 et 20");
    }
  };

  // Supprimer une note par index
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Calcul de la moyenne
  const average =
    notes.length > 0
      ? (notes.reduce((sum, n) => sum + n, 0) / notes.length).toFixed(2)
      : 0;

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h3>Gestionnaire de notes</h3>

      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Entrer une note"
      />
      <button onClick={addNote}>Ajouter</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button
              onClick={() => deleteNote(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Moyenne :</strong> {average}
      </p>
    </div>
  );
}

export default NotesManager;
