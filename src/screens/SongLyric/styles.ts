import { StyleSheet } from 'react-native';

//LIBS
import styled from 'styled-components/native';

// RESOURCES
import { colors } from '../../utils/theme';

export const Content = styled.ScrollView({
  flex: 1,
  padding: 20,
  width: '100%',
});

export const MainContainer = styled.View({
  backgroundColor: colors.white,
  flex: 1,
});

export const NativeStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.blue,
  },
});

export const SafeArea = styled.SafeAreaView({
  backgroundColor: colors.blue,
});
