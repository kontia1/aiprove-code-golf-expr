const u = require("./utils.js");
const cases = {
  factorial: [[0,1],[1,1],[2,2],[3,6],[4,24],[5,120]],
  countVowels: [["aeiou",5],["AEIOU",5],["Hello",2],["XYZ",0]],
  sum: [[[1,2,3],6],[[],0]],
  max: [[[1,5,3],5],[[-1,-5],-1]],
  reverse: [["abc","cba"],["ab","ba"]],
  isPalindrome: [["aba",true],["ab",false]],
  clamp: [[5,0,3,3],[1,0,3,1]],
  unique: [[[1,1,2],[1,2]]],
  average: [[[2,4],3],[[],0]],
  titleCase: [["hello world","Hello World"],["o'neill","O'Neill"]],
};
for (const [fn, list] of Object.entries(cases)) {
  for (const c of list) {
    const args = Array.isArray(c) && c.length > 2 ? c.slice(0, c.length - 1) : [c[0]];
    const want = c[c.length - 1];
    let got, err;
    try { got = u[fn](...args); } catch (e) { err = e.message; }
    const ok = err ? false : JSON.stringify(got) === JSON.stringify(want);
    if (!ok) console.log("MISMATCH", fn, JSON.stringify(args), "got", err ? "ERR:" + err : got, "want", want);
  }
}
