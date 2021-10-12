import React, { useEffect } from 'react'
import Home from "./components/Home"

export default function Root(props) {
  
  return (
    <>
      <section>{props.name} is mounted!</section>
      <Home {...props} />
    </>
  );
}
