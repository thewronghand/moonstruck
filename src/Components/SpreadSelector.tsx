import React, { useState, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import { AppContainerContext } from '../App';
import { Container, Title } from './styles/common.styles';
import {
  DropdownWrapper,
  DropdownButton,
  OptionsContainer,
  Option,
  InfoIcon,
  Tooltip,
  ArrowIcon
} from './styles/SpreadSelector.styles';

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
    description: "세 장의 카드로 질문자의 상황을 살펴보는 스프레드입니다."
  },
  {
    value: 5,
    label: "파이브 카드 크로스",
    description: "다섯 장의 카드로 상황을 종합적으로 분석합니다."
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

interface TooltipProps {
  description: string;
  iconRef: React.RefObject<HTMLSpanElement>;
}

const TooltipPortal = ({ description, iconRef }: TooltipProps) => {
  const appContainer = useContext(AppContainerContext);
  const rect = iconRef.current?.getBoundingClientRect();
  const containerRect = appContainer?.getBoundingClientRect();

  if (!rect || !containerRect || !appContainer) return null;

  const left = rect.left - containerRect.left;
  const top = rect.top - containerRect.top + rect.height / 2;
  const tooltipWidth = 200;
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
      <Title>타로 스프레드를 선택해주세요</Title>
      <DropdownWrapper>
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
      </DropdownWrapper>
    </Container>
  );
}
