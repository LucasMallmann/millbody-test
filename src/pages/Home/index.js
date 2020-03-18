import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import VideoPlayer from '~/components/VideoPlayer';
import FullScreenContext from '~/store/FullScreenContext';
import Button from '~/components/Button';

import { Container, Welcome, Title, Content, Bottom } from './styles';

export default function Home() {
  const { navigate } = useNavigation();
  const { fullscreen } = useContext(FullScreenContext);

  return (
    <Container>
      <VideoPlayer uri="https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/Rn8KKQBy-medium.mp4" />

      {!fullscreen && (
        <Welcome>
          <View>
            <Title>Bem vindo</Title>
            <Content>
              Ficamos muito felizes em ter você aqui. Você pode navegar entre os
              outros conteúdos da nossa plataforma e aproveitar tudo que tem
              direito!
            </Content>
          </View>
          <Bottom>
            <Button onPress={() => navigate('Second')}>Next</Button>
          </Bottom>
        </Welcome>
      )}
    </Container>
  );
}
