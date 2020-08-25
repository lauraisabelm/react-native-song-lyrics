import * as React from 'react';

// LIBS
import Icon from 'react-native-vector-icons/MaterialIcons';

// RESOURCES
import { ButtonContainer, NativeStyles } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  onButtonPress: () => void;
}

const FloatingButton = ({ onButtonPress }: Props) => {
  return (
    <ButtonContainer
      activeOpacity={0.7}
      onPress={onButtonPress}
      style={NativeStyles.buttonElevation}
    >
      <Icon color={colors.white} name="delete" size={30} />
    </ButtonContainer>
  );
};

export default FloatingButton;
