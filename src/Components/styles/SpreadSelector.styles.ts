import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: ${props => props.$isOpen ? '8px 8px 0 0' : '8px'};
  background: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: #9c88ff;
  }

  &:focus {
    outline: none;
    border-color: #9c88ff;
  }
`;

export const OptionsContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% - 0.5px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 8px 8px;
  z-index: 10;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Option = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  padding: 15px;
  border: none;
  background: ${props => props.$isSelected ? '#f0ebff' : 'white'};
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:hover {
    background: ${props => props.$isSelected ? '#f0ebff' : '#f8f8f8'};
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

export const InfoIcon = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #9c88ff;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  cursor: help;
  text-align: center;

  &::before {
    content: "?";
  }
`;

export const Tooltip = styled.div<{ $left: number; $top: number; $isLeftSide: boolean }>`
  position: absolute;
  ${props => props.$isLeftSide ? `
    right: calc(100% - ${props.$left}px + 8px);
  ` : `
    left: ${props.$left}px;
  `}
  top: ${props => props.$top}px;
  padding: 8px;
  background: rgba(156, 136, 255, 0.95);
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  z-index: 9999;
  min-width: 200px;
  max-width: 300px;
  white-space: normal;
  pointer-events: none;
  transform: translateY(-50%);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    ${props => props.$isLeftSide ? `
      left: 100%;
      border-left-color: rgba(156, 136, 255, 0.95);
    ` : `
      right: 100%;
      border-right-color: rgba(156, 136, 255, 0.95);
    `}
  }
`;

export const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  margin-left: 8px;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.2s ease;
  &::after {
    content: '▼';
  }
`;