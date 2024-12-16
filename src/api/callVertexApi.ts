import { auth } from '../firebaseConfig'

export async function callVertexAPI(query: string) {
  try {
    const token = await auth.currentUser?.getIdToken();

    if (!token) {
      throw new Error('인증 토큰이 없습니다.');
    }

    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/api/vertex-claude`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ query })
      }
    );

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return response.json();
  } catch (error) {
    console.error('Vertex API Error:', error);
    throw error;
  }
}