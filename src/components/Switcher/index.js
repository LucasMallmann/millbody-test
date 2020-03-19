import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, Switch } from './styles';
import ToggleThemeContext from '~/store/ToggleThemeContext';

export default function Switcher() {
  const { title } = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <Container>
      <Switch
        value={title === 'dark'}
        onChange={toggleTheme}
        active={title === 'dark'}
      />
    </Container>
  );
}
