import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from './styles';
import VideoPlayer from '~/components/VideoPlayer';

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <VideoPlayer />

      <TouchableOpacity onPress={() => navigate('Second')}>
        <Text>Navigate to user</Text>
      </TouchableOpacity>
    </Container>
  );
}
