import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {}

const SvgComponent = (props: Props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18.333 15.833v2.5H1.666v-2.5c0-.458.375-.833.833-.833h15c.459 0 .834.375.834.833Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.833 9.167H4.166V15h1.667V9.167ZM9.167 9.167H7.5V15h1.667V9.167ZM12.5 9.167h-1.666V15h1.667V9.167ZM15.833 9.167h-1.667V15h1.667V9.167ZM19.167 18.958H.834a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h18.333a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625ZM17.808 4.791l-7.5-3a.976.976 0 0 0-.617 0l-7.5 3a.892.892 0 0 0-.525.775v2.767c0 .458.375.833.833.833h15a.836.836 0 0 0 .834-.833V5.566a.892.892 0 0 0-.525-.775ZM9.999 7.083c-.691 0-1.25-.558-1.25-1.25s.559-1.25 1.25-1.25c.692 0 1.25.558 1.25 1.25s-.558 1.25-1.25 1.25Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
