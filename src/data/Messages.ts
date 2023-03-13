import getDate from "./getDate";

type message = {
  id: number | string;
  from: number;
  to: number;
  date: string;
  content: string;
};
console.log("message type");
export const messages: message[] = [
  {
    id: 1,
    from: 1,
    to: 2,
    date: getDate(),
    content: "Hey Dhairya!",
  },
  {
    id: 2,
    from: 1,
    to: 3,
    date: getDate(),
    content: "Hey Neel!",
  },
  {
    id: 3,
    from: 1,
    to: 4,
    date: getDate(),
    content: "Hey Heet!",
  },
  {
    id: 4,
    from: 1,
    to: 5,
    date: getDate(),
    content: "Hey Jay!",
  },
  {
    id: 5,
    from: 2,
    to: 1,
    date: getDate(),
    content: "Hey Dwij!",
  },
  {
    id: 6,
    from: 1,
    to: 2,
    date: getDate(),
    content: "How are you?",
  },
  {
    id: 7,
    from: 2,
    to: 1,
    date: getDate(),
    content: "I am Fine!",
  },
  {
    id: 8,
    from: 2,
    to: 1,
    date: getDate(),
    content: "what's up!",
  },
  {
    id: 9,
    from: 1,
    to: 2,
    date: getDate(),
    content: "Nothing",
  },
  {
    id: 10,
    from: 1,
    to: 2,
    date: getDate(),
    content: "Bye!",
  },
  {
    id: 11,
    from: 2,
    to: 3,
    date: getDate(),
    content: "Hey Neel!",
  },
  {
    id: 12,
    from: 2,
    to: 4,
    date: getDate(),
    content: "Hey Heet!",
  },
];
