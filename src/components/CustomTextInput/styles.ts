import { TextInput, View } from 'react-native';

// LIBS
import styled from 'styled-components';

// RESOURCES
import { colors } from '../../utils/theme';

export const Content = styled(View)({
  width: '100%',
});

export const ErrorContainer = styled(View)({
  marginTop: 5,
  width: '100%',
});

export const Input = styled(TextInput)({
  color: colors.blue,
  flex: 1,
  fontSize: 14,
  padding: 0,
});

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export const TextInputContainer = styled(View)(({ error }: { error: boolean }) => ({
  alignItems: 'center',
  backgroundColor: colors.whiteSmoke,
  borderColor: error ? colors.orange : colors.blue,
  borderRadius: 30,
  borderWidth: 1,
  height: 55,
  flexDirection: 'row' as FlexDirection,
  marginTop: 10,
  paddingHorizontal: 20,
  width: '100%',
}));
