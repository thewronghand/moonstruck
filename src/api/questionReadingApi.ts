import { QuestionReading } from '../Types/tarotReading';
import { SpreadType } from '../Types/spread';
import { DrawnTarotCard } from '../Types/tarotCard';

interface SaveQuestionReadingParams {
  question: string;
  cards: DrawnTarotCard[];
  interpretation: {
    content: string;
    title: string;
    model: string;
  };
  spreadType: SpreadType;
}

export async function saveQuestionReading(params: SaveQuestionReadingParams): Promise<string> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/question-reading/save`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '타로 리딩 저장에 실패했습니다.');
    }

    const { readingId } = await response.json();
    return readingId;
  } catch (error) {
    console.error('Save Reading Error:', error);
    throw error;
  }
}

export async function getQuestionReading(readingId: string): Promise<QuestionReading> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/question-reading/get/${readingId}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '타로 리딩을 불러오는데 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    console.error('Get Reading Error:', error);
    throw error;
  }
} 