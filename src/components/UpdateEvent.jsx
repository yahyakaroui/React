import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editEvent, getEventById } from '../service/api'

const initialForm = {
  name: '',
  description: '',
  img: '',
  price: 0,
  nbTickets: 0,
  nbParticipants: 0,
  like: false,
}

export default function UpdateEvent() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await getEventById(id)
        setForm({
          name: data.name || '',
          description: data.description || '',
          img: data.img || '',
          price: Number(data.price || 0),
          nbTickets: Number(data.nbTickets || 0),
          nbParticipants: Number(data.nbParticipants || 0),
          like: Boolean(data.like),
        })
      } catch {
        setError('Événement introuvable.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [id])

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      ...form,
      name: form.name.trim(),
      description: form.description.trim(),
      img: form.img.trim() || '/images/placeholder.jpg',
      price: Number(form.price),
      nbTickets: Number(form.nbTickets),
      nbParticipants: Number(form.nbParticipants),
      like: Boolean(form.like),
    }

    try {
      await editEvent(id, payload)
      navigate('/events')
    } catch {
      setError("Impossible d'enregistrer les modifications.")
    }
  }

  if (loading) {
    return <section className="content-card p-4">Chargement...</section>
  }

  return (
    <section className="content-card p-4 p-md-5">
      <h2 className="section-title">Modify Event</h2>
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
          <button type="submit" className="btn btn-success">
            Update
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/events')}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}
