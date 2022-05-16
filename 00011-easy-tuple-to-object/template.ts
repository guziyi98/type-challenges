type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]] : P
}

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type str = TupleToObject<typeof tuple>

// js
function tupleToObject (arr) {
    // body
    const obj = {}
    arr.forEach(element => {
        obj[element] = element
    });
    return obj
}

// 1.返回一个对象
// 2.遍历array T[number]