# 대출센터 관리자 페이지

![](https://private-user-images.githubusercontent.com/118225985/467877363-ebc2e93b-d00d-466f-961f-822cb21de719.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI4MTc3MzEsIm5iZiI6MTc1MjgxNzQzMSwicGF0aCI6Ii8xMTgyMjU5ODUvNDY3ODc3MzYzLWViYzJlOTNiLWQwMGQtNDY2Zi05NjFmLTgyMmNiMjFkZTcxOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxOFQwNTQzNTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZThlZjhiYWQ1YTE5MTdhNWY2NTkzZjhjZjVjN2NkYTkwNzg0N2NiZGQ3NWRiNTJjMTk2MGVkYjEzMzY0M2ZkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RDsCQxynPSiLxGiY05jDG9SNRKlH2M2t3kI_iTzywl8)

**대출 중개 업체 광고 플랫폼 관리자 웹사이트**

대출 중개 업체와 광고주를 연결하는 플랫폼의 관리자용 웹사이트입니다. 업체 가입 승인, 광고 관리, 고객센터 운영 등 플랫폼의 전반적인 운영 관리를 위한 기능을 제공합니다.

## 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **상태관리**: Zustand, TanStack Query
- **스타일링**: CSS Modules
- **HTTP Client**: Axios
- **애니메이션**: Framer Motion
- **패키지 관리**: pnpm

## 설치 및 실행

### 설치
```bash
pnpm install
```

### 개발 서버 실행
```bash
pnpm dev
```
개발 모드로 실행하며, [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 빌드
```bash
pnpm build
```
프로덕션용 빌드 파일을 생성합니다.

### 프로덕션 실행
```bash
pnpm start
```
빌드된 애플리케이션을 프로덕션 모드로 실행합니다.

## 권한 시스템

### SUPER 관리자
- 모든 기능에 대한 접근 권한
- 관리자 계정 생성 및 관리
- 시스템 전체 관리

### 일반 관리자  
- 업체 관리, 광고 관리, 고객센터 관리
- 제한된 관리 기능

## 프로젝트 구조

```
├── app/                    # Next.js App Router 페이지
├── entities/              # API 엔드포인트 및 데이터 타입
├── features/              # 비즈니스 로직 (로그인 등)
├── shared/                # 공통 컴포넌트, 유틸리티, 상수
└── widgets/               # 페이지별 주요 기능 컴포넌트
```

Feature-Sliced Design 아키텍처를 적용하여 확장 가능하고 유지보수가 용이한 구조로 설계되었습니다.