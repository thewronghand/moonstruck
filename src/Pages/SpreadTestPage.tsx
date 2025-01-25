import styled from 'styled-components';
import SpreadDisplay from '../Components/SpreadDisplay';
import { drawRandomCards } from '../utils/drawRandomCards';

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
  const singleCards = drawRandomCards(1);
  const tripleCards = drawRandomCards(3);
  const fiveCards = drawRandomCards(5);
  const tenCards = drawRandomCards(10);

  return (
    <TestPageContainer>
      <SpreadSection>
        <h2>Single Spread</h2>
        <SpreadDisplay 
          cards={singleCards} 
          spreadType="SINGLE"
          revealed={REVEALED} 
          visibleCardCount={1}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Triple Spread</h2>
        <SpreadDisplay 
          cards={tripleCards} 
          spreadType="TRIPLE_CHOICE"
          revealed={REVEALED} 
          visibleCardCount={3}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Five Card Cross</h2>
        <SpreadDisplay 
          cards={fiveCards} 
          spreadType="FIVE_CARD_CROSS"
          revealed={REVEALED}
          visibleCardCount={5}
        />
      </SpreadSection>

      <SpreadSection>
        <h2>Celtic Cross</h2>
        <SpreadDisplay 
          cards={tenCards} 
          spreadType="CELTIC_CROSS"
          revealed={REVEALED}
          visibleCardCount={10}
        />
      </SpreadSection>
    </TestPageContainer>
  );
} 