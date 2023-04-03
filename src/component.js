import React from "react";


const logo = require('./img/logoputih.png') ;
const logo2 = require('./img/logo2.png') ;
export const Header = ({ cls }) => {
  return (
    <header className={cls}>
      <div className="col-md-12">
        <img id="logo1" src={logo} alt="logoPutih" />
        <img id="logo2" src={logo2} alt="logoojk" />
      </div>
    </header>
  );
};

export const Div = ({ bs, content, id }) => {
  return (
    <div className={bs} id={id} key={id}>
      {content}
    </div>
  );
};

export const Input = ({ name, type, Lcls, Icls, onChange, value }) => {
  return (
    <>
      <label htmlFor={name} className={Lcls}>
        {name}
      </label>
      <input type={type} className={Icls} name={name} key={name} onChange={onChange} value={value} />
    </>
  );
};

export const Row = ({ col, className }) => {
  return (
    <div className={`row ${className}`}>
      {col.map((c, i) => (
        <React.Fragment key={i}>{c}</React.Fragment>
      ))}
    </div>
  );
};

export const Btn = ({ val, cls, id }) => {
  return <input className={cls} type="submit" id={id} name="submit" value={val} key={id} />;
};
