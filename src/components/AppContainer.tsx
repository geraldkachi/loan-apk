import React from 'react';
import {StatusBar} from 'react-native';
import {Heading, VStack, Box, ScrollView} from 'native-base';
import colors from '../config/utils/colors';

interface Props {
  headerTxt?: string;
  hasHeader?: boolean;
  scrollAble?: boolean;
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({
  scrollAble,
  headerTxt,
  hasHeader = true,
  children,
}) => {
  return (
    <Box p={5} flex={1}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.gray[80]} />
      {hasHeader ? (
        <Heading
          mt="6"
          size="xl"
          fontWeight={300}
          fontFamily="heading"
          fontStyle="normal">
          {headerTxt}
        </Heading>
      ) : null}
      {scrollAble ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={5}>{children}</VStack>
        </ScrollView>
      ) : (
        <VStack space={5}>{children}</VStack>
      )}
    </Box>
  );
};
export default AppContainer;
