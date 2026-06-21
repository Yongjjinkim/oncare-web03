# 08. 공통 컴포넌트
# Header & Footer

---

## Header (네비게이션)

### 구조
```
[로고]                         [메뉴]                      [버튼]
OnCare   서비스소개  요금제  IR  문의하기    로그인 | 시작하기
```

### 스타일
```
height        : 64px
position      : fixed (상단 고정) ← 스크롤 시에도 항상 표시
z-index       : 50
padding-x     : 24px (mobile), 80px (desktop)

스크롤 전:
  background  : transparent
  text color  : white (히어로 다크 배경 위)

스크롤 후 (64px 이상):
  background  : rgba(255,255,255,0.8)
  backdrop-filter: blur(20px)
  border-bottom: 1px solid #D2D2D7
  text color  : #1D1D1F
  transition  : all 300ms
```

> ⚠️ **중요**: 헤더는 스크롤 시에도 반드시 화면 상단에 고정되어야 합니다.
> `position: fixed` + `top: 0` 유지 필수. 스크롤과 함께 숨겨지면 안 됩니다.

### 메뉴 항목
```
서비스 소개   → /service
요금제        → /pricing
IR           → /ir
문의하기      → /contact
```

### 우측 버튼
```
비로그인: "로그인" (텍스트) | "시작하기" (Primary 버튼)
로그인 후: 사용자 아바타 + 드롭다운
  - 마이페이지
  - 로그아웃
```

### 모바일 (768px 미만)
```
우측: 햄버거 메뉴 아이콘
클릭 시: 풀스크린 메뉴 오버레이
```

---

## Footer

### 구조
```
[로고 + 설명]              [링크 모음]
OnCare                    서비스   요금제   IR   문의
Sign Translator           이용약관   개인정보처리방침
경고 신호 해석자

[사업자 정보]
© 2026 라파엘 온케어. All rights reserved.
사업자등록번호: 000-00-00000
```

### 스타일
```
background  : #1D1D1F (다크)
text color  : #6E6E73
padding-y   : 60px
font-size   : 14px
```

---

## 백그라운드 이미지 컴포넌트

### 적용 섹션 (은은한 배경 이미지)
```
Hero 섹션         : 배경 이미지 1 (opacity 0.15~0.2)
PROBLEM 01 섹션   : 배경 이미지 2 (opacity 0.08~0.12)
PROBLEM 02 섹션   : 배경 이미지 2 (opacity 0.08~0.12)
CORE SERVICE 섹션 : 배경 이미지 3 (opacity 0.08~0.12)
```

### 스타일
```css
.section-with-bg {
  position: relative;
}
.section-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('/images/bg-*.png');
  background-size: cover;
  background-position: center;
  opacity: 0.10;
  z-index: 0;
}
.section-content {
  position: relative;
  z-index: 1;
}
```

---

## 공통 UI 컴포넌트

### Button
```jsx
<Button variant="primary" size="md">시작하기</Button>
```

### Card
```jsx
<Card className="hover:-translate-y-1 transition-transform">
  {children}
</Card>
```

### Section
```jsx
<Section bg="white" | "gray" | "dark" bgImage="/images/bg-*.png">
  {children}
</Section>
```

### SectionLabel
```jsx
<SectionLabel>PROBLEM 01</SectionLabel>
// 12px, semibold, uppercase, letter-spacing 0.08em
```

### Badge
```jsx
<Badge color="blue">AI-POWERED · INSTANT</Badge>
<Badge color="green">AI+HUMAN-POWERED · ONGOING</Badge>
<Badge color="orange">추천</Badge>
```

### TrafficLight
```jsx
// 주황불 신호등 시각화
<TrafficLight />
// 초록(48px) → 주황(64px, glow) → 빨강(48px)
```

---

## 파일 구조
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx       ← position: fixed 필수
│   │   └── Footer.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       ├── Section.jsx      ← bgImage prop 추가
│       ├── SectionLabel.jsx
│       └── TrafficLight.jsx
public/
└── images/
    ├── bg-hero.png
    ├── bg-light.png
    └── bg-service.png
```

---
*Components v3 | 온케어(OnCare)*
