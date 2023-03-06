/* eslint-disable */

import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { Doctors } from 'components/pages/admin/doctors/graphql/doctors';
import { useRouter } from 'next/router';
import * as React from 'react';
// Assets
import { MdEdit, MdPersonAdd } from 'react-icons/md';

const columnHelper = createColumnHelper<Doctors[0]>();

// const columns = columnsDataCheck;
export default function DoctorsTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  let defaultData = tableData;
  const router = useRouter();
  const columns = [
    columnHelper.accessor('user.fullName', {
      id: 'fullName',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Имя
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          {/* <Avatar
            src={info.getValue()[2]}
            w="36px"
            h="36px"
            me="8px"
            borderRadius="14px"
          /> */}
          <Flex direction="column">
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {info.getValue()}
            </Text>
            {/* <Text color="secondaryGray.500" fontSize="sm" fontWeight="600">
              {info.getValue()[1]}
            </Text> */}
          </Flex>
        </Flex>
      ),
    }),
    columnHelper.accessor('user.email', {
      id: 'email',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Почта
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Flex direction="column">
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {info.getValue()}
            </Text>
          </Flex>
        </Flex>
      ),
    }),
    columnHelper.accessor('user.phoneNumber', {
      id: 'phoneNumber',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Номер
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Flex direction="column">
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {info.getValue()}
            </Text>
          </Flex>
        </Flex>
      ),
    }),
    // columnHelper.accessor('status', {
    //   id: 'status',
    //   header: () => (
    //     <Text
    //       justifyContent="space-between"
    //       align="center"
    //       fontSize={{ sm: '10px', lg: '12px' }}
    //       color="gray.400"
    //     >
    //       Специализации
    //     </Text>
    //   ),
    //   cell: (info) => (
    //     <Badge
    //       colorScheme={info.getValue() === 'REJECTED' ? 'red' : 'green'}
    //       color={info.getValue() === 'REJECTED' ? 'red.500' : 'green.500'}
    //       fontSize="sm"
    //       fontWeight="600"
    //     >
    //       {info.getValue().toLowerCase()}
    //     </Badge>
    //   ),
    // }),
    columnHelper.display({
      id: 'edit',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        ></Text>
      ),
      cell: (info) => (
        <IconButton
          aria-label="Edit"
          onClick={() => {
            const doctor = info.row.original;
            router.push('/admin/dashboard/doctors/' + doctor.id);
          }}
          color="secondaryGray.500"
          as={MdEdit}
          w="20px"
          h="20px"
        />
      ),
    }),
  ];
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        <Flex
          align={{ lg: 'center' }}
          justify={{ base: 'space-between' }}
          w="100%"
          px="20px"
          mb="20px"
        >
          <Text
            color={textColor}
            fontSize="xl"
            fontWeight="600"
            lineHeight="100%"
          >
            Управление Докторами
          </Text>
          <Menu
            options={[
              {
                icon: MdPersonAdd,
                label: 'Добавить Доктора',
                onClick: () => {
                  alert('hi');
                },
              },
            ]}
          />
        </Flex>
        <Box>
          <Table variant="simple" color="gray.500" mt="12px">
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        pe="10px"
                        borderColor={borderColor}
                        cursor="pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <Flex
                          justifyContent="space-between"
                          align="center"
                          fontSize={{ sm: '10px', lg: '12px' }}
                          color="gray.400"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: '',
                            desc: '',
                          }[header.column.getIsSorted() as string] ?? null}
                        </Flex>
                      </Th>
                    );
                  })}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: '14px' }}
                          minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                          borderColor="transparent"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Card>
  );
}
