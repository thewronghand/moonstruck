import React, { useState } from 'react';
import { Container, Title, CommonButton } from './styles/common.styles';
import { StyledForm, StyledTextArea, CharCount } from './styles/Input.styles';

interface InputProps {
  onFormSubmit: (inputValue: string) => void;
}

export default function Input({ onFormSubmit }: InputProps) {
  const [inputValue, setInputValue] = useState('');
  const maxLength = 300;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setInputValue(text);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length <= maxLength) {
      setInputValue('');
      onFormSubmit(inputValue);
    }
  };

  return (
    <Container>
      <Title>어떤 내용을 점쳐보시겠어요?</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextArea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="궁금한 점을 자세히 적어주세요. 타로점을 통해 답을 찾아드립니다."
          rows={5}
          maxLength={maxLength}
        />
        <CharCount $isAtLimit={inputValue.length === maxLength}>
          {inputValue.length}/{maxLength}
        </CharCount>
        <CommonButton 
          type="submit" 
          disabled={inputValue.length > maxLength}
        >
          운세 보기
        </CommonButton>
      </StyledForm>
    </Container>
  );
}
