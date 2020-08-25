import React from 'react';

// RESOURCES
import { StyledText } from './styles';
import { colors } from '../../utils/theme';

export interface TypographyProps {
  color: string;
  children: React.ReactNode;
  numberOfLines?: number;
  onPress?: () => void;
  size: number;
  style: any;
  textAlign: 'center' | 'justify' | 'left' | 'right';
}

const Typography = ({ children, ...props }: TypographyProps) =>
  !children ? null : (
    <StyledText allowFontScaling={false} {...props}>
      {children}
    </StyledText>
  );

Typography.defaultProps = {
  color: colors.black,
  children: null,
  size: 12,
  style: {},
  textAlign: 'left',
};

export default Typography;
