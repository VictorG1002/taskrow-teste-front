import React from 'react';

import * as Yup from 'yup';

import { Formik } from 'formik';

import { Button, Input, Text, VStack } from '@chakra-ui/react';
import { validaNumeroXpto } from '@/utils/utils';

const REQUIRED_MESSAGE = 'CAMPO OBRIGATORIO';

const register: React.FC = () => {
  const formSchema = Yup.object().shape({
    nome: Yup.string().min(3).required(REQUIRED_MESSAGE),
    email: Yup.string().email('Email inválido').required(REQUIRED_MESSAGE),
    numeroXPTO: Yup.number().test(
      'test-number',
      'Numero xpto invalido',
      (value) => validaNumeroXpto(value || 0)
    )
  });

  const handleSubmit = (data: {
    nome: string;
    email: string;
    numeroXPTO: string;
  }) => {
    console.log(' aaaa');

    alert(
      `VALIDADO COM SUCESSO, Nome: ${data.nome}, Email: ${data.email}, numeroXPTO: ${data.numeroXPTO}`
    );
  };

  return (
    <Formik
      initialValues={{ nome: '', email: '', numeroXPTO: '' }}
      onSubmit={(data) => handleSubmit(data)}
      validationSchema={formSchema}
    >
      {({ ...formikData }) => (
        <VStack
          display={'flex'}
          background={'#E2E8F0'}
          ml={10}
          mr={10}
          borderRadius={4}
          height={'50vh'}
          padding={8}
          boxShadow={'md'}
        >
          <form onSubmit={formikData.handleSubmit}>
            <Input
              mt={2}
              bg={'white'}
              id="nome"
              name="nome"
              onChange={formikData.handleChange}
              value={formikData.values.nome}
              placeholder="Nome"
            />

            {formikData.touched.nome && formikData.errors.nome && (
              <Text fontSize={12} color={'#E53E3E'} mt={1}>
                Nome invalido, deve conter no minimo 3 caracteres
              </Text>
            )}

            <Input
              mt={2}
              bg={'white'}
              id="email"
              name="email"
              onChange={formikData.handleChange}
              value={formikData.values.email}
              placeholder="Email"
            />
            {formikData.touched.email && formikData.errors.email && (
              <Text fontSize={12} color={'#E53E3E'} mt={1}>
                Endereço de email invalido
              </Text>
            )}

            <Input
              mt={2}
              bg={'white'}
              id="numeroXPTO"
              name="numeroXPTO"
              value={formikData.values.numeroXPTO}
              onChange={formikData.handleChange}
              placeholder="Numero XPTO"
            />
            {formikData.touched.numeroXPTO && formikData.errors.numeroXPTO && (
              <Text fontSize={12} color={'#E53E3E'} mt={1}>
                Numero XPTO Invalido
              </Text>
            )}

            <Button
              mt={2}
              type="submit"
              bg={'#4299E1'}
               _hover={{bg: '#1A365D'}}
              p={2}
              w={100}
              borderRadius={4}
              color={'white'}
            >
              Validate
            </Button>
          </form>
        </VStack>
      )}
    </Formik>
  );
};

export default register;
