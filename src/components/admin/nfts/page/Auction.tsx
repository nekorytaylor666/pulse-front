// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { OutputData } from '@editorjs/editorjs';
import { NextAvatar } from 'components/image/Avatar';
import LinkButton from 'components/link/LinkButton';

// Assets
import { IoMdTrendingUp } from 'react-icons/io';
import { MdOutlineMonetizationOn, MdVerified } from 'react-icons/md';
import EditorDescription from './EditorDescription';

export default function DoctorDetails(props: {
  name: string;
  uniqueName: string;
  description: OutputData;
  bookingLink: string;
}) {
  // Chakra Color Mode
  const { name, uniqueName, description, bookingLink } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const shadow = useColorModeValue(
    ' 0px 50px 40px -34px rgba(112, 144, 176, 0.16)',
    'unset'
  );
  const borderColor = useColorModeValue('secondaryGray.400', 'transparent');
  const cardBg = useColorModeValue('white', 'navy.800');
  return (
    <Flex
      direction="column"
      ps={{ base: 'unset', lg: "'65px'" }}
      mx="auto"
      height={{ base: '100%', lg: '100%' }}
      maxW={{ base: '100%', md: 'max-content' }}
    >
      <Text
        color={textColor}
        fontSize={{ base: '36px', '2xl': '54px' }}
        fontWeight="700"
        mb="-30px"
        lineHeight="100%"
      >
        {name}
      </Text>
      <Box mt={16}>
        <EditorDescription desc={description} creator={name} />
      </Box>
      <LinkButton
        href={bookingLink}
        variant="brand"
        fontSize="sm"
        fontWeight="500"
        h="46px"
      >
        Записаться
      </LinkButton>
    </Flex>
  );
}
