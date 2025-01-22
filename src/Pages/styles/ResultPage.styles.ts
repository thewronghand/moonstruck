import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`;

export const Text = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
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
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;
