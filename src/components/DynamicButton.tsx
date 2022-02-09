import React, {ReactNode} from 'react';
import {Button, Center} from 'native-base';

interface Props {
  //outline?: boolean;
  btnTxt: string;
  btnType: string;
  loading: boolean;
  onPress: () => void;
  fieldStatus: boolean;
  size?: string; //"xs", "sm", "md", "lg"
}

const ButtonArvo: React.FC<Props> = props => {
  const btnSize = props.size ? props.size : 'md';
  const pressAble = props.fieldStatus ? true : false;
  const btnBackground = props.fieldStatus ? 'primary.101' : 'gray.90';
  const btnTextColor = props.fieldStatus ? 'white.plain' : 'primary.101';

  return (
    <Button
      p="3"
      mt="10"
      pr="12"
      pl="12"
      size={btnSize}
      borderRadius="lg"
      key={props.size}
      //variant="outline"
      _text={{
        color: btnTextColor,
      }}
      _spinner={{
        color: 'white.azure',
      }}
      bgColor={btnBackground}
      isLoadingText="Submitting"
      isLoading={props.loading}
      onPress={pressAble ? props.onPress : null}>
      {props.btnTxt}
    </Button>
  );
};

export default ButtonArvo;
