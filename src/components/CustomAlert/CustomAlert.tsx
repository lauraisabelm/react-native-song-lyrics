import React from 'react';
import { Modal } from 'react-native';

// COMPONENTS
import Space from '../Space';
import Typography from '../Typography';

// RESOURCES
import {
  AlertContainer,
  Button,
  ButtonsContainer,
  ModalContainer,
  SecondaryButton,
  Title,
} from './styles';
import { colors } from '../../utils/theme';

interface Props {
  isVisible: boolean;
  onMainButtonPress: () => void;
  onSecondButtonPress?: () => void;
  text: string;
  title: string;
}

const CustomAlert = ({ isVisible, onMainButtonPress, onSecondButtonPress, text, title }: Props) => (
  <Modal transparent visible={isVisible}>
    <ModalContainer>
      <AlertContainer>
        <Title color={colors.dimGray} size={18} textAlign="center">
          {title}
        </Title>
        <Space thickness={25} />
        <Typography size={15} textAlign="center">
          {text}
        </Typography>
        <Space thickness={25} />
        <ButtonsContainer>
          {onSecondButtonPress && (
            <SecondaryButton>
              <Typography color={colors.blue} onPress={onSecondButtonPress} size={15}>
                Cancel
              </Typography>
            </SecondaryButton>
          )}
          <Button activeOpacity={0.8} onPress={onMainButtonPress}>
            <Typography color={colors.white} size={15}>
              OK
            </Typography>
          </Button>
        </ButtonsContainer>
      </AlertContainer>
    </ModalContainer>
  </Modal>
);

export default CustomAlert;
