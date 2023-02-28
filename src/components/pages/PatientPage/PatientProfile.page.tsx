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
import Nft2 from '/public/img/nfts/Nft2.png';
import Nft4 from '/public/img/nfts/Nft4.png';
import Nft5 from '/public/img/nfts/Nft5.png';
import Nft6 from '/public/img/nfts/Nft6.png';
import NftBanner2 from '/public/img/nfts/NftBanner2.png';
import AvatarSimmmple from '/public/img/avatars/avatarSimmmple.png';
import Avatar1 from '/public/img/avatars/avatar1.png';
import Avatar2 from '/public/img/avatars/avatar2.png';
import Avatar3 from '/public/img/avatars/avatar3.png';
import Avatar4 from '/public/img/avatars/avatar4.png';
import NftProfile from '/public/img/nfts/NftProfile.png';

import {
  MdDashboard,
  MdApps,
  MdOutlineCollections,
  MdFormatPaint,
  MdAccessTime,
  MdOutlineLocalOffer,
} from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import AdminLayout from 'layouts/admin/AdminLayout';
import Editor from 'components/editor';
import BookingListContainter from './BookingsList/BookingsList.container';
import ConsultationListContainer from './ConsultationLists/ConsultationList.container';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import ProfileBanner from 'components/profile/Banner';
import { useGetUserById } from './graphql/getPatientById';
import BookingListComponent from './BookingsList/BookingList.component';

const tabs = [
  {
    name: 'Бронирования',
    icon: MdOutlineCollections,
  },
  {
    name: 'Консультации',
    icon: MdFormatPaint,
  },
  {
    name: 'Календарь',
    icon: MdAccessTime,
  },
  {
    name: 'Направления',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'Документы',
    icon: MdOutlineLocalOffer,
  },
];

const otherTabs = [
  {
    name: 'О Семье',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'История вызововов СМП',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'Рекомендации врача',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'Рецепты',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'Календарь беременности',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'Диспансерный учет',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'Напвравления на исследования',
    icon: MdOutlineLocalOffer,
  },
  {
    name: 'Стационар',
    icon: MdOutlineLocalOffer,
  },
];

export type User = ReturnType<typeof useGetUserById>['data']['getUserById'];
export type Bookings = ReturnType<
  typeof useGetUserById
>['data']['bookingsByUser'];
interface Props {
  user: User;
  bookings: Bookings;
}

export default function PatientProfilePageComponent(props: Props) {
  const { user, bookings } = props;
  let [tabState, setTabState] = useState('collected');

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
      <AdminLayout>
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
                  <PopoverTrigger>
                    <Button>Другое</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Другое</PopoverHeader>
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
            <Flex w="100%">
              <SearchBar />
              <Select
                fontSize="sm"
                id="edit_product"
                variant="main"
                h="44px"
                maxH="44px"
                me="20px"
                defaultValue="single"
              >
                <option value="single">Single Items</option>
                <option value="multiple">Multiple Items</option>
              </Select>
              <Select
                fontSize="sm"
                variant="main"
                h="44px"
                maxH="44px"
                me="20px"
                defaultValue="low_to_high"
              >
                <option value="low_to_high">Low to high</option>
                <option value="high_to_low">High to low</option>
              </Select>
              <Button
                me="20px"
                bg={buttonBg}
                border="1px solid"
                color="secondaryGray.600"
                borderColor={useColorModeValue(
                  'secondaryGray.100',
                  'whiteAlpha.100'
                )}
                borderRadius="16px"
                _placeholder={{ color: 'secondaryGray.600' }}
                _hover={hoverButton}
                _active={activeButton}
                _focus={activeButton}
              >
                <Icon color={textColor} as={MdDashboard} />
              </Button>
              <Button
                bg={buttonBg}
                border="1px solid"
                color="secondaryGray.600"
                borderColor={useColorModeValue(
                  'secondaryGray.100',
                  'whiteAlpha.100'
                )}
                borderRadius="16px"
                _placeholder={{ color: 'secondaryGray.600' }}
                _hover={hoverButton}
                _active={activeButton}
                _focus={activeButton}
              >
                <Icon color={textColor} as={MdApps} />
              </Button>
            </Flex>

            <TabPanels>
              <TabPanel px="0px">
                <BookingListComponent bookings={bookings} />
              </TabPanel>
              <TabPanel px="0px">
                <ConsultationListContainer
                  consultationLists={user.appointmentsAsPatient}
                ></ConsultationListContainer>
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
              <TabPanel px="0px">test</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </AdminLayout>
    </>
  );
}
