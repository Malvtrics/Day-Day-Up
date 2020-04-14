如何自动编译ts文件?
tsc --init 生成tsconfig 文件
terminal -> run task -> tsc : watch

package-lock.json 干啥的？

写ts代码必须指定类型

初始化数组的两种方法
var arr:number[] = [11,22,’12’]
console.log(arr)
浏览器可以显示 但是编译器会报错
var arr:Array<number> = [11,22,33]
也可以用any

如果定义数组的时候不指定类型，就是any类型
枚举类型 标识符没有	赋值，默认输出下标，下标是根据前一个值递增的

任意类型的作用  修改html中某个元素的背景颜色 
null和undefined是其他数据类型的子类型
undefined原来es5没有赋值的时候是undefined，现在可以直接定义undefined类型
var num:undefined;

void类型 定义方法没有返回值
never 表示不会出现的值，定义一个抛出异常的匿名函数 赋值给never类型 一般不会用到这个类型 因为一般都需要知道异常的具体信息

?age 可选参数 默认参数=  …result  三点运算法接受多个参数 可遍历

ts中函数也是可以重载的
还可以用箭头函数 settimeout 中function(){} 简化为 ()=>

es5中可以在原型链上扩展属性和方法
es5用对象冒充实现类的继承,这种继承不能继承原型链上的属性和方法
function Dog(){
        Animal.call(this);
    }

原型链继承是可以继承原型链上的属性和方法的
Dog.prototype = new Animal();
也可以写成 Dog.prototype = Animal.prototype;
问题：实例化子类的时候没有办法传参给父类
所以最终采用 原型链加对象冒充组合继承



