import React from 'react';

import * as Yup from 'yup';

import { Formik } from 'formik';

import { Button, Input, VStack } from '@chakra-ui/react';
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
        <VStack display={'flex'} gap={2}>
          <form onSubmit={formikData.handleSubmit}>
            <Input
              id="nome"
              name="nome"
              onChange={formikData.handleChange}
              value={formikData.values.nome}
              placeholder="nome"
            />
            {formikData.touched.nome &&
              formikData.errors.nome &&
              'MIN 3 CARACTERES'}

            <Input
              id="email"
              name="email"
              onChange={formikData.handleChange}
              value={formikData.values.email}
              placeholder="email"
            />
            {formikData.touched.email &&
              formikData.errors.email &&
              'ERRO NO EMAIL'}

            <Input
              id="numeroXPTO"
              name="numeroXPTO"
              value={formikData.values.numeroXPTO}
              onChange={formikData.handleChange}
              placeholder="aa"
            />
            {formikData.touched.numeroXPTO &&
              formikData.errors.numeroXPTO &&
              'ERRO NO NUMERO XPTO'}

            <Button type="submit">Validate</Button>
          </form>
        </VStack>
      )}
    </Formik>
  );
};

export default register;
