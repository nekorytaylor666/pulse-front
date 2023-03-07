// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import TextField from 'components/fields/TextField';
import { useForm } from 'react-hook-form';
import { PulseUser } from 'graphql/graphql';
import { useMemo } from 'react';

// const validationSchema = z
//   .object({
//     firstName: z.string().min(1, { message: 'Firstname is required' }),
//     lastName: z.string().min(1, { message: 'Lastname is required' }),
//     email: z.string().min(1, { message: 'Email is required' }).email({
//       message: 'Must be a valid email',
//     }),
//     password: z
//       .string()
//       .min(6, { message: 'Password must be atleast 6 characters' }),
//     confirmPassword: z
//       .string()
//       .min(1, { message: 'Confirm Password is required' }),
//     terms: z.literal(true, {
//       errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
//     }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ['confirmPassword'],
//     message: "Password don't match",
//   });

interface Props {
  user?: PulseUser;
  onSubmit: (data: any) => void;
}

export default function Settings(props: Props) {
  const { user, onSubmit } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => user, [user]),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Card>
          <Flex direction="column" mb="40px" ms="10px">
            <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
              Account Settings
            </Text>
            <Text fontSize="md" color={textColorSecondary}>
              Here you can change user account information
            </Text>
          </Flex>
          <SimpleGrid
            p={4}
            columns={{ sm: 1, md: 2 }}
            spacing={{ base: '20px', xl: '20px' }}
          >
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                Никнейм
              </Text>
              <Input
                {...register('uniqueName')}
                mb="25px"
                me="30px"
                placeholder="@john123"
              />
            </FormControl>
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                Email
              </Text>
              <Input
                {...register('email')}
                mb="25px"
                me="30px"
                placeholder="@john123"
              />
            </FormControl>{' '}
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                ФИО
              </Text>
              <Input
                {...register('fullName')}
                mb="25px"
                me="30px"
                placeholder="@john123"
              />
            </FormControl>{' '}
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                Телефон
              </Text>
              <Input
                {...register('phoneNumber')}
                mb="25px"
                me="30px"
                placeholder="@john123"
              />
            </FormControl>{' '}
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                Адрес
              </Text>
              <Input
                {...register('address')}
                mb="25px"
                me="30px"
                placeholder="@john123"
              />
            </FormControl>{' '}
          </SimpleGrid>

          <Button type="submit">Изменить</Button>
        </Card>
      </FormControl>
    </form>
  );
}
