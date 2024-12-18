import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #9c88ff;
  }
`;

export const CharCount = styled.div<{ isAtLimit: boolean }>`
  align-self: flex-end;
  margin-bottom: 5px;
  padding-right: 8px;
  color: ${props => props.isAtLimit ? '#ff4444' : '#666'};
  font-size: 14px;
  transition: color 0.2s ease;
`; 