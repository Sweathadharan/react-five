import React, { useState } from 'react';
import './App.css';
const Appe = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <center>
        {show ? <h1>WELCOME TO MY CAFE!!!
        </h1> : null}

        <button onClick={() => setShow(!show)}>Toggle</button>
      </center>
      <app />
    </div>
  );
};
export default Appe;
