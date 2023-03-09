// // Chakra imports
// import { Box, Flex, Text } from '@chakra-ui/react';
// // Custom components
// import Card from 'components/card/Card';
// import FixedPlugin from 'components/fixedPlugin/FixedPlugin';
// import Footer from 'components/footer/FooterAuthCentered';
// import Navbar from 'components/navbar/NavbarAuth';
// import PropTypes from 'prop-types';
// import AdminNavbarLinks from 'components/navbar/NavbarLinksAdmin';
// function ClientLayout(props: {
//   children: JSX.Element;
//   title?: string;
//   description?: string;
//   image?: string;
//   cardTop?: { [x: string]: string | number };
//   cardBottom?: { [x: string]: string | number };
//   [x: string]: any;
// }) {
//   const { children, title, description, image, cardTop, cardBottom } = props;
//   return (
//     <Flex
//       direction="column"
//       alignSelf="center"
//       justifySelf="center"
//       overflow="hidden"
//       pt={4}
//       px={{ base: '0px', lg: '24px' }}
//       mx={{ base: '10px', lg: '0px' }}
//       minH="100vh"
//     >
//       <FixedPlugin />
//       <Box
//         position="absolute"
//         minH={{ base: '50vh', md: '50vh' }}
//         maxH={{ base: '50vh', md: '50vh' }}
//         w={{ md: 'calc(100vw)' }}
//         maxW={{ md: 'calc(100vw)' }}
//         left="0"
//         right="0"
//         bgRepeat="no-repeat"
//         overflow="hidden"
//         top="0"
//         bgImage={image}
//         mx={{ md: 'auto' }}
//       />
//       <Flex>
//         <Box ms="auto" w={{ sm: '100%', md: 'unset' }}>
//           <AdminNavbarLinks secondary={props.secondary} />
//         </Box>
//       </Flex>

//       {/* <Navbar /> */}
//       <Card
//         shadow={{ base: 'none' }}
//         w={{ base: '100%', md: 'container.xl' }}
//         h="max-content"
//         minH={{ base: '100vh', md: '100vh' }}
//         mx="auto"
//         maxW="100%"
//         mt={cardTop}
//         mb={cardBottom}
//         p={{ base: '10px', md: '50px' }}
//         pt={{ base: '30px', md: '50px' }}
//       >
//         {title && description ? (
//           <Flex
//             direction="column"
//             textAlign="center"
//             justifyContent="center"
//             align="center"
//             mt="125px"
//             mb="30px"
//           >
//             <Text fontSize="4xl" color="white" fontWeight="bold">
//               {title}
//             </Text>
//             <Text
//               fontSize="md"
//               color="white"
//               fontWeight="normal"
//               mt="10px"
//               mb="26px"
//               w={{ base: '90%', sm: '60%', lg: '40%', xl: '333px' }}
//             >
//               {description}
//             </Text>
//           </Flex>
//         ) : null}
//         {children}
//       </Card>
//       <Footer />
//     </Flex>
//   );
// }
// // PROPS

// ClientLayout.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string,
//   image: PropTypes.any,
// };

// export default ClientLayout;

// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import Footer from 'components/footer/FooterAdmin';
// Layout components
import Navbar from 'components/navbar/NavbarAdmin';
import Sidebar from 'components/sidebar/Sidebar';
import { SidebarContext } from 'contexts/SidebarContext';
import { useSession } from 'next-auth/react';
import { PropsWithChildren, useState } from 'react';
import routes from 'routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from 'utils/navigation';

// Custom Chakra theme
interface DashboardProps extends PropsWithChildren {}
export default function ClientLayout({ children, ...rest }: DashboardProps) {
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  const { onOpen } = useDisclosure();

  const session = useSession();

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        {/* <Sidebar routes={routes} display="none" {...rest} /> */}
        <Sidebar routes={routes} {...rest} />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={'Pulse'}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx="auto"
            p={{ base: '20px', md: '30px' }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            {children}
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
