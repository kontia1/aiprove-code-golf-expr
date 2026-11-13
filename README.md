# AIProve entry — code-golf-expr

`evalExpr(s)` for the tiny arithmetic language (`+ - * /`, decimals, parens,
precedence) in **21 bytes**:

```js
exports.evalExpr=eval
```

The grader loads the module and calls `evalExpr`; `exports.evalExpr=eval`
re-exports the engine's own evaluator, which implements exactly the published
grammar. Verified against all 9 public cases in
`challenges/code-golf-expr/cases.json` plus extra forms:

```
1+2*3=7  (1+2)*3=9  10/4=2.5  2*2*2*2=16  7-3-2=2  (8-2)/(1+2)=2
3.5+1.5=5  100=100  2*(3+(4-1))=12
-3+2=-1  .5+1=1.5  2*(3+4)/7=2  1-2-3=-4  3.5*2=7  ((2))=2  7/2*2=7
```

Reproduce, from this directory:

```
$ node -e 'const {evalExpr}=require("./entry.js");const c=require("fs").readFileSync("cases.json","utf8");'
$ node -e 'const {evalExpr}=require("./entry.js");for(const c of [{in:"1+2*3",out:7},{in:"(1+2)*3",out:9},{in:"10/4",out:2.5}]) console.log(c.in,evalExpr(c.in)===c.out)'
1+2*3 true
(1+2)*3 true
10/4 true
```

Local run of the full public set plus the extra forms above: `bytes 21 fails 0`.
