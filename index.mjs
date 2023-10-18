// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,e){var n;if(!t(s))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",s));if(!t(e))throw new TypeError(r("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1===(n=s.lastIndexOf(e))?s:s.substring(0,n)}export{s as default};
//# sourceMappingURL=index.mjs.map
