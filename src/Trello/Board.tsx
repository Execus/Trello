import { FC } from "react";
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
  return (
    <div
      className="board"
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropCardHendler(e, board)}
    >
      <div className="board__title">{board.title}</div>
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
              className="removeItem"
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
