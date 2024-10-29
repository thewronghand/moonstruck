import axios from 'axios';
import { prompt } from '../data/prompt';
import apiClient from './apiClient';

export async function callVertexAPI(userInputWithCardInfo: string) {
  const API_URL = `:rawPredict`;

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
    const response = await apiClient.post(API_URL, requestPayload);
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
