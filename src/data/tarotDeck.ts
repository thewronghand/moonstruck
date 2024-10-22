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
  {
    id: 3,
    name: {
      en: 'The Empress',
      ko: '여제',
    },
    arcanaType: 'Major',
    suit: null,
    number: 3,
    upright: {
      keywords: ['풍요', '창조력', '모성'],
      description:
        '여제는 풍요로움과 창조력을 상징하며, 모성적인 사랑과 배려를 나타냅니다.',
    },
    reversed: {
      keywords: ['소진', '불안정', '창의력 부족'],
      description:
        '역방향의 여제는 창의력의 고갈과 불안정한 감정 상태를 나타냅니다.',
    },
  },
  {
    id: 4,
    name: {
      en: 'The Emperor',
      ko: '황제',
    },
    arcanaType: 'Major',
    suit: null,
    number: 4,
    upright: {
      keywords: ['권위', '안정', '책임감'],
      description: '황제는 권위와 안정성을 상징하며, 강한 책임감을 나타냅니다.',
    },
    reversed: {
      keywords: ['독재', '불안정', '무책임'],
      description:
        '역방향의 황제는 독재적 성향과 불안정한 권력 남용을 경고합니다.',
    },
  },
  {
    id: 5,
    name: {
      en: 'The Hierophant',
      ko: '교황',
    },
    arcanaType: 'Major',
    suit: null,
    number: 5,
    upright: {
      keywords: ['전통', '지식', '가르침'],
      description:
        '교황은 전통과 지식을 상징하며, 지혜를 통해 가르침을 전하는 역할을 합니다.',
    },
    reversed: {
      keywords: ['권위 거부', '반항', '독단'],
      description:
        '역방향의 교황은 전통에 대한 거부감과 반항적인 태도를 나타냅니다.',
    },
  },
  {
    id: 6,
    name: {
      en: 'The Lovers',
      ko: '연인',
    },
    arcanaType: 'Major',
    suit: null,
    number: 6,
    upright: {
      keywords: ['사랑', '조화', '결정'],
      description:
        '연인은 사랑과 조화를 상징하며, 중요한 결정을 내리는 순간을 나타냅니다.',
    },
    reversed: {
      keywords: ['불화', '갈등', '잘못된 선택'],
      description:
        '역방향의 연인은 갈등과 불화를 경고하며, 잘못된 선택을 경계해야 함을 나타냅니다.',
    },
  },
  {
    id: 7,
    name: {
      en: 'The Chariot',
      ko: '전차',
    },
    arcanaType: 'Major',
    suit: null,
    number: 7,
    upright: {
      keywords: ['의지', '결단력', '승리'],
      description: '전차는 강한 의지와 결단력을 통해 승리하는 것을 상징합니다.',
    },
    reversed: {
      keywords: ['혼란', '실패', '자제력 부족'],
      description:
        '역방향의 전차는 혼란과 자제력 부족으로 인한 실패를 경고합니다.',
    },
  },
  {
    id: 8,
    name: {
      en: 'Strength',
      ko: '힘',
    },
    arcanaType: 'Major',
    suit: null,
    number: 8,
    upright: {
      keywords: ['용기', '인내', '내적 힘'],
      description: '힘 카드는 용기와 인내, 그리고 내면의 강인함을 상징합니다.',
    },
    reversed: {
      keywords: ['약함', '두려움', '자신감 부족'],
      description: '역방향의 힘 카드는 자신감 부족과 두려움을 경고합니다.',
    },
  },
  {
    id: 9,
    name: {
      en: 'The Hermit',
      ko: '은둔자',
    },
    arcanaType: 'Major',
    suit: null,
    number: 9,
    upright: {
      keywords: ['고독', '명상', '내면 탐구'],
      description:
        '은둔자는 고독 속에서 명상하며 내면을 탐구하는 것을 상징합니다.',
    },
    reversed: {
      keywords: ['외로움', '고립', '자기중심적'],
      description: '역방향의 은둔자는 고립과 자기중심적인 태도를 경고합니다.',
    },
  },
  {
    id: 10,
    name: {
      en: 'The Wheel of Fortune',
      ko: '운명의 수레바퀴',
    },
    arcanaType: 'Major',
    suit: null,
    number: 10,
    upright: {
      keywords: ['변화', '행운', '순환'],
      description:
        '운명의 수레바퀴는 변화와 행운, 그리고 삶의 순환을 상징합니다.',
    },
    reversed: {
      keywords: ['불운', '예기치 않은 변화', '저항'],
      description:
        '역방향의 운명의 수레바퀴는 불운과 예기치 않은 변화를 경고합니다.',
    },
  },
  {
    id: 11,
    name: {
      en: 'Justice',
      ko: '정의',
    },
    arcanaType: 'Major',
    suit: null,
    number: 11,
    upright: {
      keywords: ['공정', '균형', '진실'],
      description: '정의 카드는 공정함과 균형, 진실을 상징합니다.',
    },
    reversed: {
      keywords: ['불공정', '불균형', '불신'],
      description: '역방향의 정의 카드는 불공정함과 불균형을 경고합니다.',
    },
  },
  {
    id: 12,
    name: {
      en: 'The Hanged Man',
      ko: '매달린 사람',
    },
    arcanaType: 'Major',
    suit: null,
    number: 12,
    upright: {
      keywords: ['희생', '양보', '관점 변화'],
      description:
        '매달린 사람은 희생과 양보, 그리고 새로운 관점을 상징합니다.',
    },
    reversed: {
      keywords: ['고집', '정체', '변화 거부'],
      description:
        '역방향의 매달린 사람은 고집과 정체, 변화에 대한 거부를 나타냅니다.',
    },
  },
  {
    id: 13,
    name: {
      en: 'Death',
      ko: '죽음',
    },
    arcanaType: 'Major',
    suit: null,
    number: 13,
    upright: {
      keywords: ['종말', '변화', '재생'],
      description: '죽음 카드는 종말과 새로운 시작, 변화와 재생을 상징합니다.',
    },
    reversed: {
      keywords: ['저항', '두려움', '정체'],
      description:
        '역방향의 죽음 카드는 변화에 대한 저항과 두려움을 나타냅니다.',
    },
  },
  {
    id: 14,
    name: {
      en: 'Temperance',
      ko: '절제',
    },
    arcanaType: 'Major',
    suit: null,
    number: 14,
    upright: {
      keywords: ['조화', '인내', '균형'],
      description: '절제 카드는 조화와 인내, 균형을 상징합니다.',
    },
    reversed: {
      keywords: ['무절제', '혼란', '불균형'],
      description: '역방향의 절제는 무절제와 혼란, 불균형을 나타냅니다.',
    },
  },
  {
    id: 15,
    name: {
      en: 'The Devil',
      ko: '악마',
    },
    arcanaType: 'Major',
    suit: null,
    number: 15,
    upright: {
      keywords: ['유혹', '속박', '물질주의'],
      description: '악마 카드는 유혹과 속박, 물질적인 집착을 상징합니다.',
    },
    reversed: {
      keywords: ['해방', '자유', '집착의 종말'],
      description:
        '역방향의 악마는 속박에서 해방되고 자유를 찾는 것을 나타냅니다.',
    },
  },
  {
    id: 16,
    name: {
      en: 'The Tower',
      ko: '탑',
    },
    arcanaType: 'Major',
    suit: null,
    number: 16,
    upright: {
      keywords: ['혼란', '붕괴', '변화'],
      description: '탑 카드는 예기치 않은 변화와 붕괴를 상징합니다.',
    },
    reversed: {
      keywords: ['저항', '비극 회피', '불안'],
      description:
        '역방향의 탑은 변화에 대한 저항과 비극을 회피하려는 시도를 나타냅니다.',
    },
  },
  {
    id: 17,
    name: {
      en: 'The Star',
      ko: '별',
    },
    arcanaType: 'Major',
    suit: null,
    number: 17,
    upright: {
      keywords: ['희망', '영감', '치유'],
      description: '별 카드는 희망과 영감, 치유를 상징합니다.',
    },
    reversed: {
      keywords: ['절망', '실망', '무기력'],
      description: '역방향의 별은 절망과 실망, 무기력을 경고합니다.',
    },
  },
  {
    id: 18,
    name: {
      en: 'The Moon',
      ko: '달',
    },
    arcanaType: 'Major',
    suit: null,
    number: 18,
    upright: {
      keywords: ['환상', '직관', '불확실성'],
      description: '달 카드는 환상과 직관, 불확실성을 상징합니다.',
    },
    reversed: {
      keywords: ['혼란', '불안', '환멸'],
      description: '역방향의 달은 혼란과 불안, 환멸을 경고합니다.',
    },
  },
  {
    id: 19,
    name: {
      en: 'The Sun',
      ko: '태양',
    },
    arcanaType: 'Major',
    suit: null,
    number: 19,
    upright: {
      keywords: ['성공', '행복', '성취'],
      description: '태양 카드는 성공과 행복, 성취를 상징합니다.',
    },
    reversed: {
      keywords: ['좌절', '실패', '낙담'],
      description: '역방향의 태양은 좌절과 실패, 낙담을 경고합니다.',
    },
  },
  {
    id: 20,
    name: {
      en: 'Judgement',
      ko: '심판',
    },
    arcanaType: 'Major',
    suit: null,
    number: 20,
    upright: {
      keywords: ['부활', '결단', '명확성'],
      description: '심판 카드는 부활과 결단, 명확한 결정을 상징합니다.',
    },
    reversed: {
      keywords: ['후회', '미결정', '혼란'],
      description:
        '역방향의 심판은 후회와 결정을 내리지 못하는 혼란을 경고합니다.',
    },
  },
  {
    id: 21,
    name: {
      en: 'The World',
      ko: '세계',
    },
    arcanaType: 'Major',
    suit: null,
    number: 21,
    upright: {
      keywords: ['완성', '성취', '통합'],
      description: '세계 카드는 완성과 성취, 통합을 상징합니다.',
    },
    reversed: {
      keywords: ['미완성', '지연', '중단'],
      description: '역방향의 세계 카드는 미완성과 지연을 경고합니다.',
    },
  },
  {
    id: 22,
    name: {
      en: 'Ace of Cups',
      ko: '컵의 에이스',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 1,
    upright: {
      keywords: ['사랑', '감정', '새로운 시작'],
      description:
        '컵의 에이스는 사랑과 감정의 풍요로움을 상징하며, 새로운 시작을 나타냅니다.',
    },
    reversed: {
      keywords: ['감정 억제', '사랑의 실패', '실망'],
      description:
        '역방향의 컵의 에이스는 감정 억제와 사랑에서의 실패를 경고합니다.',
    },
  },
  {
    id: 23,
    name: {
      en: 'Two of Cups',
      ko: '컵의 2',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 2,
    upright: {
      keywords: ['파트너십', '조화', '연결'],
      description:
        '컵의 2는 파트너십과 조화를 상징하며, 두 사람 간의 강한 연결을 나타냅니다.',
    },
    reversed: {
      keywords: ['불일치', '이별', '갈등'],
      description: '역방향의 컵의 2는 불일치와 이별을 경고합니다.',
    },
  },
  {
    id: 24,
    name: {
      en: 'Three of Cups',
      ko: '컵의 3',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 3,
    upright: {
      keywords: ['축하', '우정', '모임'],
      description: '컵의 3는 축하와 우정을 상징하며, 즐거운 모임을 나타냅니다.',
    },
    reversed: {
      keywords: ['소외', '외로움', '사회적 갈등'],
      description: '역방향의 컵의 3는 소외와 외로움을 경고합니다.',
    },
  },
  {
    id: 25,
    name: {
      en: 'Four of Cups',
      ko: '컵의 4',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 4,
    upright: {
      keywords: ['명상', '재평가', '만족하지 않음'],
      description:
        '컵의 4는 명상과 재평가를 상징하며, 현재 상황에 만족하지 못하는 상태를 나타냅니다.',
    },
    reversed: {
      keywords: ['기회 포착', '새로운 통찰력', '무관심 해소'],
      description:
        '역방향의 컵의 4는 새로운 기회를 포착하고 무관심에서 벗어나는 것을 상징합니다.',
    },
  },
  {
    id: 26,
    name: {
      en: 'Five of Cups',
      ko: '컵의 5',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 5,
    upright: {
      keywords: ['후회', '슬픔', '손실'],
      description: '컵의 5는 후회와 슬픔, 손실을 상징합니다.',
    },
    reversed: {
      keywords: ['회복', '용서', '새로운 시작'],
      description: '역방향의 컵의 5는 회복과 용서, 새로운 시작을 나타냅니다.',
    },
  },
  {
    id: 27,
    name: {
      en: 'Six of Cups',
      ko: '컵의 6',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 6,
    upright: {
      keywords: ['추억', '순수', '과거 회상'],
      description:
        '컵의 6은 추억과 순수를 상징하며, 과거를 회상하는 것을 나타냅니다.',
    },
    reversed: {
      keywords: ['과거에 얽매임', '집착', '진행되지 않는 상태'],
      description:
        '역방향의 컵의 6은 과거에 얽매이고 발전이 없는 상태를 경고합니다.',
    },
  },
  {
    id: 28,
    name: {
      en: 'Seven of Cups',
      ko: '컵의 7',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 7,
    upright: {
      keywords: ['환상', '다양한 선택', '상상력'],
      description:
        '컵의 7은 환상과 선택의 다양성을 상징하며, 상상력을 자극합니다.',
    },
    reversed: {
      keywords: ['혼란 해소', '실질적 선택', '결정'],
      description:
        '역방향의 컵의 7은 혼란이 해소되고 실질적인 선택을 하는 것을 나타냅니다.',
    },
  },
  {
    id: 29,
    name: {
      en: 'Eight of Cups',
      ko: '컵의 8',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 8,
    upright: {
      keywords: ['떠남', '포기', '탐구'],
      description:
        '컵의 8은 현재 상황을 떠나고 새로운 탐구를 시작하는 것을 상징합니다.',
    },
    reversed: {
      keywords: ['머무름', '회피', '불확실성'],
      description:
        '역방향의 컵의 8은 떠나지 못하고 머무르며, 불확실성을 경고합니다.',
    },
  },
  {
    id: 30,
    name: {
      en: 'Nine of Cups',
      ko: '컵의 9',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 9,
    upright: {
      keywords: ['성취', '만족', '감정적 풍요'],
      description: '컵의 9는 성취와 만족, 감정적 풍요로움을 상징합니다.',
    },
    reversed: {
      keywords: ['자만', '과도한 만족', '공허함'],
      description: '역방향의 컵의 9는 과도한 자만과 공허함을 경고합니다.',
    },
  },
  {
    id: 31,
    name: {
      en: 'Ten of Cups',
      ko: '컵의 10',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 10,
    upright: {
      keywords: ['가족', '행복', '성취'],
      description: '컵의 10은 가족과 행복, 성취를 상징합니다.',
    },
    reversed: {
      keywords: ['불화', '분열', '행복의 부족'],
      description: '역방향의 컵의 10은 불화와 분열, 행복의 부족을 나타냅니다.',
    },
  },
  {
    id: 32,
    name: {
      en: 'Page of Cups',
      ko: '컵의 페이지',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 11,
    upright: {
      keywords: ['상상력', '직관', '새로운 감정'],
      description:
        '컵의 페이지는 상상력과 직관, 새로운 감정의 시작을 상징합니다.',
    },
    reversed: {
      keywords: ['감정적 미성숙', '혼란', '환상'],
      description: '역방향의 컵의 페이지는 감정적 미성숙과 혼란을 경고합니다.',
    },
  },
  {
    id: 33,
    name: {
      en: 'Knight of Cups',
      ko: '컵의 기사',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 12,
    upright: {
      keywords: ['로맨스', '제안', '모험'],
      description:
        '컵의 기사는 로맨스와 제안을 상징하며, 감정적 모험을 나타냅니다.',
    },
    reversed: {
      keywords: ['현실 도피', '실망', '불성실'],
      description: '역방향의 컵의 기사는 현실 도피와 실망을 경고합니다.',
    },
  },
  {
    id: 34,
    name: {
      en: 'Queen of Cups',
      ko: '컵의 여왕',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 13,
    upright: {
      keywords: ['감정적 안정', '직관', '돌봄'],
      description: '컵의 여왕은 감정적 안정과 돌봄, 직관을 상징합니다.',
    },
    reversed: {
      keywords: ['감정적 불안정', '과잉 감정', '의존'],
      description:
        '역방향의 컵의 여왕은 감정적 불안정과 과잉 감정을 경고합니다.',
    },
  },
  {
    id: 35,
    name: {
      en: 'King of Cups',
      ko: '컵의 왕',
    },
    arcanaType: 'Minor',
    suit: 'Cup',
    number: 14,
    upright: {
      keywords: ['감정의 균형', '지혜', '동정심'],
      description: '컵의 왕은 감정의 균형과 지혜, 동정심을 상징합니다.',
    },
    reversed: {
      keywords: ['감정적 억압', '냉소', '비합리적'],
      description:
        '역방향의 컵의 왕은 감정적 억압과 비합리적 판단을 경고합니다.',
    },
  },
  {
    id: 36,
    name: {
      en: 'Ace of Pentacles',
      ko: '펜타클의 에이스',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 1,
    upright: {
      keywords: ['물질적 시작', '기회', '번영'],
      description: '펜타클의 에이스는 물질적 번영과 기회를 상징합니다.',
    },
    reversed: {
      keywords: ['기회의 상실', '재정적 불안', '낭비'],
      description:
        '역방향의 펜타클의 에이스는 기회의 상실과 재정적 불안을 경고합니다.',
    },
  },
  {
    id: 37,
    name: {
      en: 'Two of Pentacles',
      ko: '펜타클의 2',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 2,
    upright: {
      keywords: ['균형', '적응', '다양한 선택'],
      description: '펜타클의 2는 균형과 적응, 다양한 선택을 상징합니다.',
    },
    reversed: {
      keywords: ['혼란', '균형 상실', '스트레스'],
      description: '역방향의 펜타클의 2는 혼란과 균형 상실을 경고합니다.',
    },
  },
  {
    id: 38,
    name: {
      en: 'Three of Pentacles',
      ko: '펜타클의 3',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 3,
    upright: {
      keywords: ['팀워크', '기술', '성장'],
      description: '펜타클의 3은 팀워크와 기술, 성장을 상징합니다.',
    },
    reversed: {
      keywords: ['협력 부족', '성장의 지연', '비생산적'],
      description:
        '역방향의 펜타클의 3은 협력 부족과 성장의 지연을 경고합니다.',
    },
  },
  {
    id: 39,
    name: {
      en: 'Four of Pentacles',
      ko: '펜타클의 4',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 4,
    upright: {
      keywords: ['안정성', '통제', '보호'],
      description: '펜타클의 4는 안정성과 통제, 보호를 상징합니다.',
    },
    reversed: {
      keywords: ['인색함', '통제 상실', '재정적 위험'],
      description: '역방향의 펜타클의 4는 인색함과 통제 상실을 경고합니다.',
    },
  },
  {
    id: 40,
    name: {
      en: 'Five of Pentacles',
      ko: '펜타클의 5',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 5,
    upright: {
      keywords: ['빈곤', '고난', '도전'],
      description: '펜타클의 5는 빈곤과 고난, 도전을 상징합니다.',
    },
    reversed: {
      keywords: ['회복', '재정적 회복', '희망'],
      description: '역방향의 펜타클의 5는 재정적 회복과 희망을 상징합니다.',
    },
  },
  {
    id: 41,
    name: {
      en: 'Six of Pentacles',
      ko: '펜타클의 6',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 6,
    upright: {
      keywords: ['관대함', '나눔', '지원'],
      description: '펜타클의 6은 관대함과 나눔, 지원을 상징합니다.',
    },
    reversed: {
      keywords: ['이기심', '불평등', '부족'],
      description: '역방향의 펜타클의 6은 이기심과 불평등을 경고합니다.',
    },
  },
  {
    id: 42,
    name: {
      en: 'Seven of Pentacles',
      ko: '펜타클의 7',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 7,
    upright: {
      keywords: ['인내', '성장', '기대'],
      description: '펜타클의 7은 인내와 성장을 통해 기대하는 것을 상징합니다.',
    },
    reversed: {
      keywords: ['좌절', '결실 없음', '낭비'],
      description: '역방향의 펜타클의 7은 좌절과 결실 없음, 낭비를 경고합니다.',
    },
  },
  {
    id: 43,
    name: {
      en: 'Eight of Pentacles',
      ko: '펜타클의 8',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 8,
    upright: {
      keywords: ['노력', '숙련', '헌신'],
      description: '펜타클의 8은 노력과 숙련, 헌신을 통해 성취를 상징합니다.',
    },
    reversed: {
      keywords: ['태만', '불성실', '기술 부족'],
      description:
        '역방향의 펜타클의 8은 태만과 불성실, 기술 부족을 경고합니다.',
    },
  },
  {
    id: 44,
    name: {
      en: 'Nine of Pentacles',
      ko: '펜타클의 9',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 9,
    upright: {
      keywords: ['독립', '성공', '물질적 풍요'],
      description: '펜타클의 9은 독립과 성공, 물질적 풍요를 상징합니다.',
    },
    reversed: {
      keywords: ['자신감 부족', '불안', '부족'],
      description: '역방향의 펜타클의 9은 자신감 부족과 불안을 경고합니다.',
    },
  },
  {
    id: 45,
    name: {
      en: 'Ten of Pentacles',
      ko: '펜타클의 10',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 10,
    upright: {
      keywords: ['유산', '안정', '가족 번영'],
      description: '펜타클의 10은 유산과 안정, 가족 번영을 상징합니다.',
    },
    reversed: {
      keywords: ['재정적 문제', '불안정', '가족 갈등'],
      description:
        '역방향의 펜타클의 10은 재정적 문제와 가족 갈등을 경고합니다.',
    },
  },
  {
    id: 46,
    name: {
      en: 'Page of Pentacles',
      ko: '펜타클의 페이지',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 11,
    upright: {
      keywords: ['학습', '기회', '잠재력'],
      description: '펜타클의 페이지는 학습과 기회, 잠재력을 상징합니다.',
    },
    reversed: {
      keywords: ['게으름', '집중력 부족', '잠재력 발휘 실패'],
      description:
        '역방향의 펜타클의 페이지는 게으름과 집중력 부족을 경고합니다.',
    },
  },
  {
    id: 47,
    name: {
      en: 'Knight of Pentacles',
      ko: '펜타클의 기사',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 12,
    upright: {
      keywords: ['헌신', '꾸준함', '책임감'],
      description: '펜타클의 기사는 헌신과 꾸준함, 책임감을 상징합니다.',
    },
    reversed: {
      keywords: ['지루함', '게으름', '비효율'],
      description: '역방향의 펜타클의 기사는 게으름과 비효율을 경고합니다.',
    },
  },
  {
    id: 48,
    name: {
      en: 'Queen of Pentacles',
      ko: '펜타클의 여왕',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 13,
    upright: {
      keywords: ['실용성', '풍요', '돌봄'],
      description: '펜타클의 여왕은 실용성과 물질적 풍요, 돌봄을 상징합니다.',
    },
    reversed: {
      keywords: ['물질적 집착', '관리 실패', '불안'],
      description:
        '역방향의 펜타클의 여왕은 물질적 집착과 관리 실패를 경고합니다.',
    },
  },
  {
    id: 49,
    name: {
      en: 'King of Pentacles',
      ko: '펜타클의 왕',
    },
    arcanaType: 'Minor',
    suit: 'Pentacle',
    number: 14,
    upright: {
      keywords: ['성공', '안정', '풍요'],
      description: '펜타클의 왕은 성공과 안정, 물질적 풍요를 상징합니다.',
    },
    reversed: {
      keywords: ['물질주의', '독단', '과시'],
      description: '역방향의 펜타클의 왕은 물질주의와 독단, 과시를 경고합니다.',
    },
  },
  {
    id: 50,
    name: {
      en: 'Ace of Swords',
      ko: '검의 에이스',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 1,
    upright: {
      keywords: ['명확성', '결단력', '진실'],
      description: '검의 에이스는 명확성과 결단력, 진실을 상징합니다.',
    },
    reversed: {
      keywords: ['혼란', '결단력 부족', '거짓'],
      description: '역방향의 검의 에이스는 혼란과 결단력 부족을 경고합니다.',
    },
  },
  {
    id: 51,
    name: {
      en: 'Two of Swords',
      ko: '검의 2',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 2,
    upright: {
      keywords: ['결정', '균형', '선택'],
      description: '검의 2는 결정을 내리는 균형과 선택을 상징합니다.',
    },
    reversed: {
      keywords: ['결정 회피', '갈등', '혼란'],
      description: '역방향의 검의 2는 결정을 회피하고 갈등을 나타냅니다.',
    },
  },
  {
    id: 52,
    name: {
      en: 'Three of Swords',
      ko: '검의 3',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 3,
    upright: {
      keywords: ['슬픔', '상처', '이별'],
      description: '검의 3은 슬픔과 상처, 이별을 상징합니다.',
    },
    reversed: {
      keywords: ['치유', '용서', '감정 회복'],
      description: '역방향의 검의 3은 치유와 용서, 감정의 회복을 상징합니다.',
    },
  },
  {
    id: 53,
    name: {
      en: 'Four of Swords',
      ko: '검의 4',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 4,
    upright: {
      keywords: ['휴식', '명상', '회복'],
      description: '검의 4는 휴식과 명상, 회복을 상징합니다.',
    },
    reversed: {
      keywords: ['불안', '스트레스', '재충전 필요'],
      description:
        '역방향의 검의 4는 불안과 스트레스, 재충전의 필요성을 경고합니다.',
    },
  },
  {
    id: 54,
    name: {
      en: 'Five of Swords',
      ko: '검의 5',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 5,
    upright: {
      keywords: ['갈등', '패배', '자존심 상실'],
      description: '검의 5는 갈등과 패배, 자존심 상실을 상징합니다.',
    },
    reversed: {
      keywords: ['화해', '평화', '갈등 해결'],
      description: '역방향의 검의 5는 화해와 갈등 해결을 상징합니다.',
    },
  },
  {
    id: 55,
    name: {
      en: 'Six of Swords',
      ko: '검의 6',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 6,
    upright: {
      keywords: ['전환', '이동', '회복'],
      description: '검의 6은 전환과 이동, 회복을 상징합니다.',
    },
    reversed: {
      keywords: ['정체', '변화의 저항', '좌절'],
      description: '역방향의 검의 6은 정체와 변화에 대한 저항을 경고합니다.',
    },
  },
  {
    id: 56,
    name: {
      en: 'Seven of Swords',
      ko: '검의 7',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 7,
    upright: {
      keywords: ['속임수', '전략', '독립성'],
      description: '검의 7은 속임수와 전략, 독립성을 상징합니다.',
    },
    reversed: {
      keywords: ['폭로', '후회', '실패'],
      description: '역방향의 검의 7은 속임수가 폭로되거나 후회를 경고합니다.',
    },
  },
  {
    id: 57,
    name: {
      en: 'Eight of Swords',
      ko: '검의 8',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 8,
    upright: {
      keywords: ['제약', '제한', '무력감'],
      description: '검의 8은 제약과 제한, 무력감을 상징합니다.',
    },
    reversed: {
      keywords: ['자유', '해방', '제한에서 벗어남'],
      description:
        '역방향의 검의 8은 제약에서 벗어나 자유를 찾는 것을 나타냅니다.',
    },
  },
  {
    id: 58,
    name: {
      en: 'Nine of Swords',
      ko: '검의 9',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 9,
    upright: {
      keywords: ['불안', '두려움', '고민'],
      description: '검의 9는 불안과 두려움, 고민을 상징합니다.',
    },
    reversed: {
      keywords: ['불안 해소', '희망의 회복', '치유'],
      description:
        '역방향의 검의 9는 불안이 해소되고 희망이 회복되는 것을 상징합니다.',
    },
  },
  {
    id: 59,
    name: {
      en: 'Ten of Swords',
      ko: '검의 10',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 10,
    upright: {
      keywords: ['배신', '끝', '비극'],
      description: '검의 10은 배신과 끝, 비극을 상징합니다.',
    },
    reversed: {
      keywords: ['회복', '새로운 시작', '희망'],
      description: '역방향의 검의 10은 회복과 새로운 시작, 희망을 나타냅니다.',
    },
  },
  {
    id: 60,
    name: {
      en: 'Page of Swords',
      ko: '검의 페이지',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 11,
    upright: {
      keywords: ['호기심', '정보 탐색', '솔직함'],
      description: '검의 페이지는 호기심과 정보 탐색, 솔직함을 상징합니다.',
    },
    reversed: {
      keywords: ['소문', '불확실성', '충동적 행동'],
      description:
        '역방향의 검의 페이지는 소문과 불확실성, 충동적 행동을 경고합니다.',
    },
  },
  {
    id: 61,
    name: {
      en: 'Knight of Swords',
      ko: '소드의 기사',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 12,
    upright: {
      keywords: ['결단력', '행동력', '신속'],
      description: '소드의 기사는 결단력과 행동력, 신속한 결정을 상징합니다.',
    },
    reversed: {
      keywords: ['충동', '무모함', '실패'],
      description: '소드의 기사 역방향은 충동적이고 무모한 결정을 경고합니다.',
    },
  },
  {
    id: 62,
    name: {
      en: 'Queen of Swords',
      ko: '소드의 여왕',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 13,
    upright: {
      keywords: ['지혜', '객관성', '명료함'],
      description: '소드의 여왕은 지혜와 객관성, 명료함을 상징합니다.',
    },
    reversed: {
      keywords: ['냉정함', '고립', '과도한 비판'],
      description: '소드의 여왕 역방향은 과도한 비판과 냉정함을 경고합니다.',
    },
  },
  {
    id: 63,
    name: {
      en: 'King of Swords',
      ko: '소드의 왕',
    },
    arcanaType: 'Minor',
    suit: 'Sword',
    number: 14,
    upright: {
      keywords: ['리더십', '논리', '진실'],
      description: '소드의 왕은 리더십과 논리, 진실을 상징합니다.',
    },
    reversed: {
      keywords: ['독재', '비합리성', '불공정'],
      description: '소드의 왕 역방향은 독재적 성향과 불공정을 경고합니다.',
    },
  },
  {
    id: 64,
    name: {
      en: 'Ace of Wands',
      ko: '완드의 에이스',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 1,
    upright: {
      keywords: ['창조력', '열정', '새로운 시작'],
      description: '완드의 에이스는 창조력과 열정, 새로운 시작을 상징합니다.',
    },
    reversed: {
      keywords: ['방해', '지연', '동기 부족'],
      description: '완드의 에이스 역방향은 방해와 동기 부족을 경고합니다.',
    },
  },
  {
    id: 65,
    name: {
      en: 'Two of Wands',
      ko: '완드의 2',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 2,
    upright: {
      keywords: ['계획', '결정', '미래지향'],
      description: '완드의 2는 계획과 결정, 미래를 향한 준비를 상징합니다.',
    },
    reversed: {
      keywords: ['불확실성', '결정 회피', '장애'],
      description: '완드의 2 역방향은 불확실성과 결정 회피를 경고합니다.',
    },
  },
  {
    id: 66,
    name: {
      en: 'Three of Wands',
      ko: '완드의 3',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 3,
    upright: {
      keywords: ['확장', '성장', '기회'],
      description: '완드의 3은 확장과 성장, 기회를 상징합니다.',
    },
    reversed: {
      keywords: ['실패', '지연', '좌절'],
      description: '완드의 3 역방향은 실패와 좌절을 경고합니다.',
    },
  },
  {
    id: 67,
    name: {
      en: 'Four of Wands',
      ko: '완드의 4',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 4,
    upright: {
      keywords: ['축하', '성취', '안정'],
      description: '완드의 4는 축하와 성취, 안정된 상태를 상징합니다.',
    },
    reversed: {
      keywords: ['불안정', '불만족', '조화 부족'],
      description: '완드의 4 역방향은 불안정과 조화 부족을 경고합니다.',
    },
  },
  {
    id: 68,
    name: {
      en: 'Five of Wands',
      ko: '완드의 5',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 5,
    upright: {
      keywords: ['갈등', '경쟁', '도전'],
      description: '완드의 5는 갈등과 경쟁, 도전을 상징합니다.',
    },
    reversed: {
      keywords: ['갈등 해결', '협력', '화합'],
      description: '완드의 5 역방향은 갈등 해결과 협력을 나타냅니다.',
    },
  },
  {
    id: 69,
    name: {
      en: 'Six of Wands',
      ko: '완드의 6',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 6,
    upright: {
      keywords: ['승리', '인정', '성공'],
      description: '완드의 6은 승리와 인정, 성공을 상징합니다.',
    },
    reversed: {
      keywords: ['실패', '비판', '인정 부족'],
      description: '완드의 6 역방향은 실패와 비판을 경고합니다.',
    },
  },
  {
    id: 70,
    name: {
      en: 'Seven of Wands',
      ko: '완드의 7',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 7,
    upright: {
      keywords: ['도전', '방어', '경쟁'],
      description: '완드의 7은 도전과 방어, 경쟁을 상징합니다.',
    },
    reversed: {
      keywords: ['좌절', '포기', '약함'],
      description: '완드의 7 역방향은 좌절과 포기를 경고합니다.',
    },
  },
  {
    id: 71,
    name: {
      en: 'Eight of Wands',
      ko: '완드의 8',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 8,
    upright: {
      keywords: ['속도', '진행', '변화'],
      description: '완드의 8은 속도감 있는 진행과 변화를 상징합니다.',
    },
    reversed: {
      keywords: ['지연', '방해', '혼란'],
      description: '완드의 8 역방향은 지연과 방해를 경고합니다.',
    },
  },
  {
    id: 72,
    name: {
      en: 'Nine of Wands',
      ko: '완드의 9',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 9,
    upright: {
      keywords: ['끈기', '인내', '방어'],
      description: '완드의 9는 끈기와 인내, 방어를 상징합니다.',
    },
    reversed: {
      keywords: ['포기', '좌절', '지침'],
      description: '완드의 9 역방향은 포기와 좌절, 지침을 경고합니다.',
    },
  },
  {
    id: 73,
    name: {
      en: 'Ten of Wands',
      ko: '완드의 10',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 10,
    upright: {
      keywords: ['책임', '부담', '압박'],
      description: '완드의 10은 책임감과 부담을 상징합니다.',
    },
    reversed: {
      keywords: ['무거운 짐', '스트레스', '해방'],
      description:
        '완드의 10 역방향은 무거운 짐과 스트레스에서 해방됨을 나타냅니다.',
    },
  },
  {
    id: 74,
    name: {
      en: 'Page of Wands',
      ko: '완드의 견습생',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 11,
    upright: {
      keywords: ['열정', '탐구', '모험'],
      description: '완드의 견습생은 열정과 탐구, 모험을 상징합니다.',
    },
    reversed: {
      keywords: ['혼란', '지연', '목표 상실'],
      description: '완드의 견습생 역방향은 혼란과 목표 상실을 경고합니다.',
    },
  },
  {
    id: 75,
    name: {
      en: 'Knight of Wands',
      ko: '완드의 기사',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 12,
    upright: {
      keywords: ['열정', '행동력', '용기'],
      description: '완드의 기사는 열정과 행동력, 용기를 상징합니다.',
    },
    reversed: {
      keywords: ['무모함', '충동', '불안정'],
      description: '완드의 기사 역방향은 무모함과 충동적인 행동을 경고합니다.',
    },
  },
  {
    id: 76,
    name: {
      en: 'Queen of Wands',
      ko: '완드의 여왕',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 13,
    upright: {
      keywords: ['자신감', '독립', '카리스마'],
      description: '완드의 여왕은 자신감과 독립성, 카리스마를 상징합니다.',
    },
    reversed: {
      keywords: ['불안정', '자기중심적', '질투'],
      description: '완드의 여왕 역방향은 자기중심적 태도와 질투를 경고합니다.',
    },
  },
  {
    id: 77,
    name: {
      en: 'King of Wands',
      ko: '완드의 왕',
    },
    arcanaType: 'Minor',
    suit: 'Wand',
    number: 14,
    upright: {
      keywords: ['리더십', '비전', '창의력'],
      description: '완드의 왕은 리더십과 비전, 창의력을 상징합니다.',
    },
    reversed: {
      keywords: ['오만', '독단', '불안정'],
      description: '완드의 왕 역방향은 오만과 독단을 경고합니다.',
    },
  },
];
