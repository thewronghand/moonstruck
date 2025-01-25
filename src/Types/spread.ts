export type SpreadType = 
  | 'SINGLE' 
  | 'TRIPLE_TIMELINE'
  | 'TRIPLE_CHOICE'
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
    label: "과거-현재-미래",
    cardCount: 3,
    description: "세 장의 카드로 시간의 흐름에 따른 상황을 살펴보는 스프레드입니다."
  },
  {
    value: 'TRIPLE_CHOICE',
    label: "양자택일",
    cardCount: 3,
    description: "세 장의 카드로 선택의 기로에서 각 선택지의 결과를 살펴보는 스프레드입니다."
  },
  {
    value: 'FIVE_CARD_CROSS',
    label: "파이브 카드 크로스",
    cardCount: 5,
    description: "다섯 장의 카드로 현재 상황을 입체적으로 분석합니다."
  },
  {
    value: 'CELTIC_CROSS',
    label: "켈틱 크로스",
    cardCount: 10,
    description: "가장 상세한 해석을 제공하는 전통적인 스프레드로, 질문자의 상황을 다각도로 살펴봅니다."
  }
]; 