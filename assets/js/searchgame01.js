const cssProperty = [
    { num: 1, name: "accent-color", desc: "요소의 강조 색상을 지정합니다." },
    { num: 2, name: "align-content", desc: "콘텐츠 사이와 콘텐츠 주위 빈공간을 플렉스 박스'의 교차축 또는 그리드의 블록 축을 따라 배치하는 방식을 결정합니다" },
    { num: 3, name: "align-items", desc: "교차축에서 아이템 정렬 하는 속성입니다. 주로 flex에서 item들을 정렬할 때 사용됩니다" },
    { num: 4, name: "align-self", desc: "특정 item의 정렬을 따로 하고 싶을 때 사용합니다" },
    { num: 5, name: "all", desc: "CSS 사용자 지정 속성을 제외한 모든 속성을 초기화합니다. 초깃값,상속값, 아니면 다른 스타일시트 출처의 값로 설정할 수 있습니다" },
    { num: 6, name: "animation", desc: "애니메이션과 관련된 속성을 일괄적으로 처리합니다" },
    { num: 7, name: "animation-delay", desc: "애니메이션 지연시간을 설정합니다" },
    { num: 8, name: "animation-direction", desc: "애니메이션 움직임 방향을 설정합니다" },
    { num: 9, name: "animation-duration", desc: "애니메이션움직인 시간을 설정합니다" },
    { num: 10, name: "animation-fill-mode", desc: "애니메이션이 끝난 후의 상태를 설정합니다" },
    { num: 11, name: "animation-iteration-count", desc: "애니메이션의 반복 횟수를 설정합니다" },
    { num: 12, name: "animation-name", desc: "애니메이션 keyframe 이름을 설정합니다" },
    { num: 13, name: "animation-play-state", desc: "애니메이션 진행상태를 설정합니다" },
    { num: 14, name: "animation-timeline", desc: "애니메이션의 타임라인을 설정합니다" },
    { num: 15, name: "animation-timing-function", desc: "애니메이션 움직임의 속도를 설정합니다" },
    { num: 16, name: "appearance", desc: "운영체제 및 브라우저에 기본적로 설정되어있는 테마를 기반로 요소를 표현한다" },
    { num: 17, name: "aspect-ratio", desc: "요소의 크기를 비율대로 조정할 수있게 한다" },
    { num: 18, name: "backdrop-filter", desc: "요소 뒤 영역에 흐림이나색상 시프트 등 그래픽 효과를 적용할 수 있는 속성입니다" },
    { num: 19, name: "backface-visibility", desc: "요소의뒷쪽에서 앞면이 보이게 할지 정하는 속성입니다" },
    { num: 20, name: "background", desc: "백그라운드 속성을 일괄적로 설정합니다." },
    { num: 21, name: "background-attachment", desc: "배경 이미지의 고정 여부를 설정합니다" },
    { num: 22, name: "background-blend-mode", desc: "배경을 혼합했을 때 그래픽 효과를 설정합니다" },
    { num: 23, name: "background-clip", desc: "백그라운드 이미지의위치 기준점을 설정합니다" },
    { num: 24, name: "background-color", desc: "백그라운드 색을설정합니다" },
    { num: 25, name: "background-image", desc: "백그라운드 이미지속성을 설정합니다" },
    { num: 26, name: "background-origin", desc: "백그라운드이미지의 위치 기준점을 설정하기 위한 속성입니다" },
    { num: 27, name: "background-position", desc: "백그라운드 이미지의 위치 영역을 설정합니다" },
    { num: 28, name: "background-position-x", desc: "백그라운드 이미지의 X축위치 영역을 설정합니다" },
    { num: 29, name: "background-position-y", desc: "백그라운드 이미지의 Y축위치 영역을 설정합니다" },
    { num: 30, name: "background-repeat", desc: "백그라운드이미지 반복 여부를 설정합니다" },
    { num: 31, name: "background-size", desc: "백그라운드 이미지사이즈를 설정합니다" },
    { num: 32, name: "block-size", desc: "블럭의 크기를 지정합니다" },
    { num: 33, name: "border", desc: "테두리 속성을 일괄적로 설정합니다" },
    { num: 34, name: "border-block", desc: "보더블럭 속성을 지정합니다." },
    { num: 35, name: "border-block-color", desc: "보더블럭색상을 지정합니다" },
    { num: 36, name: "border-block-end", desc: "보더블럭 끝부분을설정합니다" },
    { num: 37, name: "border-block-end-color", desc: "보더블럭 끝부분 색상을 설정합니다" },
    { num: 38, name: "border-block-end-style", desc: "보더블럭 끝부분 스타일을 설정합니다" },
    { num: 39, name: "border-block-end-width", desc: "보더블럭 끝부분 너비를 설정합니다" },
    { num: 40, name: "border-block-start", desc: "보더블럭의시작부분을 설정합니다" },
    { num: 41, name: "border-block-start-color", desc: "보더블럭 시작부분을 설정합니다" },
    { num: 42, name: "border-block-start-style", desc: "보더블럭 시작부분 스타일을 설정합니다" },
    { num: 43, name: "border-block-start-width", desc: "보더블럭 시작부분 너비값을 설정합니다" },
    { num: 44, name: "border-block-style", desc: "보더블럭스타일을 설정합니다" },
    { num: 45, name: "border-block-width", desc: "보더블럭의너비값을 지정합니다" },
    { num: 46, name: "border-bottom", desc: "아래쪽 속성을 일괄적로설정합니다" },
    { num: 47, name: "border-bottom-color", desc: "테두리아래쪽 색 속성을 설정합니다" },
    { num: 48, name: "border-bottom-left-radius", desc: "아래 왼쪽 모서리 굴곡을 설정합니다" },
    { num: 49, name: "border-bottom-right-radius", desc: "아래 오른쪽 모서리 굴곡을 설정합니다" },
    { num: 50, name: "border-bottom-style", desc: "테두리아래쪽 스타일 속성을 설정합니다" },
    { num: 51, name: "border-bottom-width", desc: "테두리아래쪽 두께 속성을 설정합니다" },
    { num: 52, name: "border-collapse", desc: "테이블 cell 테두리의겹침 속성을 설정한다" },
    { num: 53, name: "border-color", desc: "테두리의 색상을 지정합니다." },
    { num: 54, name: "border-end-end-radius", desc: "속성은 요소의에 따라 물리적 경계 반경에 매핑하는 요소에 논리적 경계 반경 정의 writing-mode , direction , 및 text-orientation .이것은 텍스트 방향 및 쓰기 모드에 관계없이 작업 할 스타일을 작성할 때 유용 합니다 " },
    { num: 55, name: "border-end-start-radius", desc: "이 속성은 요소의 블록 끝과 인라인 시작면 사이의 모서리에 영향을줍니다" },
    { num: 56, name: "border-image", desc: "테두리의 이미지를 지정합니다." },
    { num: 57, name: "border-image-outset", desc: "테두리를벗어나는 이미지 양을 지정" },
    { num: 58, name: "border-image-repeat", desc: "원본이미지의 모서리 영역을 요소의 테두리 이미지 크기에 맞춰 조절할 때 사용할 방법을 지정합니다" },
    { num: 59, name: "border-image-slice", desc: "border-image-source로 설정한 이미지를 여러 개의 영역로 나눕니다" },
    { num: 60, name: "border-image-source", desc: "요소의테두리 이미지로 사용할 원본 이미지를 지정합니다" },
    { num: 61, name: "border-image-width", desc: "요소의 테두리이미지로 사용할 원본 이미지를 지정합니다" },
    { num: 62, name: "border-inline", desc: "스타일 시트에서 하나의 장소에서각각의 논리적 인라인 border 속성 값을 설정합니다" },
    { num: 63, name: "border-inline-color", desc: "논리적인라인 테두리의 색상을 정의합니다" },
    { num: 64, name: "border-inline-end", desc: "요소의 논리적인라인 엔드 테두리 폭을 정의합니다" },
    { num: 65, name: "border-inline-end-color", desc: "요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 색상에 매핑하는 요소의 논리적 인라인 엔드 테두리 색상을 정의합니다" },
    { num: 66, name: "border-inline-end-style", desc: "요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 스타일에 매핑하는 요소의 논리적 인라인 끝 테두리 스타일을 정의합니다" },
    { num: 67, name: "border-inline-end-width", desc: "요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 폭 물리적 경계에 매핑하는 요소의 논리적 인라인 엔드 테두리 폭을 정의합니다" },
    { num: 68, name: "border-inline-start", desc: "스타일시트에서 하나의 장소에서 각각의 논리적 인라인 시작 border 속성 값을 설정합니다" },
    { num: 69, name: "border-inline-start-color", desc: "요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 색상에 매핑하는 요소의논리적 인라인 시작 테두리 색상을 정의합니다" },
    { num: 70, name: "border-inline-start-style", desc: "속성은 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 스타일에매핑하는 요소의 논리적 인라인 시작 테두리 스타일을 정의합니다" },
    { num: 71, name: "border-inline-start-width", desc: "속성은 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 폭 물리적 경계에 매핑하는요소의 논리적 인라인 시작 테두리 폭을 정의합니다" },
    { num: 72, name: "border", desc: "요소의 쓰기 모드, 방향성,텍스트 방향에 따라 물리적 테두리 스타일에 매핑하는 요소의 논리적 인라인 테두리의 스타일을 정의합니다" },
    { num: 73, name: "border-inline-width", desc: "요소의쓰기 모드, 방향성, 텍스트 방향에 따라 폭 물리적 경계에 매핑하는 요소의 논리적 인라인 테두리의 폭을 정의합니다" },
    { num: 74, name: "border-left", desc: "왼쪽 테두리를 설정합니다" },
    { num: 75, name: "border-left-color", desc: "박스의 왼쪽테두리 색상을 지정합니다" },
    { num: 76, name: "border-left-style", desc: "박스의 왼쪽테두리 영역의 스타일을 지정합니다" },
    { num: 77, name: "border-left-width", desc: "박스의 왼쪽테두리 영역의 너비를 지정합니다" },
    { num: 78, name: "border-radius", desc: "테두리를 둥글게 만들 수 있는속성입니다" },
    { num: 79, name: "border-right", desc: "오른쪽 테두리를 설정합니다." },
    { num: 80, name: "border-right-color", desc: "박스의 오른쪽테두리 색상을 지정합니다" },
    { num: 81, name: "border-right-style", desc: "박스의 오른쪽테두리 영역의 스타일을 지정합니다" },
    { num: 82, name: "border-right-width", desc: "박스의 오른쪽테두리 영역의 너비를 지정합니다" },
    { num: 83, name: "border-spacing", desc: "테이블 cell과 테두리와의간격을 지정한다" },
    { num: 84, name: "border-start-end-radius", desc: "이것은 텍스트 방향 및 쓰기 모드에 관계없이 작업 할 스타일을 작성할 때 유용 합니다 " },
    { num: 85, name: "border-start-start-radius", desc: "이것은 텍스트 방향 및 쓰기 모드에 관계없이 작업 할 스타일을 작성할 때 유용 합니다" },
    { num: 86, name: "border-style", desc: "박스의 테두리 영역의 스타일을지정합니다" },
    { num: 87, name: "border-top", desc: "위쪽 테두리를 설정합니다" },
    { num: 88, name: "border-top-color ", desc: "박스의 상단테두리 색상을 지정합니다" },
    { num: 89, name: "border-top-left-radius", desc: "라운드 코너의 곡률을 규정하는 타원의 반경 (또는 세미 메이저 및 세미 마이너 축의 반경)을 지정하여 소자의 왼쪽 상단" },
    { num: 90, name: "border-top-right-radius", desc: "속성 라운드 코너의 곡률을 규정하는 타원의 반경 (또는 세미 메이저 및 세미 마이너 축의 반경)을 지정하여 소자의 오른쪽 상단" },
    { num: 91, name: "border-top-style", desc: "박스의 상단 테두리영역의 스타일을 지정합니다" },
    { num: 92, name: "border-top-width", desc: "박스의 상단 테두리영역의 너비를 지정합니다" },
    { num: 93, name: "border-width", desc: "박스의 테두리 영역의 너비를지정합니다" },
    { num: 94, name: "bottom", desc: "용기블럭의 높이를 참조합니다. 요소가 밑에서부터 어디쯤배치 될 지 결정합니다" },
    { num: 95, name: "box-decoration-break", desc: "요소의방법 속성을 지정 조각이 여러 행, 열 또는 페이지에 걸쳐 깨진 경우 렌더링해야합니다" },
    { num: 96, name: "box-shadow", desc: "요소의 프레임 주위에 그림자 효과를추가합니다" },
    { num: 97, name: "box-sizing", desc: "박스의 크기를 어떤 것을 기준로 계산할지를정하는 속성입니다" },
    { num: 98, name: "break-after", desc: "속성 설정 페이지, 열, 또는 지역구분은 생성 된 박스 후 행동해야하는 방법. 생성 된 상자가 없으면 속성이 무시됩니다" },
    { num: 99, name: "break-before", desc: "세트 페이지, 열, 또는 지역 구분은생성 된 박스 전에 행동해야하는 방법. 생성 된 상자가 없으면 속성이 무시됩니다" },
    { num: 100, name: "break-inside", desc: "속성 설정 페이지, 열, 또는 지역나누기 생성 된 상자 안에 행동해야하는 방법. 생성 된 상자가 없으면 속성이 무시됩니다" },
    { num: 101, name: "caption-side", desc: "표(table)의 캡션의 위치를정하는 속성 입니다." },
    { num: 102, name: "caret-color", desc: "색상 설정 삽입 캐럿 , 다음 문자 입력된 삽입 될 볼 마커를. 이를 텍스트 입력 커서 라고도합니다 " },
    { num: 103, name: "clear", desc: "float 속성을 해제한다" },
    { num: 104, name: "clip", desc: "요소의 보이는 부분을 정의합니다" },
    { num: 105, name: "clip-path", desc: "요소의 어떤 부분 집합을 표시 할 것인지 클리핑영역을 생성한다" },
    { num: 106, name: "color", desc: "텍스트 내용의 글자 색상을 지정합니다" },
    { num: 107, name: "color-scheme", desc: "요소가 편안하게 렌더링 할 수있는 색구성표 표시 할 수 있습니다" },
    { num: 108, name: "column-count", desc: "해당 요소를 몇 개의칼럼(column)로 나눌지를 설정합니다" },
    { num: 109, name: "column-fill", desc: "컬럼로 쪼갤 때, 얼마나 요소들이균형이 맞는지 컨트롤 합니다" },
    { num: 110, name: "column-gap(grid-column-gap)", desc: "그리드 레이아웃에서 컬럼 간의 간격을 정의합니다" },
    { num: 111, name: "column-rule", desc: "다중 열 레이아웃의 열 사이에 그려진라인의 폭, 스타일, 색상을 설정한다" },
    { num: 112, name: "column-rule-color", desc: "다중 열레이아웃의 열 사이에 그려진 라인의 색을 설정한다" },
    { num: 113, name: "column-rule-style", desc: "다중 열레이아웃에서 열 사이에 그려진 라인의 스타일을 설정합니다" },
    { num: 114, name: "column-rule-width", desc: "다중 열레이아웃의 열 사이에 그려진 라인의 폭을 설정한다" },
    { num: 115, name: "column-span", desc: "컬럼 span을 설정합니다" },
    { num: 116, name: "column-width", desc: "다중 열 레이아웃에서 이상적인컬럼 폭을 설정한다" },
    { num: 117, name: "columns", desc: "다단을 정의 - 단축 속성" },
    { num: 118, name: "contain", desc: "특정 요소와 콘텐츠가 문서 트리의 다른 부위와독립되어있음을 나타낼 때 사용합니다" },
    { num: 119, name: "content", desc: "엘리먼트의 앞(:before)이나 뒤(:after)에내용을 생성합니다" },
    { num: 120, name: "content-visibility", desc: "페이지로드성능을 개선하는 데 가장 영향력있는 속" },
    { num: 121, name: "counter-increment", desc: "counter-reset로 설정한 값을 증가시키는 역" },
    { num: 122, name: "counter-reset", desc: "카운터를 사용하려면,counter-reset로 먼저 카운터 이름과 시작값을 설정 해야 합니" },
    { num: 123, name: "counter-set", desc: "CSS 카운터 를 주어진 값로설정합니다" },
    { num: 124, name: "cursor", desc: "마우스 커서의 모양을 지정한다" },
    { num: 125, name: "direction", desc: "텍스트의 표기 방향을 지정한다" },
    { num: 126, name: "display", desc: "엘리먼트의 디스플레이 속성을 지정한다" },
    { num: 127, name: "empty-cells", desc: "테두리와 배경이 주위에 표시할지 여부" },
    { num: 128, name: "filter", desc: "요소 흐림 또는 색상 변화와 같은 그래픽 효과를적용한다" },
    { num: 129, name: "flex", desc: "요소들을 자유자제로 위치 시키는 속성로, 레이아웃을 쉽게 잡을수 있다" },
    { num: 130, name: "flex-basis", desc: "플렉스 항목의 초기 기본 크기를설정합니다" },
    { num: 131, name: "flex-direction", desc: "CSS5에 추가된 속성로flexible item이 flex 컨테이너 안에 위치되는 방법을 지정한다" },
    { num: 132, name: "flex-flow", desc: "플렉스 컨테이너의 방향,뿐만 아니라 포장동작을 지정한다" },
    { num: 133, name: "flex-grow", desc: "flex-item 요소가,flex-container 요소 내부에서 할당 가능한 공간의 정도를 선언합니다" },
    { num: 134, name: "flex-shrink", desc: "공간을 넘어갈 경우에 각 아이템들을줄이는 방법을 설정하는 방법입니다" },
    { num: 135, name: "flex-wrap", desc: "flexible item을 wrap 할것인지아닌지를 지정한다" },
    { num: 136, name: "float", desc: "용기박스를 왼쪽 또는 오른쪽로 이동하거나 이동하지 않음을지정한다" },
    { num: 137, name: "font", desc: "엘리먼트안의 텍스트 컨텐츠의 font-style,font-variant, font-weight, font-size, line-height, font-family를 설정하는 약식속성이다" },
    { num: 138, name: "font-family", desc: "특정 글꼴이나 대표 글꼴을 지정한다." },
    { num: 139, name: "font-feature-settings", desc: "오픈타입 폰트의 다양한 오픈타입 피처를 설정합니다" },
    { num: 140, name: "border", desc: "저장된 폰트 자간 정보의 사용을 설정한다." },
    { num: 141, name: "font-language-override", desc: "서체에서 특정 언어의 상형 문자의 사용을 제어합니다" },
    { num: 142, name: "font-optical-sizing", desc: "서로 다른크기로 볼 수 있도록 최적화되어 있는지 설정합니다" },
    { num: 143, name: "font-size", desc: "글꼴의 크기를 지정한다" },
    { num: 144, name: "font-size-adjust", desc: "(대문자의 크기를정의하는) 현재의 폰트 크기에 대한 소문자의 크기를 설정한다" },
    { num: 145, name: "font-stretch", desc: "글꼴 에서 노멀, 압축 또는확장면을 선택합니다" },
    { num: 146, name: "font-style", desc: "font-family에서 지정된 폰트의스타일을 지정합니다" },
    { num: 147, name: "font-synthesis", desc: "브라우저가 굵은 글꼴과이탤릭 글꼴을 합성하는 것을 허용할지 설정합니다" },
    { num: 148, name: "font-variant", desc: "소문자를 작은 대문자, 즉 소문자크기의 대문자로 바꾸는 속성입니다" },
    { num: 149, name: "font-variant-alternates", desc: "대체 글리프의 사용을 제어합니다" },
    { num: 150, name: "font-variant-caps", desc: "대문자를위한 대체글리프의 사용을 제어합니다" },
    { num: 151, name: "font-variant-east-asian", desc: "일본과 중국 등 동아시아 스크립트를 대체 글리프의 사용" },
    { num: 152, name: "font-variant-ligatures", desc: "ligatures 글꼴의 글자들을 서로 더 조화롭게 보이도록 하는 기능을 지정합니다" },
    { num: 153, name: "font-variant-numeric", desc: "숫자,분수 및 서수 마커 대체 글리프의 사용을 제어합니다" },
    { num: 154, name: "font-variant-position", desc: "글꼴에 내장된 윗 첨자 또는 아랫첨자를 사용하도록 지정합니다" },
    { num: 155, name: "font-variation-settings", desc: "Variable fonts(가변 폰트) 의 폰트 스타일을 제어하는 CSS 속성입니다" },
    { num: 156, name: "font-weight", desc: "글꼴의 굵기를 지정한다" },
    { num: 157, name: "forced-color-adjust", desc: "강제 색상모드 중 선택 하여 특정 요소에 대한 저장을 할 수 있습니다" },
    { num: 158, name: "gap (grid-gap)", desc: "row-gap 및column-gap 의 약어 입니다. (갭제어" },
    { num: 159, name: "grid", desc: "2차원 표형태의 레이아웃을 만들 수 있는 속성입니다" },
    { num: 160, name: "grid-area", desc: "grid-templete-areas에 지정한영역을 정의해준다" },
    { num: 161, name: "grid-auto-columns", desc: "암시 적로 생성된 그리드 컬럼의 크기를 지정 트랙 이나 트랙의 패턴을 지정합니다" },
    { num: 162, name: "grid-auto-flow", desc: "자동 배치 알고리즘이 자동배치 항목을 그리드로 유입 얻을 방법을 정확하게 지정 작동 방식 CSS 속성을 제어합니다" },
    { num: 163, name: "grid-auto-rows", desc: "암시 적로 생성 된 그리드행의 크기를 지정 트랙 이나 트랙의 패턴을 지정합니다" },
    { num: 164, name: "grid-column", desc: "격자 아이템의 크기 및 위치 지정합니다" },
    { num: 165, name: "grid-column-end", desc: "그리드 열 내에서 그리드항목의 끝 위치를 지정합니다" },
    { num: 166, name: "grid-column-start", desc: "그리드 열 내에서그리드 항목의 시작 위치를 지정합니다" },
    { num: 167, name: "grid-row", desc: "그리드의 인라인 시작 및 인라인 끝 가장자리를지정합니다" },
    { num: 168, name: "grid-row-end", desc: "그리드 영역 의 인라인 끝가장자리를 지정합니다" },
    { num: 169, name: "grid-row-start", desc: "그리드 영역 의 가장자리를 지정합니다" },
    { num: 170, name: "grid-template", desc: "그리드의 열, 행 정의하기위한 약식속성입니다" },
    { num: 171, name: "grid-template-areas", desc: "어떤 형태로 구성되는지 설계도의 역할을 한다" },
    { num: 172, name: "grid-template-columns", desc: "열 넓이를 지정한다" },
    { num: 173, name: "grid-template-rows", desc: "지정한다" },
    { num: 174, name: "hanging-punctuation", desc: "시작 정지 또는 텍스트 행의 종료 여부를 속성 지정합니다" },
    { num: 175, name: "height", desc: "블럭레벨 요소의 높이를 지정한다" },
    { num: 176, name: "hyphenate-character", desc: "나누기 전 줄 끝에서 사용되는 문자(또는 문자열)를 설정합니다" },
    { num: 177, name: "hyphens", desc: "단어를 여러 줄에 걸쳐 때 하이픈되어야하는 속성을 지정합니다" },
    { num: 178, name: "image-orientation", desc: "대한 레이아웃 독립적 수정을 지정합니다" },
    { num: 179, name: "image-rendering", desc: "알고리즘을 설정한다" },
    { num: 180, name: "image-resolution", desc: "해상도를 설정합니다." },
    { num: 181, name: "ime-mode", desc: "IME(Input Method Editor)의상태를 반환하거나 설정합니다" },
    { num: 182, name: "initial-letter", desc: "세트, 떨어 제기하고, 침몰초기 문자에 대한 스타일링" },
    { num: 183, name: "initial-letter-align", desc: "단락내에서 초기 문자의 정렬을 지정합니다" },
    { num: 184, name: "inline-size", desc: "요소의 블록의 수평과 수직 크기를정의한다" },
    { num: 185, name: "inset", desc: "element와 테두리 사이의 element 내부에 있는공간을 의미합니다" },
    { num: 186, name: "inset-block", desc: "요소의 쓰기 모드, 방향성, 텍스트방향에 따라 실제 오프셋에 매핑하는 요소의 논리 블록의 시작과 끝 오프셋을 정의합니다" },
    { num: 187, name: "inset-block-end", desc: "요소의 쓰기 모드,방향성, 텍스트 방향에 따라 물리적 인 세트에 매핑하는 요소의 오프셋 (offset) 논리 블록의 끝을 정의합니다" },
    { num: 188, name: "inset-block-start", desc: "논리적 블록 요소의쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 인 세트에 매핑하는 요소의 오프셋 시작을 정의합니다" },
    { num: 189, name: "inset-inline", desc: "요소의 쓰기 모드, 방향성, 텍스트방향에 따라 실제 오프셋에 매핑 인라인 방향로 요소의 논리적 시작과 끝 오프셋을 정의합니다" },
    { num: 190, name: "inset-inline-end", desc: "요소의 쓰기 모드,방향성, 텍스트 방향에 따라 오프셋에 매핑하는 요소의 논리적 인라인 최종 삽입을 정의합니다" },
    { num: 191, name: "inset-inline-start", desc: "요소의 쓰기모드, 방향성, 텍스트 방향에 따라 오프셋에 매핑하는 요소의 논리적 인라인 시작 인 세트를 정의합니다" },
    { num: 192, name: "isolation", desc: "요소가 새로운 생성해야하는지 여부를 결정합니다." },
    { num: 193, name: "justify-content", desc: "가로축 - 중심축을기준으로 아이템들을 정렬한다. 주로 flex랑 사용된다" },
    { num: 194, name: "justify-items", desc: "수직축을 중심로 좌우로 위치를조정하는 속성입니다. Flexbox와 같은 개념입니다" },
    { num: 195, name: "justify-self", desc: "상자가 적절한 축 방향의 정렬컨테이너 내부 정당화되는 방법을 설정합니다" },
    { num: 196, name: "left", desc: "용기블럭의 너비를 참조합니다. 요소가 왼쪽에서 어느 위치에 배치될 지 결정합니다" },
    { num: 197, name: "letter-spacing", desc: "텍스트 문자 사이의 수평간격 동작을 설정합니다" },
    { num: 198, name: "line-break", desc: "줄 바꿈 규칙을 어떻게 할지 결정합니다." },
    { num: 199, name: "line-height", desc: "인라인 박스의 높이를 지정한다." },
    { num: 200, name: "line-height-step", desc: "라인 박스의 높이에 대한 공정 유닛을 설정한다" },
    { num: 201, name: "list-style", desc: "목록 항목의속성들(list-style-type, list-style-position, list-style-image)을 한꺼번에 지정하는 약식속성입니다" },
    { num: 202, name: "list-style-image", desc: "목록 항목 마커로사용되는 이미지를 설정합니다" },
    { num: 203, name: "list-style-position", desc: "속성의위치 설정 합니다" },
    { num: 204, name: "list-style-type", desc: "목록 항목 요소 (예 :디스크, 문자, 또는 사용자 정의 카운터 스타일 등) 마커를 설정합니" },
    { num: 205, name: "margin", desc: "엘리먼트와 엘리먼트 사이의 간격을 지" },
    { num: 206, name: "margin-block", desc: "요소의 쓰기 모드, 방향성, 텍스트방향에 따라 물리적 한계에 매핑하는 요소의 논리 블록의 시작과 끝 여백을 정의합니다" },
    { num: 207, name: "margin-block-end", desc: "요소의 쓰기 모드,방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 블록 끝 마진을 정의합니다" },
    { num: 208, name: "margin-block-start", desc: "요소의 쓰기모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리 블록 시작 마진을 정의합니다" },
    { num: 209, name: "margin-bottom", desc: "요소 밑에 쪽 마진을 설정합니다." },
    { num: 210, name: "margin-inline", desc: "약식 속성입니다 정의하는 두요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 인라인 시작과 끝 여백" },
    { num: 211, name: "margin-inline-end", desc: "요소의 쓰기 모드,방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 인라인 끝 마진을 정의합니다" },
    { num: 212, name: "margin-inline-start", desc: "속성은요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 인라인 시작 마진을 정의합니다" },
    { num: 213, name: "margin-left", desc: "소 왼쪽의 여백 영역을 설정 합니다." },
    { num: 214, name: "margin-right", desc: "엘리먼트의 오른쪽 마진을 지정한다." },
    { num: 215, name: "margin-top", desc: "엘리먼트의 상단 마진을 지정한다" },
    { num: 216, name: "margin-trim", desc: "컨테이너가 컨테이너의 가장자리에 인접한자식의 여백을 트리밍할 수 있습니다 " },
    { num: 217, name: "mask", desc: "아이템이 부분적로만 보여지게 하거나 혹은 완전히 가려서 보여지지않게 할 수 있는 기능을 가지고 있습니다" },
    { num: 218, name: "mask-border", desc: "요소의 경계의 가장자리를 따라 마스크를만들 수 있습니다" },
    { num: 219, name: "mask-border-mode", desc: "블렌딩 모드를 지정하는마스크의 테두" },
    { num: 220, name: "mask-border-outset", desc: "요소의있는 거리지정 마스크 보더 의 경계 상자에서 밖로 설정됩니다" },
    { num: 221, name: "mask-border-repeat", desc: "속성 세트 에지영역 , 소스 이미지가 요소의의 크기에 맞게 조정되는 마스크 테두리" },
    { num: 222, name: "mask-border-slice", desc: "요소 마스크 테두리의 구성 요소를 형성하는 데 사용됩니다 " },
    { num: 223, name: "mask-border-source", desc: "동적 최종마스크 테두리에 적용되는 영역로 소스 이미지를 분할하는데 사용된다" },
    { num: 224, name: "mask-border-width", desc: "속성은 엘레멘트의너비 설정 마스크 경계를 설정합니다" },
    { num: 225, name: "mask-clip", desc: "마스크에 의해 영향을받는 영역을 결정한다." },
    { num: 226, name: "mask-composite", desc: "그 다음 마스크 층과 현재의마스크 층에 사용되는 합성 동작을 나타낸다" },
    { num: 227, name: "mask-image", desc: "마스크 층로서 사용되는 화상을 설정한다." },
    { num: 228, name: "mask-mode", desc: "정의 된 마스크 참조 여부 속성 세" },
    { num: 229, name: "mask-origin", desc: "마스크의 원점을 설정합니다" },
    { num: 230, name: "mask-position", desc: "마스크의 위치를 설정합니다." },
    { num: 231, name: "mask-repeat", desc: "마스크 이미지를 반복하는 방법을 속성집합을 설정합니다" },
    { num: 232, name: "mask-size", desc: "마스크 이미지의 크기를 지정합니다" },
    { num: 233, name: "mask-type", desc: "마스크 타입을 설정합니다" },
    { num: 234, name: "max-block-size", desc: "기입 방향로 규정되는 방향의반대측에있는 요소들의 최대 크기를 지정하는 writing-mode . 즉, 쓰기 방향이 수평이면 max-block-size 는 max-height 와 같습니다 ." },
    { num: 235, name: "max-height", desc: "엘리먼트의 최대 높이를 지정한다" },
    { num: 236, name: "max-inline-size", desc: "기록 모드에 따라서,요소의 블록의 수평 또는 수직의 최대 크기를 정의한다" },
    { num: 237, name: "max-width", desc: "엘리먼트의 최대 넒이를 지정한다" },
    { num: 238, name: "min-block-size", desc: "기록 모드에 따라서, 요소의블록의 최소 수평 또는 수직 크기를 정의한다" },
    { num: 239, name: "min-height", desc: "엘리먼트의 내용영역 높이의 최소값을지정한다. 음수값은 지정할 수 없다" },
    { num: 240, name: "min-inline-size", desc: "기록 모드에 따라서,요소의 블록의 수평 또는 수직의 최소 크기를 정의한다" },
    { num: 241, name: "min-width", desc: "엘리먼트의 최소 넓이를 지정한다" },
    { num: 242, name: "mix-blend-mode", desc: "요소의 내용은 요소의 부모의내용과 요소의 배경로 혼합하는 방법" },
    { num: 243, name: "object-fit", desc: "img 나 video 요소와 같은 대체요소의 콘텐츠 크기를 어떤 방식로 조절해 요소에 맞출 것인지 지정합니다" },
    { num: 244, name: "object-position", desc: "대체 요소의 콘텐츠 정렬방식을 지정합니다" },
    { num: 245, name: "offset", desc: "정의 된 경로를 따라 애니메이션화 된 요소에 필요한 모든속성을 설정한다" },
    { num: 246, name: "offset-anchor", desc: "실제로 경로를 따라 움직이는offset-path 를 따라 이동하는 요소의 상자 내부 지점을 지정합니다 " },
    { num: 247, name: "offset-distance", desc: "CSS 속성 지정은 함께위치 offset-path 요소의 위치가된다" },
    { num: 248, name: "offset-path", desc: "수행 할 요소의 이동 경로를 지정하고,부모 컨테이너 내의 요소의 위치를 정의 또는 SVG 좌표계" },
    { num: 249, name: "offset-position", desc: "오프셋의 위치값을설정합니다" },
    { num: 250, name: "offset-rotate", desc: "소자의 배향 / 정의 방향offset-path " },
    { num: 251, name: "opacity", desc: "요소의 투명도를 결정합니다" },
    { num: 252, name: "order", desc: "플렉스 또는 그리드 컨테이너에서 항목을 배치하는 순서를설정합니다" },
    { num: 253, name: "orphans", desc: "표시해야하는 블록 컨테이너 선의 최소 설정 저면(A)의 페이지 , 영역 또는 컬럼 " },
    { num: 254, name: "outline", desc: "단일 선언에서 대부분의 개요 속성을 설정합니다 ." },
    { num: 255, name: "outline-color", desc: "요소의 외곽선의 색상을설정합니다" },
    { num: 256, name: "outline-offset", desc: "간 공간 설정 윤곽 요소의가장자리 또는 경계" },
    { num: 257, name: "outline-style", desc: "요소의 윤곽의 스타일을설정합니다. 윤곽선은 border 외부의 요소 주위에 그려지는 선입니다 " },
    { num: 258, name: "outline-width", desc: "엘레멘트의 윤곽의 두께를설정합니다" },
    { num: 259, name: "overflow", desc: "내용이 박스보다 큰 경우 밖로 넘친 부분을어떻게 표시할지를 지정한다" },
    { num: 260, name: "overflow-anchor", desc: "조정 스크롤 위치가내용의 변화를 최소화하기 위해 브라우저의 스크롤 고정 행동을 거부 할 수있는 방법을 제공합니다" },
    { num: 261, name: "overflow-block", desc: "상자의 블록 시작과 블록끝 가장자리를 오버 플로우 어떤 쇼 속성 집합. 이것은 아무것도, 스크롤 막대 또는 오버플로 내용 일 수 있습니다" },
    { num: 262, name: "overflow-clip-margin", desc: "얼마나 외부의 경계를 가지는 요소를 결" },
    { num: 263, name: "overflow-inline", desc: "내용이 상자의 인라인시작과 끝 가장자리를 오버 플로우 어떤 쇼 속성 집합" },
    { num: 264, name: "overflow-wrap", desc: "라우저가 줄 상자를 넘쳐에서텍스트를 방지하기 위해 다른 깨지지 않는 문자열 내에서 줄 바꿈을 삽입할지 여부를 설정, 인라인 요소에 적용됩니다" },
    { num: 265, name: "overflow-x", desc: "블록 레벨 요소의 왼쪽과 오른쪽가장자리를 오버 플로우 어떤 쇼 속성 집합" },
    { num: 267, name: "overflow-y", desc: "블록 레벨 엘리먼트의 상부 및 하부가장자리를 넘쳐 어떤 방송 속성 세트. 이것은 아무것도 아니거나 스크롤 막대 또는 오버플로 내용 일 수 있습니다" },
    { num: 268, name: "overscroll-behavior", desc: "스크롤영역의 경계에 도달 할 때 브라우저가 무엇 CSS 속성을 설정합니다" },
    { num: 269, name: "overscroll-behavior-block", desc: "스크롤 영역의 블록 방향 경계에 도달하면 CSS 속성은 브라우저의 동작을 설정합니다." },
    { num: 270, name: "overscroll-behavior-inline", desc: "스크롤 영역의 인라인 방향의 경계에 도달하면 CSS 속성은 브라우저의 동작을설정합니다" },
    { num: 271, name: "overscroll-behavior-x", desc: "스크롤 영역의 수평 경계에 도달하면 CSS 속성은 브라우저의 동작을 설정합니다" },
    { num: 272, name: "overscroll-behavior-y", desc: "스크롤 영역의 수직 경계에 도달하면 CSS 속성은 브라우저의 동작을 설정합니다" },
    { num: 273, name: "padding", desc: "엘리먼트의 상, 하, 좌, 우 여백을 한꺼번에지정합니다" },
    { num: 274, name: "padding-block-end", desc: "속성은 요소의 쓰기모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리적 블록 끝 패딩을 정의합니다" },
    { num: 275, name: "padding-block-start", desc: "요소의 쓰기모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리 블록 시작 패딩을 정의합니다" },
    { num: 276, name: "padding-bottom", desc: "요소 내부의 아래쪽 여백을설정합니다" },
    { num: 277, name: "padding-inline-end", desc: "요소의 쓰기모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리적 인라인 최종 패딩을 정의합니다" },
    { num: 278, name: "padding-inline-start", desc: "요소의쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리적 인라인 시작 패딩을 정의합니다" },
    { num: 279, name: "padding-left", desc: "엘리먼트의 왼쪽 여백을 지정한다." },
    { num: 280, name: "padding-right", desc: "엘리먼트의 오른쪽 여백을지정한다" },
    { num: 281, name: "padding-top", desc: "요소의 위쪽 패딩을 결정합니다" },
    { num: 282, name: "page-break-after", desc: "페이지 나누기 후 현재요소" },
    { num: 283, name: "page-break-before", desc: "이 속성은break-before 속성 로 대체되었습니다 " },
    { num: 284, name: "page-break-inside", desc: "이 속성은break-inside 속성로 대체되었습니다 " },
    { num: 285, name: "perspective", desc: "3 차원 위치 요소 일부 관점을 제공하기위해, Z = 0 인 평면과 사용자 사이의 거리를 결정한다" },
    { num: 286, name: "perspective-origin", desc: "변형되는 요소에배치되는 perspective() 변형 함수 와 달리 3차원 공간에서 변형된 자식의 부모에 첨부됩니다 " },
    { num: 287, name: "place-content", desc: "CSS의 단축형 속성 (즉, 한번에 블록 및 인라인 두 방향을 따라 정렬 내용을 수행 할 수 있습니다 align-content 및 justify-content 등 관련 레이아웃 시스템의 특성)그리드 또는 인 flexbox " },
    { num: 288, name: "place-items", desc: "약식 속성은 한 번에 블록 및 인라인 두방향을 따라 정렬 항목을 수행 할 수 있습니다 (즉, align-items 및 justify-items 속성)과 같은 관련 레이아웃 시스템에 그리드 또는 인flexbox . 두 번째 값이 설정되지 않은 경우 첫 번째 값도 사용됩니다" },
    { num: 289, name: "place-self", desc: "단축형 속성은 당신이 (즉, 한 번에 블록과인라인 방향 모두에서 개별 항목을 정렬 할 수 있습니" },
    { num: 290, name: "pointer-events", desc: "어떤 상황 (있는 경우)에따라 속성 집합은 특정 그래픽 요소가 될 수있는 대상 포인터 이벤트" },
    { num: 291, name: "position", desc: "엘리먼트의 배치방법을 지정한다" },
    { num: 292, name: "print-color-adjust", desc: "출력 장치에서요소의 모양을 최적화하기 위해 사용자 에이전트 가 수행할 수 있는 작업을 설정합니다" },
    { num: 293, name: "quotes", desc: "브라우저가 사용하는 추가 인용 부호를 렌더링하는 방법을속성 집합을 설정합니다" },
    { num: 294, name: "resize", desc: "요소 의 크기를 조정할 수 있는지 여부와 방향을결정합니다" },
    { num: 295, name: "right", desc: "용기블럭의 너비를 참조합니다. 요소가 오른쪽에서 어디에 배치될 지 결정합니다" },
    { num: 296, name: "rotate", desc: "각각 독립적로의 회전 변환을 지정할 수 있습니다" },
    { num: 297, name: "row-gap (grid-row-gap)", desc: "요소의 행 사이 의 간격( gutter ) 크기를 설정합니다" },
    { num: 298, name: "ruby-align", desc: "기재 위에 다른 루비 원소의 분포를정의한다" },
    { num: 299, name: "ruby-position", desc: "기본 요소에 루비 요소 친척의위치를 정의합니다. 요소 위( over ), 요소 아래( under ) 또는 오른쪽에 있는 문자 사이( inter-character )에 위치할 수 있습니" },
    { num: 300, name: "scale", desc: "개별적로 독립적 규모의 변환을 지정할 수 있습니다" },
    { num: 301, name: "scroll-behavior", desc: "탐색 또는 CSSOM스크롤 API에서 트리거 스크롤 할 때 속성은 스크롤 상자의 동작을 설정합니다" },
    { num: 302, name: "scroll-margin", desc: "훨씬처럼 값을 지정, 한 번에요소의 스크롤 여백의 모든 설정합니다" },
    { num: 303, name: "scroll-margin-block", desc: "블록차원의 요소의 스크롤 마진을 설정한다" },
    { num: 304, name: "scroll-margin-block-end", desc: "상자를 스냅포트에 맞추는 데 사용되는 블록 차원의 끝에서 스크롤 스냅 영역의 여백을 정의합니다 " },
    { num: 305, name: "scroll-margin-block-start", desc: "이 상자를 스냅포트에 맞추는 데 사용되는 블록 차원의 시작 부분에서 스크롤 스냅영역의 여백을 정의합니다" },
    { num: 306, name: "scroll-margin-bottom", desc: "엘리먼트의 하단 마진을 지정한다" },
    { num: 307, name: "scroll-margin-inline", desc: "인라인차원의 요소의 스크롤 마진을 설정한다" },
    { num: 308, name: "scroll-margin-inline-end", desc: "이 상자를 snapport에 맞추는 데 사용되는 인라인 차원의 끝에서 스크롤 스냅영역의 여백을 정의합니다 " },
    { num: 309, name: "scroll-margin-inline-start", desc: "이 상자를 snapport에 맞추는 데 사용되는 인라인 차원의 시작 부분에서 스크롤스냅 영역의 여백을 정의합니다 " },
    { num: 310, name: "scroll-margin-left", desc: "엘리먼트의왼쪽 마진을 지정한다" },
    { num: 311, name: "scroll-margin-right", desc: "이 상자를snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 오른쪽 여백을 정의합니다" },
    { num: 312, name: "scroll-margin-top", desc: "이 상자를snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 위쪽 여백을 정의합니다" },
    { num: 313, name: "scroll-padding", desc: "한 번에 요소의 모든면에세트 스크롤 패딩을 설정합니다" },
    { num: 314, name: "scroll-padding-block", desc: "블록차원의 요소의 스크롤 패딩을 설정한다" },
    { num: 315, name: "scroll-padding-block-end", desc: "블록 사이즈의 단부 에지 오프셋을 정의합니다" },
    { num: 316, name: "scroll-padding-block-start", desc: "블록 사이즈의 시작 에지에 대한 속성을 정의 오프셋을 설정합니다" },
    { num: 317, name: "scroll-padding-bottom", desc: "밑바닥 오프셋을 정의 합니다." },
    { num: 318, name: "scroll-padding-inline", desc: "인라인 차원의 요소의 스크롤 패딩을 설정한다" },
    { num: 319, name: "scroll-padding-inline-end", desc: "인라인 측정에 단부 가장자리의 속성을 정" },
    { num: 320, name: "scroll-padding-inline-start", desc: "인라인 측정의 시작 에지에 대한 속성을 정의 옵셋 영역 보는 최적의 사용자의관점에서 일을 배치하기위한 대상 영" },
    { num: 321, name: "scroll-padding-left", desc: "좌측의속성을 정의 옵셋 최적 가시 영역 은 사용자의 관점에서 일을 배치하기위한 대상 영역로서 사용하는 영역을 정의합니다" },
    { num: 322, name: "scroll-padding-right", desc: "우측에대한 오프셋을 정의합니다" },
    { num: 323, name: "scroll-padding-top", desc: "속성의 상단에대해 오프셋을 정" },
    { num: 324, name: "scroll-snap-align", desc: "상자의 스냅위치를 스냅 컨테이너의 스냅포트(정렬 컨테이너) 내에서 스냅 영역(정렬 주제)의 정렬로 지정합니다" },
    { num: 325, name: "scroll-snap-coordinate", desc: "이 기능은 더 이상 권장되지 않습니다" },
    { num: 326, name: "scroll-snap-destination", desc: "이 기능은 더 이상 권장되지 않습니다" },
    { num: 327, name: "scroll-snap-points-x", desc: "물리보다는 논리상 방향과 차원 맵핑을 통해 레이아웃을 제어하는 능력을 제공하는 속성 및 값을 정의하는 CSS 모듈입니다" },
    { num: 328, name: "scroll-snap-points-y", desc: "물리보다는 논리상 방향과 차원 맵핑을 통해 레이아웃을 제어하는 능력을 제공하는 속성 및 값을 정의하는 CSS 모듈입니" },
    { num: 329, name: "scroll-snap-stop", desc: "스크롤 컨테이너가 건너 가능한 스냅 위치에 허용되는지 여부 속성을 정의합니다" },
    { num: 330, name: "scroll-snap-type", desc: "포인트를 고정하는방법을 엄격 속성 집합 하나가 경우에 스크롤 컨테이너에 적용됩니" },
    { num: 331, name: "scrollbar-color", desc: "속성은 스크롤 트랙과엄지 손가락의 색상을 설정합니다" },
    { num: 332, name: "scrollbar-width", desc: "사용하면 작성자가 요소의 스크롤 막대가 표시될 때 최대 두께를 설정할 수 있습니다" },
    { num: 333, name: "shape-image-threshold", desc: "속성에 대한 값로 이미지를 이용한 형상 추출 할 알파 채널 임계 값을 설정합니다" },
    { num: 334, name: "shape-margin", desc: "속성 집합은 CSS 모양의 마진을사용하여 생성 된 shape-outside " },
    { num: 335, name: "shape-outside", desc: "속성은 인접한 인라인 콘텐츠가둘러싸야 하는 사각형이 아닐 수 있는 모양을 정의합니다" },
    { num: 336, name: "tab-size", desc: "탭 문자 (+ 3209 U)의 폭을 지정하는 데사용됩니다" },
    { num: 337, name: "table-layout", desc: "테이블의 레이아웃을 정의합니다." },
    { num: 338, name: "text-align", desc: "블럭안 인라인 인라인 요소의 수평 정렬을지정한" },
    { num: 339, name: "text-align-last", desc: "블록 또는 행의 마지막줄 오른쪽 강제 줄 바꿈하기 전에, 정렬되는 방식 CSS 속성을 설정합니다" },
    { num: 340, name: "text-combine-upright", desc: "속성세트는 문자의 조합을 단일 문자의 공간로. 결합 된 텍스트가 1em보다 넓은 경우 사용자 에이전트는 1em 이내의 콘텐츠에 맞아야합니다" },
    { num: 341, name: "text-decoration", desc: "텍스트에 밑줄, 윗줄,가운데줄이나 깜빡거림의 장식적인 요소를 지정한다" },
    { num: 342, name: "text-decoration-color", desc: "텍스트 요소의 밑줄의 색깔을 결정합니다" },
    { num: 343, name: "text-decoration-line", desc: "속성집합 같은 밑줄 또는 윗줄로, 요소의 텍스트에 사용되는 장식의 종류" },
    { num: 344, name: "text-decoration-skip", desc: "요소에영향을 미치는 텍스트 장식이 건너뛰어야 하는 요소 콘텐츠의 부분을 설정합니다" },
    { num: 345, name: "text-decoration-skip-ink", desc: "글리프 센더와 디 센더를 통해 통과 할 때 overlines와 밑줄이 그려하는 방법속성 지정합니다" },
    { num: 346, name: "text-decoration-style", desc: "속성에 의해 지정된 라인의 스타일 설정 text-decoration-line . 스타일은 text-decoration-line 로 설정된 모든 행에 적용됩니다 ." },
    { num: 347, name: "text-emphasis", desc: "텍스트에 강조 표시를적용합니다" },
    { num: 348, name: "text-emphasis-color", desc: "속성을강조 마크의 색상을 설정합니다" },
    { num: 349, name: "text-emphasis-position", desc: "루비 텍스트처럼 강조 표시를위한 공간이 충분하지 않으면 줄 높이가 증가합니다" },
    { num: 350, name: "text-emphasis-style", desc: "속성이강조 표시의 모양을 설정합니다" },
    { num: 351, name: "text-indent", desc: "블록의 텍스트 행하기 전에 넣어 빈공간 (들여 쓰기)의 길이를 설정합니다" },
    { num: 352, name: "text-justify", desc: "텍스트에 적용되어야한" },
    { num: 353, name: "text-orientation", desc: "속성은 행의 텍스트문자의 방향을 설정합니다" },
    { num: 354, name: "text-overflow", desc: "숨겨진 오버플로 콘텐츠가사용자에게 신호되는 방식을 설정합니다" },
    { num: 355, name: "text-rendering", desc: "텍스트를 렌더링 할 때최적화 할 작업에 대한 렌더링 엔진에 대한 정보를 제공합니다" },
    { num: 356, name: "text-shadow", desc: "텍스트에 그림자를 추가합니다" },
    { num: 357, name: "text-size-adjust", desc: "(모바일 폰트 크기조정 관련" },
    { num: 358, name: "text-transform", desc: "텍스트를 활용하는 CSS속성을 지정합니다" },
    { num: 359, name: "text-underline-position", desc: "속성은 사용하여 설정 밑줄의 위치를 지정합니다" },
    { num: 360, name: "top", desc: "용기블럭의 높이를 참조합니다. 위쪽에서 요소가 어디에 배치 될것인가 결정합니다" },
    { num: 361, name: "touch-action", desc: "터치 스크린 사용자가 조작 할 수있는방법을 CSS 속성을 설정합니다" },
    { num: 362, name: "transform", desc: "요소를 변형시킬 수 있습니다" },
    { num: 363, name: "transform-box", desc: "박스의 변형효과를설정합니다" },
    { num: 364, name: "transform-origin", desc: "요소의 변환에대한 원점을 설정합니다" },
    { num: 365, name: "transform-style", desc: "요소의 아이들이 3D공간에 위치하거나 요소의 평면에 평평 여부 속성 집합" },
    { num: 366, name: "transition", desc: "애니메이션 효과를 입힐 때 속도를조절하는 방법을 제공합니다" },
    { num: 367, name: "transition-delay", desc: "속성의 시작하기전에 대기하는 CSS 속성 지정 기간 전환 효과 때 그 값 변경" },
    { num: 368, name: "transition-duration", desc: "전환애니메이션 완료하는 데 소요되는 시간을 설정합니다" },
    { num: 369, name: "transition-property", desc: "트렌지션 프로퍼티를 설정합니다" },
    { num: 370, name: "transition-timing-function", desc: "트랜지션의 타이밍을 설정합니다" },
    { num: 371, name: "translate", desc: "transform 속성로 요소에 회전,크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다" },
    { num: 372, name: "unicode-bidi", desc: "함께와 direction 특성,문서의 양방향 텍스트가 처리되는 방법을 결정합니다" },
    { num: 373, name: "user-select", desc: "사용자가 텍스트를 선택할 수 있는지여부를 속성을 제어합니다" },
    { num: 374, name: "vertical-align", desc: "인라인 엘리먼트나 테이블의셀 안에서 수직정렬을 지정한다" },
    { num: 375, name: "visibility", desc: "문서의 레이아웃을 변경하지 않고 CSS 속성표시하거나 숨기는 소자입니다" },
    { num: 376, name: "white-space", desc: "공백문자를 어떻게 다룰것인가를 정의한다" },
    { num: 377, name: "widows", desc: "표시해야하는 블록 컨테이너 선의 최소 개수 설정 상부(A)의 페이지 , 영역 또는 컬럼 " },
    { num: 378, name: "width", desc: "블럭레벨 요소의 너비를 지정한다" },
    { num: 379, name: "will-change", desc: "요소에 예상되는 변화의 종류에 관한힌트를 브라우저에 제공케 한다" },
    { num: 380, name: "word-break", desc: "단어의 분리를 어떻게 할 것인지결정합니다" },
    { num: 381, name: "word-spacing", desc: "단어 사이의 간격을 지정한다." },
    { num: 382, name: "writing-mode", desc: "텍스트의 선이 수평 또는 수직로배치 여부 속성 집합뿐만 아니라 블록이 진행되는 방향" },
    { num: 383, name: "z-index", desc: "엘리먼트의 겹쳐지는 순서를 지정한다" },
];

