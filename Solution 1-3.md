## 문제 1
두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

Example:
```javascript
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```
## Solution

```javascript
function insensitiveEqual(string1, string2){
    if(string1.localeCompare(string2, undefined, {sensitivity: 'accent'}) === 0)
        return true;
    else return false;
}
```

### [String​.prototype​.locale​Compare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

A negative number if the reference string occurs before the compare string; positive if the reference string occurs after the compare string; 0 if they are equivalent.



---

## 문제 2

문자열 s와 자연수 n을 입력받아, 만약 s의 길이가 n보다 작으면 s의 왼쪽에 공백으로 추가해서 길이가 n이 되게 만든 후 반환하고, 아니면 s를 그대로 반환하는 함수를 작성해보세요.

Example:
```javascript
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```

## Solution

```javascript
function leftPad(string, number){
    if(string.length >= number) return string;
    else{
        while(string.length < number){
            string = ' ' + string;
        }
        return string;
    }
}
```

---

## 문제 3
문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

## Solution

```javascript
function vowelNum(string){
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var num = 0;
    for(i in string){
      if(vowels.has(string[i])){
        num ++;
      }
    }
    return num;
}
```
### [Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)

Set.has() is more faster than String​.prototype​.indexOf()
