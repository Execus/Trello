import "./Modal.css";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="modalTitle">Кто ты Воин?</h1>
        <div className="imputContainer">
          <input className="modalImput" type="" placeholder="Name" />
        </div>
        <div className="btnContainer">
          <button className="btnСonsent" onClick={() => setActive(false)}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
