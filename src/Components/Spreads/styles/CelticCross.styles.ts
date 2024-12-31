import styled from 'styled-components';

export const CelticCrossContainer = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, auto);
  gap: 8px;
  width: 100%;
  max-width: 500px;

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

  .center-cross {
    grid-area: 2 / 2 / 3 / 3;
    z-index: 1;
    transition: z-index 0s, transform 0.3s;

    &:hover {
      z-index: 3;
      transform: scale(1.05);
    }
  }

  .overlay-card {
    grid-area: 2 / 2 / 3 / 3;
    transform: rotate(90deg);
    z-index: 2;
    transition: z-index 0s, transform 0.3s;

    &:hover {
      z-index: 3;
      transform: rotate(90deg) scale(1.05);
    }
  }

  .left {
    grid-area: 2 / 1 / 3 / 2;
    z-index: 1;
    transition: z-index 0s, transform 0.3s;

    &:hover {
      z-index: 3;
      transform: scale(1.05);
    }
  }

  .right {
    grid-area: 2 / 3 / 3 / 4;
    z-index: 1;
    transition: z-index 0s, transform 0.3s;

    &:hover {
      z-index: 3;
      transform: scale(1.05);
    }
  }

  .above {
    grid-area: 1 / 2 / 2 / 3;
  }

  .below {
    grid-area: 3 / 2 / 4 / 3;
  }

  .staff {
    grid-column: 4;
    
    &.first { grid-row: 1; }
    &.second { grid-row: 2; }
    &.third { grid-row: 3; }
    &.fourth { grid-row: 4; }
  }
`; 