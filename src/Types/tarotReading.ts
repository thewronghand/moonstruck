import { DrawnTarotCard } from './tarotCard';

// 공통 인터페이스
export interface BaseReading {
  id: string;
  cards: DrawnTarotCard[];
  interpretation: string;
  createdAt: string;
}

// 질문 타로 리딩
export interface QuestionReading extends BaseReading {
  question: string;
} 