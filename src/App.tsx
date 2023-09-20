import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

const App = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="App">
      <button className="open-btn" onClick={() => setModalActive(true)}>
        OCHKO
      </button>
      <h1>Tello 003</h1>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default App;
