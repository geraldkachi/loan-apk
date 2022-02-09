import React from 'react';
import {Button} from 'native-base';

interface Props {
  outline?: boolean;
  btnTxt: string;
  btnType: string;
  onPress: () => void;
  size?: string; //"xs", "sm", "md", "lg"
}

const ButtonArvo: React.FC<Props> = props => {
  const btnSize = props.size ? props.size : 'md';
  const btnBackground =
    props.btnType === 'primary' ? 'primary.101' : 'accent.red';
  return (
    <Button
      //variant="outline"
      key={btnSize}
      size={btnSize}
      onPress={props.onPress}
      bgColor={btnBackground}
      borderRadius="lg"
      mt="10"
      pr="12"
      pl="12"
      p="3">
      {props.btnTxt}
    </Button>
  );
};

export default ButtonArvo;
