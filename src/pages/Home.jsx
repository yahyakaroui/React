/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Home() {
  const data = useLoaderData()

  return (
    <section className="content-card hero">
      <h1>Discover The Best Cultural Events</h1>
      <p>
        Browse upcoming festivals, check available tickets, and book your place in a few clicks.
        This workshop app uses React Router, reusable components, and local JSON data.
      </p>

      <div className="home-grid">
        <article className="info-tile">
          <strong>Routing</strong>
          <span>Nested routes with lazy-loaded pages.</span>
        </article>
        <article className="info-tile">
          <strong>Interactivity</strong>
          <span>Book tickets and like events in real time.</span>
        </article>
        <article className="info-tile">
          <strong>Loader Data</strong>
          <span>{String(data)}</span>
        </article>
      </div>

      <Link to="/events" className="btn btn-success mt-4">
        Explore events
      </Link>
    </section>
  )
}
