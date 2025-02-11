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

const Controls = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #6b4e71;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

interface SpreadState {
  cards: DrawnTarotCard[];
  visibleCount: number;
  revealed: boolean;
}

type Spreads = {
  single: SpreadState;
  triple: SpreadState;
  five: SpreadState;
  ten: SpreadState;
};

interface SpreadControlsProps {
  spreadKey: keyof Spreads;
  spread: SpreadState;
  onDraw: (key: keyof Spreads) => void;
  onRevealAll: (key: keyof Spreads) => void;
  onReset: (key: keyof Spreads) => void;
}

function SpreadControls({ 
  spreadKey, 
  spread, 
  onDraw, 
  onRevealAll, 
  onReset 
}: SpreadControlsProps) {
  return (
    <Controls>
      <Button 
        onClick={() => onDraw(spreadKey)}
        disabled={spread.visibleCount >= spread.cards.length}
      >
        카드 뽑기
      </Button>
      <Button 
        onClick={() => onRevealAll(spreadKey)}
        disabled={spread.revealed}
      >
        모두 공개
      </Button>
      <Button onClick={() => onReset(spreadKey)}>
        리셋
      </Button>
    </Controls>
  );
}

export default function SpreadTestPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [spreads, setSpreads] = useState<Spreads>({
    single: { cards: [], visibleCount: 0, revealed: false },
    triple: { cards: [], visibleCount: 0, revealed: false },
    five: { cards: [], visibleCount: 0, revealed: false },
    ten: { cards: [], visibleCount: 0, revealed: false }
  });

  useEffect(() => {
    setSpreads({
      single: { cards: drawRandomCards(1), visibleCount: 0, revealed: false },
      triple: { cards: drawRandomCards(3), visibleCount: 0, revealed: false },
      five: { cards: drawRandomCards(5), visibleCount: 0, revealed: false },
      ten: { cards: drawRandomCards(10), visibleCount: 0, revealed: false }
    });
    setIsLoading(false);
  }, []);

  const handleDrawCard = (spreadKey: keyof typeof spreads) => {
    setSpreads(prev => ({
      ...prev,
      [spreadKey]: {
        ...prev[spreadKey],
        visibleCount: Math.min(
          prev[spreadKey].visibleCount + 1, 
          prev[spreadKey].cards.length
        )
      }
    }));
  };

  const handleRevealAll = (spreadKey: keyof typeof spreads) => {
    setSpreads(prev => ({
      ...prev,
      [spreadKey]: {
        ...prev[spreadKey],
        revealed: true
      }
    }));
  };

  const handleReset = (spreadKey: keyof typeof spreads) => {
    setSpreads(prev => ({
      ...prev,
      [spreadKey]: {
        cards: drawRandomCards(prev[spreadKey].cards.length),
        visibleCount: 0,
        revealed: false
      }
    }));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <TestPageContainer>
      <SpreadSection>
        <h2>Single Spread</h2>
        <SpreadControls 
          spreadKey='single'
          spread={spreads.single}
          onDraw={handleDrawCard}
          onRevealAll={handleRevealAll}
          onReset={handleReset}
        />
        <SpreadDisplay 
          cards={spreads.single.cards} 
          spreadType="SINGLE"
          revealed={spreads.single.revealed}
          visibleCardCount={spreads.single.visibleCount}
          needsLoading={false}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Triple Spread</h2>
        <SpreadControls 
          spreadKey='triple'
          spread={spreads.triple}
          onDraw={handleDrawCard}
          onRevealAll={handleRevealAll}
          onReset={handleReset}
        />
        <SpreadDisplay 
          cards={spreads.triple.cards} 
          spreadType="TRIPLE_CHOICE"
          revealed={spreads.triple.revealed}
          visibleCardCount={spreads.triple.visibleCount}
          needsLoading={true}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Five Card Cross</h2>
        <SpreadDisplay 
          cards={spreads.five.cards} 
          spreadType="FIVE_CARD_CROSS"
          revealed={spreads.five.revealed}
          visibleCardCount={spreads.five.visibleCount}
          needsLoading={true}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Celtic Cross</h2>
        <SpreadDisplay 
          cards={spreads.ten.cards} 
          spreadType="CELTIC_CROSS"
          revealed={spreads.ten.revealed}
          visibleCardCount={spreads.ten.visibleCount}
          needsLoading={true}
        />
      </SpreadSection>
    </TestPageContainer>
  );
} 