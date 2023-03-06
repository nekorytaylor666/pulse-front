import {
  SimpleGrid,
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
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';
import { OutputData } from '@editorjs/editorjs';
import Editor from 'components/editor';
import { EthereumLogoOutline } from 'components/icons/Icons';
import React, { useState } from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { MdOutlineUpgrade } from 'react-icons/md';
import { ConsultationLists } from './ConsultationList.container';
import ConsultationListCard from './ConsultationListsItem';

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'This is my awesome editor!',
        level: 1,
      },
    },
  ],
};

interface Props {
  consultationArray: ConsultationLists;
  onCreateConsultationList: (data: OutputData) => void;
  onEditConsultationList: (id: string, data: OutputData) => void;
  fileMetadata: {
    patientId: string;
    authorId: string;
  };
}

const ConsultationListComponent: React.FC<Props> = (props) => {
  const {
    consultationArray,
    onEditConsultationList,
    onCreateConsultationList,
    fileMetadata,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NewConsultationListModal
        fileMetadata={fileMetadata}
        isOpen={isOpen}
        onClose={onClose}
        onSave={(data) => {
          onCreateConsultationList(data);
        }}
      ></NewConsultationListModal>
      <Flex my={'8'} align="center" justify={'space-between'}>
        <Heading size={'lg'}>Консультационный Листы</Heading>
        <Button colorScheme={'blue'} onClick={onOpen}>
          Добавить Консультационный Лист
        </Button>
      </Flex>
      <SimpleGrid columns={3} gap="20px">
        {consultationArray.map((data, index) => (
          <>
            <ConsultationListCard
              content={data.content}
              onSave={(content) => {
                onEditConsultationList(data.id, content);
              }}
              key={index}
              bgBox="linear-gradient(115.07deg, #29E9F5 -9.41%, #7A64FF 28.04%, #FF508B 71.85%, #FD6D53 112.49%, #FD6D53 112.49%)"
              icon={
                <Icon as={IoLogoInstagram} color="white" w="100px" h="100px" />
              }
              title={data.content.blocks[0]?.data.text ?? 'Без названия'}
              desc={data.content.blocks[1]?.data.text ?? 'Без описания'}
              day="Mon"
              date="January 05"
              topics={['Терапевт', 'Педиатр']}
              time="1h 30 min"
            />
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

const NewConsultationListModal = ({
  isOpen,
  onClose,
  onSave,
  fileMetadata,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: OutputData) => void;
  fileMetadata: {
    patientId: string;
    authorId: string;
  };
}) => {
  const [content, setContent] = useState(() => DEFAULT_INITIAL_DATA);
  return (
    <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Добавление Консультационного Листа</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Editor
            additionalFileUploadRequestHeaders={fileMetadata}
            onChange={setContent}
            initialData={DEFAULT_INITIAL_DATA}
          ></Editor>
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

export default ConsultationListComponent;
