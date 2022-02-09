import React from 'react';
import BankIcon from '../../../assets/dashboard/bank';
import {Box, Text, Button, Center, HStack} from 'native-base';

export default () => {
  return (
    <Box bg="primary.101" p="4" borderRadius="24">
      <Center>
        <HStack space={2} borderRadius="24" bg="primary.102" p="2">
          <BankIcon />
          <Text color="white.plain" fontSize="md">
            <Text fontSize="12">Account No </Text> 009980070{' '}
          </Text>
        </HStack>
        <Text color="white.plain" m="1">
          Wallet Balance
        </Text>
        <Text color="white.plain" fontSize="2xl" fontWeight="300" mb="2">
          ₦1,000,000
        </Text>
        <Button
          bgColor="white.azure"
          borderRadius="8"
          size="sm"
          _text={{color: 'primary.101', fontWeight: '300', pl: '3', pr: '3'}}>
          Fund Wallet
        </Button>
      </Center>
    </Box>
  );
};
