import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth } from '../firebaseConfig';

export default function LoginPage() {
  const { platform } = useParams();
  const [userCode, setUserCode] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    setUserCode(code);
  }, []);

  console.log('Firebase Auth Instance:', auth);

  return (
    <div>
      <h2>{platform} 코드</h2>
      <p>{userCode}</p>
    </div>
  );
}
