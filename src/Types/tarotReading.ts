import { DrawnTarotCard } from './tarotCard';
import { SpreadType } from './spread';

// 해석 타입 정의
export type Interpretation = string | {
  content: string;
  title: string;
  model: string;
};

// 공통 인터페이스
export interface BaseReading {
  id: string;
  cards: DrawnTarotCard[];
  interpretation: Interpretation;
  createdAt: string;
}

// 질문 타로 리딩
export interface QuestionReading {
  id?: string;
  question: string;
  cards: DrawnTarotCard[];
  interpretation: Interpretation;
  spreadType: SpreadType;
} 