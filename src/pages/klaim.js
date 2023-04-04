import React from "react";
import "./../App.css";
import * as component from "./../component.js";
import { useNavigate } from "react-router-dom";

const Klaim = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    console.log('yeay im back home')
    navigate("/");
  };

  return (
    <>
      <component.Header cls="container-fluid d-flex justify-content-between" />
      <component.Div bs="row text-center py-3" id="judul" content={[<h1>Klaim</h1>]} />

      <component.Div
        bs="container bg-light rounded-4 shadow-lg"
        id="box"
        content={[
          <component.Row
            col={[
                <button className='col-md-12 rounded-4 btn btn-primary' onClick={handleClick}>Take Me Back </button>
            ]}
            className="py-4 px-5"
          />,
        ]}
      />
    </>
  );
};

export default Klaim;
