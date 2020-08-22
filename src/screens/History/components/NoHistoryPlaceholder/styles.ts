import { StyleSheet } from 'react-native';

//LIBS
import styled from 'styled-components/native';

// RESOURCES
import { colors } from '../../../../utils/theme';

export const PlaceholderContainer = styled.View({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
});

export const PlaceholderImage = styled.View({
  alignItems: 'center',
  height: 120,
  justifyContent: 'center',
  marginBottom: 30,
  opacity: 0.3,
  width: 120,
});

export const NativeStyles = StyleSheet.create({
  slashLine: {
    backgroundColor: colors.orange,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    width: 10,
    height: 140,
  },
});
