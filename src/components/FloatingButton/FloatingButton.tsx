// REACT NATIVE
import * as React from 'react';

// LIBS
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENTS
import { ButtonContainer, NativeStyles } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  onPressClearHistory: () => void;
}

const FloatingButton = ({ onPressClearHistory }: Props) => {
  return (
    <ButtonContainer
      activeOpacity={0.7}
      onPress={onPressClearHistory}
      style={NativeStyles.buttonElevation}
    >
      <Icon color={colors.white} name="delete" size={30} />
    </ButtonContainer>
  );
};

export default FloatingButton;
