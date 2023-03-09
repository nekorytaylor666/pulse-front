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

// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'components/link/Link';
import { Image } from 'components/image/Image';
// Assets
import error from '/public/img/others/error.png';
import AdminLayout from 'layouts/admin/AdminLayout';
import ClientLayout from 'layouts/client/ClientLayout';

function Alerts() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  return (
    <ClientLayout>
      <Flex direction="column" align="center" pt={{ sm: '125px', lg: '75px' }}>
        <Image
          src={error}
          w="400px"
          maxW="90%"
          mt={{ base: '4vh', lg: '20vh' }}
          mb="10px"
          alt=""
        />
        <Text
          color={textColor}
          fontSize={{ base: '40px', lg: '46px' }}
          fontWeight="700"
          mb="30px"
          textAlign={{ base: 'center', md: 'start' }}
        >
          Модуль в разработке
        </Text>
        <Flex align="center" direction={{ base: 'column', md: 'row' }}>
          <Text
            color={textColor}
            fontWeight="500"
            fontSize={{ base: 'md', md: 'lg' }}
            me="4px"
          >
            Пожалуйста, вернитесь на главную страницу.
          </Text>
          <Link
            color={brandColor}
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="500"
            href="/"
          >
            На главную
          </Link>
        </Flex>
      </Flex>
    </ClientLayout>
  );
}

export default Alerts;