const searchTime = document.querySelector(".search__time span");
    const searchList = document.querySelector(".search__list");
    const searchAnswers = document.querySelector(".search__answers");
    const searchMissAnswers = document.querySelector(".search__missAnswers");
    const searchStart = document.querySelector(".search__box .start");
    const searchInput = document.querySelector("#search");
    const searchAudio = document.querySelector("#audio");
    const searchAudioC = document.querySelector("#audioC");
    const searchAudioF = document.querySelector("#audioF");
    const searchAudioPlay = document.querySelector(".search__audio .play");
    const searchAudioStop = document.querySelector(".search__audio .stop");
    const searchCount = document.querySelector(".search__info .search__count span");
    const searchTotal = document.querySelector(".search__info .search__total span");
    const searchResult = document.querySelector(".search__result .result");
    const searchResultWrap = document.querySelector(".search__result");
    const searchRestart = document.querySelector(".search__result .restart");

    let goodJobSound = new Audio("../assets/audio/Success.m4a");
    let clearSound = new Audio("../assets/audio/up.mp3");

    let timeReamining = 120,    //남은시간
        timeInterval = "",  //시간 간격
        Score = 0,    //점수
        answers = {}; //새로운 정답

    function updateList(){
        cssProperty.forEach( data =>{
            searchList.innerHTML += `<span>${data.name}</span>`;
        });
    }
    updateList();

    //게임 시작하기
    function startQuiz(){
        //시작버튼 없애기 / 속성 리스트 없애기
        searchStart.style.display = "none";
        searchList.style.display = "none";
        

        //시간 설정
        timeInterval = setInterval(reduceTime, 1000);

        //뮤직 추가하기
        searchAudio.play();
        searchAudioStop.style.display = "none";
        searchAudioPlay.style.display = "block";
        
        //점수 계산하기
        searchTotal.innerText = cssProperty.length;

        //정답 체크
        checkAnswers();

    }

    //인풋 체크하기
    function checkInput(){
        let input = event.currentTarget.value.trim().toLowerCase();
        
        if(answers.hasOwnProperty(input) && !answers[input]){
            goodJobSound.play();
            answers[input] = true;  //정답일 경우 true로 바꿔주기
            Score++;    //점수++

            //정답표시
            searchAnswers.style.display = "block";
            searchAnswers.innerHTML += `<span>${input}</span>`;
            //점수 표시
            searchCount.innerHTML = Score;

            //정답 사운드
            // searchAudioC.play();

            //정답 초기화
            searchInput.value = "";
        }

    }
    //정답 체크하기 : 정답을 객체 파일로 만들기
    function checkAnswers(){
        cssProperty.forEach(item =>{
            let answer = item.name.trim().toLowerCase();
            answers[answer] = false;
        });
        // console.log(answers);
    }

    // 오답 보여주기
    function missAnswers(){
        searchMissAnswers.style.display = "block";
        cssProperty.forEach(miss =>{
            let answer = miss.name.trim().toLowerCase();
            if(answers[answer] == false){
                searchMissAnswers.innerHTML += `<span>${miss.name}</span>`;
            }
        });
    }

    //시간 설정하기
    function reduceTime(){
        timeReamining--;

        if(timeReamining == 0) endQuiz();

        searchTime.innerText = displayTime();
    }

    //시간 표시하기
    function displayTime(){
        if(timeReamining <= 0){
            return "0:00";
        } else {
            let minutes = Math.floor(timeReamining / 60);
            let seconds = timeReamining % 60;
            
            //초 단위가 한자리 수일 때 0추가
            if( seconds < 10) seconds = "0" + seconds;
            return minutes + ":" + seconds;
        }
    }

    //게임 끝났을 때
    function endQuiz(){
        // alert("게임이 끝났습니다.");
        //시작버튼 만들기
        searchStart.style.display = "block";
        searchStart.style.pointerEvents = "none";

        //오답 보여주기
        missAnswers();

        // 음악 끄기
        searchAudio.pause();
        searchAudioPlay.style.display = "none";
        searchAudioStop.style.display = "block";

        //시간 정지
        clearInterval(timeInterval);

        //메세지 출력
        searchResultWrap.classList.add("show");
        let point = Math.round((Score / cssProperty.length)*100);
        searchResult.innerHTML = `게임이 끝났습니다.<br> 당신은 ${cssProperty.length}개 중에 ${Score}개를 맟추셨습니다.<br>점수는 ${point}점 입니다.`;

    };

    // 다시 시작하기
    function restart(){
        searchResultWrap.classList.remove("show");
        // searchAudioBtn.classList.remove("playing");
        searchAudio.play();
        startQuiz();
        timeReamining = 120;
        Score = 0;
        searchScoreNow.innerText = "0";
        searchAnswers.innerHTML = "";
            searchMissAnswers.innerHTML = "";
    }
    
    //버튼 이벤트
    searchStart.addEventListener("click", startQuiz);
    searchInput.addEventListener("input", checkInput);
    searchAudioPlay.addEventListener("click", ()=>{
        searchAudioPlay.style.display = "none";
        searchAudioStop.style.display = "block";
        searchAudio.pause();
    });
    searchAudioStop.addEventListener("click", ()=>{
        searchAudioPlay.style.display = "block";
        searchAudioStop.style.display = "none";
        searchAudio.play();
    });
    searchRestart.addEventListener("click", restart);

    // searchRestart.addEventListener("click", restart);   ''

    // // 서치게임
    // const searchClose1 = document.querySelectorAll(".search__header div");
    // searchClose1.forEach( (e) => {
    //     e.addEventListener("click", () => {
    //         searchResultWrap.classList.remove("show");
    //         searchStart.style.display = "block";
    //         timeReamining = 120;
    //         Score = 0;
    //         searchCount.innerText = "0";
    
    //         searchAnswers.innerHTML = "";
    //         searchMissAnswers.innerHTML = "";
    
            
    //         searchAudio.pause();
    //         searchAudioPlay.style.display = "none";
    //         searchAudioStop.style.display = "block";
    //         searchTime.innerText = displayTime();
    //         clearInterval(timeInterval);
    //     });
    // })