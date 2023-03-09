// Chakra imports
import { Button, Flex, Text } from '@chakra-ui/react';
import Link from 'components/link/Link';
import LinkButton from 'components/link/LinkButton';
import { useTranslation } from 'react-i18next';

// Assets
import banner from '/public/img/nfts/NftBanner1.png';

export default function ClinicBanner({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
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
        {title}
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
        {subtitle}
      </Text>
      <Flex align="center">
        <LinkButton
          href="/client/clinics"
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
          Все клиники
        </LinkButton>
      </Flex>
    </Flex>
  );
}
