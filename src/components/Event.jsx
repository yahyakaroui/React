import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Event({event, buy,toggleLike}) {
    
  return (
    <>
    <div className="card" style={{ width: "25rem" }}>
  <img className="card-img-top" src={event.img} alt="placeholder img"></img>
  <div className="card-body">
    {/* quand on click sur name il affiche les details de cet  event */}
   <Link to={`/events/${encodeURIComponent(event.name)}`} className="card-title">
    {event.name}
    </Link>
    <p className="card-text">{event.price}</p>
    <p className="card-text">tickets available: {event.nbTickets} </p>
    <p className="card-text">Number of participants: {event.nbParticipants}</p>
     {event.nbTickets === 0 ? (
                        <Button disabled className="btn btn-secondary">
                            Sold Out
                        </Button>
                    ) : (
                        <Button onClick={buy} className="btn btn-primary">
                            Book an event
                        </Button>
                    )}
{/* Bouton Like/Dislike */}
                    <Button 
                        onClick={toggleLike} 
                        variant={event.like ? "danger" : "info"}
                        className="me-2"
                    >
                        {event.like ? "Dislike" : "Like"}
                    </Button>

                    </div>
  </div>

    </>
  )
}
