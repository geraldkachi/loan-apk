import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  //   color: string;
  //   size: number;
}

const SvgComponent = (props: Props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.279 11.2c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.19-3.19-3.19-3.19a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.72 3.72a.75.75 0 0 1 0 1.06l-3.72 3.72c-.15.14-.34.22-.53.22Z"
      fill="#C2D0D6"
    />
    <Path
      d="M21 7.48H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.72 21.75c-.19 0-.38-.07-.53-.22l-3.72-3.72a.75.75 0 0 1 0-1.06l3.72-3.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.19 3.19 3.19 3.19c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22Z"
      fill="#C2D0D6"
    />
    <Path
      d="M21 18.02H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill="#C2D0D6"
    />
  </Svg>
);

export default SvgComponent;
