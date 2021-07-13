# JavaScriptStudy
### 1_자바스크립트
  *	웹 점유율 100%의 프로그래밍 언어
  *	웹 브라우저가 해석하여 동작하는 스크립트 언어
#### JavaScript를 적용하는 3가지 방식
  *	이벤트에 직접 사용하기
  *	<script> 내부에 작성하기
  *	다른 파일의 자바스크립트 가져오기
### 2_변수와 타입들
 *	자바스크립트에는 변수 타입이 없다(데이터 타입은 있음)
 *	var : 단순하게 변수를 선언한다 (생략 가능)
 * let : 변경이 허용된 변수를 선언한다
 * const : 변경이 금지된 변수를 선언한다

### 3_자바와의 비교
#### 비교 연산, 조건문, 반복문, 문자열 메서드 모두 자바와 비슷하다
### 4_숫자 타입 메서드
 * toString() : 숫자를 문자로 바꿔줌
 * Number() : 다양한 자바스크립트 값들을 숫자 타입으로 변환해주는 메서드
    * 단 숫자 변환에 실패할 경우 반환 값이 NaN
 * Date타입을 Number로 변환하면 Unix Time이 된다
 * parstInt() : 문자열을 정수 타입으로 반환(Number는 여러 가지 타입을 숫자로 변환)
    * 공백은 알아서 자른 후 맨 앞의 숫자를 사용
 * parseFloat() : 문자열을 실수 타입으로 변환
 * Number.MAX_VALUE, Number_SAFE_INTEGER, Number_MIN_VALUE, Number_MIN_SAFE_INTEGER : 숫자 관련 상수
### 5_배열 타입 메서드
 * 자바랑 비슷함
 * .join(separator) : 원하는 구분자로 이어붙여 문자열로 반환
 * .pop : 맨 뒤의 값을 제거하면서 꺼냄
 * .push(): 맨 뒤에 값을 추가한다
 * Array.from(배열) : 기입한 배열을 복사한 새로운 배열을 반환함
 * shift() : 맨 앞의 값을 제거하면서 꺼낸다
 * unshift() : 맨 앞에 갚을 추가한다
 * delete 배열[n] : n번째의 배열 값을 삭제
   * 이때 n번째는 empty가 됨
 * concat(배열) : 기입한 배열을 이어 붙인 배열을 반환
 * slice(n), (n,m) : 배열 자르기
   * n번째까지 자르기, n부터 m번째까지만 남기고 자르기(m은 포함x)
 * splice(start_index, delete_count, 넣고 싶은 값들 …)
 * sort : 기본적으로는 문자열 오름차순으로 정렬
 ```C
 다음 책들을 출판년도 순으로 정렬해보세요.
books = [
    {name: '수학의 정석', pub_year: 2016},
    {name: '자바의 정석', pub_year: 2020},
    {name: '수학 익힘책', pub_year: 1995},
 ]
  books.sort(function(a, b){
      return a.pub_year-b.pub_year;
  });
```
	
* 이때 숫자 정렬은 숫자 타입 Comparator를 달아줘야 함

#### 자바 스크립트에서는 함수 선언은 가장 먼저 실행 된다(맨 밑에 있어도)
#### 함수에 ()을 안붙이면 함수를 전달(콜백)을 하는 것이고 ()을 붙이면 함수를 실행하는 거임
### 6_자바스크립트 스타일로 데이터 처리하기
1. forEach(함수)
	1. 배열.forEach(함수)=>굳이 배열이 아니더라도 순차적으로 꺼낼 수 있는 것에 대해서 가능
	2. forEach가 사용할 함수에 대해서 첫 번째는 값, 두 번째는 인덱스, 세 번째는 배열이 도착하도록 설계
	3. 배열이 가진 모든 값을 이용해 순차적으로 리턴 값이 없는 함수를 처리한다
	```C
	const numbers = [45, 1, 9, 100, 55, 22, -37];
	let result = '';
	numbers.forEach(makeListItem);
	function makeListItem(value) {
            result += '<li>' + value +"</li>\n"
        }
	//result에 대해 값이 채워짐
	```
