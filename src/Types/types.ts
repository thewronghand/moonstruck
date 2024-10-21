export interface TarotCard {
  id: number;
  name: {
    en: string;
    ko: string;
  };
  arcanaType: 'Major' | 'Minor';
  suit: 'Cup' | 'Pentacle' | 'Sword' | 'Wand' | null;
  number: number;
  upright: {
    keywords: string[];
    description: string;
  };
  reversed: {
    keywords: string[];
    description: string;
  };
}
