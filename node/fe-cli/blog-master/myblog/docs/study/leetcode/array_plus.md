# 数组加1
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

>示例 1:<br/>
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:<br/>
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。

## 基本思路
首先用while遍历数组，只要数组从后往前有一个+1后不大于10，更改那位数组元素后，即可return digits,如果数组遍历完了还是没有return，那么就说明数组元素+1一直存在进位，则可以用js的splice添加首位元素并设值为1，最后修改新返回的数组的第二位为0，即可return digits

## 具体代码
```javascript
var plusOne = function(digits) {
    let i = digits.length - 1
    while(i>=0){
        if(digits[i] + 1 < 10){
            digits[i] = digits[i] + 1
            return digits
        }else{
            digits[i] = 0
        }
        i--
    }
    digits.splice(0,0,1)
    digits[1] = 0
    return digits
};



var plusOne = function(digits) {
    let flag = 1
    let tmp = 0
    let len = digits.length
    let i = len - 1
    while(i>=0){
        tmp = (digits[i] + flag)%10
        if(digits[i] + flag < 10){
            digits[i] = tmp
            flag = 0
        }else{
            digits[i] = tmp
            flag = 1
        }
        i--
    }
    if(flag == 1){
        digits.splice(0,0,1)
        digits[1] = tmp
    }
    return digits
};
```