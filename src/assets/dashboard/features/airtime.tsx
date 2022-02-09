import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface Props {}

const SvgComponent = (props: Props) => (
  <Svg
    width={49}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={1.168} y={0.5} width={47} height={47} rx={23.5} fill="#fff" />
    <Path
      d="M28.908 14h-8.48c-2.76 0-3.76 1-3.76 3.81v12.38c0 2.81 1 3.81 3.76 3.81h8.47c2.77 0 3.77-1 3.77-3.81V17.81c0-2.81-1-3.81-3.76-3.81Zm-4.24 17.3c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75Zm2-13.05h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill="#141C1F"
    />
    <Rect x={1.168} y={0.5} width={47} height={47} rx={23.5} stroke="#E0E8EB" />
  </Svg>
);

export default SvgComponent;
