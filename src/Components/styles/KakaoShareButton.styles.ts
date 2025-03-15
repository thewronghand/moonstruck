import styled from 'styled-components';
import { CommonButton } from './common.styles';

export const KakaoButton = styled(CommonButton)`
  background-color: #FEE500;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #F6D800;
  }
  
  svg {
    margin-right: 8px;
  }
`;
