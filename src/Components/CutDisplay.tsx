import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 600px;
  background-color: white;
  padding-top: 40px;
`;

const DecksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  position: relative;
`;

const DeckPile = styled(motion.div)`
  position: relative;
  width: min(120px, 18vw);
  aspect-ratio: 1086/1810;
  cursor: pointer;
`;

const CardBack = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: min(8px, 1.2vw);
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
`;

const GuideText = styled(motion.div)`
  color: #666;
  font-size: 1.1rem;
  margin-top: 20px;
  text-align: center;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  pointer-events: none;
  z-index: 1000;
`;

export default function CutDisplay({ onCutComplete }: { onCutComplete: () => void }) {
  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const cardCount = 26;
  const stackOffset = 0.3;
  const stackOffsetY = 0.15;

  const handlePileClick = (pileIndex: number) => {
    if (!selectedOrder.includes(pileIndex) && !isMerging) {
      const newOrder = [...selectedOrder, pileIndex];
      setSelectedOrder(newOrder);
      
      if (newOrder.length === 3) {
        setTimeout(() => {
          setIsMerging(true);
          
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onCutComplete();
            }, 500);
          }, 1000);
        }, 500);
      }
    }
  };

  return (
    <Container>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isExiting ? 1 : 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }}
      />
      <DecksContainer>
        {[0, 1, 2].map((pileIndex) => {
          const spacing = 'min(140px, 22vw)';
          const initialX = `calc(${pileIndex - 1} * ${spacing})`;

          return (
            <DeckPile
              key={pileIndex}
              initial={{ y: -100, opacity: 0, x: initialX }}
              animate={{ 
                y: isExiting 
                  ? -100
                  : isMerging 
                    ? 50 + (selectedOrder.indexOf(pileIndex) * cardCount * -stackOffsetY)
                    : selectedOrder.includes(pileIndex) ? -10 : 0,
                x: isMerging 
                  ? (selectedOrder.indexOf(pileIndex) * cardCount * -stackOffset)
                  : initialX,
                opacity: 1,
                transition: {
                  type: isExiting ? "tween" : "spring",
                  stiffness: isExiting ? undefined : 400,
                  damping: isExiting ? undefined : 30,
                  delay: !selectedOrder.includes(pileIndex) && !isMerging 
                    ? pileIndex * 0.3
                    : 0,
                  duration: isExiting ? 0.5 : undefined,
                  ease: isExiting ? "easeInOut" : undefined
                }
              }}
              style={{
                zIndex: isMerging 
                  ? selectedOrder.indexOf(pileIndex)
                  : 1,
                position: 'absolute',
                transformOrigin: 'center bottom'
              }}
              onClick={() => handlePileClick(pileIndex)}
            >
              {Array.from({ length: cardCount }, (_, i) => {
                const baseOffset = isMerging
                  ? selectedOrder.indexOf(pileIndex) * 1
                  : 0;

                return (
                  <CardBack 
                    key={i}
                    as={motion.img}
                    src="/cards/default/back.webp"
                    alt="Card Back"
                    style={{
                      zIndex: baseOffset + i
                    }}
                    initial={{
                      x: i * -stackOffset,
                      y: i * -stackOffsetY
                    }}
                    animate={{
                      x: i * -stackOffset,
                      y: i * -stackOffsetY,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  />
                );
              })}
            </DeckPile>
          );
        })}
      </DecksContainer>
      <GuideText
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isExiting || isMerging || selectedOrder.length === 3 ? 0 : 1,
          transition: { 
            duration: 0.5,
            delay: selectedOrder.length === 0 ? 1.2 : 0
          }
        }}
      >
        쌓을 순서를 정해주세요  
      </GuideText>
    </Container>
  );
} 