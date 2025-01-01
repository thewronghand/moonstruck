import styled from 'styled-components';
import { motion } from 'motion/react';

const DeckContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: -40px;
  justify-content: center;
`;

const CardRow = styled.div`
  position: relative;
  height: 45%;
  min-height: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: visible;
`;

const CardBack = styled(motion.button)<{ $index: number }>`
  position: absolute;
  width: 25%;
  min-width: 90px;
  height: 42.9%;
  min-height: 154px;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  background: url('/cards/default/back.webp') no-repeat center center;
  background-size: cover;
  left: ${props => `calc(50% - (26 * 3% + 25%) / 2 + ${props.$index} * 3%)`};

  &:disabled {
    cursor: not-allowed;
  }
`;

interface DrawPhaseDisplayProps {
  onCardSelect: (index: number) => void;
  selectedIndices: number[];
}

export default function DrawPhaseDisplay({ onCardSelect, selectedIndices }: DrawPhaseDisplayProps) {
  const rows = Array.from({ length: 3 }, (_, rowIndex) => {
    const startIndex = rowIndex * 26;

    return (
      <CardRow key={rowIndex}>
        {Array.from({ length: 26 }, (_, i) => {
          const cardIndex = startIndex + i;
          if (cardIndex >= 78) return null;
          
          return (
            <CardBack
              key={cardIndex}
              $index={i}
              disabled={selectedIndices.includes(cardIndex)}
              onClick={() => onCardSelect(cardIndex)}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.3,
                    delay: cardIndex * 0.02,
                    ease: "easeOut"
                  }
                },
                selected: {
                  x: 0,
                  y: 200,
                  opacity: 0,
                  transition: {
                    y: { duration: 0.8, ease: "easeIn" },
                    opacity: { duration: 0.4 }
                  }
                },
                unselected: {
                  x: 0,
                  y: 0,
                  opacity: 1
                }
              }}
              initial="hidden"
              animate={selectedIndices.includes(cardIndex) ? "selected" : "visible"}
            />
          );
        })}
      </CardRow>
    );
  });

  return <DeckContainer>{rows}</DeckContainer>;
} 