import React from 'react';

import { useRouter } from 'next/router';

import { Button, Center } from '@chakra-ui/react';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Center background={'teal.600'} p={10} mb={5} gap={2}>
      <Button onClick={() => router.push('/')}>Home</Button>
      <Button onClick={() => router.push('/groups')}>Groups</Button>
      <Button onClick={() => router.push('/register')}>Register</Button>
    </Center>
  );
};

export default Header;
