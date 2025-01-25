import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';

export async function getCardImageUrl(cardId: number | 'back'): Promise<string> {
  try {
    const imageRef = ref(storage, `deck/default/${cardId}.webp`);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.error('Error getting card image:', error);
    throw error;
  }
}