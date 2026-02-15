/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useLoaderData } from 'react-router-dom';
export default function Home() {
  const data= useLoaderData();
  console.log(data);
    return (
    <div>home</div>
  )
}
