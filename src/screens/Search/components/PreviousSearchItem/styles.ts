import { StyleSheet } from 'react-native';

//LIBS
import styled from 'styled-components/native';

// COMPONENTS
import { Typography } from '../../../../components';

// RESOURCES
import { colors } from '../../../../utils/theme';

export const ArtistImage = styled.Image({
  height: 50,
  tintColor: colors.blue,
  width: 50,
});

export const Field = styled.View({
  alignItems: 'center',
  flexDirection: 'row',
});

export const FieldText = styled(Typography)({
  flex: 1,
  marginLeft: 10,
});

export const IconContainer = styled.View({
  alignItems: 'center',
  borderColor: colors.blue,
  borderRadius: 25,
  borderWidth: 2.5,
  height: 50,
  justifyContent: 'center',
  width: 50,
});

export const ItemContainer = styled.TouchableOpacity({
  backgroundColor: colors.whiteOpacity,
  borderRadius: 20,
  padding: 20,
  width: '100%',
});

export const NativeStyles = StyleSheet.create({
  itemContainer: {
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
