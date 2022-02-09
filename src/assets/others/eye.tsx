import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../../config/utils/colors';

interface Props {
  //color: string;
  isVisible: boolean;
}
const SvgComponent = (props: Props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.71 7.625C15.785 4.6 12.968 2.858 10 2.858c-1.483 0-2.925.434-4.241 1.242-1.317.817-2.5 2.008-3.467 3.525-.833 1.308-.833 3.433 0 4.742 1.925 3.033 4.742 4.766 7.708 4.766 1.484 0 2.925-.433 4.242-1.241 1.317-.817 2.5-2.009 3.467-3.525.833-1.3.833-3.434 0-4.742ZM10 13.367A3.363 3.363 0 0 1 6.635 10c0-1.858 1.5-3.367 3.366-3.367A3.363 3.363 0 0 1 13.368 10c0 1.858-1.5 3.367-3.367 3.367Z"
      fill={props.isVisible ? colors.primary[101] : '#C2D0D6'}
    />
    <Path
      d="M10 7.616a2.38 2.38 0 0 0 0 4.758A2.386 2.386 0 0 0 12.383 10 2.394 2.394 0 0 0 10 7.616Z"
      fill={props.isVisible ? colors.primary[101] : '#C2D0D6'}
    />
  </Svg>
);
//#C2D0D6
export default SvgComponent;
