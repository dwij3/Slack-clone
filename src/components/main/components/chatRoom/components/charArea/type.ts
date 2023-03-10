export type MESSAGE = {
  id: number;
  from: number;
  to: number;
  Date: string;
  content: string;
};

export type ChatAreaProps = {
  activeTeamMateId: number;
  filterMessage: any;
};
