# moonstruck: LLM 기반 타로점 서비스 (클라이언트)

moonstruck은 LLM 기반 타로 점 서비스의 클라이언트 애플리케이션입니다. 사용자 인터페이스와 상호작용을 담당하며, 서버리스 백엔드([moonstruck-firebase-functions](https://github.com/thewronghand/moonstruck-firebase-functions))와 통신하여 AI 타로 해석을 제공합니다.

## 주요 기능

- [X] 사용자 질문 입력: 사용자가 자신의 고민이나 질문을 입력할 수 있습니다.
- [X] 스프레드 선택: 타로점에 사용할 다양한 타로 스프레드를 선택할 수 있습니다.
- [X] 카드 선택 인터페이스: 
  - 셔플, 컷팅, 드로잉 등 실제 타로 리딩 과정을 시각화
  - AI 응답 대기 시간을 자연스러운 카드 선택 경험으로 전환
- [X] 결과 출력: 선택된 카드와 AI 해석을 UI로 출력합니다.
- [X] 결과 공유: URL을 통해 타로 리딩 결과를 다른 사람과 공유할 수 있습니다.
- [X] 폴백 UI: API 요청 실패 시 사용자 경험을 보충하는 대체 화면을 제공합니다.

## 기술 스택

- React 18
- TypeScript
- Vite
- react-router-dom
- styled-components
- axios
- motion
- Firebase
- FontAwesome
- es-toolkit

## 개발 도구

- ESLint
- Vite

## 작동 원리

1. 사용자가 질문 입력 및 스프레드를 선택합니다.

2. DrawPage에서:
   - 무작위로 카드를 뽑고 즉시 AI 해석 요청을 시작합니다
   - 동시에 사용자에게 카드 선택 UI를 제공합니다 (셔플 → 컷 → 드로우)
   - UI 인터랙션 동안 백그라운드에서 AI 응답을 기다립니다

3. 백엔드 통신 순서:
   - 먼저 AI 해석 엔드포인트로 요청을 보내 해석 결과를 수신
   - 해석 결과를 받으면 별도의 DB 저장 엔드포인트로 요청을 전송
     (카드 정보, 질문, 해석 결과, 스프레드 정보 등)
   - DB 저장 후 문서 ID를 반환받음
   - 이 모든 과정이 카드 선택 UI보다 먼저 완료되어도 UI 경험을 방해하지 않음

4. ResultPage 이동:
   - 카드 선택 UI가 완료되고 API 응답도 받았다면:
     - state로 모든 데이터를 전달하여 즉시 결과 표시
   - API 요청이 실패했다면:
     - ErrorPage로 이동하여 폴백 UI 제공

5. ResultPage 직접 접근:
   - URL의 문서 ID로 DB에서 데이터 조회
   - 조회된 데이터로 결과 페이지 구성

## 향후 추가 기능

- 선택적 로그인
- 계정별 결과 저장
- 오늘의 운세
- 캐릭터 RP 시스템 및 캐릭터 선택
- 더 멋진 디자인✨

## 관련 프로젝트

- [moonstruck-firebase-functions](https://github.com/thewronghand/moonstruck-firebase-functions): AI 모델 연동, 프롬프트 처리, DB 관리 등을 담당하는 서버리스 백엔드
