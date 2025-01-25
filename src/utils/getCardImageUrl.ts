import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';

export async function getCardImageUrl(cardId: number | 'back'): Promise<string> {
  const maxRetries = 3;
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const imageRef = ref(storage, `deck/default/${cardId}.webp`);
      return await getDownloadURL(imageRef);
    } catch (error) {   
      console.error(`Attempt ${i + 1} failed for card ${cardId}:`, error);
      lastError = error;
      // 재시도 전 잠시 대기
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  throw lastError;
}