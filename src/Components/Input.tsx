import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  onFormSubmit: (inputValue: string) => void;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 15px;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #9c88ff;
  }
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 12px;
  background-color: ${props => props.disabled ? '#cccccc' : '#9c88ff'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? '#cccccc' : '#8c78ff'};
  }
`;

const CharCount = styled.div<{ isAtLimit: boolean }>`
  align-self: flex-end;
  margin-bottom: 10px;
  color: ${props => props.isAtLimit ? '#ff4444' : '#666'};
  font-size: 14px;
  transition: color 0.2s ease;
`;

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
    <InputContainer>
      <Title>어떤 내용을 점쳐보시겠어요?</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextArea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="궁금한 점을 자세히 적어주세요. 타로점을 통해 답을 찾아드립니다."
          rows={5}
          maxLength={maxLength}
        />
        <CharCount isAtLimit={inputValue.length === maxLength}>
          {inputValue.length}/{maxLength}
        </CharCount>
        <SubmitButton 
          type="submit" 
          disabled={inputValue.length > maxLength}
        >
          운세 보기
        </SubmitButton>
      </StyledForm>
    </InputContainer>
  );
}
