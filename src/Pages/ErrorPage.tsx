import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getErrorInfo } from '../utils/getErrorInfo';
import SpreadDisplay from '../Components/SpreadDisplay';
import CardInfoDisplay from '../Components/CardInfoDisplay';
import { DrawnTarotCard } from '../Types/tarotCard';
import { SPREAD_INFO, SpreadType } from '../Types/spread'
import { useCardImages } from '../utils/hooks/useCardImages';
import LoadingSpinner from '../Components/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFaceDizzy, 
  faFaceFlushed, 
  faFaceTired,
  faFaceSurprise,
  
} from '@fortawesome/free-regular-svg-icons';   
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';

const ErrorContainer = styled.div`
  padding: 20px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ErrorIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d85757;
`;

const ErrorIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: #495057;
`;

const ErrorExclamation = styled.div`
  font-size: 3rem;
  color: #495057;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff0f3;
  border-radius: 12px;
  padding: 16px 24px;

  p {
    color: #868e96;
    white-space: pre-line;
    word-break: keep-all;
  }
`;

const ErrorCode = styled.span`
  color: #d85757;
  
  svg {
    margin-right: 4px;
  }
`;

const FallbackMessage = styled.div`
  text-align: center;
  color: #495057;
  font-size: 1.1em;

  svg {
    margin-right: 8px;
  }
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

const UserQuestion = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #f8f9fa;
  border-radius: 8px;
  width: 100%;

  h3 {
    color: #495057;
    margin-bottom: 12px;
    font-size: 1.1em;
  }

  p {
    color: #495057;
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 500;
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

interface ErrorPageState {
  error: {
    code: string;
    message: string;
    statusCode?: number;
  };
  cards: DrawnTarotCard[];
  spreadType: SpreadType;
  userInput: string;
}

const exclamationConfig = [
  { text: '이런...!', icon: faFaceDizzy },
  { text: '엥...?', icon: faFaceFlushed },
  { text: '앗...!', icon: faFaceTired },
  { text: '저런...!', icon: faFaceSurprise }
];

export default function ErrorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ErrorPageState | undefined;

  // 기본값 설정
  const error = state?.error ?? {
    code: 'UNKNOWN_ERROR',
    message: `알 수 없는 오류가 발생했어요!\n홈으로 돌아간 후 잠시 후에 다시 시도해보는 걸 권장드려요.`
  };
  
  const { cardImages, isLoading } = useCardImages(
    state?.cards ?? [], 
    true
  );

  const { text: exclamation, icon } = useMemo(() => {
    const seed = error.code.length;
    return exclamationConfig[seed % exclamationConfig.length];
  }, [error.code]);

  return (
    <ErrorContainer>
      <ErrorIconContainer>
        <ErrorIcon icon={icon} />
        <ErrorExclamation>{exclamation}</ErrorExclamation>
      </ErrorIconContainer>
      <ErrorMessage>
        <h2>
          {state?.error.statusCode ? (
            <ErrorCode>
              {error.code}{' '}
              (<FontAwesomeIcon icon={getErrorInfo(state.error.statusCode).icon} style={{ marginRight: '4px' }}/>{state.error.statusCode})
            </ErrorCode>
          ) : (
            error.code
          )}
        </h2>
        {state?.error.statusCode ? (
          <p>{getErrorInfo(state.error.statusCode).message}</p>
        ) : (
          <p>{error.message}</p>
        )}
      </ErrorMessage>

      {state && (
        <>
          <FallbackMessage>
            <FontAwesomeIcon icon={faWandMagicSparkles} style={{ marginRight: '8px' }} /> 
            응답은 받아오지 못했지만, <br />대신 일반적인 해석을 보여드릴게요!
          </FallbackMessage>

          <SpreadDisplay
            cards={state.cards}
            spreadType={state.spreadType}
            revealed={true}
            visibleCardCount={state.cards.length}
            needsLoading={true}
          />

          <SpreadInfo>
            <h2>{SPREAD_INFO[state.spreadType].name}</h2>
            <p>{SPREAD_INFO[state.spreadType].description}</p>
          </SpreadInfo>

          <UserQuestion>
            <h3>입력한 질문</h3>
            <p>"{state.userInput}"</p>
          </UserQuestion>

          <CardList>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              state.cards.map((card, index) => (
                <CardInfoDisplay
                  key={index}
                  card={card}
                  position={SPREAD_INFO[state.spreadType].positions[index]}
                  imageUrl={cardImages.get(card.id)}
                />
              ))
            )}
          </CardList>
        </>
      )}

      <HomeButton onClick={() => navigate('/')}>
        홈으로 돌아가기
      </HomeButton>
    </ErrorContainer>
  );
} 