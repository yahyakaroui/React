import { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import eventsData from '../data/events.json'
import Event from './Event'

const normalizeEvent = (event, index) => ({
  id: event.id ?? index + 1,
  name: event.name ?? 'Event name',
  description: event.description ?? '',
  img: event.img ?? '/image/placeholder.jpg',
  price: Number.isFinite(event.price) ? event.price : 0,
  nbTickets: Number.isFinite(event.nbTickets) ? event.nbTickets : 0,
  nbParticipants: Number.isFinite(event.nbParticipants)
    ? event.nbParticipants
    : 0,
  like: Boolean(event.like),
})

export default function Events() {
  const [events, setEvents] = useState(() =>
    eventsData.map((event, index) => normalizeEvent(event, index)),
  )
  const [bookingMessage, setBookingMessage] = useState('')
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!bookingMessage) return undefined
    const timer = setTimeout(() => setBookingMessage(''), 2000)
    return () => clearTimeout(timer)
  }, [bookingMessage])

  useEffect(() => {
    console.log('Events mounted')
    return () => console.log('Events unmounted')
  }, [])

  useEffect(() => {
    console.log('Events updated')
  }, [events])

  const handleBook = (eventId) => {
    let booked = false

    setEvents((current) =>
      current.map((event) => {
        if (event.id !== eventId) return event
        if (event.nbTickets <= 0) return event
        booked = true
        return {
          ...event,
          nbTickets: event.nbTickets - 1,
          nbParticipants: event.nbParticipants + 1,
        }
      }),
    )

    if (booked) {
      setBookingMessage('You have booked an event')
    }
  }

  const handleToggleLike = (eventId) => {
    setEvents((current) =>
      current.map((event) =>
        event.id === eventId ? { ...event, like: !event.like } : event,
      ),
    )
  }

  return (
    <Container className="events-shell">
      {showWelcome && (
        <Alert variant="success" className="events-alert">
          Hey welcome to Esprit Events
        </Alert>
      )}
      {bookingMessage && (
        <Alert variant="info" className="events-alert">
          {bookingMessage}
        </Alert>
      )}

      <header className="events-header">
        <h1 className="events-title">Esprit Events</h1>
        <p className="events-subtitle">
          Manage, book, and like the events that matter to your clubs.
        </p>
      </header>

      <Row className="g-4">
        {events.map((event, index) => (
          <Col key={event.id} xs={12} md={6} lg={4}>
            <Event
              event={event}
              onBook={handleBook}
              onToggleLike={handleToggleLike}
              style={{ animationDelay: `${index * 0.08}s` }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
