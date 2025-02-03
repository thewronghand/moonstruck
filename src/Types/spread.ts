import { DrawnTarotCard } from "./tarotCard";

export type SpreadType = 
  | 'SINGLE' 
  | 'TRIPLE_CHOICE' 
  | 'TRIPLE_TIMELINE' 
  | 'FIVE_CARD_CROSS' 
  | 'CELTIC_CROSS';

export interface SpreadOption {
  value: SpreadType;
  label: string;
  description: string;
  cardCount: number;
}

export const spreadOptions: SpreadOption[] = [
  {
    value: 'SINGLE',
    label: "싱글",
    cardCount: 1,
    description: "하나의 카드로 간단한 질문에 대한 답을 얻을 수 있는 기본적인 스프레드입니다."
  },
  {
    value: 'TRIPLE_TIMELINE',
    label: "트리플-타임라인",
    cardCount: 3,
    description: "세 장의 카드로 시간의 흐름에 따른 상황을 살펴보는 스프레드"
  },
  {
    value: 'TRIPLE_CHOICE',
    label: "트리플-양자택일",
    cardCount: 3,
    description: "세 장의 카드로 선택의 기로에서 각 선택지의 결과를 살펴보는 스프레드"
  },
  {
    value: 'FIVE_CARD_CROSS',
    label: "파이브 카드 크로스",
    cardCount: 5,
    description: "다섯 장의 카드로 현재 상황을 입체적으로 분석하는 스프레드"
  },
  {
    value: 'CELTIC_CROSS',
    label: "켈틱 크로스",
    cardCount: 10,
    description: "10장의 카드로 질문자의 상황을 다각적으로 살펴보는 스프레드"
  }
];

export interface SpreadProps {
  cards: DrawnTarotCard[];
  cardImages: Map<number, string>;
  revealed?: boolean;
  onReveal?: () => void;
  visibleCardCount?: number;
}

export interface TripleSpreadProps extends SpreadProps {
  spreadType: 'TRIPLE_TIMELINE' | 'TRIPLE_CHOICE';
}

export interface SpreadInfo {
  type: SpreadType;
  name: string;
  description: string;
  positions: string[];  // 각 카드 포지션의 의미
}

export const SPREAD_INFO: Record<SpreadType, SpreadInfo> = {
  SINGLE: {
    type: 'SINGLE',
    name: '단일 카드 스프레드',
    description: '현재 상황에 대한 즉각적인 통찰을 제공합니다.',
    positions: ['첫 번째 카드 (현재 상황에 대한 조언)']
  },
  TRIPLE_CHOICE: {
    type: 'TRIPLE_CHOICE',
    name: '삼자택일 스프레드',
    description: '선택의 갈림길에서 각 선택지의 결과를 보여줍니다.',
    positions: [
      '첫 번째 카드 (현재 상황)',
      '두 번째 카드 (첫 번째 선택지의 결과)',
      '세 번째 카드 (두 번째 선택지의 결과)'
    ]
  },
  TRIPLE_TIMELINE: {
    type: 'TRIPLE_TIMELINE',
    name: '과거-현재-미래 스프레드',
    description: '시간의 흐름 속에서 상황을 조망합니다.',
    positions: [
      '첫 번째 카드 (과거의 영향)', 
      '두 번째 카드 (현재의 상황)', 
      '세 번째 카드 (미래의 가능성)'
    ]
  },
  FIVE_CARD_CROSS: {
    type: 'FIVE_CARD_CROSS',
    name: '5장 십자가 스프레드',
    description: '현재 상황을 다각도로 분석합니다.',
    positions: [
      '첫 번째 카드 (현재의 상황)',
      '두 번째 카드 (당면한 과제)',
      '세 번째 카드 (잠재된 가능성)',
      '네 번째 카드 (과거의 영향)',
      '다섯 번째 카드 (가까운 미래)'
    ]
  },
  CELTIC_CROSS: {
    type: 'CELTIC_CROSS',
    name: '켈틱 크로스 스프레드',
    description: '상황을 가장 심도있게 분석하는 전통적인 스프레드입니다.',
    positions: [
      '첫 번째 카드 (현재의 상황)',
      '두 번째 카드 (당면한 과제)',
      '세 번째 카드 (잠재적 가능성)',
      '네 번째 카드 (과거의 기반)',
      '다섯 번째 카드 (최근의 과거)',
      '여섯 번째 카드 (가까운 미래)',
      '일곱 번째 카드 (질문자의 태도)',
      '여덟 번째 카드 (주변 환경)',
      '아홉 번째 카드 (희망과 두려움)',
      '열 번째 카드 (최종 결과)'
    ]
  }
}; 