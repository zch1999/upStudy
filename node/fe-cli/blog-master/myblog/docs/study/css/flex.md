# flex系列学习
2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。
## flex是什么
Flex是FlexibleBox的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。注意，设为Flex布局以后，子元素的float、cl
ear和vertical-align属性将失效。

采用Flex布局的元素，称为Flex容器（flexcontainer），简称"容器"。它的所有子元素自动成为容器成员，称为Flex
项目（flexitem），简称"项目"。

容器默认存在两根轴：水平的主轴（mainaxis）和垂直的交叉轴（crossaxis），项目默认沿主轴排列。

## 以下6个属性设置在容器上。

flex-direction属性决定主轴的方向（即项目的排列方向）。

flex-wrap属性定义，如果一条轴线排不下，如何换行。

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为rownowrap。

justify-content属性定义了项目在主轴上的对齐方式。justify-content: flex-start | flex-end | center | space-between | space-around;

align-items属性定义项目在交叉轴上如何对齐。align-items: flex-start | flex-end | center | baseline | stretch;

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。


## 以下6个属性设置在项目上。

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认
值为auto，即项目的本来大小。

flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为01auto。

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父
元素的align-items属性，如果没有父元素，则等同于stretch。

## flex面试点
>left:500px; right:400px
 当子盒子 left + right > flex盒子的宽度
 默认时子盒子都按比例缩放
 当flex-shrink为2：1时:<br/>
 缩放比例为 500*2：400 = 5:2 既自身值乘以比的比例

- 当子盒子有padding时
flex-shrink: left2 right1
标准盒模型中 content-box
  - 500+2*40 + 400+2*20 - 400 = 420
  left = 500 - 420 * 5/7
  right = 400 - 420 * 2/7

- box-sizeing: border-box, ie盒模型
  - 500+400-600=300
  - 超出部分 420 * 2 ：360 = 7：3
