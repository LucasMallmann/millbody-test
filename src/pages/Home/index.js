import React from 'react';

import VideoPlayer from '~/components/VideoPlayer';

import { Container } from './styles';
import VideoInformation from '~/components/VideoInformation';

import sample from '~/videos/first.mp4';

export default function Home() {
  return (
    <Container>
      <VideoPlayer sample={sample} />
      <VideoInformation title="Bem vindo!" screenToNavigate="Second">
        Ficamos muito felizes em vê-lo aqui. Você pode navegar entre todos os
        outros conteúdos da plataforma e aproveitar tudo que tem direito!
      </VideoInformation>
    </Container>
  );
}
