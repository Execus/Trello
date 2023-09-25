import { v1 } from "uuid";

export type BoardType = {
  id: string;
  title: string;
  cards: CardType[];
};

export type CardType = {
  id: string;
  title: string;
};

export let boardsContent = [
  {
    id: v1(),
    title: "TODO",
    cards: [
      { id: v1(), title: "Что-то там" },
      { id: v1(), title: "Каво-то там" },
      { id: v1(), title: "Че-за там" },
    ],
  },
  {
    id: v1(),
    title: "In Progress",
    cards: [
      { id: v1(), title: "Что-то там" },
      { id: v1(), title: "Каво-то там" },
      { id: v1(), title: "Че-за там" },
    ],
  },
  {
    id: v1(),
    title: "Testing",
    cards: [
      { id: v1(), title: "Что-то там" },
      { id: v1(), title: "Каво-то там" },
      { id: v1(), title: "Че-за там" },
    ],
  },
  {
    id: v1(),
    title: "Done",
    cards: [
      { id: v1(), title: "Что-то там" },
      { id: v1(), title: "Каво-то там" },
      { id: v1(), title: "Че-за там" },
    ],
  },
];
