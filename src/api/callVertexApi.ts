import type { DrawnTarotCard } from '../Types/tarotCard';
import type { SpreadType } from '../Types/spread';
import { SPREAD_INFO } from '../Types/spread';

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

export async function callVertexAPI({ 
  userInput, 
  cards, 
  spreadType 
}: TarotReadingRequest) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/vertex-claude`,
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
      throw new ApiError('API request failed', response.status);
    }

    return response.json();
  } catch (error) {
    console.error('Vertex API Error:', error);
    throw error;
  }
}