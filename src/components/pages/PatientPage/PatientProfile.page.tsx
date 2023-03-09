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
  Flex,
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';

// Custom components
import Banner from 'components/admin/nfts/profile/Banner';
import NFT from 'components/card/NFT';
import { SearchBar } from 'components/admin/nfts/profile/Search';
import { HSeparator } from 'components/separator/Separator';

// Assets
import NftBanner2 from '/public/img/nfts/NftBanner2.png';
import NftProfile from '/public/img/nfts/NftProfile.png';

import {
  MdDashboard,
  MdApps,
  MdOutlineLocalOffer,
  MdFilePresent,
  MdMale,
  MdPersonalInjury,
  MdTimeToLeave,
  MdTimelapse,
} from 'react-icons/md';
import ConsultationListContainer from './ConsultationLists/ConsultationList.container';
import { useSession } from 'next-auth/react';
import ProfileBanner from 'components/profile/Banner';
import { useGetUserById } from './graphql/getPatientById';
import BookingListComponent from './BookingsList/BookingList.component';
import DoctorLayout from 'layouts/doctor/DoctorLayout';
import ResearchDocumentContainer from './ResearchList/ResearchDocument.container';
import { useTranslation } from 'react-i18next';

export type User = ReturnType<typeof useGetUserById>['data']['getUserById'];
export type Bookings = ReturnType<
  typeof useGetUserById
>['data']['bookingsByUser'];
interface Props {
  user: User;
  bookings: Bookings;
  isReadonly?: boolean;
}

export default function PatientProfilePageComponent(props: Props) {
  const { user, bookings, isReadonly } = props;
  let [tabState, setTabState] = useState('collected');

  const { t } = useTranslation('common');
  const tabs = [
    {
      name: t('tab_1'),
      icon: MdTimelapse,
    },
    {
      name: t('tab_2'),
      icon: MdPersonalInjury,
    },
    {
      name: t('tab_3'),
      icon: MdMale,
    },
    {
      name: t('tab_4'),
      icon: MdFilePresent,
    },
  ];

  const otherTabs = [
    {
      name: t('tab_4'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_5'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_6'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_7'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_8'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_9'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_10'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_11'),
      icon: MdOutlineLocalOffer,
    },
    {
      name: t('tab_12'),
      icon: MdOutlineLocalOffer,
    },
  ];

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');

  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' }
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' }
  );
  const paleGray = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');
  const session = useSession();

  return (
    <>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        {/* Main Fields */}
        <Box mb="20px" display={{ base: 'block', lg: 'grid' }}>
          <Flex flexDirection="column">
            <ProfileBanner
              image={NftBanner2}
              profile={NftProfile}
              phoneNumber={user.phoneNumber}
              name={user.fullName}
              floor={0.56}
              volume={33.8}
              owners={4.6}
              items={28}
            />
          </Flex>
        </Box>
        <Tabs variant="soft-rounded" colorScheme="brandTabs">
          <TabList
            mx={{ base: '10px', lg: '20px' }}
            overflowX={{ sm: 'scroll', lg: 'unset' }}
          >
            <Flex justify={{ base: 'start', md: 'center' }} w="100%">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  pb="0px"
                  flexDirection="column"
                  onClick={function () {
                    setTabState(tab.name);
                  }}
                  me="24px"
                  bg="unset"
                  _selected={{
                    bg: 'none',
                  }}
                  _focus={{ border: 'none' }}
                  minW="max-content"
                >
                  <Flex align="center">
                    <Icon
                      color={textColor}
                      as={tab.icon}
                      w="20px"
                      h="20px"
                      me="8px"
                    />
                    <Text
                      color={textColor}
                      fontSize="md"
                      fontWeight="500"
                      me="12px"
                    >
                      {tab.name}
                    </Text>
                  </Flex>
                  <Box
                    height="4px"
                    w="100%"
                    transition="0.1s linear"
                    bg={tabState === tab.name ? 'brand.500' : 'transparent'}
                    mt="15px"
                    borderRadius="30px"
                  />
                </Tab>
              ))}
              <Popover>
                {/*@ts-ignore  */}
                <PopoverTrigger>
                  <Button>{t('other')}</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>{t('other')}</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Flex direction={'column'}>
                        {otherTabs.map((tab, index) => (
                          <Tab
                            key={index}
                            pb="16px"
                            borderBottom={`1px solid ${paleGray}`}
                            flexDirection="column"
                            onClick={function () {
                              setTabState(tab.name);
                            }}
                            me="24px"
                            bg="unset"
                            _selected={{
                              bg: 'none',
                            }}
                            _focus={{ border: 'none' }}
                            minW="max-content"
                          >
                            <Flex width={'full'} align="flex-start">
                              <Icon
                                color={textColor}
                                as={tab.icon}
                                w="20px"
                                h="20px"
                                me="8px"
                              />
                              <Text
                                color={textColor}
                                fontSize="md"
                                fontWeight="500"
                                me="12px"
                              >
                                {tab.name}
                              </Text>
                            </Flex>
                          </Tab>
                        ))}
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Flex>
          </TabList>
          <HSeparator mb="30px" bg={paleGray} mt="0px" />

          <TabPanels>
            <TabPanel px="0px">
              <BookingListComponent
                isReadOnly={isReadonly}
                bookings={bookings}
              />
            </TabPanel>
            <TabPanel px="0px">
              <ConsultationListContainer
                isReadOnly={isReadonly}
                consultationLists={user.appointmentsAsPatient}
              ></ConsultationListContainer>
            </TabPanel>
            <TabPanel px="0px">
              <ResearchDocumentContainer
                isReadOnly={isReadonly}
                researchDocuments={user.researchDocumentsAsPatient}
              ></ResearchDocumentContainer>
            </TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
            <TabPanel px="0px">test</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
