// Chakra imports
import { Icon, Flex, Text, useColorModeValue, Box } from '@chakra-ui/react';
import { OutputData } from '@editorjs/editorjs';

// Custom components
import Card from 'components/card/Card';
import Editor from 'components/editor';

// Assets
import { MdVerified } from 'react-icons/md';

export default function EditorDescription(props: {
  creator: string;
  desc: OutputData;
}) {
  const { creator, desc } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorLink = useColorModeValue('blue.500', 'white');
  // Chakra Color Mode
  return (
    <Card p="30px" mb={{ base: '20px', '2xl': '20px' }}>
      <Text color={textColor} fontSize="2xl" fontWeight="700" mb="20px">
        Описание
      </Text>
      <Flex align="center" mb="20px">
        <Text color="secondaryGray.600" fontSize="lg" fontWeight="400">
          Доктор
        </Text>
        <Text color={textColorLink} fontSize="lg" fontWeight="500" mx="4px">
          {creator}
        </Text>
        <Icon as={MdVerified} h="16px" w="16px" color="blue.500" mt="3px" />
      </Flex>
      <Box maxW="lg">
        <Editor isReadOnly initialData={desc}></Editor>
      </Box>
      {/* <Text color={textColor} fontSize='lg' fontWeight='400' lineHeight='180%'>
				{desc}
			</Text> */}
    </Card>
  );
}
