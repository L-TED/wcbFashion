/*
loading 화면(윈도우 전체 크기) 이후 시작
두번째 섹션 - text 애니메이션: 아래에서 위로
세번째 섹션 - lookbook 텍스트, 그리드로 된 이미지 9개 애니메이션: 아래에서 위로  
             그리드에 있는 사진에 마우스를 올리면 그 사진으로 변하는 좌측에 있는 큰 이미지
마지막 섹션 - text 애니메이션: 아래에서 위로
*/

// animations-loading
import { loadAnimation } from "./load.js";
window.addEventListener("load", () => {
  loadAnimation();
});
// animations-navigator
import "./nav.js";
// sectionB-texts
import "./sectionB.js";
// sectionC-photos
import "./sectionC.js";
// sectionD-texts
import "./sectionD.js";
