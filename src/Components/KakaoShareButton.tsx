import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { KakaoButton } from './styles/KakaoShareButton.styles';

interface KakaoShareButtonProps {
  title: string;
  readingId: string;
}

export default function KakaoShareButton({ title, readingId }: KakaoShareButtonProps) {
  const handleShare = () => {
    if (window.Kakao) {
      const shareUrl = `${window.location.origin}/share/${readingId}`;
      const imageUrl = `${window.location.origin}/og-image-beta-x2font.png`;
      
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title || '타로 해석 결과',
          description: '나의 타로점 결과를 공유해요!',
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: '살짝 훔쳐보기',
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <KakaoButton onClick={handleShare}>
      <FontAwesomeIcon icon={faComment} />
      카카오톡 공유하기
    </KakaoButton>
  );
}