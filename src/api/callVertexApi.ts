import type { DrawnTarotCard } from '../Types/tarotCard';
import type { SpreadType } from '../Types/spread';

interface TarotReadingRequest {
  userInput: string;
  cards: DrawnTarotCard[];
  spreadType: SpreadType;
}

export async function callVertexAPI({ userInput, cards, spreadType }: TarotReadingRequest) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/vertex-claude`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput, cards, spreadType })
      }
    );

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return response.json();
  } catch (error) {
    console.error('Vertex API Error:', error);
    throw error;
  }
}