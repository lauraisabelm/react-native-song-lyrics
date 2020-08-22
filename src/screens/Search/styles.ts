import { StyleSheet } from 'react-native';

//LIBS
import styled from 'styled-components/native';

// COMPONENTS
import { Typography } from '../../components';

// RESOURCES
import { colors } from '../../utils/theme';

export const BackgroundContainer = styled.ImageBackground({
  flex: 1,
});

export const ConnectivityContainer = styled.View({
  backgroundColor: colors.orange,
  height: 60,
  justifyContent: 'center',
});

export const FormContainer = styled.View({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
});

export const LogoImage = styled.Image({
  height: 40,
  marginBottom: 40,
  marginTop: 25,
  width: '60%',
});

export const NativeStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});

export const Scroll = styled.ScrollView({
  flex: 1,
});

export const SearchButton = styled.TouchableOpacity(({ disabled }: { disabled: boolean }) => ({
  alignItems: 'center',
  backgroundColor: disabled ? colors.orangeOpacity40 : colors.orange,
  borderRadius: 40,
  height: 80,
  justifyContent: 'center',
  width: 80,
}));

export const Title = styled(Typography)({
  fontWeight: 'bold',
});
