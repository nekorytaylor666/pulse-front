// Chakra imports
import { Flex, Input, Select, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import { NextAvatar } from 'components/image/Avatar';
import { Image } from 'components/image/Image';

export default function Settings(props: {
  name: string;
  avatar: string;
  banner: string;
  onChange: (file: File) => void;
}) {
  const { name, avatar, banner, onChange } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  return (
    <Card mb="20px" alignItems="center">
      <Image src={banner} borderRadius="16px" alt="" />
      <label>
        <NextAvatar
          objectFit={'cover'}
          mx="auto"
          src={avatar}
          h="300px"
          bg={'gray.400'}
          w="300px"
          mt="-43px"
          mb="15px"
        />
        <Input
          display={'none'}
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            onChange(file);
          }}
        />
      </label>
      <Text fontSize="2xl" textColor={textColorPrimary} fontWeight="700">
        {name}
      </Text>
    </Card>
  );
}
