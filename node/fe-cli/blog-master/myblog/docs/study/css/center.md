# css之居中
确定包含块

## 行盒子(行块盒) 水平居中
直接设置行盒(行块盒)父元素 ```text-align:center```

## 常规流块盒水平居中
定宽后设置左右margin为auto即可

## 单行文本的垂直居中
设置文本所在元素的行高，为整个区域的高度

## 行块盒或块盒里多行文本的垂直居中
不能真正实现居中，只能用padding模拟实现了


## 定位下的居中
### 绝对定位,固定定位
确定包含块后：<br/>
某个方向居中：<br/>
1. 水平定宽，垂直定高
2. 将左右（上下）距离设置为0
2. 将左右（上下）margin设置为auto

在定位下，设置margin为auto会自动吸收包含的内容

## 水平垂直居中
公共代码
```js
/* 公共代码 */
.wp {
    border: 1px solid red;
    width: 300px;
    height: 300px;
}

.box {
    background: green;    
}

.box.size{
    width: 100px;
    height: 100px;
}
/* 公共代码 */
<div class="wp">
    <div class="box size">123123</div>
</div>
```

### absolute + 负margin
```js
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```

### absolute + translate-50% 不需要知道宽高
```js
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
```
## 利用flex布局实际使用时应考虑兼容性
```js
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.containerdiv {
  width: 100px;
  height: 100px;
  background-color: pink; /*方便看效果*/
}
```

### 计算属性calc
这种方式也要求居中元素的宽高必须固定，所以我们为box增加size类，HTML代码如下
```js
<div class="wp">
    <div class="box size">123123</div>
</div>
/* 此处引用上面的公共代码 */
/* 此处引用上面的公共代码 */
/* 定位代码 */
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
}
```