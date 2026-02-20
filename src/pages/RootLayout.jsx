import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import { Suspense } from 'react'
// c'est le composant parent de tous les composants de la page , il contient le header et le footer et le Outlet est la partie qui change en fonction de la route
export default function RootLayout() {
  return (
    <div className="app-shell">
      <NavigationBar />
      <main className="page-main">
        <Suspense
          fallback={
            <div className="content-card p-4 text-center">Loading...</div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer className="page-footer">
        Esprit Events Workshop • React Router + Components
      </footer>
    </div>
  )
}
