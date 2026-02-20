import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
  const { username } = useParams()

  return (
    <section className="content-card p-4 p-md-5">
      <h1 className="section-title">About This Project</h1>
      <p className="section-subtitle">
        Welcome <strong>{username}</strong>. This mini application was built to practice components,
        props, state updates, and navigation with React Router.
      </p>

      <div className="home-grid mt-4">
        <article className="info-tile">
          <strong>Tech Stack</strong>
          <span>React, React Router, React Bootstrap, Vite.</span>
        </article>
        <article className="info-tile">
          <strong>Main Goal</strong>
          <span>Learn UI composition and clean page structure.</span>
        </article>
        <article className="info-tile">
          <strong>Current Version</strong>
          <span>Enhanced interface and responsive display.</span>
        </article>
      </div>
    </section>
  )
}
