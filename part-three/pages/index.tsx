import { Link, VStack } from '@chakra-ui/react';



export default function Home() {
  return (
    <VStack>
      <Link
        display={'flex'}
        borderRadius={4}
        background={'#63B3ED'}
        color={'white'}
        p={2}
        w={350}
        boxShadow={'lg'}
        justifyContent={'center'}
        href="vggaia@hotmail.com"
        isExternal
        _hover={{ bg: '#1A365D' }}
      >
        vggaia@hotmail.com
      </Link>

      <Link
        display={'flex'}
        boxShadow={'2xl'}
        borderRadius={4}
        background={'#63B3ED'}
        _hover={{ bg: '#1A365D' }}
        color={'white'}
        p={2}
        w={250}
        justifyContent={'center'}
        href="https://www.linkedin.com/in/victoroliveira-/"
        isExternal
      >
        Linkedin
      </Link>

      <Link
        display={'flex'}
        borderRadius={4}
        background={'#63B3ED'}
        color={'white'}
        boxShadow={'md'}
        p={2}
        w={200}
        justifyContent={'center'}
        href="https://wa.me/5582999222520"
        isExternal
        _hover={{bg: '#1A365D'}}
      >
        (82) 99922-2520
      </Link>

      <Link
        display={'flex'}
        borderRadius={4}
        boxShadow={'inner'}
        background={'#63B3ED'}
        color={'white'}
        p={2}
        w={150}
        justifyContent={'center'}
        href="https://github.com/VictorG1002"
        isExternal
        _hover={{bg: '#1A365D'}}
      >
        Github
      </Link>

      <h2></h2>
    </VStack>
  );
}
