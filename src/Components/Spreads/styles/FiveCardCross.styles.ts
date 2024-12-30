import styled from 'styled-components';

export const CrossContainer = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, auto);
  gap: 8px;
  width: 100%;
  max-width: 400px;
  
  .card-slot {
    position: relative;
    padding-top: 140%;
    width: 100%;
    
    > * {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .empty {
    visibility: hidden;
  }
`;
