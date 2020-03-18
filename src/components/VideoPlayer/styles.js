import styled from 'styled-components/native';

import metrics from '~/styles/metrics';

export const Container = styled.View`
  flex: 1;
`;

export const Black = styled.View`
  background-color: #000;
  width: ${metrics.screenWidth}px;
  height: ${metrics.screenHeight * 0.4}px;
`;

export const BlackFullScreen = styled.View`
  background: #000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
`;
