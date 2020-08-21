import { TextProperties, Text } from 'react-native';

//LIBS
import styled from 'styled-components/native';

// RESOURCES
import { colors } from '../../utils/theme';

type StyledTextProps = {
  color: keyof typeof colors | string;
  size: number;
  textAlign: 'center' | 'justify' | 'left' | 'right';
} & TextProperties;

export const StyledText = styled(Text)((props: StyledTextProps) => ({
  color: props.color,
  fontSize: props.size,
  textAlign: props.textAlign,
}));
