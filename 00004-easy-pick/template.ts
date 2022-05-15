
// ts 联合类型 union
type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}

// 先写js在写ts
// 对比学习法

function myPick (todo, arr) {
    const obj = {}
    arr.forEach(item => {
        if(item in todo) {
            obj[item] = todo[item]
        }
    });
    return obj
}

// 1.返回一个对象
// 2.遍历数组
// 3.todo[item] 取值
// 4.看看item在不在todo里面