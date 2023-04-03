import React from "react";

export const Header = ({ cls }) => {
  return (
    <header className={cls}>
      <div className="col-md-6">
        <img src="img/logoputih.png" alt="logoPutih" />
      </div>
      <div className="col-md-6">
        <img src="img/logoOjk.png" alt="logoojk" />
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
