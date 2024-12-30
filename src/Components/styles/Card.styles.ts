import styled from 'styled-components';

export const CardContainer = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 200px;
  height: 340px;
  perspective: 1000px;
  cursor: pointer;
`;

export const CardInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardFront = styled(CardFace)<{ $isReversed: boolean }>`
  transform: rotateY(180deg);
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: ${props => props.$isReversed ? 'rotate(180deg)' : 'none'};
    transition: filter 0.3s ease;
  }

  &:hover {
    img {
      filter: blur(3px);
    }
  }
`;

export const CardBack = styled(CardFace)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  gap: 8px;
  
  ${CardFront}:hover & {
    opacity: 1;
  }
`;
