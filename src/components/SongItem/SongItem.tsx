import React from 'react';

// LIBS
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENT
import Space from '../Space';
import Typography from '../Typography';

// RESOURCES
import { IconContainer, InfoContainer, ItemContainer, SongName } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  artist: string;
  onPressItem: () => void;
  song: string;
}

const SongItem = ({ artist, onPressItem, song }: Props) => (
  <ItemContainer onPress={onPressItem}>
    <IconContainer>
      <Icon color={colors.white} name="queue-music" size={35} />
    </IconContainer>
    <InfoContainer>
      <SongName color={colors.darkGray} numberOfLines={1} size={17}>
        {song}
      </SongName>
      <Space />
      <Typography color={colors.gray} size={15}>
        {artist}
      </Typography>
    </InfoContainer>
  </ItemContainer>
);

export default SongItem;
