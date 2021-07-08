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
 
 


