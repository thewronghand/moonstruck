import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ErrorContainer = styled.div`
  padding: 20px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ErrorIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d85757;
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: #495057;
`;

export const ErrorExclamation = styled.div`
  font-size: 3rem;
  color: #495057;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff0f3;
  border-radius: 12px;
  padding: 16px 24px;

  p {
    color: #868e96;
    white-space: pre-line;
    word-break: keep-all;
  }
`;

export const ErrorCode = styled.span`
  color: #d85757;
  
  svg {
    margin-right: 4px;
  }
`;

export const FallbackMessage = styled.div`
  text-align: center;
  color: #495057;
  font-size: 1.1em;

  svg {
    margin-right: 8px;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
`;

export const SpreadInfo = styled.div`
  text-align: center;
  padding: 0 16px;

  h2 {
    color: #495057;
    margin-bottom: 12px;
    font-size: 1.2em;
  }

  p {
    color: #868e96;
    font-size: 1em;
    line-height: 1.5;
  }
`;

export const UserQuestion = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #f8f9fa;
  border-radius: 8px;
  width: 100%;

  h3 {
    color: #495057;
    margin-bottom: 12px;
    font-size: 1.1em;
  }

  p {
    color: #495057;
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 500;
  }
`;

export const HomeButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #6b4e71;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #5a4260;
  }
`;