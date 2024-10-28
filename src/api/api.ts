import axios from 'axios';
import { prompt } from '../data/prompt';

export async function callVertexAPI(userInputWithCardInfo: string) {
  const API_URL = `https://${
    import.meta.env.VITE_API_REGION
  }-aiplatform.googleapis.com/v1/projects/${
    import.meta.env.VITE_GOOGLE_PROJECT_ID
  }/locations/${import.meta.env.VITE_API_REGION}/publishers/${
    import.meta.env.VITE_API_PUBLISHER
  }/models/${import.meta.env.VITE_API_TARGET_MODEL}:rawPredict`;

  const requestPayload = {
    anthropic_version: 'vertex-2023-10-16',
    messages: [
      { role: 'user', content: prompt.system.mockedUserInput },
      {
        role: 'assistant',
        content: prompt.system.mockedAssistantResponse,
      },
      {
        role: 'user',
        content: userInputWithCardInfo,
      },
    ],
    max_tokens: 1024,
    stream: false,
  };

  try {
    const response = await axios.post(API_URL, requestPayload, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GOOGLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Response: ', response.data);
    const messageContent = response.data.content[0].text;
    console.log(messageContent);
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      if (e.response) {
        console.error('ERROR RESPONSE: ', e.response.data);
        throw e;
      }
      console.error('ERROR MESSAGE: ', e.message);

      throw e;
    }
  }
}
