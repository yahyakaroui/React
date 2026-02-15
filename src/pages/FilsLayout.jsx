import React from 'react'
import { useOutletContext } from 'react-router-dom';
export  function FilsLayout() {
    const {currentUser}=useOutletContext();
  return (
    <p>User: {currentUser}</p>
  )
}
