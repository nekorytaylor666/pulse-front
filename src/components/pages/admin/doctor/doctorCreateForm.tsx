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
import Editor from 'components/editor';

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
  description?: any;
  onSubmit: (data: any) => void;
}

export default function DoctorCreateForm(props: Props) {
  const { user, onSubmit, description } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return { description, ...user };
    }, [user, description]),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Card>
          <Flex direction="column" mb="40px" ms="10px">
            <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
              ?????????? ????????????
            </Text>
            <Text fontSize="md" color={textColorSecondary}>
              ?????????????????? ?????? ????????, ?????????? ?????????????? ???????????? ??????????????
            </Text>
          </Flex>
          <SimpleGrid
            p={4}
            columns={{ sm: 1, md: 2 }}
            spacing={{ base: '20px', xl: '20px' }}
          >
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                ??????????????
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
                placeholder="john@gmail.com"
              />
            </FormControl>{' '}
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                ??????
              </Text>
              <Input
                {...register('fullName')}
                mb="25px"
                me="30px"
                placeholder="???????? ????????????"
              />
            </FormControl>{' '}
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                ??????????????
              </Text>
              <Input
                {...register('phoneNumber')}
                mb="25px"
                me="30px"
                placeholder="92871090"
              />
            </FormControl>{' '}
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                ??????????
              </Text>
              <Input
                {...register('address')}
                mb="25px"
                me="30px"
                placeholder="?????????????? 13"
              />
            </FormControl>{' '}
            <FormControl>
              <Text fontSize="md" color={textColorSecondary} mb={4}>
                ????????????
              </Text>
              <Input
                {...register('password')}
                mb="25px"
                type="password"
                me="30px"
              />
            </FormControl>{' '}
          </SimpleGrid>
          <FormControl>
            <Text fontSize="md" color={textColorSecondary} mb={4}>
              ????????????????
            </Text>
            <Editor
              onChange={(value: JSON) => {
                setValue('description', value);
              }}
              initialData={description}
            />
          </FormControl>
          <Button type="submit">??????????????</Button>
        </Card>
      </FormControl>
    </form>
  );
}
