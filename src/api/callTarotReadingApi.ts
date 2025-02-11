import type { DrawnTarotCard } from '../Types/tarotCard';
import type { SpreadType } from '../Types/spread';
import { SPREAD_INFO } from '../Types/spread';
import type { AIResponse } from '../Types/apiResponse';

interface TarotReadingRequest {
  userInput: string;
  cards: DrawnTarotCard[];
  spreadType: SpreadType;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function callTarotReadingAPI({ 
  userInput, 
  cards, 
  spreadType 
}: TarotReadingRequest): Promise<AIResponse> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/tarot-reading`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userInput, 
          cards, 
          spreadInfo: SPREAD_INFO[spreadType]
        })
      }
    );

    if (!response.ok) {
      throw new ApiError('타로 리딩 요청에 실패했습니다.', response.status);
    }

    return response.json();
  } catch (error) {
    console.error('Tarot Reading API Error:', error);
    throw error;
  }
}