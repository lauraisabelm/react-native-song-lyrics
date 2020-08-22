import React from 'react';

// LIBS
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENT
import { Space, Typography } from '../../../../components';

// RESOURCES
import {
  ArtistImage,
  Field,
  FieldText,
  IconContainer,
  ItemContainer,
  NativeStyles,
} from './styles';
import { Singer } from '../../../../assets/images';
import { colors } from '../../../../utils/theme';

interface Props {
  artist: string;
  song: string;
}

const PreviousSearchItem = ({ artist, song }: Props) => (
  <>
    <Typography color={colors.blue} size={25}>
      Previous Search
    </Typography>
    <Space />
    <ItemContainer style={NativeStyles.itemContainer}>
      <Field>
        <IconContainer>
          <Icon color={colors.blue} name="music-note" size={25} />
        </IconContainer>
        <FieldText color={colors.darkGray} numberOfLines={1} size={15}>
          {song}
        </FieldText>
      </Field>
      <Space />
      <Field>
        <ArtistImage source={Singer} />
        <FieldText color={colors.darkGray} size={15}>
          {artist}
        </FieldText>
      </Field>
    </ItemContainer>
    <Space thickness={20} />
  </>
);

export default PreviousSearchItem;
