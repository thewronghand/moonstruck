import React, { useState } from 'react';

interface InputProps {
  onFormSubmit: (inputValue: string) => void;
}

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
    <div>
      <h2>User Input</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="아무 고민이나 적어보세요"
          rows={5}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
