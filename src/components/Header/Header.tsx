// REACT NATIVE
import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

// LIBS
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENTS
import { Container, NativeStyles, Title } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  backgroundColor: string;
  colorTitle: string;
  onPressArrow?: () => void;
  title: string;
  withoutArrow: boolean;
}

const Header = ({ backgroundColor, colorTitle, onPressArrow, title, withoutArrow }: Props) => {
  return (
    <Container backgroundColor={backgroundColor} style={NativeStyles.shadow}>
      {!withoutArrow && (
        <TouchableWithoutFeedback onPress={onPressArrow}>
          <Icon color={colors.white} name="arrow-back" size={30} />
        </TouchableWithoutFeedback>
      )}
      <Title color={colorTitle} size={20} textAlign="center">
        {title}
      </Title>
    </Container>
  );
};

Header.defaultProps = {
  backgroundColor: colors.blue,
  colorTitle: colors.white,
  withoutArrow: false,
};

export default Header;
