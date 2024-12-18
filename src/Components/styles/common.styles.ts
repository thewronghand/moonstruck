import styled from 'styled-components';

export const CommonButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 15px;
  background-color: ${props => props.disabled ? '#cccccc' : '#9c88ff'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? '#cccccc' : '#8c78ff'};
  }
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;
