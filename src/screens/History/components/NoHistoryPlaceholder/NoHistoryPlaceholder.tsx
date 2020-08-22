import React from 'react';
import { View } from 'react-native';

// LIBS
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENTS
import { Typography } from '../../../../components';

// RESOURCES
import { NativeStyles, PlaceholderContainer, PlaceholderImage } from './styles';
import { colors } from '../../../../utils/theme';

const NoHistoryPlaceholder = () => (
  <PlaceholderContainer>
    <PlaceholderImage>
      <Icon color={colors.orange} name="history" size={120} />
      <View style={NativeStyles.slashLine} />
    </PlaceholderImage>
    <Typography color={colors.dimGray} size={20}>
      No history data to display
    </Typography>
  </PlaceholderContainer>
);

export default NoHistoryPlaceholder;
