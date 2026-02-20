import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addEvent } from '../service/api'

const initialForm = {
  name: '',
  description: '',
  img: '',
  price: 0,
  nbTickets: 0,
}

export default function AddEvent() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!form.name.trim()) {
      setError('Le nom est obligatoire.')
      return
    }

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      img: form.img.trim() || '/images/placeholder.jpg',
      price: Number(form.price),
      nbTickets: Number(form.nbTickets),
      nbParticipants: 0,
      like: false,
    }

    try {
      await addEvent(payload)
      navigate('/events')
    } catch {
      setError("Impossible d'ajouter l'événement.")
    }
  }

  return (
    <section className="content-card p-4 p-md-5">
      <h2 className="section-title">Add a new Event</h2>
      {error && <p className="text-danger mb-3">{error}</p>}
      <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
        <div>
          <label className="form-label">Name</label>
          <input className="form-control" name="name" value={form.name} onChange={onChange} />
        </div>

        <div>
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="4"
            value={form.description}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="form-label">Image URL</label>
          <input className="form-control" name="img" value={form.img} onChange={onChange} />
        </div>

        <div>
          <label className="form-label">Price</label>
          <input
            className="form-control"
            type="number"
            min="0"
            name="price"
            value={form.price}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="form-label">Number of Tickets</label>
          <input
            className="form-control"
            type="number"
            min="0"
            name="nbTickets"
            value={form.nbTickets}
            onChange={onChange}
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Add Event
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/events')}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}
