export default function KakaoLoginButton() {
  function onLoginWithKakao() {
    const redirectUri = `${window.location.origin}/login/kakao`;
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  }

  return <button onClick={onLoginWithKakao}>카카오 로그인</button>;
}
