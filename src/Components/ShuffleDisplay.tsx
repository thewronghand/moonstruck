import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 40px 0;
  background-color: white;
`;

const CardDeck = styled(motion.div)`
  position: relative;
  width: min(140px, 20vw);
  aspect-ratio: 1086/1810;
  margin: 20px 0;
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

export default function ShuffleDisplay({ onShuffleComplete }: { onShuffleComplete: () => void }) {
  const [isShuffling, setIsShuffling] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [splitDeck, setSplitDeck] = useState(false);
  const [merging, setMerging] = useState(false);
  const [mergedCards, setMergedCards] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (!isShuffling) {
      const timer = setTimeout(() => {
        setShowHint(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isShuffling]);

  const handleShuffle = () => {
    setShowHint(false);
    setIsShuffling(true);
    setSplitDeck(true);
    
    // 1초 후에 카드 합치기 시작
    setTimeout(() => {
      setMerging(true);
      Array.from({ length: 39 }).forEach((_, i) => {
        setTimeout(() => {
          setMergedCards(prev => [...prev, i]);
        }, i * 50);
        setTimeout(() => {
          setMergedCards(prev => [...prev, i + 39]);
        }, i * 50 + 25);
      });
    }, 1000);

    // 셔플 완료
    setTimeout(() => {
      setSplitDeck(false);
      setMerging(false);
      setMergedCards([]);
      setIsShuffling(false);
      
      // 셔플 완료 후 0.3초 대기 후 exit 애니메이션 시작
      setTimeout(() => {
        setIsExiting(true);
        // exit 애니메이션이 완료된 후에 onShuffleComplete 호출
        setTimeout(() => {
          onShuffleComplete();
        }, 700);  // exit 애니메이션 시간
      }, 500);  // 셔플 완료 후 대기 시간
    }, 3500);
  };

  return (
    <Container>
      <CardDeck
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isExiting ? -100 : showHint ? [0, -8, 0, -8, 0] : 0,
          opacity: isExiting ? 0 : 1,
          scale: showHint ? [1, 1.02, 1, 1.02, 1] : 1,
          transition: {
            y: showHint ? {
              duration: 0.6,
              times: [0, 0.2, 0.4, 0.6, 0.8],
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
              repeatDelay: 2.5
            } : isExiting ? {
              duration: 0.7,
              ease: "easeInOut"
            } : {
              type: "spring",
              stiffness: 400,
              damping: 20
            },
            opacity: {
              duration: isExiting ? 0.7 : 0.5
            },
            scale: showHint ? {
              duration: 0.6,
              times: [0, 0.2, 0.4, 0.6, 0.8],
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
              repeatDelay: 2.5
            } : {
              duration: 0.3
            }
          }
        }}
        onClick={!isShuffling ? handleShuffle : undefined}
      >
        {Array.from({ length: 78 }, (_, i) => {
          const isLeftDeck = i < 39;
          const isMerged = mergedCards.includes(i);
          const baseX = isLeftDeck ? -100 : 100;
          const baseY = -50;

          return (
            <CardBack 
              key={i}
              as={motion.img}
              src="/cards/default/back.webp"
              alt="Card Back"
              style={{
                zIndex: isMerged ? 100 + mergedCards.indexOf(i) : i
              }}
              initial={{
                x: i * -0.3,
                y: i * -0.15
              }}
              animate={splitDeck && !isMerged ? {
                x: baseX + (i % 39 * -0.3),
                y: baseY + (i % 39 * -0.15),
                transition: { 
                  duration: merging ? 0.2 : 0.3,
                  ease: "easeOut"
                }
              } : {
                x: i * -0.3,
                y: i * -0.15,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            />
          );
        })}
      </CardDeck>
      <GuideText
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isExiting ? 0 : isShuffling ? 0 : 1,
          transition: { 
            duration: isShuffling ? 0.2 : isExiting ? 0.3 : 0.5,
            delay: isExiting ? 0 : isShuffling ? 0 : 0.5
          }
        }}
      >
        덱을 눌러 섞어주세요
      </GuideText>
    </Container>
  );
} 