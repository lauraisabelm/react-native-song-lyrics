import { StyleSheet } from 'react-native';

//LIBS
import styled from 'styled-components/native';

// RESOURCES
import { colors } from '../../utils/theme';

export const Content = styled.ScrollView({
  flex: 1,
  paddingHorizontal: 20,
  width: '100%',
});

export const MainContainer = styled.View({
  backgroundColor: colors.white,
  flex: 1,
});

export const NativeStyles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingBottom: 50,
  },
});

export const SafeArea = styled.SafeAreaView({
  backgroundColor: colors.blue,
});
