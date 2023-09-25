import { useState } from "react";
import { BoardType, CardType, boardsContent } from "./TrelloContent";

const useBoardDragging = () => {
  const [boards, setBoards] = useState<BoardType[]>(boardsContent);
  const [currentBoard, setCurrentBoard] = useState<BoardType | null>(null);
  const [currentItem, setCurrentItem] = useState<CardType | null>(null);

  function onRemoveCard(id: string, boardId: string) {
    const filteredBoards = boards.map((board) => {
      if (board.id === boardId) {
        const filteredCards = board.cards.filter((card) => card.id !== id);
        return { ...board, cards: filteredCards };
      } else {
        return board;
      }
    });

    setBoards(filteredBoards);
  }

  function dragOverHandler(e: any) {
    e.preventDefault();
    if (e.target.className == "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }
  function dragLaveHandler(e: any) {
    e.target.style.boxShadow = "none";
  }
  function dragStartHendler(e: any, board: BoardType, item: CardType) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(e: any) {
    e.target.style.boxShadow = "none";
  }
  function dropHendler(e: any, board: BoardType, item: CardType) {
    e.preventDefault();
    if (currentBoard && currentItem) {
      const currentIndex = currentBoard.cards.indexOf(currentItem);
      currentBoard.cards.splice(currentIndex, 1);
      const dropIndex = board.cards.indexOf(item);
      board.cards.splice(dropIndex + 1, 0, currentItem);
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
  }

  function dropCardHendler(e: any, board: BoardType) {
    if (currentBoard && currentItem) {
      board.cards.push(currentItem);
      const currentIndex = currentBoard.cards.indexOf(currentItem);
      currentBoard.cards.splice(currentIndex, 1);
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
  }
  return {
    dragOverHandler,
    dragLaveHandler,
    dragStartHendler,
    dragEndHandler,
    dropHendler,
    dropCardHendler,
    onRemoveCard,
    boards,
  };
};

export default useBoardDragging;
