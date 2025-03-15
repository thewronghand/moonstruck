import styled from 'styled-components';
import { Section, Title } from '../../Components/styles/ReadingDisplay.styles';
import { CommonButton } from '../../Components/styles/common.styles';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const HomeButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5f3dc4;
  }
`;

export const ShareSection = styled(Section)`
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

export const ShareTitle = styled(Title)`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 16px;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const ShareButton = styled(CommonButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;