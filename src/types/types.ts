export type UserContextProviderProps = {
  children: React.ReactNode;
  value: string;
};

export type User = {
  id: string;
  name: string;
  photo: string;
  chatRoomId: string[];
};

export type Message = {
  id: string;
  from: string;
  to: string | undefined;
  date: string;
  day: string;
  content: string;
};

export type ChatRoom = {
  id: string;
  chatRoomName: string;
  userIds: string[];
  messageIds: Message[];
  type: string;
};

export type Action = {
  type: string;
  newMessage: Message;
};
