import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type r = typeof tuple;

// 字面量类型
let str = "123";
type str = typeof str;

const strConst = "234";
type sc = typeof strConst;

// number string symbol
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// const let js世界
// type interface type世界

// 1.typeof 把js的世界抓换为ts世界

// expect(() => {
//   type error = TupleToObject<[[1, 2], {}]>;
// }).throw();
