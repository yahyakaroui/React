import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="content-card not-found">
      <h1 className="section-title">Oups, page introuvable</h1>
      <p className="section-subtitle">La route demandée n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn btn-outline-secondary mt-3">
        Retour à l'accueil
      </Link>
      <img src="/images/notfound.png" alt="404 not found" />
    </section>
  )
}
