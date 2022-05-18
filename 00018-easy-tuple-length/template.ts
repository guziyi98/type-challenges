type Length<T extends readonly any[]> = T["length"]


// 知识点
// 什么是tuple类型
// tuple 和普通的数组有什么区别

// js
function getLength (arr) {
    // body
    if(!Array.isArray(arr)) return 
    return arr.length
}