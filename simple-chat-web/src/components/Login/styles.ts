import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  /* background-color: red; */
`;

export const ChatRoom = styled.div`
  background-color: #232129;
  height: 80vh;
  padding: 16px 16px 0;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  p {
    margin-bottom: 8px;
  }

  span {
    color: #ff9900;
  }

  margin: 64px 0 16px;
`;

export const ChatInput = styled.div``;
