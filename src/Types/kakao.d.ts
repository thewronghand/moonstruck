interface KakaoAuth {
    authorize(settings: {
      redirectUri: string;
      state?: string;
    }): void;
  }
  
  interface KakaoStatic {
    init(apiKey: string): void;
    isInitialized(): boolean;
    Auth: KakaoAuth;
  }
  
  interface Window {
    Kakao: KakaoStatic;
  }