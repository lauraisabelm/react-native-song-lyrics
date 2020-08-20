// REACT NATIVE
import * as React from 'react';
import { ViewProps, ViewStyle } from 'react-native';

// COMPONENTS
import { MainContainer } from './styles';

interface Props extends ViewProps {
  children: React.ReactNode | React.ReactNodeArray;
  style: ViewStyle;
}

const Container = ({ children, ...props }: Props) => {
  return <MainContainer {...props}>{children}</MainContainer>;
};

Container.defaultProps = {
  style: {},
};

export default Container;
