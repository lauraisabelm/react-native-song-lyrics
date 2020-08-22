import React from 'react';
import { TextInputProps } from 'react-native';

// LIBS
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENTS
import Typography from '../Typography';

// RESOURCES
import { Content, ErrorContainer, Input, TextInputContainer } from './styles';
import { colors } from '../../utils/theme';

interface TextFieldCustomProps {
  placeholder: string;
}

type ReduxFormPropsToPick = 'validate';

type PickedReduxFormProps = Pick<BaseFieldProps, ReduxFormPropsToPick>;

export type TextInputFieldProps = WrappedFieldProps &
  TextInputProps &
  TextFieldCustomProps &
  PickedReduxFormProps;

const CustomTextInput = ({ input, meta, ...inputProps }: TextInputFieldProps) => {
  const error = meta.error && meta.touched;
  return (
    <Content>
      <TextInputContainer error={error || false}>
        <Input
          {...inputProps}
          onChangeText={input.onChange}
          onEndEditing={input.onBlur}
          onFocus={(e: any) => input.onFocus(e)}
          placeholderTextColor={error ? colors.orange : colors.blue}
          underlineColorAndroid="transparent"
        />
        {error ? <Icon color={colors.orange} name="error-outline" size={30} /> : null}
      </TextInputContainer>
      {error ? (
        <ErrorContainer>
          <Typography color={colors.orange} size={15}>
            {meta.error}
          </Typography>
        </ErrorContainer>
      ) : null}
    </Content>
  );
};

export default CustomTextInput;
