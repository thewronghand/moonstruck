export interface AIResponse {
  content: Array<{ text: string }>;
  model: string;
}

interface VertexError {
  message: string;
  status?: number;
  details?: unknown;
}

interface GeminiError {
  message: string;
  status?: number;
  details?: unknown;
}

// 나중에 필요할 수 있는 다른 API 응답 타입들도 여기에 추가
export interface ErrorResponse {
  error: string;
  code: string;
  vertexError?: VertexError;
  geminiError?: GeminiError;
} 