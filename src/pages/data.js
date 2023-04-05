import React, { useState, useEffect } from "react";
import "./../App.css";
import * as component from "./../component.js";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    console.log("back");
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost/learn/react/portal-klaim/portal-klaim/src/server/index.php")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <component.Header cls="container-fluid d-flex justify-content-between" />
      <component.Div
        bs="row text-center py-3"
        id="judul"
        content={[<h1>Show Data</h1>]}
      />

      <component.Div
        bs="container bg-light rounded-4 shadow-lg"
        id="box"
        content={[
          <component.Row
            col={[
                data.map((item, index) => (
                    <component.Card
                      key={index}
                      noPolis={item.noPolis}
                      insured={item.insured}
                    />
                  )),
             
                  <button
                    className="col-md-12 btn btn-dark mt-5"
                    onClick={handleClick}>Home</button>,
            ]}
            className="py-4 px-5 d-flex justify-content-between"
          />,
        ]}

      />
    </>
  );
};

export default Data;
