import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

interface Props {}

const SvgComponent = (props: Props) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m19.34 14.99-1-1.66c-.21-.37-.4-1.07-.4-1.48V9.32a5.91 5.91 0 0 0-3.37-5.33 2.926 2.926 0 0 0-2.58-1.49c-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09ZM14.83 20.51A3.014 3.014 0 0 1 12 22.5c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z"
      fill="#141C1F"
    />
    <Circle cx={20} cy={4.5} r={3.5} fill="#E71D36" stroke="#fff" />
  </Svg>
);

export default SvgComponent;
