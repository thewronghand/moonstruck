import { CommonButton } from "./styles/common.styles";


export default function KakaoLoginButton() {
  function onLoginWithKakao() {
    const redirectUri = `${window.location.origin}/login/kakao`;
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  }

  return <CommonButton onClick={onLoginWithKakao}>카카오 로그인</CommonButton>;
}
