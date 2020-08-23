//LIBS
import styled from 'styled-components/native';

// COMPONENTS
import { Typography } from '../../components';

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

export const SafeArea = styled.SafeAreaView({
  backgroundColor: colors.blue,
});

export const Title = styled(Typography)({
  fontWeight: 'normal',
});
