import React from 'react';

// RESOURCES
import { Content } from './styles';

interface Props {
  handleHorizontal: boolean;
  thickness: number;
}

const Space = ({ handleHorizontal, thickness }: Props) => {
  return <Content handleHorizontal={handleHorizontal} thickness={thickness} />;
};

Space.defaultProps = {
  handleHorizontal: false,
  thickness: 10,
};

export default Space;
