// LIBS
import styled from 'styled-components/native';

// COMPONENTS
import Typography from '../Typography';

// RESOURCES
import { colors } from '../../utils/theme';

export const Container = styled.View({
  alignItems: 'center',
  backgroundColor: colors.blue,
  borderBottomColor: colors.gray,
  borderBottomWidth: 1,
  flexDirection: 'row',
  height: 55,
  paddingHorizontal: 15,
  width: '100%',
});

export const Title = styled(Typography)({
  flex: 1,
  fontWeight: 'bold',
});
