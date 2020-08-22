// LIBS
import styled from 'styled-components/native';

// COMPONENTS
import Typography from '../Typography';

// RESOURCES
import { colors } from '../../utils/theme';

export const AlertContainer = styled.View({
  backgroundColor: colors.white,
  borderRadius: 10,
  padding: 25,
  width: '80%',
});

export const Button = styled.TouchableOpacity({
  alignItems: 'center',
  backgroundColor: colors.orange,
  borderRadius: 10,
  flex: 1,
  height: 40,
  justifyContent: 'center',
});

export const ButtonsContainer = styled.View({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
});

export const ModalContainer = styled.View({
  alignItems: 'center',
  backgroundColor: colors.blackOpacity,
  flex: 1,
  justifyContent: 'center',
  width: '100%',
});

export const SecondaryButton = styled.View({
  alignItems: 'center',
  flex: 1,
});

export const Title = styled(Typography)({
  fontWeight: 'bold',
});
