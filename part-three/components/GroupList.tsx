import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useGlobal } from '@/contexts/global';

import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Input,
  Link,
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
      <Box
        background={'#E2E8F0'}
        ml={10}
        borderRadius={4}
        height={'50vh'}
        padding={8}
        boxShadow={'md'}
      >
        <HStack mb={6}>
          <Input
            boxShadow={'md'}
            bg={'white'}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="coloque o nome do usuario que deseja buscar o grupo"
          />
          <Button
            boxShadow={'md'}
            bg={'#A0AEC0'}
            onClick={() => setUserFinded(findUser(user, groups))}
          >
            Buscar
          </Button>
        </HStack>

        {groupsList
          ? groupsList?.map((group, index) => (
              <VStack alignItems={'left'}>
                <Link
                  key={group.idGrupo}
                  color={
                    userFinded?.some((user) => user.groupName === group.nome)
                      ? '#4299E1'
                      : '#171923'
                  }
                  onClick={() => getGroupById(group)}
                >
                  {`${'▸'.repeat(index)} ${group.nome}`}
                </Link>
              </VStack>
            ))
          : 'Lista não carregada'}
      </Box>

      <Box
        background={'#E2E8F0'}
        mr={10}
        borderRadius={4}
        height={'50vh'}
        padding={8}
        boxShadow={'md'}
      >
        {group?.nome !== '' ? (
          <VStack>
            <Text
              bg={'#4299E1'}
              display={'flex'}
              gap={2}
              p={2}
              borderRadius={4}
              color={'white'}
              fontWeight={'bold'}
            >
              {' '}
              {group?.nome}
              <h1>#{group?.idGrupo}</h1>
            </Text>

            <Center>
              <strong>Usuarios</strong>
            </Center>
            <h1>
              {group?.usuarios
                ? group?.usuarios?.map((usuario, index) => (
                    <VStack
                      bg={'#BEE3F8'}
                      p={2}
                      borderRadius={4}
                      mt={2}
                      color={'#2C5282'}
                    >
                      <div>{usuario.nome}</div>
                    </VStack>
                  ))
                : 'Esse grupo não possui usuarios'}
            </h1>
          </VStack>
        ) : (
          'Nenhum grupo selecionado'
        )}
      </Box>
    </Grid>
  );
};

export default GroupList;
