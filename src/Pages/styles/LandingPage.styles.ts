import styled from 'styled-components';
import { CommonButton } from '../../Components/styles/common.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h3`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 30px;
  text-align: center;
`;

export const StartButton = styled(CommonButton)`
  margin-top: 20px;
`;

export const InfoText = styled.p`
  color: #666;
  margin: 10px 0;
  text-align: center;
  line-height: 1.5;
`;

export const CreditText = styled.p`
  color: #9c88ff;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 20px 0;
`; 