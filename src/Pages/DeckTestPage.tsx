import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import ShuffleDisplay from '../Components/ShuffleDisplay';
import CutDisplay from '../Components/CutDisplay';

const TestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 20px;
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 12px;
`;

const PhaseButton = styled.button<{ $active: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${props => props.$active ? '#0056b3' : '#007bff'};
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

type DeckPhase = 'shuffle' | 'cut' | 'none';

export default function DeckTestPage() {
  const [currentPhase, setCurrentPhase] = useState<DeckPhase>('none');

  const handleShuffleComplete = () => {
    console.log("Shuffle completed!");
    setCurrentPhase('cut');
  };

  const handleCutComplete = () => {
    console.log("Cut completed!");
    setCurrentPhase('none');
  };

  return (
    <TestPageContainer>
      <ControlPanel>
        <PhaseButton 
          onClick={() => setCurrentPhase('shuffle')}
          $active={currentPhase === 'shuffle'}
        >
          Shuffle Test
        </PhaseButton>
        <PhaseButton 
          onClick={() => setCurrentPhase('cut')}
          $active={currentPhase === 'cut'}
        >
          Cut Test
        </PhaseButton>
      </ControlPanel>

      <AnimatePresence mode="wait">
        {currentPhase === 'shuffle' && (
          <ShuffleDisplay 
            key="shuffle"
            onShuffleComplete={handleShuffleComplete} 
          />
        )}
        {currentPhase === 'cut' && (
          <CutDisplay
            key="cut"
            onCutComplete={handleCutComplete}
          />
        )}
      </AnimatePresence>
    </TestPageContainer>
  );
} 