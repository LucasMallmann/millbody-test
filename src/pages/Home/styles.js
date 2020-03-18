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
