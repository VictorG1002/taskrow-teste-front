import React from 'react';

import { useGlobal } from '@/contexts/global';

import GroupList from '@/components/GroupList';



const groups: React.FC = () => {
  const { selectedGroup, setSelectedGroup, groups } = useGlobal();

  return <GroupList groupsList={groups} group={selectedGroup} />;
};

export default groups;
