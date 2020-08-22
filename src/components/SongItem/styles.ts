//LIBS
import styled from 'styled-components/native';

// COMPONENTS
import Typography from '../Typography';

// RESOURCES
import { colors } from '../../utils/theme';

export const IconContainer = styled.View({
  alignItems: 'center',
  backgroundColor: colors.blue,
  borderRadius: 30,
  height: 60,
  justifyContent: 'center',
  width: 60,
});

export const InfoContainer = styled.View({
  borderBottomColor: colors.lightGrey,
  borderBottomWidth: 1,
  flex: 1,
  justifyContent: 'center',
  marginLeft: 20,
  paddingVertical: 20,
});

export const ItemContainer = styled.TouchableOpacity({
  alignItems: 'center',
  flexDirection: 'row',
  paddingHorizontal: 20,
  width: '100%',
});

export const SongName = styled(Typography)({
  fontWeight: 'normal',
});
