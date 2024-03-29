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
    <Rect x={0.834} y={0.5} width={47} height={47} rx={23.5} fill="#fff" />
    <Path
      d="m28.473 14.96-9.03 3c-6.07 2.03-6.07 5.34 0 7.36l2.68.89.89 2.68c2.02 6.07 5.34 6.07 7.36 0l3.01-9.02c1.34-4.05-.86-6.26-4.91-4.91Zm.32 5.38-3.8 3.82c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z"
      fill="#141C1F"
    />
    <Rect x={0.834} y={0.5} width={47} height={47} rx={23.5} stroke="#E0E8EB" />
  </Svg>
);

export default SvgComponent;
