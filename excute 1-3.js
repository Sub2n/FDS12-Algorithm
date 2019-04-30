// 문제 1
// 두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

// 예:

// insensitiveEqual('hello', 'hello'); -> true
// insensitiveEqual('hello', 'Hello'); -> true
// insensitiveEqual('hello', 'world'); -> false

function insensitiveEqual(string1, string2){
    if(string1.localeCompare(string2, undefined, {sensitivity: 'accent'}) === 0)
        return true;
    else return false;
}


// 문제 2
// 문자열 s와 자연수 n을 입력받아, 만약 s의 길이가 n보다 작으면 s의 왼쪽에 공백으로 추가해서 길이가 n이 되게 만든 후 반환하고, 아니면 s를 그대로 반환하는 함수를 작성해보세요.

// 예:

// leftPad('hello', 8); -> '   hello'
// leftPad('hello', 3); -> 'hello'

function leftPad(string, number){
    if(string.length >= number) return string;
    else{
        while(string.length < number){
            string = ' ' + string;
        }
        return string;
    }
}

// 문제 3
// 문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

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


