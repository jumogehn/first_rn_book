import React from 'react';
import styled from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  aligh-items: center;
  justify-content: center;
`;

const App = () => {
  return (
          <Container>
            <Button title="Hanbit" />
            <Button title="React Native" />
            <Input />
          </Container>

  );
};

export default App;

