# 🌿<font color="#20604F">Greeny</font>

![Greeny_banner](https://github.com/user-attachments/assets/33562580-c941-4a1e-8210-7cc625289c4e)

<br/>

## 팀 소개

|                                                               **노지원**                                                                |                                                  **신민철**                                                   |                                                      **이경민**                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="mincheol.shin_profile_img" src="https://github.com/user-attachments/assets/bad008fa-6f51-48b8-89b0-144881052996"> | <img width="180" alt="mincheol.shin_profile_img" src="https://avatars.githubusercontent.com/u/110030523?v=4"> | <img width="180" alt="baduck" src="https://github.com/user-attachments/assets/2134800a-67c0-4a93-9bf9-5abfe73279df"> |
|                                             [🔗 no-support](https://github.com/no-support)                                              |                             [🔗 shin-mincheol](https://github.com/shin-mincheol)                              |                                      [🔗 kyungmim](https://github.com/kyungmim)                                      |

<br/>

## 목차

<span style="font-size: 1.2em;">**1.** [ 프로젝트 설명 ](#1-프로젝트-설명)</span>  
<span style="font-size: 1.2em;">**2.** [ 기술 및 개발환경 ](#2-기술-및-개발환경)</span>  
<span style="font-size: 1.2em;">**3.** [ 핵심 기능 ](#3-핵심-기능)</span>  
<span style="font-size: 1.2em;">**4.** [ 프로젝트 구조 ](#4-프로젝트-구조)</span>  
<span style="font-size: 1.2em;">**5.** [ 역할 분담 ](#5-역할-분담)</span>  
<span style="font-size: 1.2em;">**6.** [ 플로우차트 ](#6-플로우차트)</span>  
<span style="font-size: 1.2em;">**7.** [ UI ](#7-ui)</span>  
<span style="font-size: 1.2em;">**8.** [ 트러블 슈팅 ](#8-트러블-슈팅)</span>  
<span style="font-size: 1.2em;">**9.** [ 리팩토링 계획 ](#9-리팩토링-계획)</span>

<br/>

## 소개 및 개요

- **프로젝트 기간** : 2024.07.29 ~ 2024.08.27
- **배포 URL** : [🌿Greeny](https://greeny.vercel.app/)
- **테스트 계정**
  ```
    ID: p1@plant.com
    PW: 11111111
  ```

📑 **프로젝트 관련 자료**
👉 🌿[피그마 시안 디자인](https://www.figma.com/design/wScllow4nEUlwP5rT813CS/Greeny?node-id=54-1972&t=oYjGGnHR8T2MGjmm-1)
👉 🌿[요구사항 명세서](https://docs.google.com/spreadsheets/d/1twNWiRhqbNU6QIXePoJyC9YdHr4K_NChuiAptxXQFPY/edit?usp=sharing)
👉 🌿[팀 노션페이지](https://meadow-hydrogen-e0d.notion.site/b0b2b9e4d430483bb1988166a86518be?pvs=4)

<br/>

## 1. 프로젝트 설명

🌿**Greeny**는 **내 식물의 성장 기록과 다른 식물의 여정을 함께하는, 식물 애호가들을 위한 소셜 네트워크**입니다.

식물 백과를 통해 다양한 **식물들의 키우는 방법과 정보**를 손쉽게 확인할 수 있습니다. 식물을 등록하여 여러분의 식물을 자랑해주세요. **식물 일기**를 작성해 소중한 기억들을 기록하고, 추억들을 **다른 식집사 분들과 나누어보세요.** 또한, 커뮤니티를 통해 **다른 식집사분들과 정보를 공유**하며 더 많은 가드닝 팁과 노하우를 얻어보세요!

<br/>

## 2. 기술 및 개발 환경

<table class="tg">
<tbody>
   <tr>
    <td class="tg-0pky">개발 환경<br></td>
    <td class="tg-0pky">[FrontEnd] Next.js, Sass<br>[BackEnd] 제공되는 API 사용 <a href='https://api.fesp.shop/apidocs/#/'>🔗 제공된 API </a></td>
  </tr>
  <tr>
    <td class="tg-0pky">버전 및 이슈 관리</td>
    <td class="tg-0pky">Git / GitHub / Notion</td>
  </tr>
  <tr>
    <td class="tg-0pky">컨벤션</td>
    <td class="tg-0pky">Eslint / Prettier / GitHub Issue, PR Template</td>
  </tr>
  <tr>
    <td class="tg-0pky">프로젝트 관리</td>
    <td class="tg-0pky">GitHub Pull Requests</td>
  </tr>
  <tr>
    <td class="tg-0pky">커뮤니케이션</td>
    <td class="tg-0pky">Notion / Discord</td>
  </tr>
  <tr>
    <td class="tg-0pky">배포</td>
    <td class="tg-0pky">Vercel</td>
  </tr>
</tbody>
</table>

<br />

### [라이브러리 사용 이유]

<table class="tg">
<tbody>
   <tr>
    <td class="tg-0pky">React Calendar / React Datepicker</td>
    <td class="tg-0pky">비동기 데이터 요청과 관리를 간단하고 효율적으로 처리하기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">React Hook Form</td>
    <td class="tg-0pky">HTTP 요청과 응답 처리를 보다 단순하고 직관적으로 처리하기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">Husky</td>
    <td class="tg-0pky">일단은 기능 구현 위주로 개발하는 것을 원칙으로 했지만, 추후 어느 정도 기능 구현이 되어 리팩토링 단계 때 테스트 코드를 작성하게 된다면, 허스키를 통해 커밋 전 테스트를 실행해볼 수 있기 때문에 사용을 고려해보다가, vercel에 배포 전 미리 빌드 테스트 또한 허스키를 사용해서 해볼 수 있어서 선정</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sass</td>
    <td class="tg-0pky">css-in-js 방식과 비교해 스타일과 마크업의 분리를 통해 가독성이 좋음. 성능 또한 css-in-js 방식은 런타임에 스타일을 선택하는 반면 scss는 사전 컴파일되어 최종 css 파일로 변환되므로 브라우저의 성능 부담이 줄어듦.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Swiper</td>
    <td class="tg-0pky">meta 태그와 페이지별 타이틀을 위해 사용</td>
  </tr>
</tbody>
</table>

<br />

## 3. 핵심 기능

<br />

## 4. 프로젝트 구조

```
📦 Greeny
├─ 📄 .env
├─ 📄 .env.local
├─ 📄 .eslintrc.json
├─ 📄 .gitignore
├─ 📄 .Prettierrc.cjs
├─ 📄 auth.d.ts
├─ 📄 env.d.ts
├─ 📄 next-env.d.ts
├─ 📄 next.config.mjs
├─ 📄 package.json
├─ 📄 README.md
├─ 📄 tsconfig.json
├─ 📄 yarn.lock
├─ 📁 .github
│  ├─ 📄 pull_request_template.md ---------- GitHub PR 템플릿
│  └─ 📁 ISSUE_TEMPLATE
│     └─ 📄 basic-issue-template.md -------- GitHub Issue 템플릿
└─ 📁 src
    ├─ 📄 auth.ts
    ├─ 📄 middleware.ts
    ├─ 📁 app
    │  ├─ 📁 (greeny)
    │  │  ├─ 📁 (home) --------------------- 홈 페이지
    │  │  ├─ 📁 books ---------------------- 식물 백과 페이지
    │  │  │  └─ 📁 [cntntsNo] -------------- 식물 백과 식물 상세 페이지
    │  │  ├─ 📁 event ---------------------- 이벤트 페이지
    │  │  ├─ 📁 plant ---------------------- 나의 식물 페이지
    │  │  │  ├─ 📁 new --------------------- 식물 등록 페이지
    │  │  │  └─ 📁 [id] -------------------- 식물 상세 페이지
    │  │  │      ├─ 📁 diaryEdit ----------- 식물 일기 페이지
    │  │  │      ├─ 📁 diaryNew ------------ 식물 일기 등록 페이지
    │  │  │      └─ 📁 edit ---------------- 식물 일기 수정 페이지
    │  │  ├─ 📁 profile -------------------- 프로필 페이지
    │  │  │  ├─ 📁 bookmark ---------------- 북마크 목록 페이지
    │  │  │  ├─ 📁 detail ------------------ 프로필 상세 페이지
    │  │  │  ├─ 📁 edit -------------------- 프로필 수정 페이지
    │  │  │  └─ 📁 [_id] ------------------- 다른 사용자 프로필 페이지
    │  │  │      ├─ 📁 plant --------------- 사용자의 식물 팔로우 페이지
    │  │  │      └─ 📁 user ---------------- 사용자의 다른 사용자 팔로우 페이지
    │  │  └─ 📁 story ---------------------- 식물 이야기 메인 페이지
    │  │      ├─ 📁 community -------------- 커뮤니티 메인 페이지
    │  │      │  ├─ 📁 new ----------------- 커뮤니티 게시글 등록 페이지
    │  │      │  └─ 📁 [id] ---------------- 커뮤니티 게시글 상세 페이지
    │  │      │      └─ 📁 edit ------------ 커뮤니티 게시글 수정 페이지
    │  │      └─ 📁 diaries ---------------- 식물 일기 메인 페이지
    │  │          └─ 📁 [id] --------------- 식물 일기 상세 페이지
    │  ├─ 📁 (user)
    │  │  ├─ 📁 login ---------------------- 로그인 페이지
    │  │  └─ 📁 signup --------------------- 회원가입 페이지
    │  ├─ 📁 api
    │  │  ├─ 📁 actions -------------------- 서버 액션 함수
    │  │  ├─ 📁 auth ----------------------- auth 관련
    │  │  └─ 📁 fetch ---------------------- fetch 함수
    │  └─ 📁 data -------------------------- 식물 정보 데이터
    ├─ 📁 components ----------------------- 컴포넌트
    ├─ 📁 hooks ---------------------------- 커스텀 훅
    ├─ 📁 styles --------------------------- CSS 초기화
    ├─ 📁 types ---------------------------- typescript 타입
    └─ 📁 utils ---------------------------- 유틸 함수
```

## 5. 역할 분담

![역할분담](https://github.com/user-attachments/assets/81f76712-f292-426a-ad26-b79bfb565a2c)

## 6. Flowchart

![플로우차트](https://github.com/user-attachments/assets/88ec72e8-cb34-4e8d-9322-c495f2031397)

## 7. UI

<br/>

## 8. 트러블 슈팅

<br/>

## 9. 리팩토링 계획
