import styled from 'styled-components';

export const TripleSpreadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
  padding: 20px;
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 20px;  // 카드 사이의 간격
  
  @media (max-width: 768px) {
    gap: 10px;  // 모바일에서는 간격을 좁힘
  }
`; 