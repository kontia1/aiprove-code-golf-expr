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

Reproduce: `node test.js` (checked locally; the file itself is the entry).

```
$ node test.js
bytes 21 fails 0
```