2. map(함수)
 * map : 배열의 모든 요소에 해당 함수를 적용한 새로운 배열을 생성한다
```C
const map_result2 = numbers.map(function(value){
    return value * 3;
});
```	
3. filter(함수)
* filter : 필터로 사용된 함수에서 살아남은 요소만 남기는 기능
```C
const fulter_result = numbers.filter((value) => {
    return value > 40
});
```
4. every(함수)
* every : 배열 내의 모든 요소들이 테스트를 통과하는지 검사한다
```C
var test_result = numbers.every((value) => value > 0);
});
```
4. reduce(callback, init_value) 
* 배열 내의 모든 내용들을 순차적으로 사용해 하나의 결과를 생성한다
* callback(acc, value, index, arr)	
* acc: accumulator, 누산기, 값이 누적되는 곳
* value : 순차적으로 꺼낸 값
```C
const numbers2 = [45, 1, 9, 100, 55, 22, -37];
var reduct_result = numbers2.reduce((acc, value) => acc + value, 0);
//acc의 초기값은 0이며 number2의 value들이 순차적으로 acc와 처리하고 다 끝나면 acc를 반환함
});
```
	
#### function() 대신 () => 쓸 수 있음
### forEach를 이용해 추후에 데이터 추가하기
```C
 var school_data = [];

for (let index = 1; index <= 100; index++) {
    school_data.push({
    id: `${index}`, kor: `${parseInt(Math.random() * 101)}`,
    eng: `${parseInt(Math.random() * 101)}`, mat: `${parseInt(Math.random() * 101)}`
    })
}

school_data.forEach((value, index, array) =>
   array[index].avg = (value.kor+value.eng+value.mat) / 3
)
```	
### 7_이벤트 속성
* onclick : 해당 요소를 클릭했을 때
```C
<input type="text" onclick="console.log('클릭함')">
```
* onmouseover : 해당 요소에 마우스가 올라갔을 때
```C
<input type="text" onmouseover="console.log('마우스 올라가기')">
```
* onkeydown: 키보드가 눌렀을 때
```C
<input type="text" onkeydown="console.log('키보드 눌름')">
```
* onload : 브라우저가 페이지 로딩을 모두 끝냈을 때
* onchange : 요소에 변동이 있을 때 발생
```C
<input type="text" onchange="console.log('바뀜')">
```
* onfocus : 포커스를 얻었을 때 발생
```C
<input type="text" onfocus="console.log('포커스')">
```

#### e.preventDefault() : 이벤트의 기본 동작을 막아주는 역할(추후에 새로고침을 막을 수도 있음)

#### 자바스크립트로 이벤트 처리 콜백 함수 설정하는 방법들
```C
<script>
const test_input = document.getElementById("test");
const test_area = document.getElementById("area");
test_input.onkeydown = (e) => {
  console.log(e);
  e.preventDefault();
}//방법 1

test_area.addEventListener('click', (e => {
  console.log(e);
}))//방법 2
</script>
```
### 8_DOM(Document Object Model)
* 웹 브라우저는 html코드를 해석하여 document 객체를 생성한다
* 자바스크립트를 통해 html문서의 모든 것을 수정할 수 있다
* html문서의 css, 속성, 내용, 태그, 이벤트… 등등
	
