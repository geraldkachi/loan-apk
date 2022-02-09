// 1. Import the extendTheme function
import {extendTheme, NativeBaseProvider} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
export default {
  primary: {
    50: '#E3F2F9',
    100: '#C5E4F3',
    200: '#A2D4EC',
    300: '#7AC1E4',
    400: '#47A9DA',
    500: '#0088CC',
    600: '#007AB8',
    700: '#006BA1',
    800: '#005885',
    900: '#003F5E',
    // Custom color
    101: '#065373',
    102: '#07658D',
    103: '#0977A5',
    104: '#0A88BD',
    105: '#0B9AD5',
  },
  accent: {
    blue: '#2E63EA',
    red: '#E71D36',
    green: '#02C39A',
    salmon: '##FFD9CE',
    redLight: '#EC4B5F',
    honey_yellow: '#F6AE2D',
    portland_orange: '#F46036',
  },
  white: {
    plain: '#FFFFFF',
    azure: '#F0FAFE',
  },
  black: '#141C1F',
  gray: {
    100: '#668A99',
    90: '#C2D0D6',
    80: '#E0E8EB',
    70: '#F0F3F5',
  },
  others: {
    baby_power: '#FDFFFC',
    ghost_white: '#F7F7FF',
  },
};
