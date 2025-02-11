import styled from 'styled-components';
import { DrawnTarotCard } from '../Types/tarotCard';

const CardInfoContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  margin: 4px 0;
  width: 100%;
  min-height: fit-content;  // 내용물 크기에 맞춤
`;

const CardImageWrapper = styled.div`
  width: 25%;
  min-width: 80px;
  max-width: 120px;
  aspect-ratio: 1086 / 1810;
  flex-shrink: 0;
  display: flex;          // 추가
  align-items: center;    // 추가
  justify-content: center;// 추가
`;

const CardImage = styled.img<{ $isReversed: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: contain;    // cover에서 contain으로 변경
  border-radius: 8px;
  transform: ${props => props.$isReversed ? 'rotate(180deg)' : 'none'};
`;

const CardDetails = styled.div`
  flex: 1;

  h3 {
    color: #495057;
    margin-bottom: 8px;
  }

  .position {
    color: #868e96;
    font-size: 0.9em;
    margin-bottom: 12px;
  }

  .keywords {
    color: #495057;
    margin-bottom: 8px;
  }

  .description {
    color: #495057;
    font-size: 0.9em;
    line-height: 1.5;
  }
`;

const KeywordTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 12px;
`;

const KeywordTag = styled.span`
  background-color: #f1f3f5;
  color: #495057;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 0.9em;
  white-space: nowrap;
`;

interface CardInfoDisplayProps {
  card: DrawnTarotCard;
  position: string;
  imageUrl?: string;
}

export default function CardInfoDisplay({ card, position, imageUrl }: CardInfoDisplayProps) {
  if (!imageUrl) {
    return (
      <CardInfoContainer>
        <div>이미지를 불러오는데 실패했습니다.</div>
      </CardInfoContainer>
    );
  }

  return (
    <CardInfoContainer>
      <CardImageWrapper>
        <CardImage 
          src={imageUrl} 
          alt={card.name.ko}
          $isReversed={card.direction === '역방향'}
        />
      </CardImageWrapper>
      <CardDetails>
        <h3>
          {card.name.ko}
          {card.direction === '역방향' && ' (역방향)'}
        </h3>
        <div className="position">{position}</div>
        <KeywordTags>
          {card.keywords.map((keyword, index) => (
            <KeywordTag key={index}>{keyword}</KeywordTag>
          ))}
        </KeywordTags>
        <div className="description">
          {card.description}
        </div>
      </CardDetails>
    </CardInfoContainer>
  );
} 