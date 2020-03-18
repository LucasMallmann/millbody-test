import React from 'react';

import VideoPlayer from '~/components/VideoPlayer';

import { Container } from './styles';
import VideoInformation from '~/components/VideoInformation';

import sample from '~/videos/second.mp4';

export default function Second() {
  return (
    <Container>
      <VideoPlayer uri={sample} />
      <VideoInformation title="Parte 2" screenToNavigate="Third">
        Nesse segundo vídeo, você irá continuar aprendendo sobre A Divina
        Comedia. Descubra o que Ulisses disse à Dante enquanto estava no Inferno
      </VideoInformation>
    </Container>
  );
}
