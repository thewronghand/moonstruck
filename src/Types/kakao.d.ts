interface KakaoAuth {
  authorize(settings: {
    redirectUri: string;
    state?: string;
  }): void;
}

interface KakaoShareContent {
  title: string;
  description: string;
  imageUrl: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

interface KakaoShareButton {
  title: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

interface KakaoShareOptions {
  objectType: 'feed' | 'list' | 'commerce' | 'text';
  content: KakaoShareContent;
  buttons?: KakaoShareButton[];
}

interface KakaoShare {
  sendDefault(options: KakaoShareOptions): void;
}

interface KakaoStatic {
  init(apiKey: string): void;
  isInitialized(): boolean;
  Auth: KakaoAuth;
  Share: KakaoShare;
}

interface Window {
  Kakao: KakaoStatic;
}