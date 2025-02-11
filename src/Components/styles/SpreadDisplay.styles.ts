import styled from "styled-components";

export const SpreadContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  font-size: 1.1rem;
`;
