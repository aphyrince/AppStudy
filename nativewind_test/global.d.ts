// CSS 파일에 대한 사이드 이펙트 및 모듈 임포트 타입 선언
declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}
