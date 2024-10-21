import { TarotCard } from '../Types/types';

export const tarotDeck: TarotCard[] = [
  {
    id: 0,
    name: {
      en: 'The Fool',
      ko: '바보',
    },
    arcanaType: 'Major',
    suit: null,
    number: 0,
    upright: {
      keywords: ['새로운 시작', '자유', '모험'],
      description: '바보는 모험과 새로운 시작을 상징합니다.',
    },
    reversed: {
      keywords: ['무모함', '혼란', '위험'],
      description: '역방향의 바보는 무모한 결정과 혼란을 경고합니다.',
    },
  },
  {
    id: 1,
    name: {
      en: 'The Magician',
      ko: '마법사',
    },
    arcanaType: 'Major',
    suit: null,
    number: 1,
    upright: {
      keywords: ['능력', '창조력', '기회'],
      description:
        '마법사는 자신의 재능을 활용하여 기회를 창조하는 능력을 상징합니다.',
    },
    reversed: {
      keywords: ['속임수', '실패', '자만심'],
      description: '역방향의 마법사는 자만심과 실패를 경고합니다.',
    },
  },
  {
    id: 2,
    name: {
      en: 'The High Priestess',
      ko: '여사제',
    },
    arcanaType: 'Major',
    suit: null,
    number: 2,
    upright: {
      keywords: ['직관', '비밀', '내면'],
      description: '여사제는 직관과 내면의 지혜를 상징합니다.',
    },
    reversed: {
      keywords: ['착각', '억압', '불안'],
      description: '역방향의 여사제는 내면의 혼란을 경고합니다.',
    },
  },
  // 나머지 카드들 추가...
];
