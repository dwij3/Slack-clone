export type UserContextProviderProps = {
  children: React.ReactNode;
  value: number;
};

export type User = {
  id: number | string;
  name: string;
  photo: string;
  chatRoomId: number[];
};

export type Message = {
  id: number | string;
  from: number | string;
  to: number | string;
  date: string;
  content: string;
};

export type ChatRoom = {
  id: number | string;
  chatRoomName: string;
  userIds: (number | string)[];
  messageIds: Message[] | undefined;
  type: string;
};

export type Action = {
  type: string;
  newMessage: Message;
};
