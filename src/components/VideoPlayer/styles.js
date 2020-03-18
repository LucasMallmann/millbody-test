import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/FontAwesome5';

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

export const Icon = styled(VectorIcon)`
  color: #fff;
  flex: 1;
  text-align: center;
  align-self: center;
  margin-left: 8px;
`;

export const SliderContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Timer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
`;

export const Time = styled.Text`
  color: #fff;
`;

export const IconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
