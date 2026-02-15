import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import { Suspense } from 'react'
// c'est le composant parent de tous les composants de la page , il contient le header et le footer et le Outlet est la partie qui change en fonction de la route
export default function RootLayout() {
  return (
    <>
    <NavigationBar />
    <Suspense fallback={
        <div>Loading...</div>
    }>
    <Outlet />
    </Suspense>
    
    
    </>
  )
}
