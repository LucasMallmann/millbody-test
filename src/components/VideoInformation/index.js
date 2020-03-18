import React, { useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import FullScreenContext from '~/store/FullScreenContext';

import { Container, Title, Content, Bottom } from './styles';

export default function VideoInformation({
  title,
  screenToNavigate,
  buttonText,
  children,
}) {
  const { navigate } = useNavigation();
  const { fullscreen } = useContext(FullScreenContext);

  return (
    <>
      {!fullscreen && (
        <Container>
          <View>
            <Title>{title}</Title>
            <Content>{children}</Content>
          </View>
          <Bottom>
            <Button onPress={() => navigate(screenToNavigate)}>
              {buttonText}
            </Button>
          </Bottom>
        </Container>
      )}
    </>
  );
}

VideoInformation.propTypes = {
  title: PropTypes.string.isRequired,
  screenToNavigate: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  children: PropTypes.string.isRequired,
};

VideoInformation.defaultProps = {
  buttonText: 'Continuar',
};
