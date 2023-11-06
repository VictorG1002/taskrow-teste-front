import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useGlobal } from '@/contexts/global';

import {
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Input,
  Text,
  VStack
} from '@chakra-ui/react';

import { IGroups, IUserFinded } from '@/utils/types';

interface IGroupListProps {
  groupsList?: IGroups[];
  group?: IGroups;
}

const GroupList: React.FC<IGroupListProps> = ({ groupsList, group }) => {
  const { selectedGroup, setSelectedGroup, groups } = useGlobal();
  const [userFinded, setUserFinded] = useState<IUserFinded[]>([]);

  const [user, setUser] = useState('');

  const router = useRouter();

  const getGroupById = (group: IGroups) => {
    router.push(`/groups/${group.idGrupo}`);

    setSelectedGroup(group);
  };

  function findUser(
    term: string,
    gruposList: IGroups[],
    resultados: (IUserFinded & { groupName: string })[] = []
  ) {
    if (term.trim() === '') {
      return resultados;
    }

    gruposList.forEach((grupo) => {
      grupo.usuarios?.forEach((usuario) => {
        if (
          usuario.nome.trim().toLowerCase().includes(term.toLowerCase().trim())
        ) {
          resultados.push({ ...usuario, groupName: grupo.nome });
        }
      });

      if (grupo?.subGrupos && grupo.subGrupos.length > 0) {
        findUser(term, grupo.subGrupos, resultados);
      }
    });

    return resultados;
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <div>
        <GridItem w="100%" h="10" bg="blue.500" mb={5} />

        <HStack>
          <Input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="coloque o nome do usuario que deseja buscar o grupo"
          />
          <Button onClick={() => setUserFinded(findUser(user, groups))}>
            Buscar
          </Button>
        </HStack>

        {groupsList
          ? groupsList?.map((group, index) => (
            <Text
                key={group.idGrupo}
                color={
                  userFinded?.some((user) => user.groupName === group.nome)
                    ? 'red'
                    : 'black'
                }
                onClick={() => getGroupById(group)}
              >{`${'>'.repeat(index)} ${group.nome}`}</Text>
            ))
          : 'Lista não carregada'}
      </div>

      <div>
        <GridItem w="100%" h="10" bg="blue.500" />

        {group?.nome !== '' ? (
          <VStack>
            <Text>Nome: {group?.nome}</Text>
            <h1>Id: {group?.idGrupo}</h1>
            <Center>
              <strong>Usuarios</strong>
            </Center>
            <h1>
              {group?.usuarios
                ? group?.usuarios?.map((usuario, index) => (
                    <VStack>
                      <div>{usuario.nome}</div>
                    </VStack>
                  ))
                : 'Esse grupo não possui usuarios'}
            </h1>
          </VStack>
        ) : (
          'Nenhum grupo selecionado'
        )}
      </div>
    </Grid>
  );
};

export default GroupList;
