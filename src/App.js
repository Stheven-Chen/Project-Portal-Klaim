import logo from "./logo.svg";
import React from "react";
import "./App.css";
import * as component from "./component.js";

function App() {
  const [noPolis, setNoPolis] = React.useState("");
  const [namaTertanggung, setNamaTertanggung] = React.useState("");

  const handleNoPolisChange = (event) => {
    setNoPolis(event.target.value);
  };

  const handleNamaTertanggungChange = (event) => {
    setNamaTertanggung(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form from submitting and refreshing the page
    // do something with noPolis and namaTertanggung, e.g. send to server
    console.log(`No Polis: ${noPolis}`);
    console.log(`Nama Tertanggung: ${namaTertanggung}`);
  };

  return (
    <>
      <component.Header cls="container-fluid d-flex justify-content-between" />
      <component.Div bs="row text-center py-3" id="judul" content={[<h1>Portal Klaim</h1>]} />
      <form onSubmit={handleSubmit}>
        <component.Div
          bs="container bg-light rounded-4 shadow-lg"
          id="box"
          content={[
            <component.Row col={[<component.Input name="No Polis" type="text" value={noPolis} onChange={handleNoPolisChange} Lcls="form-label" Icls="col-md-12 form-control rounded-4" />]} className="py-4 px-5" />,
            <component.Row col={[<component.Input name="Nama Tertanggung" type="text" value={namaTertanggung} onChange={handleNamaTertanggungChange} Lcls="form-label" Icls="col-md-12 form-control rounded-4" />]} className="py-4 px-5" />,
            <component.Row col={[<component.Div bs="col-md-4" content="&nbsp;" />, <component.Btn type="submit" val="Lanjutkan" cls="col-md-4 btn btn-warning rounded-4" id="startBtn" />]} className="py-4 px-5" />,
            <component.Row col={[<p> atau </p>]} className="text-center" />,
            <component.Row
              col={[
                <a className="icon-link" href="#">
                  {" "}
                  cek status klaim{" "}
                </a>,
              ]}
              className="text-center"
            />,
          ]}
        />
      </form>
    </>
  );
}

export default App;
