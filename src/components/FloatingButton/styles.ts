import { StyleSheet } from 'react-native';

// LIBS
import styled from 'styled-components/native';

// RESOURCES
import { colors } from '../../utils/theme';

export const ButtonContainer = styled.TouchableOpacity({
  alignItems: 'center',
  backgroundColor: colors.orange,
  borderRadius: 35,
  bottom: 15,
  height: 70,
  justifyContent: 'center',
  position: 'absolute',
  right: 15,
  width: 70,
});

export const NativeStyles = StyleSheet.create({
  buttonElevation: {
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
});
