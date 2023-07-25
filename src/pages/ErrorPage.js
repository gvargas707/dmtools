import React from "react";
import { useRouteError, Link } from "react-router-dom";

import NatOne from "../assets/png/nat-one-die.png"
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <img src={NatOne}/>
      <h2>Uh oh! It looks like we rolled a nat one and couldn't load the page you're looking for.</h2>
      <p className="error-message">{error.statusText || error.message}</p>
      <br/>
      <h3>Let's go <Link className="error-home" to={`/`}>Home</Link> and roll again.</h3>
    </div>
  )
}