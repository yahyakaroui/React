import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getEventById } from '../service/api'

export default function EventDetails() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await getEventById(id)
        setEvent(data)
      } catch {
        setEvent(null)
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [id])

  if (loading) {
    return <section className="content-card p-4">Chargement...</section>
  }

  if (!event) {
    return (
      <section className="content-card p-4 text-center">
        <h2 className="section-title">Event does not exist</h2>
        <Link to="/events" className="btn btn-outline-secondary">
          Back to events
        </Link>
      </section>
    )
  }

  return (
    <section className="content-card p-4 p-md-5">
      <h2 className="section-title">{event.name}</h2>
      <img src={event.img || '/images/placeholder.jpg'} alt={event.name} className="detail-image" />
      <p className="section-subtitle mb-3">{event.description}</p>
      <p className="event-meta mb-1">
        <strong>Price:</strong> {event.price} DT
      </p>
      <p className="event-meta mb-1">
        <strong>Tickets:</strong> {event.nbTickets}
      </p>
      <p className="event-meta">
        <strong>Participants:</strong> {event.nbParticipants}
      </p>
      <div className="d-flex flex-wrap gap-2 mt-3">
        <Link to="/events" className="btn btn-primary">
          Back to events
        </Link>
        <Link to={`/events/${event.id}/edit`} className="btn btn-success">
          Update event
        </Link>
      </div>
    </section>
  )
}
