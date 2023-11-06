import { Dispatch, SetStateAction } from 'react';

export interface IUsers {
  idUsuario: number;
  nome: string;
}

export interface ISubGroups {
  idGrupo: number;
  nome: string;
  usuarios: IUsers[];
}

export interface IGroups {
  idGrupo: number;
  nome: string;
  usuarios?: IUsers[];
  subGrupos?: ISubGroups[];
}

export interface IGlobalProviderProps {
  children: React.ReactNode;
}

export interface IGlobalContext {
  selectedGroup: IGroups;
  setSelectedGroup: Dispatch<SetStateAction<IGroups>>;
  groups: IGroups[];
  setGroups: Dispatch<SetStateAction<IGroups[]>>;
}

export interface IUserFinded {
  groupName: string;
  idUsuario: number;
  nome: string;
}
