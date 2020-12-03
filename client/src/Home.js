import React from "react";
import { Redirect } from "react-router-dom";
import "./App.css";


function Home() {

  const isAuth = localStorage.getItem("isAuth");
  
  if (!isAuth) {
    console.log("ok")
    return <Redirect to="/login"/>;
  }

  return (
    <div >
      <h1 className="title"> Find your Book </h1>
      <p style={{textAlign: 'center', color: 'white'}}>In Built...</p>
    </div>
  );
}

export default Home;
