import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import { v1 } from "uuid";

const App = () => {
  const [modalActive, setModalActive] = useState(true);
  const [boards, setBoards] = useState([
    {
      id: v1(),
      title: "TODO",
      items: [
        { id: v1(), title: "Что-то там" },
        { id: v1(), title: "Каво-то там" },
        { id: v1(), title: "Че-за там" },
      ],
    },
    {
      id: v1(),
      title: "In Progress",
      items: [
        { id: v1(), title: "Что-то там" },
        { id: v1(), title: "Каво-то там" },
        { id: v1(), title: "Че-за там" },
      ],
    },
    {
      id: v1(),
      title: "Testing",
      items: [
        { id: v1(), title: "Что-то там" },
        { id: v1(), title: "Каво-то там" },
        { id: v1(), title: "Че-за там" },
      ],
    },
    {
      id: v1(),
      title: "Done",
      items: [
        { id: v1(), title: "Что-то там" },
        { id: v1(), title: "Каво-то там" },
        { id: v1(), title: "Че-за там" },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className == "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }
  function dragLaveHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dragStartHendler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dropHendler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }

  function dropCardHendler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  return (
    <div className="app">
      <button className="open-btn" onClick={() => setModalActive(true)}>
        You Name
      </button>
      {boards.map((board) => (
        <div
          className="board"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHendler(e, board)}
        >
          <div className="board__title">{board.title}</div>
          {board.items.map((item) => (
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLaveHandler(e)}
              onDragStart={(e) => dragStartHendler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHendler(e, board, item)}
              draggable={true}
              className="item"
            >
              {item.title}
              <div className="battons-container">
                <button className="removeItem">X</button>
              </div>
            </div>
          ))}
        </div>
      ))}
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default App;
