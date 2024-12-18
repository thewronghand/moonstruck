import React, { useState, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AppContainerContext } from '../App';

interface SpreadOption {
  value: number;
  label: string;
  description: string;
}

const spreadOptions: SpreadOption[] = [
  {
    value: 1,
    label: "싱글",
    description: "하나의 카드로 간단한 질문에 대한 답을 얻을 수 있는 기본적인 스프레드입니다."
  },
  {
    value: 3,
    label: "트리플",
    description: "과거, 현재, 미래를 나타내는 세 장의 카드로 시간의 흐름을 살펴보는 스프레드입니다."
  },
  {
    value: 5,
    label: "파이브 카드 크로스",
    description: "현재 상황, 장애물, 목표, 조언, 결과를 나타내는 다섯 장의 카드로 상황을 종합적으로 분석합니다."
  },
  {
    value: 10,
    label: "켈틱 크로스",
    description: "가장 상세한 해석을 제공하는 전통적인 스프레드로, 질문자의 상황을 다각도로 살펴봅니다."
  }
];

interface SpreadSelectorProps {
  cardCount: number;
  onCardCountChange: (newCardCount: number) => void;
}

const Container = styled.div`
  margin: 20px 0;
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
`;

const DropdownButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 16px;
  border: 2px solid #4a90e2;
  border-radius: ${props => props.$isOpen ? '8px 8px 0 0' : '8px'};
  background: white;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const OptionsContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #4a90e2;
  border-top: none;
  border-radius: 0 0 8px 8px;
  z-index: 10;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  max-height: 300px;
  overflow-y: auto;
  overflow-x: visible;
`;

const Option = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  padding: 16px;
  border: none;
  background: ${props => props.$isSelected ? '#e3f2fd' : 'white'};
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:hover {
    background: ${props => props.$isSelected ? '#e3f2fd' : '#f5f5f5'};
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

const Tooltip = styled.div<{ $left: number; $top: number; $isLeftSide: boolean }>`
  position: absolute;
  ${props => props.$isLeftSide ? `
    right: calc(100% - ${props.$left}px + 8px);
  ` : `
    left: ${props.$left}px;
  `}
  top: ${props => props.$top}px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.8);
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
      border-left-color: rgba(0, 0, 0, 0.8);
    ` : `
      right: 100%;
      border-right-color: rgba(0, 0, 0, 0.8);
    `}
  }
`;

const InfoIcon = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 8px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  background: #eee;
  border-radius: 50%;
  font-size: 0.8rem;
  cursor: help;
  text-align: center;

  &::before {
    content: "?";
  }
`;

const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  margin-left: 8px;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.2s ease;
  &::after {
    content: '▼';
  }
`;

interface TooltipProps {
  description: string;
  iconRef: React.RefObject<HTMLSpanElement>;
}

const TooltipPortal = ({ description, iconRef }: TooltipProps) => {
  const appContainer = useContext(AppContainerContext);
  const rect = iconRef.current?.getBoundingClientRect();
  const containerRect = appContainer?.getBoundingClientRect();

  if (!rect || !containerRect || !appContainer) return null;

  // AppContainer 기준으로 상대 위치 계산
  const left = rect.left - containerRect.left;
  const top = rect.top - containerRect.top + rect.height / 2;
  
  // 툴팁이 오른쪽에 표시될 때 AppContainer를 벗어나는지 확인
  const tooltipWidth = 200; // min-width 값
  const isLeftSide = left + tooltipWidth + 24 > containerRect.width;

  return createPortal(
    <Tooltip 
      $left={left} 
      $top={top}
      $isLeftSide={isLeftSide}
    >
      {description}
    </Tooltip>,
    appContainer
  );
};

export default function SpreadSelector({
  cardCount,
  onCardCountChange,
}: SpreadSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const iconRefs = useRef<{ [key: number]: React.RefObject<HTMLSpanElement> }>({});

  // 컴포넌트 마운트 시 ref 객체 초기화
  spreadOptions.forEach(option => {
    if (!iconRefs.current[option.value]) {
      iconRefs.current[option.value] = React.createRef();
    }
  });

  const selectedOption = spreadOptions.find(option => option.value === cardCount) || spreadOptions[0];

  const handleOptionClick = (value: number) => {
    onCardCountChange(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <Title>어떤 스프레드로 뽑아볼까요?</Title>
      <DropdownButton 
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
      >
        {selectedOption.label}
        <ArrowIcon $isOpen={isOpen} />
      </DropdownButton>
      <OptionsContainer $isOpen={isOpen}>
        {spreadOptions.map((option) => (
          <Option
            key={option.value}
            $isSelected={cardCount === option.value}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
            <InfoIcon
              ref={iconRefs.current[option.value]}
              onMouseEnter={() => setActiveTooltip(option.value.toString())}
              onMouseLeave={() => setActiveTooltip(null)}
            />
            {activeTooltip === option.value.toString() && (
              <TooltipPortal
                description={option.description}
                iconRef={iconRefs.current[option.value]}
              />
            )}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
}
