import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpreadSelector from '../Components/SpreadSelector';
import Input from '../Components/Input';
import type { SpreadType } from '../Types/spread';
import { spreadOptions } from '../Types/spread';

const INITIAL_SPREAD_TYPE: SpreadType = 'SINGLE';

export default function QueryPage() {
  const [spreadType, setSpreadType] = useState<SpreadType>(INITIAL_SPREAD_TYPE);
  const navigate = useNavigate();

  function handleSpreadTypeChange(newSpreadType: SpreadType) {
    setSpreadType(newSpreadType);
  }

  function handleSubmit(userInput: string) {
    const cardCount = spreadOptions.find(option => option.value === spreadType)?.cardCount || 1;
    navigate('/draw', { 
      state: { 
        userInput, 
        spreadType,
        cardCount 
      } 
    });
  }

  return (
    <div>
      <SpreadSelector
        spreadType={spreadType}
        onSpreadTypeChange={handleSpreadTypeChange}
      />
      <Input onFormSubmit={handleSubmit} />
    </div>
  );
}
