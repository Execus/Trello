import { FC, useRef, useState } from "react";
import { BoardType, CardType } from "./TrelloContent";

type BoardProps = {
  board: BoardType;
  dragOverHandler: (e: any) => void;
  dragEndHandler: (e: any) => void;
  dragLaveHandler: (e: any) => void;
  dragStartHendler: (e: any, board: BoardType, item: CardType) => void;
  dropCardHendler: (e: any, board: BoardType) => void;
  dropHendler: (e: any, board: BoardType, item: CardType) => void;
  onRemoveCard: (id: string, boardId: string) => void;
};

const Board: FC<BoardProps> = ({
  board,
  dragEndHandler,
  dragLaveHandler,
  dragOverHandler,
  dragStartHendler,
  dropCardHendler,
  dropHendler,
  onRemoveCard,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(board.title);

  return (
    <div
      className="board"
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropCardHendler(e, board)}
    >
      {isEditing ? (
        <input
          type="text"
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
          onBlur={() => {
            setIsEditing(false);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setIsEditing(false);
            }
          }}
          autoFocus
        />
      ) : (
        <div
          className="board__title"
          onDoubleClick={() => {
            setIsEditing(true);
          }}
        >
          {board.title}
        </div>
      )}
      {board.cards.map((card) => (
        <div
          key={card.id}
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLaveHandler(e)}
          onDragStart={(e) => dragStartHendler(e, board, card)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDrop={(e) => dropHendler(e, board, card)}
          draggable={true}
          className="item"
        >
          {card.title}
          <div className="battons-container">
            <button
              onClick={() => onRemoveCard(card.id, board.id)}
              className="removeBtnItem"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
