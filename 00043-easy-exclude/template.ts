
type MyExclude<T, U> = T extends U ? never : T


// js
// ["a", "b", "c"]  要判断
// ["a"]
function MyExclude (T, U: any[]) {
    // body
    const arr = []
    for(let i = 0; i < T.length; i++) {
        // const t = T[i]
        // let flag = false
        // for(let j = 0; j < U.length; j++) {
        //     const u = T[j]
        //     if(t === u) {
        //         flag = true
        //     }
        // }
        // if(!flag) {
        //     arr.push(t)
        // }
        
        // or下面这种写法
        if(!U.includes(T[i])) {
            arr.push(T[i])
        }
    }
    return arr
}