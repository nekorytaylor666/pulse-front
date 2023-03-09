// Chakra imports
import { Button, Flex, Text } from '@chakra-ui/react';
import Link from 'components/link/Link';
import { useTranslation } from 'react-i18next';

// Assets
import banner from '/public/img/nfts/NftBanner1.png';

export default function MarketplaceBanner() {
  // Chakra Color Mode
  const { t } = useTranslation('common');
  return (
    <Flex
      direction="column"
      bgImage={banner?.src}
      bgSize="cover"
      py={{ base: '30px', md: '56px' }}
      px={{ base: '30px', md: '64px' }}
      borderRadius="30px"
    >
      <Text
        fontSize={{ base: '24px', md: '34px' }}
        color="white"
        mb="14px"
        maxW={{
          base: '100%',
          md: '64%',
          lg: '46%',
          xl: '70%',
          '2xl': '50%',
          '3xl': '42%',
        }}
        fontWeight="700"
        lineHeight={{ base: '32px', md: '42px' }}
      >
        {t('banner_title')}
      </Text>
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: '100%',
          md: '64%',
          lg: '40%',
          xl: '56%',
          '2xl': '46%',
          '3xl': '34%',
        }}
        fontWeight="500"
        mb="40px"
        lineHeight="28px"
      >
        {t('banner_subtitle')}
      </Text>
      <Flex align="center">
        <Button
          bg="white"
          color="black"
          _hover={{ bg: 'whiteAlpha.900' }}
          _active={{ bg: 'white' }}
          _focus={{ bg: 'white' }}
          fontWeight="500"
          fontSize="14px"
          py="20px"
          px="27"
          me="38px"
        >
          {t('details')}
        </Button>
        <Link href="#">
          <Text color="white" fontSize="sm" fontWeight="500">
            {t('banner_button')}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
