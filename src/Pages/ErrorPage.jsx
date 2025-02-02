import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error= useRouteError();
    console.log(error);
  return (
    <div>
      <h1>{error.data}</h1>
      <NavLink to="/"><button>GO BACK</button></NavLink>
    </div>
  )
}

export default ErrorPage
