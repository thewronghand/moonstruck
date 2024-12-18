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

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #9c88ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #8c78ff;
  }
`;

export default function Input({ onFormSubmit }: InputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue('');
    onFormSubmit(inputValue);
  };

  return (
    <InputContainer>
      <Title>어떤 내용을 점쳐보시겠어요?</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextArea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="궁금한 점을 자세히 적어주세요. 타로점을 통해 답을 찾아드립니다."
          rows={8}
        />
        <SubmitButton type="submit">카드 뽑으러 가기</SubmitButton>
      </StyledForm>
    </InputContainer>
  );
}
