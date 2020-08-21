import { View, ViewProps } from 'react-native';

// LIBS
import styled from 'styled-components';

interface ContentProps extends ViewProps {
  handleHorizontal: boolean;
  thickness: number;
}

export const Content = styled(View)(({ handleHorizontal, thickness }: ContentProps) => ({
  height: !handleHorizontal ? thickness : 'auto',
  width: handleHorizontal ? thickness : 'auto',
}));
