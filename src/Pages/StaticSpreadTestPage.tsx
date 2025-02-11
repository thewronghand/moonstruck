import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SpreadDisplay from '../Components/SpreadDisplay';
import { drawRandomCards } from '../utils/drawRandomCards';
import LoadingSpinner from '../Components/LoadingSpinner';
import { DrawnTarotCard } from '../Types/tarotCard';

const TestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`;

const SpreadSection = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;

  h2 {
    margin-bottom: 16px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  background-color: #6b4e71;
  color: white;
  cursor: pointer;
`;

// 레이아웃 테스트용 - 항상 앞면
const INITIAL_REVEALED = true;
const NEEDS_LOADING = true;  // 이미지 로딩 테스트를 위해

export default function StaticSpreadTestPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [spreads, setSpreads] = useState<{
    single: DrawnTarotCard[];
    triple: DrawnTarotCard[];
    five: DrawnTarotCard[];
    ten: DrawnTarotCard[];
  }>({
    single: [],
    triple: [],
    five: [],
    ten: []
  });

  const drawNewCards = () => {
    setSpreads({
      single: drawRandomCards(1),
      triple: drawRandomCards(3),
      five: drawRandomCards(5),
      ten: drawRandomCards(10)
    });
  };

  useEffect(() => {
    drawNewCards();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <TestPageContainer>
      <Button onClick={drawNewCards}>새로운 카드 뽑기</Button>

      <SpreadSection>
        <h2>Single Spread</h2>
        <SpreadDisplay 
          cards={spreads.single} 
          spreadType="SINGLE"
          revealed={INITIAL_REVEALED}
          visibleCardCount={spreads.single.length}
          needsLoading={NEEDS_LOADING}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Triple Spread</h2>
        <SpreadDisplay 
          cards={spreads.triple} 
          spreadType="TRIPLE_CHOICE"
          revealed={INITIAL_REVEALED}
          visibleCardCount={spreads.triple.length}
          needsLoading={NEEDS_LOADING}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Five Card Cross</h2>
        <SpreadDisplay 
          cards={spreads.five} 
          spreadType="FIVE_CARD_CROSS"
          revealed={INITIAL_REVEALED}
          visibleCardCount={spreads.five.length}
          needsLoading={NEEDS_LOADING}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Celtic Cross</h2>
        <SpreadDisplay 
          cards={spreads.ten} 
          spreadType="CELTIC_CROSS"
          revealed={INITIAL_REVEALED}
          visibleCardCount={spreads.ten.length}
          needsLoading={NEEDS_LOADING}
        />
      </SpreadSection>
    </TestPageContainer>
  );
} 