import React, { useEffect, useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Event from './Event'
import { deleteEvent, editEvent, getAllEvents } from '../service/api'

export default function Events() {
  const [events, setEvents] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [bookedEventName, setBookedEventName] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await getAllEvents()
        setEvents(data)
      } catch {
        setError('Impossible de charger les événements. Vérifie json-server sur le port 3001.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()

    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 1200)

    const hideWelcomeTimer = setTimeout(() => {
      setShowWelcome(false)
    }, 4200)

    return () => {
      clearTimeout(welcomeTimer)
      clearTimeout(hideWelcomeTimer)
    }
  }, [])

  const buy = async (event) => {
    if (event.nbTickets <= 0) {
      return
    }

    const updatedEvent = {
      ...event,
      nbTickets: event.nbTickets - 1,
      nbParticipants: event.nbParticipants + 1,
    }

    try {
      await editEvent(event.id, updatedEvent)
      setEvents((previous) => previous.map((item) => (item.id === event.id ? updatedEvent : item)))
      setBookedEventName(updatedEvent.name)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 2000)
    } catch {
      setError('Réservation impossible pour le moment.')
    }
  }

  const toggleLike = async (event) => {
    const updatedEvent = {
      ...event,
      like: !event.like,
    }

    try {
      await editEvent(event.id, updatedEvent)
      setEvents((previous) => previous.map((item) => (item.id === event.id ? updatedEvent : item)))
    } catch {
      setError('Modification Like/Dislike impossible pour le moment.')
    }
  }

  const remove = async (id) => {
    try {
      await deleteEvent(id)
      setEvents((previous) => previous.filter((event) => event.id !== id))
    } catch {
      setError('Suppression impossible pour le moment.')
    }
  }

  if (loading) {
    return <section className="content-card p-4">Chargement des événements...</section>
  }

  const soldOutCount = events.filter((event) => event.nbTickets === 0).length

  return (
    <section>
      <header className="events-header content-card p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <h2 className="section-title">Events List</h2>
          <p className="section-subtitle mb-0">
            {events.length} events available • {soldOutCount} sold out
          </p>
        </div>
        <Link to="/events/new" className="btn btn-success">
          Add New Event
        </Link>
      </header>

      {error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
          {error}
        </Alert>
      )}

      {showWelcome && (
        <Alert variant="info" onClose={() => setShowWelcome(false)} dismissible>
          Hey welcome to Esprit Events
        </Alert>
      )}

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          You have booked the event: {bookedEventName}
        </Alert>
      )}

      <Row className="events-grid">
        {events.map((event) => (
          <Col key={event.id} lg={4} md={6}>
            <Event
              event={event}
              buy={() => buy(event)}
              toggleLike={() => toggleLike(event)}
              onDelete={() => remove(event.id)}
            />
          </Col>
        ))}
      </Row>
    </section>
  )
}
