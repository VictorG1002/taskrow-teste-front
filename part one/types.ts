export interface User {
  userId: number;
  name: string;
}

export interface Group {
  groupId: number;
  name: string;
  users?: User[];
  subGroups?: Group[];
}