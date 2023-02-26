// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Badge,
  Icon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { OutputData } from '@editorjs/editorjs';
// Custom components
import Card from 'components/card/Card';
import Editor from 'components/editor';
import IconBox from 'components/icons/IconBox';
import { useState } from 'react';
// Assets
import { MdOutlineTimer } from 'react-icons/md';

export default function ConsultationListItem(props: {
  icon: JSX.Element;
  title: string;
  desc: string;
  date: string;
  day: string;
  time: string;
  topics: string[];
  bgBox: string;
  content: OutputData;
  onSave: (data: OutputData) => void;
}) {
  const { icon, title, desc, date, day, time, topics, bgBox, content, onSave } =
    props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue('navy.700', 'white');
  const textBrand = useColorModeValue('brand.500', 'white');
  const bgBadge = useColorModeValue('secondaryGray.300', 'whiteAlpha.50');
  return (
    <>
      <EditConsultationListModal
        isOpen={isOpen}
        onClose={onClose}
        onSave={() => onSave(content)}
        initialData={content}
      ></EditConsultationListModal>
      <Card
        onClick={onOpen}
        p="20px"
        h="max-content"
        minH={{ md: '450px', xl: 'auto' }}
      >
        <Flex direction={{ base: 'column', md: 'column', xl: 'column' }}>
          <Flex
            justify="space-between"
            flexDirection="column"
            mb="auto"
            py="30px"
            pb={{ base: '0px', md: '0px' }}
          >
            <Flex display={{ base: 'block', xl: 'flex' }}>
              <Box flexDirection="column" w={{ xl: '68%' }} mb="25px">
                <Text
                  color={textColor}
                  fontSize={{
                    base: 'xl',
                    md: 'xl',
                    xl: 'xl',
                    '2xl': '28px',
                  }}
                  mb="10px"
                  fontWeight="700"
                >
                  {title}
                </Text>
                <Text
                  color="secondaryGray.600"
                  fontSize={{
                    base: 'md',
                  }}
                  fontWeight="400"
                  me="14px"
                >
                  {desc}
                </Text>
              </Box>
              <Text
                ms="auto"
                mt="10px"
                color="secondaryGray.600"
                fontSize={{
                  base: 'md',
                }}
                fontWeight="500"
              >
                {day} •{' '}
                <Text
                  as="span"
                  color={textColor}
                  fontSize={{
                    base: 'md',
                  }}
                  fontWeight="500"
                  ms="4px"
                >
                  {date}
                </Text>
              </Text>
            </Flex>
            <Flex w="100%" flexWrap="wrap">
              {topics.map((topic, key) => (
                <Badge
                  key={key}
                  bg={bgBadge}
                  textAlign="center"
                  mb={{ base: '20px', md: '0px' }}
                  color={textBrand}
                  me="10px"
                  h="max-content"
                >
                  {topic}
                </Badge>
              ))}
              <Flex
                align="center"
                ms={{ base: '0px', xl: 'auto' }}
                pe={{ base: '10px', md: '0px' }}
              >
                <Icon as={MdOutlineTimer} color={textColor} me="6px" />
                <Text
                  color={textColor}
                  fontSize={{
                    base: 'sm',
                  }}
                  fontWeight="500"
                  me="14px"
                >
                  {time}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}

const EditConsultationListModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: OutputData) => void;
  initialData: OutputData;
}) => {
  const [content, setContent] = useState(() => initialData);
  return (
    <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Редактирование Консультационного Листа</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Editor onChange={setContent} initialData={initialData}></Editor>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Закрыть
          </Button>
          <Button
            onClick={() => {
              onSave(content);
              onClose();
            }}
            variant="ghost"
          >
            Сохранить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
