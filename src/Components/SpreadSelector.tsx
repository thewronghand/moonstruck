interface SpreadSelectorProps {
  cardCount: number;
  onCardCountChange: (newCardCount: number) => void;
}

export default function SpreadSelector({
  cardCount,
  onCardCountChange,
}: SpreadSelectorProps) {
  const handleCardCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCardCountChange(Number(e.target.value));
  };

  return (
    <div>
      <label htmlFor="card-count">어떤 스프레드로 뽑아볼까요?</label>
      <select
        id="card-count"
        value={cardCount}
        onChange={handleCardCountChange}
      >
        <option value={1}>싱글</option>
        <option value={3}>트리플</option>
        <option value={5}>파이브 카드 크로스</option>
        <option value={10}>켈틱 크로스</option>
      </select>
    </div>
  );
}
