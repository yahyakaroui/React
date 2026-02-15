import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
// c'est un composant parent qui va partager des données avec tous les composants enfants qui sont dans le Outlet
export  function ParentLayout() {
    const [currentUser]=useState("Nour");
  return (
    <Outlet context={{currentUser}} />
  )
}
