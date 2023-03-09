// Chakra imports
import {
  AspectRatio,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'components/link/Link';
import { NextAvatar } from 'components/image/Avatar';
// Custom components
import Card from 'components/card/Card';
// Assets
import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Image } from 'components/image/Image';
import LinkButton from 'components/link/LinkButton';
import { useRouter } from 'next/router';

export default function ClinicCard(props: {
  image: string;
  id: string;
  name: string;
  description: string;
  address: string;
}) {
  const { image, name, description, address, id } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorBid = useColorModeValue('brand.500', 'white');
  const router = useRouter();
  return (
    <Card p="20px">
      <Flex direction={{ base: 'column' }} justify="center">
        <Box mb={{ base: '20px', '2xl': '20px' }} position="relative">
          <AspectRatio ratio={1 / 1}>
            <Image src={image} w={'100%'} borderRadius="20px" alt="" />
          </AspectRatio>
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: 'whiteAlpha.900' }}
            _active={{ bg: 'white' }}
            _focus={{ bg: 'white' }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: 'xl',
                  md: 'lg',
                  lg: 'lg',
                  xl: 'lg',
                  '2xl': 'md',
                  '3xl': 'lg',
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {name}
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: 'sm',
                }}
                fontWeight="400"
                me="14px"
              >
                {address}
              </Text>
            </Flex>
          </Flex>
          {/* description component */}
          <Text
            color={textColor}
            fontSize={{
              base: 'sm',
              md: 'sm',
              lg: 'sm',
              xl: 'sm',
              '2xl': 'sm',
              '3xl': 'sm',
            }}
            fontWeight="400"
            me="14px"
            mt="10px"
          >
            {description}
          </Text>
          <Flex
            justify="space-between"
            align={{
              base: 'center',
              md: 'start',
              lg: 'center',
              xl: 'start',
              '2xl': 'center',
            }}
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mt="25px"
          >
            <LinkButton
              // href={bookingLink}
              href={'/client/clinics/' + id}
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px',
              }}
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="24px"
              py="5px"
            >
              Подробнее
            </LinkButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
