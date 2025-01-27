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

const REVEALED = true;

export default function SpreadTestPage() {
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

  useEffect(() => {
    // 컴포넌트 마운트 시 한 번만 카드를 뽑음
    setSpreads({
      single: drawRandomCards(1),
      triple: drawRandomCards(3),
      five: drawRandomCards(5),
      ten: drawRandomCards(10)
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <TestPageContainer>
      <SpreadSection>
        <h2>Single Spread</h2>
        <SpreadDisplay 
          cards={spreads.single} 
          spreadType="SINGLE"
          revealed={REVEALED} 
          visibleCardCount={1}
          needsLoading={true}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Triple Spread</h2>
        <SpreadDisplay 
          cards={spreads.triple} 
          spreadType="TRIPLE_CHOICE"
          revealed={false} 
          visibleCardCount={3}
          needsLoading={false}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Five Card Cross</h2>
        <SpreadDisplay 
          cards={spreads.five} 
          spreadType="FIVE_CARD_CROSS"
          revealed={REVEALED}
          visibleCardCount={5}
          needsLoading={false}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Celtic Cross</h2>
        <SpreadDisplay 
          cards={spreads.ten} 
          spreadType="CELTIC_CROSS"
          revealed={REVEALED}
          visibleCardCount={10}
          needsLoading={true}
        />
      </SpreadSection>
    </TestPageContainer>
  );
} 