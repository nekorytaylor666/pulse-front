/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from 'react';

// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  PinInput,
  PinInputField,
  SimpleGrid,
  Text,
  toast,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import Link from 'components/link/Link';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import CenteredAuth from 'layouts/auth/variants/CenteredAuthLayout';

// Assets
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { useMutation } from 'react-query';
import { SIGN_UP, VERIFY_CODE } from '../../../graphql/operations/graphql/auth';
import { graphQLClient } from 'graphql/client';
import { SignupInput } from 'graphql/graphql';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

function SignUp() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' }
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      address: 'Baranovichi, Belarus',
      phoneNumber: '',
    },
  });
  const { mutate: signup, isLoading } = useMutation((data: SignupInput) => {
    return graphQLClient.request(SIGN_UP, { data });
  });

  const { mutate: verify, isLoading: isVerifying } = useMutation(
    (data: any) => {
      return graphQLClient.request(VERIFY_CODE, {
        code: data.code,
        verifyCodeData: { ...data, code: undefined },
      });
    }
  );
  const onSignUpSubmit = (data: any) =>
    signup(
      {
        address: 'Baranovichi, Belarus',
        uniqueName: data.email,
        ...data,
      },
      {
        onSettled: (data) => {
          setIsSent(true);
          toast({
            title: 'Вам отправлено СМС с кодом подтверждения',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        },
      }
    );

  if (isSent) {
    return (
      <CenteredAuth
        image={'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'}
        cardTop={{ base: '140px', md: '14vh' }}
        cardBottom={{ base: '50px', lg: '100px' }}
      >
        <TwoStepVerification
          onSubmit={({ code }) => {
            const user = getValues();
            verify(
              { code, uniqueName: user.email, ...user },
              {
                onSuccess: (data) => {
                  toast({
                    title: 'Вы успешно зарегистрированы',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  });
                  signIn('credentials', {
                    uniqueName: user.email,
                    password: user.password,
                    callbackUrl: '/',
                  });
                },
              }
            );
          }}
        ></TwoStepVerification>
      </CenteredAuth>
    );
  }

  return (
    <CenteredAuth
      image={'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'}
      cardTop={{ base: '140px', md: '14vh' }}
      cardBottom={{ base: '50px', lg: '100px' }}
    >
      <form onSubmit={handleSubmit(onSignUpSubmit)}>
        <Flex
          maxW="max-content"
          mx={{ base: 'auto', lg: '0px' }}
          me="auto"
          justifyContent="center"
          px={{ base: '20px', md: '0px' }}
          flexDirection="column"
        >
          <Box me="auto">
            <Heading
              color={textColor}
              fontSize={{ base: '34px', lg: '36px' }}
              mb="10px"
            >
              Регистрация
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              Заполните форму, чтобы создать аккаунт
            </Text>
          </Box>
          <Flex
            zIndex="2"
            direction="column"
            w={{ base: '100%', md: '420px' }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: 'auto', lg: 'unset' }}
            me="auto"
            mb={{ base: '20px', md: 'auto' }}
          >
            <FormControl>
              <SimpleGrid
                columns={{ base: 1, md: 1 }}
                gap={{ sm: '10px', md: '26px' }}
              >
                <Flex direction="column">
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    ФИО
                  </FormLabel>
                  <Input
                    {...register('fullName')}
                    isRequired={true}
                    fontSize="sm"
                    ms={{ base: '0px', md: '4px' }}
                    placeholder="ФИО"
                    variant="auth"
                    mb="24px"
                    size="lg"
                  />
                </Flex>
              </SimpleGrid>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                {...register('email')}
                isRequired={true}
                variant="auth"
                fontSize="sm"
                type="email"
                placeholder="mail@simmmple.com"
                mb="24px"
                size="lg"
              />
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Телефон<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                {...register('phoneNumber')}
                isRequired={true}
                variant="auth"
                fontSize="sm"
                type="tel"
                placeholder="+375 (29) 123-45-67"
                mb="24px"
                size="lg"
              />
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Пароль<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  {...register('password')}
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '4px' }}
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: 'pointer' }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent="space-between" align="center" mb="24px">
                <FormControl display="flex" alignItems="start">
                  <Checkbox
                    id="remember-login"
                    colorScheme="brandScheme"
                    me="10px"
                    mt="3px"
                  />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="0"
                    fontWeight="normal"
                    color={textColor}
                    fontSize="sm"
                  >
                    {/* By creating an account means you agree to the{' '} */}
                    Регистрируясь, вы соглашаетесь с{' '}
                    <Link
                      href="https://simmmple.com/terms-of-service"
                      fontWeight="500"
                    >
                      Условиями использования
                    </Link>{' '}
                    и{' '}
                    <Link
                      href="https://simmmple.com/privacy-policy"
                      fontWeight="500"
                    >
                      Правилами конфиденциальности
                    </Link>
                  </FormLabel>
                </FormControl>
              </Flex>
              <Button
                type="submit"
                variant="brand"
                fontSize="14px"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
              >
                Зарегистрироваться
              </Button>
            </FormControl>
          </Flex>
        </Flex>
      </form>
    </CenteredAuth>
  );
}

