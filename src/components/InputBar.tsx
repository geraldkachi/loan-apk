import React from 'react';
import EyeIcon from '../assets/others/eye';
import {Input, FormControl, WarningOutlineIcon, Icon} from 'native-base';

interface Props {
  label: string;
  error?: string;
  isValid?: boolean;
  password?: boolean;
  placeholder: string;
}

const InputBar: React.FC<Props> = props => {
  return (
    <FormControl
      isInvalid={props.isValid}
      w={{
        base: '100%',
        xl: '85%',
      }}>
      <FormControl.Label>{props.label}</FormControl.Label>
      {props.password ? (
        <Input
          borderRadius="8"
          placeholder={props.placeholder}
          InputRightElement={
            <Icon
              as={<EyeIcon isVisible={false} />}
              size={5}
              mr="2"
              color="muted.400"
            />
          }
        />
      ) : (
        <Input placeholder={props.placeholder} borderRadius="8" />
      )}

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {props.error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
export default InputBar;
