expo 프로젝트에 nativewind 적용법

https://www.nativewind.dev/docs/getting-started/installation 여기에 나온거 따라하기

npx expo install nativewind
npx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11 babel-preset-expo

react-native-reanimated react-native-safe-area-context <- 이거는 create-expo-app 할 때 install 됨.

tailwind.config.js 의 content 를 현재 폴더구조에 맞게 변경.
content: ['./app/**/*.{js,jsx,ts,tsx}'],
이런 식으로.

루트 레이아웃에서 global.css 임포트.

global.d.ts 파일에
declare module '\*.css';
이거 추가.
