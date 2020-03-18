import React from 'react';

import VideoPlayer from '~/components/VideoPlayer';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';
import VideoInformation from '~/components/VideoInformation';

import sample from '~/videos/third.mp4';

export default function Third() {
  return (
    <Container>
      <VideoPlayer uri={sample} />
      <VideoInformation
        title="Último conteúdo!"
        screenToNavigate="Home"
        buttonText="Página Inicial"
      >
        Parabéns! Você passou por todas as etapas da Casa do Saber. Esperamos
        que você tenha aproveitado sua jornada sobre a Divina Comedia
      </VideoInformation>
    </Container>
  );
}
