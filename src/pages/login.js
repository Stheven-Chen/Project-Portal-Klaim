import React from "react";
import "./../App.css";
import * as component from "./../component.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // fetch("http://localhost/learn/react/portal-klaim/portal-klaim/src/server/index.php")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error(error));

  const [noPolis, setNoPolis] = React.useState("");
  const [namaTertanggung, setNamaTertanggung] = React.useState("");
  const navigate = useNavigate();

  const handleNoPolisChange = (event) => {
    setNoPolis(event.target.value);
  };

  const handleNamaTertanggungChange = (event) => {
    setNamaTertanggung(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { noPolis, insured: namaTertanggung };
    fetch("http://localhost/learn/react/portal-klaim/portal-klaim/src/server/add.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
        navigate("/klaim");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  


  return (
    <>
      <component.Header cls="container-fluid d-flex justify-content-between" />
      <component.Div
        bs="row text-center py-3"
        id="judul"
        content={[<h1>Portal Klaim</h1>]}
      />
      <form onSubmit={handleSubmit}>
        <component.Div
          bs="container bg-light rounded-4 shadow-lg"
          id="box"
          content={[
            <component.Row
              col={[
                <component.Input
                  name="No Polis"
                  type="text"
                  value={noPolis}
                  onChange={handleNoPolisChange}
                  Lcls="form-label"
                  Icls="col-md-12 form-control rounded-4"
                />,
              ]}
              className="py-4 px-5"
            />,
            <component.Row
              col={[
                <component.Input
                  name="Nama Tertanggung"
                  type="text"
                  value={namaTertanggung}
                  onChange={handleNamaTertanggungChange}
                  Lcls="form-label"
                  Icls="col-md-12 form-control rounded-4"
                />,
              ]}
              className="py-4 px-5"
            />,
            <component.Row
              col={[
                <component.Div bs="col-md-4" content="&nbsp;" />,
                <component.Btn
                  type="submit"
                  val="Ajukan Klaim"
                  cls="col-md-4 btn btn-warning rounded-4"
                  id="startBtn"
                />,
              ]}
              className="py-4 px-5"
            />,
            <component.Row col={[<p> atau </p>]} className="text-center" />,
            <component.Row
              col={[
                <a className="icon-link" href="/">
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
};

export default Login;
