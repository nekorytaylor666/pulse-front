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
import {
  Flex,
  SimpleGrid,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Image } from 'components/image/Image';

// Custom components
import Statistics from 'components/admin/main/account/application/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import ManagementTable from 'components/admin/main/account/application/ManagementTable';

// Assets
import { MdOutlineBarChart, MdPerson, MdFileCopy } from 'react-icons/md';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import FakeBarChart from '/public/img/account/FakeBarChart.png';
import AdminLayout from 'layouts/admin/AdminLayout';
import tableDataManagement from 'variables/account/application/tableDataManagement';
import DoctorsTable from 'components/doctors-table/DoctorTable';

export default function Application() {
  // Chakra Color Mode
  const iconBg = useColorModeValue('secondaryGray.300', 'navy.700');
  const iconColor = useColorModeValue('brand.500', 'white');
  return (
    <AdminLayout>
      <Flex pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <Flex direction="column" width="stretch">
          <DoctorsTable tableData={tableDataManagement} />
        </Flex>
      </Flex>
    </AdminLayout>
  );
}
