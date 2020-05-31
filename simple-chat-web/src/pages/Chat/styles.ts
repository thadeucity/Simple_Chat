import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const ChatRoom = styled.div`
  background-color: #232129;
  height: 85vh;
  margin: 64px 0 0px;
  padding: 16px 16px 0;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  overflow: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  p {
    margin-bottom: 8px;
  }

  span {
    font-weight: 500;
    color: #ff9900;
  }
`;

export const ChatInput = styled.div`
  width: 100%;
  margin: 24px 0;

  form {
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    overflow: hidden;

    input {
      height: 56px;
      padding: 16px;
      border: 0;
      background: #232129;
      color: #fff;

      &:first-child {
        width: 150px;
      }

      &:nth-child(2) {
        flex: 1;
        border-left: 1px solid ${lighten(0.08, '#232129')};
      }
    }

    button {
      width: 100px;
      border: 0;
      font-weight: 500;
      background: #ff9900;
    }
  }
`;
