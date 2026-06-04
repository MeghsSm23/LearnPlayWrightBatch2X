# JavaScript String Methods Cheat Sheet

A quick reference table of common JavaScript string methods with one-line examples.

| Method | Example | Result |
|---|---|---|
| `str.length` | `"hello".length` | `5` |
| `charAt()` | `"hello".charAt(1)` | `"e"` |
| `charCodeAt()` | `"A".charCodeAt(0)` | `65` |
| `codePointAt()` | `"💖".codePointAt(0)` | `128150` |
| `concat()` | `"hello".concat(" ", "world")` | `"hello world"` |
| `includes()` | `"hello".includes("ll")` | `true` |
| `startsWith()` | `"hello".startsWith("he")` | `true` |
| `endsWith()` | `"hello".endsWith("lo")` | `true` |
| `indexOf()` | `"hello".indexOf("l")` | `2` |
| `lastIndexOf()` | `"hello".lastIndexOf("l")` | `3` |
| `slice()` | `"hello".slice(1, 4)` | `"ell"` |
| `substring()` | `"hello".substring(1, 4)` | `"ell"` |
| `replace()` | `"hello".replace("l", "L")` | `"heLlo"` |
| `replaceAll()` | `"foo foo".replaceAll("foo", "bar")` | `"bar bar"` |
| `split()` | `"a,b,c".split(",")` | `["a","b","c"]` |
| `toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | `"HELLO".toLowerCase()` | `"hello"` |
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | `"  hi  ".trimStart()` | `"hi  "` |
| `trimEnd()` | `"  hi  ".trimEnd()` | `"  hi"` |
| `padStart()` | `"5".padStart(3, "0")` | `"005"` |
| `padEnd()` | `"5".padEnd(3, "0")` | `"500"` |
| `repeat()` | `"ha".repeat(3)` | `"hahaha"` |
| `match()` | `"abc".match(/b/)` | `["b"]` |
| `matchAll()` | `[..."a1b2".matchAll(/\d/g)]` | `[["1"],["2"]]` |
| `search()` | `"hello".search(/l/)` | `2` |
| `localeCompare()` | `"a".localeCompare("b")` | `-1` |
| `normalize()` | `"é".normalize("NFC")` | `"é"` |
| `valueOf()` | `"hello".valueOf()` | `"hello"` |
| `String.fromCharCode()` | `String.fromCharCode(65, 66)` | `"AB"` |
| `String.fromCodePoint()` | `String.fromCodePoint(128512)` | `"😀"` |

> Note: `replaceAll()` is supported in modern JavaScript environments and is useful when replacing all occurrences at once.
