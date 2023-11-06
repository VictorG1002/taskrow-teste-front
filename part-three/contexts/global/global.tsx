import { IGlobalContext, IGlobalProviderProps, IGroups } from '@/utils/types';
import React, { createContext, useMemo, useState } from 'react';

export const GlobalContext = createContext({} as IGlobalContext);

export function GlobalProvider({ children }: IGlobalProviderProps) {
  const [selectedGroup, setSelectedGroup] = useState<IGroups>({
    idGrupo: 0,
    nome: ''
  });
  const [groups, setGroups] = useState<IGroups[]>([]);

  return (
    <GlobalContext.Provider value={{ selectedGroup, setSelectedGroup , groups, setGroups}}>
      {children}
    </GlobalContext.Provider>
  );
}
