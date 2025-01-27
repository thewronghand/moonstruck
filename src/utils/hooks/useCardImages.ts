import { useState, useEffect } from 'react';
import { DrawnTarotCard } from '../../Types/tarotCard';
import { getCardImageUrl } from '../getCardImageUrl';

interface UseCardImagesResult {
  cardImages: Map<number, string>;
  isLoading: boolean;
  isError: boolean;
}

export function useCardImages(
  cards: DrawnTarotCard[], 
  waitForLoad = false  // true면 이미지가 실제로 로드될 때까지 기다림
): UseCardImagesResult {
  const [cardImages, setCardImages] = useState<Map<number, string>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        // URL 가져오기
        const imagePromises = cards.map(async card => {
          const url = await getCardImageUrl(card.id);
          return [card.id, url] as const;
        });
        const loadedUrls = await Promise.all(imagePromises);
        setCardImages(new Map(loadedUrls));

        if (waitForLoad) {
          // 실제 이미지 로드 대기
          const imageElements = loadedUrls.map(([, url]) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = () => img.complete && img.naturalWidth > 0 ? resolve(url) : reject();
              img.onerror = reject;
              img.src = url;
            });
          });
          await Promise.all(imageElements);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load card images:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [cards, waitForLoad]);

  return { cardImages, isLoading, isError };
} 