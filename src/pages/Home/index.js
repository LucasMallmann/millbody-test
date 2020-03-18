import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from './styles';
import VideoPlayer from '~/components/VideoPlayer';
import FullScreenContext from '~/store/FullScreenContext';

export default function Home() {
  const { navigate } = useNavigation();
  const { fullscreen } = useContext(FullScreenContext);

  return (
    <Container>
      <VideoPlayer />

      {!fullscreen && (
        <TouchableOpacity onPress={() => navigate('Second')}>
          <Text>Navigate to user</Text>
        </TouchableOpacity>
      )}
    </Container>
  );
}
