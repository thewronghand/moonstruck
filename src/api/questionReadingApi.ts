import { DrawnTarotCard } from "../Types/tarotCard";

export async function saveQuestionReading(data: {
  question: string;
  cards: DrawnTarotCard[];
  interpretation: string;
}) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/question-reading/save`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    );

    if (!response.ok) {
      throw new Error('Failed to save reading');
    }

    const { readingId } = await response.json();
    return readingId;
  } catch (error) {
    console.error('Save Reading Error:', error);
    throw error;
  }
}

export async function getQuestionReading(readingId: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/question-reading/get/${readingId}`
    );

    if (!response.ok) {
      throw new Error('Reading not found');
    }

    return response.json();
  } catch (error) {
    console.error('Get Reading Error:', error);
    throw error;
  }
} 