import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getErrorMessage } from '../utils/getErrorMessages';

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

interface ErrorPageState {
  error: {
    code: string;
    message: string;
    statusCode?: number;
  };
}

export default function ErrorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { error } = (location.state || {}) as ErrorPageState;

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

      <HomeButton onClick={() => navigate('/')}>
        홈으로 돌아가기
      </HomeButton>
    </ErrorContainer>
  );
} 