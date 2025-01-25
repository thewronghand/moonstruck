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
import { SpreadType, spreadOptions } from '../Types/spread';

interface SpreadSelectorProps {
  spreadType: SpreadType;
  onSpreadTypeChange: (newSpreadType: SpreadType) => void;
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
  spreadType,
  onSpreadTypeChange,
}: SpreadSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const iconRefs = useRef<{ [key in SpreadType]?: React.RefObject<HTMLSpanElement> }>({});

  spreadOptions.forEach(option => {
    if (!iconRefs.current[option.value]) {
      iconRefs.current[option.value] = React.createRef();
    }
  });

  const selectedOption = spreadOptions.find(option => option.value === spreadType) || spreadOptions[0];

  const handleOptionClick = (value: SpreadType) => {
    onSpreadTypeChange(value);
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
              $isSelected={spreadType === option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
              <InfoIcon
                ref={iconRefs.current[option.value]}
                onMouseEnter={() => setActiveTooltip(option.value)}
                onMouseLeave={() => setActiveTooltip(null)}
              />
              {activeTooltip === option.value && (
                <TooltipPortal
                  description={option.description}
                  iconRef={iconRefs.current[option.value]!}
                />
              )}
            </Option>
          ))}
        </OptionsContainer>
      </DropdownWrapper>
    </Container>
  );
}
