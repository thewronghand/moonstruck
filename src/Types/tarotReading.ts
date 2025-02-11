import { DrawnTarotCard } from './tarotCard';
import { SpreadType } from './spread';

// 공통 인터페이스
export interface BaseReading {
  id: string;
  cards: DrawnTarotCard[];
  interpretation: string;
  createdAt: string;
}

// 질문 타로 리딩
export interface QuestionReading {
  id?: string;
  question: string;
  cards: DrawnTarotCard[];
  interpretation: string;
  spreadType: SpreadType;
} 