interface TwoStepVerificationProps {
  onSubmit: (data: { code: string }) => void;
}

const TwoStepVerification = ({ onSubmit }: TwoStepVerificationProps) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const borderColor = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const { register, handleSubmit, setValue } = useForm<{ code: string }>();
  return (
    <Flex
      w="100%"
      maxW="max-content"
      mx={{ base: 'auto', lg: '0px' }}
      me="auto"
      h="100%"
      justifyContent="center"
      px={{ base: '25px', md: '0px' }}
      flexDirection="column"
    >
      <Box me="auto" mb="34px">
        <Heading
          color={textColor}
          fontSize="36px"
          mb="16px"
          mx={{ base: 'auto', lg: 'unset' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          2-ух этапная верификация
        </Heading>
        <Text
          color={textColorSecondary}
          fontSize="md"
          maxW={{ base: '95%', md: '100%' }}
          mx={{ base: 'auto', lg: 'unset' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          Введите код, который мы отправили на ваш номер телефона
        </Text>
      </Box>
      <Flex
        zIndex="2"
        direction="column"
        w={{ base: '100%', md: '425px' }}
        maxW="100%"
        background="transparent"
        borderRadius="15px"
        mx={{ base: 'auto', lg: 'unset' }}
        me="auto"
        mb={{ base: '20px', md: 'auto' }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Flex justify="center">
              <PinInput
                mx="auto"
                otp
                onChange={(value) => setValue('code', value)}
              >
                <PinInputField
                  fontSize="36px"
                  color={textColor}
                  borderRadius="16px"
                  borderColor={borderColor}
                  h={{ base: '63px', md: '95px' }}
                  w={{ base: '63px', md: '95px' }}
                  me="10px"
                />
                <PinInputField
                  fontSize="36px"
                  color={textColor}
                  borderRadius="16px"
                  borderColor={borderColor}
                  h={{ base: '63px', md: '95px' }}
                  w={{ base: '63px', md: '95px' }}
                  me="10px"
                />
                <PinInputField
                  fontSize="36px"
                  color={textColor}
                  borderRadius="16px"
                  borderColor={borderColor}
                  h={{ base: '63px', md: '95px' }}
                  w={{ base: '63px', md: '95px' }}
                  me="10px"
                />
                <PinInputField
                  fontSize="36px"
                  color={textColor}
                  borderRadius="16px"
                  borderColor={borderColor}
                  h={{ base: '63px', md: '95px' }}
                  w={{ base: '63px', md: '95px' }}
                />
              </PinInput>
            </Flex>

            <Button
              type="submit"
              fontSize="14px"
              variant="brand"
              borderRadius="16px"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              mt="12px"
            >
              Unlock
            </Button>
          </FormControl>
        </form>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          maxW="100%"
          mt="0px"
        >
          <Text
            color={textColorDetails}
            fontWeight="400"
            fontSize="14px"
            mx={{ base: 'auto', lg: 'unset' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Haven't received it?
            <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
              Resend a new code
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
