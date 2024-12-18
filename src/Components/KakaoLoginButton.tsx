import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #9c88ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: #8c78ff;
  }
`;

export default function KakaoLoginButton() {
  function onLoginWithKakao() {
    const redirectUri = `${window.location.origin}/login/kakao`;
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  }

  return <StyledButton onClick={onLoginWithKakao}>카카오 로그인</StyledButton>;
}
