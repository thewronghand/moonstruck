export async function callVertexAPI(query: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_FUNCTIONS_API_URL}/api/vertex-claude`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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