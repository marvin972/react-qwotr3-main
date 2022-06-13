import React, { useState } from "react";
import "./Contenu.css";
import logo from "../logo.svg";

  import Modal from "../Modal/Modal";
  
export default function Contenu({initialCount}) {

  const [count, setCount] = useState(0);
const [show, setShow] = useState(false);


function handleModal() {
  setShow(!show);
}

  // function incremente() {
  //   setCount(count + 1);
  // }

  return (
    <>
      <header className="App-header">
        <div className="modalContenu">
          <button onClick={handleModal}>
            { show ? 'Cacher' : 'Montrer'} la Modal
          </button>
          {show && <Modal />}
        </div>
        <div className="compteur">
          Total : {count}
          <div>
          <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
          </div>
          <div>
          <button onClick={() => setCount((prevCount) => prevCount - 1)}>
            -
          </button>
          </div>
          <div>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            +
          </button>
          </div>
          {/* <div>
            <button onClick={incremente}>Incremente +</button>
          </div> */}
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}
