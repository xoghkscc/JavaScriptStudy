function print(text){
    console.log(text);
}
const num1 =123;

print(num1.toString());
print(typeof num1.toString());

print(num1.valueOf());

print(Number(true));//1
print(Number(false));//0
print(Number('10.1234'));//10.1234
print(Number('   14324   '));//14324-공백제거
print(Number('Mike'));//뱐환에 실패하는 경우 NaN : 숫자가 아님
print(Number('10 11 2'));//뱐환에 실패하는 경우 NaN : 숫자가 아님
print(Number('123,456'));//뱐환에 실패하는 경우 NaN : 숫자가 아님

print(Number(new Date()));//1625102783878

print(parseInt("123.12323"));

