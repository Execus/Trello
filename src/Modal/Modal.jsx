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
        <h1>Кто ты Воин?</h1>
        <input type="" />
      </div>
    </div>
  );
};

export default Modal;
