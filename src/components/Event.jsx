import { Button, Card } from 'react-bootstrap'

const FALLBACK_IMAGE = '/image/placeholder.jpg'
const SOLD_OUT_IMAGE = '/image/sold_out.png'

export default function Event({ event, onBook, onToggleLike, style }) {
  const isSoldOut = event.nbTickets <= 0
  const imageSrc = event.img || FALLBACK_IMAGE

  return (
    <Card className="event-card h-100" style={style}>
      <div className="event-image-wrapper">
        <Card.Img
          variant="top"
          src={imageSrc}
          alt={event.name}
          className="event-image"
        />
        {isSoldOut && (
          <img
            src={SOLD_OUT_IMAGE}
            alt="Sold out"
            className="event-soldout"
          />
        )}
      </div>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text className="event-description">{event.description}</Card.Text>
        <div className="event-meta">
          <span className="event-price">Price : {event.price}</span>
        </div>
        <div className="event-meta">Number of tickets : {event.nbTickets}</div>
        <div className="event-meta">
          Number of participants : {event.nbParticipants}
        </div>
      </Card.Body>
      <Card.Footer className="event-actions">
        <Button
          type="button"
          variant={event.like ? 'secondary' : 'outline-secondary'}
          size="sm"
          onClick={() => onToggleLike(event.id)}
        >
          {event.like ? 'Dislike' : 'Like'}
        </Button>
        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={() => onBook(event.id)}
          disabled={isSoldOut}
        >
          Book an event
        </Button>
      </Card.Footer>
    </Card>
  )
}
