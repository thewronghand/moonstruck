import styled from 'styled-components';
import { motion } from 'motion/react';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const AnimatedIcon = styled(motion.span)`
  display: inline-block;
  margin-right: 8px;
`;

export const TryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #5f3dc4;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`; 