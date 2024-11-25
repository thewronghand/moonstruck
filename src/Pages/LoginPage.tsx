import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithCustomToken } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authAtom';

interface AuthResponse {
  token: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  };
  user: {
    id: number;
    connected_at: string;
  };
  firebaseToken: string;
}

export default function LoginPage() {
  const { platform } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const processLogin = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (!code || !platform) {
          throw new Error(
            !code
              ? '인가 코드를 찾을 수 없습니다.'
              : '플랫폼 정보를 찾을 수 없습니다.'
          );
        }

        // 현재 파이어베이스 인증 상태 확인
        const currentUser = auth.currentUser;
        if (currentUser) {
          // 이미 로그인되어 있다면 메인 페이지로 리다이렉트
          console.log('이미 로그인되어 있습니다.');
          navigate('/');
          return;
        }

        const redirectUri = `${window.location.origin}/login/${platform}`;
        const response = await fetch(
          `${
            import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL
          }/api/auth/${platform}?code=${code}&redirectUri=${encodeURIComponent(
            redirectUri
          )}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.text();
          // 이미 사용된 인증 코드인 경우 무시
          if (errorData.includes('authorization code not found')) {
            console.log(
              '이미 사용된 인증 코드입니다. 메인 페이지로 이동합니다.'
            );
            navigate('/');
            return;
          }
          throw new Error(errorData);
        }

        const data: AuthResponse = await response.json();

        // Firebase 인증
        await signInWithCustomToken(auth, data.firebaseToken);

        // Recoil 상태 업데이트
        setUser({
          uid: `kakao:${data.user.id}`,
        });

        // 메인 페이지로 리다이렉트
        navigate('/');
      } catch (err) {
        console.error('Login error:', err);
        if (auth.currentUser) {
          // 에러가 발생했지만 이미 로그인된 상태라면 메인 페이지로 이동
          navigate('/');
        } else {
          setError(
            err instanceof Error
              ? err.message
              : '로그인 처리 중 오류가 발생했습니다.'
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    processLogin();
  }, [platform, navigate, setUser]);

  if (isLoading) {
    return <div>로그인 처리 중...</div>;
  }

  if (error) {
    return (
      <div>
        <h2>로그인 오류</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
      </div>
    );
  }

  return null;
}
