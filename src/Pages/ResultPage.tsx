import { useLocation } from 'react-router-dom';
import { DrawnTarotCard } from '../Types/tarotCard';

export default function ResultPage() {
  const location = useLocation();
  const { apiResponse, drawnCards } = location.state || {};

  if (!apiResponse || !drawnCards) {
    return <p>잘못된 접근입니다.</p>;
  }

  return (
    <div>
      <h2>타로 리딩 결과</h2>
      <div>
        <h3>API 응답 결과</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{apiResponse}</p>
      </div>
      <div>
        <h3>뽑힌 카드</h3>
        <ul>
          {drawnCards.map((card: DrawnTarotCard, index: number) => (
            <li key={index}>
              <h4>
                {card.name.en} ({card.name.ko})
              </h4>
              <p>
                {card.direction}: {card.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
