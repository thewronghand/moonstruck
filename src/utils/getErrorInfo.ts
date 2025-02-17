import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFire, faLock, faTriangleExclamation, faUserSlash } from '@fortawesome/free-solid-svg-icons';

interface ErrorInfo {
  message: string;
  icon: IconDefinition;
}

export function getErrorInfo(statusCode: number): ErrorInfo {
  switch (statusCode) {
    case 429:
      return {
        message: '현재 서비스 사용량이 너무 많아요!\n홈으로 돌아간 후 잠시 후에 다시 시도해보는 걸 권장드려요.',
        icon: faFire
      };
    case 529:
      return {
        message: '사용하려는 AI 모델의 서버가 불안정한 모양이에요!\n홈으로 돌아간 후 잠시 후에 다시 시도해보는 걸 권장드려요.',
        icon: faTriangleExclamation
      };
    case 401:
      return {
        message: '인증에 실패한 것 같아요. 다시 로그인해보는 게 어떨까요?',
        icon: faUserSlash
      };
    case 403:
      return {
        message: '접근 권한이 없어요!',
        icon: faLock
      };
    default:
      return {
        message: '알 수 없는 오류가 발생했어요. 잠시 후 다시 시도해주세요.',
        icon: faTriangleExclamation
      };
  }
} 