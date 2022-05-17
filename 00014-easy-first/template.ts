// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never

// T[number]
type ages = [1,2,3]
// union
type t1 = ages[number]

// 看看 某个值是不是在union里面
type t2 = 1 extends ages[number] ? true : false



// js
function first (arr) {
    // body 
    if(!arr.length) return
    return arr[0]
}

// 知识点
// 1.extends类型条件判断
// 2.获取tuple的length属性 index
// 3.extends union 判断的规则
// 4.infer的使用(推断)