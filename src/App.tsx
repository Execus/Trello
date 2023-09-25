import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import useBoardDragging from "./Trello/UseBoardDragging";
import Board from "./Trello/Board";

const App = () => {
  const [modalActive, setModalActive] = useState(true);

  const {
    dragOverHandler,
    dragEndHandler,
    dragLaveHandler,
    dragStartHendler,
    dropCardHendler,
    dropHendler,
    boards,
    onRemoveCard,
  } = useBoardDragging();
  return (
    <div className="app">
      <button className="open-btn" onClick={() => setModalActive(true)}>
        You Name
      </button>
      {boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          dragEndHandler={dragEndHandler}
          dragLaveHandler={dragLaveHandler}
          dragOverHandler={dragOverHandler}
          dragStartHendler={dragStartHendler}
          dropCardHendler={dropCardHendler}
          dropHendler={dropHendler}
          onRemoveCard={onRemoveCard}
        />
      ))}
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default App;
