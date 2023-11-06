import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useGlobal } from '@/contexts/global';

import JSON from '../../groups.json';

import { IGroups } from '@/utils/types';

import GroupList from '@/components/GroupList';

const groups: React.FC = () => {
  const router = useRouter();

  const { selectedGroup, groups, setGroups } = useGlobal();

  const getGroups = (data: IGroups[]) => {
    const groups: IGroups[] = [];
    const traverse = (element: IGroups | IGroups[]) => {
      if (Array.isArray(element)) {
        element.forEach((item) => traverse(item));
      } else if (typeof element === 'object' && element !== null) {
        if (element.hasOwnProperty('idGrupo')) {
          groups.push(element);
        }
        Object.values(element).forEach((value) => traverse(value));
      }
    };
    traverse(data);

    return groups;
  };

  useEffect(() => {
    setGroups(getGroups(JSON.grupos as IGroups[]));
  }, []);

  return <GroupList groupsList={groups} group={selectedGroup} />;
};

export default groups;
