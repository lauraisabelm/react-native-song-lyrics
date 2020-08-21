// REACT NATIVE
import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

// LIBS
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENTS
import { Container, Title } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  onPressArrow: () => void;
  title: string;
}

const Header = ({ onPressArrow, title }: Props) => {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={onPressArrow}>
        <Icon color={colors.white} name="arrow-back" size={30} />
      </TouchableWithoutFeedback>
      <Title color={colors.white} size={20} textAlign="center">
        {title}
      </Title>
    </Container>
  );
};

export default Header;
