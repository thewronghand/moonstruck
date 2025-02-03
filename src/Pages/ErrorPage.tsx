import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getErrorMessage } from '../utils/getErrorMessages';
import SpreadDisplay from '../Components/SpreadDisplay';
import CardInfoDisplay from '../Components/CardInfoDisplay';
import { DrawnTarotCard } from '../Types/tarotCard';
import { SPREAD_INFO, SpreadType } from '../Types/spread'
import { useCardImages } from '../utils/hooks/useCardImages';
import LoadingSpinner from '../Components/LoadingSpinner';

const ErrorContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin: 32px 0;

  h1 {
    color: #ff6b6b;
    margin-bottom: 16px;
  }

  p {
    color: #868e96;
  }
`;

const HomeButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #6b4e71;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #5a4260;
  }
`;

const FallbackMessage = styled.div`
  text-align: center;
  margin: 32px 0;
  color: #495057;
  font-size: 1.1em;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
`;

const SpreadInfo = styled.div`
  text-align: center;
  padding: 0 16px;

  h2 {
    color: #495057;
    margin-bottom: 12px;
    font-size: 1.2em;
  }

  p {
    color: #868e96;
    font-size: 1em;
    line-height: 1.5;
  }
`;

interface ErrorPageState {
  error: {
    code: string;
    message: string;
    statusCode?: number;
  };
  cards: DrawnTarotCard[];
  spreadType: SpreadType;
}

export default function ErrorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { error, cards, spreadType } = (location.state || {}) as ErrorPageState;
  const { cardImages, isLoading } = useCardImages(cards, true);
  const spreadInfo = SPREAD_INFO[spreadType];

  // state가 없으면 홈으로 리다이렉트
  if (!location.state) {
    navigate('/');
    return null;
  }

  return (
    <ErrorContainer>
      <ErrorMessage>
        <h1>오류가 발생했습니다 ({error.code})</h1>
        {error.statusCode && (
          <p>HTTP Status: {error.statusCode}</p>
        )}
        <p>{error.statusCode ? getErrorMessage(error.statusCode) : error.message}</p>
      </ErrorMessage>

      <FallbackMessage>
        응답은 받아오지 못했지만, 대신 일반적인 해석을 보여드릴게요 🔮
      </FallbackMessage>

      <SpreadDisplay
        cards={cards}
        spreadType={spreadType}
        revealed={true}
        visibleCardCount={cards.length}
        needsLoading={true}
      />

      <SpreadInfo>
        <h2>{spreadInfo.name}</h2>
        <p>{spreadInfo.description}</p>
      </SpreadInfo>

      <CardList>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          cards.map((card, index) => (
            <CardInfoDisplay
              key={index}
              card={card}
              position={spreadInfo.positions[index]}
              imageUrl={cardImages.get(card.id)}
            />
          ))
        )}
      </CardList>

      <HomeButton onClick={() => navigate('/')}>
        홈으로 돌아가기
      </HomeButton>
    </ErrorContainer>
  );
} 