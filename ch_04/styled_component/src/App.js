import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import {theme} from './theme'

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  aligh-items: center;
  justify-content: center;
`;

const App = () => {
  return (
          <ThemeProvider theme={theme}>
            <Container>
              <Button title="Hanbit" />
              <Button title="React Native" />
              <Input borderColor="#3498db"/>
              <Input borderColor="#9b59b6"/>
            </Container>
          </ThemeProvider>
  );
};

export default App;

