import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/events.json";

export default function EventDetails() {
  const { eventName } = useParams();
  const decodedName = decodeURIComponent(eventName);

  const event = events.find((e) => e.name === decodedName);

  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="container mt-4">
      <h2>{event.name}</h2>
      <img src={event.img} alt={event.name} style={{ maxWidth: "300px" }} />
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Price:</strong> {event.price} DT</p>
      <p><strong>Tickets:</strong> {event.nbTickets}</p>
      <p><strong>Participants:</strong> {event.nbParticipants}</p>
    </div>
  );
}
