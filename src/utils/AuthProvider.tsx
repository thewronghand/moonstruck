import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authAtom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from '../Types/auth';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          const response = await fetch(
            `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/api/user/info`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error('Failed to fetch user info');
          }

          const userData = await response.json();

          // Firestore 타임스탬프 처리 수정
          const lastCreditRefresh = userData.lastCreditRefresh?._seconds
            ? new Date(userData.lastCreditRefresh._seconds * 1000)
            : new Date();

          const user: User = {
            uid: firebaseUser.uid,
            dailyCredits: userData.dailyCredits,
            lastCreditRefresh,
          };

          setUser(user);
        } catch (error) {
          console.error('Failed to fetch user info:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  return <>{children}</>;
}
