import styled from 'styled-components/native';
import metrics from '~/styles/metrics';

export const Container = styled.View``;

export const Black = styled.View`
  width: ${metrics.screenWidth}px;
  height: ${metrics.screenHeight * 0.4}px;
  background-color: #000;
`;

export const Overlay = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const Overlayset = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${props => (props.overlay ? '#0006' : 'transparent')};
`;

export const OverlayControl = styled.View`
  flex: 1;
`;
