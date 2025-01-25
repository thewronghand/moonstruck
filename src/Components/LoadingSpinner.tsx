import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { motion } from 'motion/react';

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: inherit;
  width: 100%;
  background-color: transparent;
`;

const SpinnerText = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FontAwesomeIcon icon={faCircleNotch} size="2x" color="#6c5ce7" />
      </motion.div>
      <SpinnerText>로딩중...</SpinnerText>
    </SpinnerContainer>
  );
} 