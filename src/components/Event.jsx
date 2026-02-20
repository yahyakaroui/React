import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Event({ event, buy, toggleLike, onDelete }) {
  return (
    <article className="event-card">
      <img className="event-image" src={event.img || '/images/placeholder.jpg'} alt={event.name} />
      <div className="event-body">
        <h3 className="event-title">
          <Link to={`/events/${event.id}`}>{event.name}</Link>
        </h3>
        <span className="badge-price">{event.price} DT</span>
        <p className="event-meta">Tickets available: {event.nbTickets}</p>
        <p className="event-meta">Participants: {event.nbParticipants}</p>

        <div className="event-actions">
          {event.nbTickets === 0 ? (
            <Button disabled variant="secondary">
              Sold Out
            </Button>
          ) : (
            <Button onClick={buy} variant="primary">
              Book an event
            </Button>
          )}

          <Button onClick={toggleLike} variant={event.like ? 'danger' : 'info'}>
            {event.like ? 'Dislike' : 'Like'}
          </Button>

          <Link to={`/events/${event.id}/edit`} className="btn btn-success">
            Update
          </Link>

          <Button onClick={onDelete} variant="danger">
            Delete
          </Button>
        </div>
      </div>
    </article>
  )
}
