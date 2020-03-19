import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  margin-right: 10px;
`;

export const Switch = styled.Switch.attrs(props => ({
  trackColor: {
    true: '#3b9eef',
    false: Platform.OS === 'android' ? '#d3d3d3' : '#fbfbfb',
  },
  thumbColor: props.active ? '#3b9eef' : '#fbfbfb',
}))`
  border-width: 1px;
  border-color: ${props =>
    props.active ? props.theme.colors.secondary : '#f2f2f2'};
`;
