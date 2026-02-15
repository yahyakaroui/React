import React from 'react'
import { useParams } from 'react-router-dom';
export default function About() {
    const {username}=useParams();
  return (
    <div>
        <h1>About Page</h1>
    <h1>Welcome {username} to about page</h1>
    </div>
  )
}