#### 원하는 HTML요소를 찾는 메서드들
* document.getElementById(id)=>id를 잡아냄
* document.getElementsByTagName(tag_name)=>태그 이름을 잡아냄
* document.querySelector(css_selector)=>첫번째 css 선택자를 잡아옴
* document.querySelectorAll(css_selector)=>모든 css 선택자들을 잡아옴(.class, #id)
* document.getElementsByClassName(class_name)=>클래스 이름을 잡아냄
	
#### 이때 이러한 반환값들은 HTMLCollection이므로 만약 배열로 바꾸어 forEach 등으로 쓰고 싶다면 Array.from을 쓰면 됨
* 반환값들을 배열로 바꾸게 되면 배열 타입 메서드(forEach 등등)을 쓸 수가 있다(배열로 바꾸지 않는다면 쓸 수가 없음)
```C
const img_path_list = [
    '../image/dog1.jpg',
    '../image/dog2.jpg',
    '../image/dog3.jpg'
];

const img_nodes = document.getElementsByTagName("img");
Array.from(img_nodes).forEach((value) => {
    value.src=`${img_path_list[0]}`
})
```

#### 찾은 HTML요소를 변경하는 방법
* element.innerHTML : 요소의 태그 사이 내용에 접근
* element.attribute : 요소의 속성에 접근1
* element.setAttribute(name, value) : 요소의 속성에 접근2
* element.style.property : 요소의 스타일 속성에 접근
* element.getAttribute(속성이름) : 속석이름의 값을 반환해줌

```C
<p class="warning">1</p>
<p class="warning">2</p>
<p class="warning">3</p>

<script>

	const a = document.getElementsByClassName("warning");
	console.log('class : '+a[0].getAttribute("class"));//warning
	a[0].setAttribute('id', 'warning2')//id라는 요소를 추가
	console.log('id : '+a[0].getAttribute("id"));//warning2
	a[0].setAttribute('id', 'warning3')//id라는 요소 수정
	console.log('id : '+a[0].getAttribute("id"));//warning3
```	
### 9_Node
* document에 있는 모든 것은 Node다
* 요소를 더욱 세분화 하면 element node와 text node로 나눌 수 있다
* 주석들은 comment node이다
* createElemet를 이용해 태그를 만들고 createTextNode를 이용해 태그 안에 넣을 정보를 작성한다
* appendChild를 이용해 createElemet를 이용해 만든 태그 안에 createTextNode를 넣는다
```C
<div id="content">
    <p>This is paragraph 1.</p>
    <p>This is paragraph 2.</p>
</div>
<script>
    const content = document.getElementById("content");
    const first_para = document.querySelector("#content > p:first-child");
    const second_para = document.querySelector("#content > p:nth-child(2)");

    function duPush() {
        //요소를 객체지향적으로 추가
        const new_para = document.createElement("p");
        const text_node = document.createTextNode("This is new paragraph");
        
        new_para.appendChild(text_node);
        // content.insertBefore(new_para, first_para);//paragraph 1 앞에 내용 추가
        // content.insertBefore(new_para, second_para);//paragraph 2 앞에 내용 추가
        content.appendChild(new_para)//맨 뒤에
    }

    function doPop() {
        const elemet_to_delete = document.querySelector('#content > :last-child')
        elemet_to_delete.remove();//마지막 요소 지우기
    }
</script>
```
### 10_Class
#### 자바스크립트에서 클래스와 인스턴스 생성하기
```C
function Coffee(name, origin, price, size) {
    this.name = name;
    this.origin = origin;
    this.price = price;
    this.size = size;
}
const americano = new Coffee('아메리카노','미국',2000,'venti');
const cafe_latte = new Coffee('카페라떼','브라질',3500,'grande');
```
#### 자바스크립트 프로토타입
* Coffee라는 클래스를 정의했을 때 Coffee도 Coffee.prototype의 자손이다
* Coffee 클래스의 가장 원형이 되는 형태를 prototype이라고 한다
* 해당 클래스의 prototype을 수정하면 모든 인스턴스들이 영향을 받는다
### 11_Closure
* 자바스크립트에서 전역 변수는 최대한 자제하는 것이 좋다
* ()를 사용해 변수의 영역을 명확하게 지칭하여 사용하는 것이 좋다
* self-invoke function : 함수를 선언한 다음 바로 실행시켜버리는 방식
```C
const add = (function functionA() {
    let x = 10;
    return function() {
        x += 1;
        return x;
    };
})();//x에 절대로 직접 접근할 수 없지만 값을 변화시킬 수는 있음(Private 효과)
// functionA(); //존재하지 않는 함수
// console.log(x);//존재하지 않는 변수
console.log(add());//11
console.log(add());//12
console.log(add());//13
console.log(add());//14
```
### 12_BOM(웹 브라우저 모델)
* 웹 브라우저와 소통하기 위한 웹 브라우저 모델
* 자바스크립트의 모든 객체, 함수, 변수들은 브라우저의 window객체의 멤버가 된다
	
#### 브라우저 모델의 여러 객체들
* window : 웹 브라우저 최상위 객체
* window.screen : 웹 브라우저가 알고 있는 모니터에 관한 정보(window.은 생략 가능함 아래에도 마찬가지)
* document : DOM. 모든 html코드 내용을 담고 있는 객체
* location : 현재 웹 브라우저가 보고있는 위치(페이지)에 관한 객체
   * location.assign(‘url’)=>url로 이동함 (href보다는 좀 더 객체지향적임)
* open(url) : 해당 url로 새 창을 띄워줌
* navigator : 해당 웹 브라우저에 관한 정보
* alert : 경고창 팝업
* prompt : 메시지를 받아올 수 있음
* confirm : 확인 or 취소를 누를 수 있음(값을 받아올 수도 있음)
* window.history : 웹 브라우저의 이동 내역을 담고 있는 객체
   * history.back() : 뒤로 버튼을 누르는 효과
   * history.forward() : 앞으로 버튼을 누르는 효과
   * history.go(상대적인 거리) : -1은 바로 이전 페이지, +1은 바로 다음 페이지, 0은 새로고침
### 13_Timeout
* window.setTimeout(callback, millisec)
   * 전달한 시간만큼 기다린 후에 콜백 함수를 한번 실행한다
```C
window.setTime(() => {
  window.alert('5초가 지났습니다!')
}, 5000); //5초임
```
* window.setInterval(callback, millisec)
   * 전달한 시간마다 콜백 함수를 실행한다
```C
<div class="clock">
<script>
    var clock = document.querySelector('.clock');
    
    window.setInterval(() => {
        var date = new Date();
        var hour = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        clock.innerHTML = `${hour}시 ${min}분 ${sec}초`;
    }, 1000);//clock이라는 class에 1초마다 date를 생성하여 시, 분, 초를 innerHTML로 입력
</script>
```
  
```C
//글자에 타이핑 치는 효과를 내는 코드
let index = 0;
let start = 0;
const content = `roqkfdml  개발의 진심인 김태환의 포트폴리오입니다. `;
var tf = true;

var interval = setInterval(() => {
    const text = document.querySelector("h3");
    if (tf) {
        text.innerHTML = content.substring(start, index++);
        if (index === 8) {
            tf = false;
        }
    }else{
        text.innerHTML = content.substring(start, index--);
        if (index === 0) {
            tf = true;
            start = 8;
            index = 9;
        }
    }
    if (index === content.length) {
    stop(interval);
}
}, 200); 
```
### 14_WebStorage
* 웹 브라우저에서 제공하는 약간의 저장 공간
* 사용자의 웹 브라우저에 웹 페이지를 운용하는데 필요한 약간의 데이터를 저장해둘 수 있다
* Key:Value 형태	
* 로컬 스토리지는 웹 브라우저를 종료하더라도 데이터가 유지된다
* 세션 스토리지는 웹 브라우저를 종료하면 데이터가 삭제된다
### 15_DATA 속성
#### data-* : 해당 속성에 저장한 값은 자바스크립트에서 꺼낼 용도로 설정해 놓는다.
```C
<article id="electriccars" data-columns="3" data-index-number="12314" data-parent="cars"> </article>

var article = document.getElementById('electriccars'); 
article.dataset.columns // "3" 
article.dataset.indexNumber // "12314" 
article.dataset.parent // "cars"
```
#### 즉 data-name은 element.dataset.name으로 꺼낼 수 있고 data-name-index는 element.dataset.nameIndex로 꺼낼 수 있다.
