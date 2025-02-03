export function getErrorMessage(statusCode: number): string {
  switch (statusCode) {
    case 429:
      return '🔥 현재 서비스 사용량이 너무 많아요! 잠시 후 다시 시도해주세요. ⏳';
    case 529:
      return '🚧 사용하려는 AI 모델의 서버가 불안정해요. 잠시 후 다시 시도해주세요. 🛠️';
    case 401:
      return '🔒 인증에 실패했어요. 다시 로그인해주세요. 🔑';
    case 403:
      return '⛔ 접근 권한이 없어요. 🚫';
    default:
      return '😅 알 수 없는 오류가 발생했어요. 잠시 후 다시 시도해주세요. 🙏';
  }
} 