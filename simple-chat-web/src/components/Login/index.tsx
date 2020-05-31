import React from 'react';

import { Container } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <form>
        <input
          value="user"
          onChange={(e) => console.log(e)}
          placeholder="Username"
        />

        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default Chat;
