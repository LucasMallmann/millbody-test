import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Bottom = styled.View`
  margin-bottom: 16px;
`;

export const Welcome = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  align-self: center;
  font-size: 26px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const Content = styled.Text`
  text-align: center;
  line-height: 24px;
  font-size: 18px;
  margin-top: 30px;
  color: ${props => props.theme.colors.text};
  align-self: center;
`;
