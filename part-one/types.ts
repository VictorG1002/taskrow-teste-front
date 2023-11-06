export interface User {
  idUsuario: number;
  nome: string;
}

export interface Group {
  idGrupo: number;
  nome: string;
  usuarios?: User[];
  subGrupos?: Group[];
}
