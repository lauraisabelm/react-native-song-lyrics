// LIBS
import styled from 'styled-components/native';

// COMPONENTS
import Typography from '../Typography';

// RESOURCES
import { colors } from '../../utils/theme';
import { StyleSheet } from 'react-native';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export const Container = styled.View(({ backgroundColor }: { backgroundColor: string }) => ({
  alignItems: 'center',
  backgroundColor,
  borderBottomColor: colors.lightGrey,
  borderBottomWidth: 1,
  flexDirection: 'row' as FlexDirection,
  height: 55,
  paddingHorizontal: 15,
  width: '100%',
}));

export const Title = styled(Typography)({
  flex: 1,
  fontWeight: 'bold',
});

export const NativeStyles = StyleSheet.create({
  shadow: {
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
