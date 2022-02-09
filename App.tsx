import React from 'react';
import RootNavigation from './src/route/root';
import ArvoFonts from './src/config/utils/fonts';
import ArvoColors from './src/config/utils/colors';
import ArvoCustom from './src/config/utils/custom';
import {NativeBaseProvider, extendTheme} from 'native-base';

const theme = extendTheme({
  colors: ArvoColors,
  components: ArvoCustom,
  fonts: ArvoFonts.fontName,
  fontConfig: ArvoFonts.primaryFont,
});

const App = () => (
  <NativeBaseProvider theme={theme}>
    <RootNavigation />
  </NativeBaseProvider>
);

export default App;

//export {default} from './storybook';
