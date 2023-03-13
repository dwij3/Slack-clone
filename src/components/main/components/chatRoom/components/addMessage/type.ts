import { Action } from "../../../../../../hooks/type";

export type AddMessageProps = {
  activeTeamMateId: number;
  onAction: (action: Action) => void;
  // onAction: any;
};
