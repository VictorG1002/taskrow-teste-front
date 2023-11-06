import React from 'react';

import { useRouter } from 'next/router';

import { Button, Center } from '@chakra-ui/react';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Center background={'#2B6CB0'} p={10} mb={5} gap={2} boxShadow={'lg'}>
      <Button
        boxShadow={'md'}
        borderRadius={4}
        onClick={() => router.push('/')}
      >
        Home
      </Button>
      <Button
        boxShadow={'md'}
        borderRadius={4}
        onClick={() => router.push('/groups')}
      >
        Groups
      </Button>
      <Button
        boxShadow={'md'}
        borderRadius={4}
        onClick={() => router.push('/register')}
      >
        Register
      </Button>
    </Center>
  );
};

export default Header;
