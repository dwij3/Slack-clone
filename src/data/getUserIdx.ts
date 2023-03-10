import { users } from "./Users";

const getUserIdx = (userId: number): number => {
  return users.findIndex((user) => user.id === userId);
};

export default getUserIdx;
