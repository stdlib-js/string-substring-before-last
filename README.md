<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# substringBeforeLast

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the part of a string before the last occurrence of a specified substring.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-substring-before-last
```

</section>

<section class="usage">

## Usage

```javascript
var substringBeforeLast = require( '@stdlib/string-substring-before-last' );
```

#### substringBeforeLast( str, search )

Returns the part of a string before the last occurrence of a specified substring.

```javascript
var str = 'Beep Boop Beep';
var out = substringBeforeLast( str, 'Beep' );
// returns 'Beep Boop '

out = substringBeforeLast( str, 'Boop' );
// returns 'Beep '
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a substring is not present in a provided string, the function returns the input string.
-   If provided an empty substring, the function returns the input string.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var substringBeforeLast = require( '@stdlib/string-substring-before-last' );

var str = 'beep boop';
var out = substringBeforeLast( str, ' ' );
// returns 'beep'

out = substringBeforeLast( str, 'e' );
// returns 'be'

out = substringBeforeLast( str, 'x' );
// returns 'beep boop'

out = substringBeforeLast( str, '' );
// returns 'beep boop'
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-substring-before-last
```

</section>

<section class="usage">

### Usage

```text
Usage: substring-before-last [options] --search=<string> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --search string       Search string.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'foo\nbar\nbaz' | substring-before-last --search a --split /\r?\n/

    # Escaped...
    $ echo -n $'foo\nbar\nbaz' | substring-before-last --search a --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ substring-before-last abcdefg --search d
abc
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n $'beep\nboop' | substring-before-last --search p
bee
boo
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tboop' | substring-before-last --search p --split '\t'
bee
boo
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/substring-before`][@stdlib/string/substring-before]</span><span class="delimiter">: </span><span class="description">return the part of a string before a specified substring.</span>
-   <span class="package-name">[`@stdlib/string/substring-after`][@stdlib/string/substring-after]</span><span class="delimiter">: </span><span class="description">return the part of a string after a specified substring.</span>
-   <span class="package-name">[`@stdlib/string/substring-after-last`][@stdlib/string/substring-after-last]</span><span class="delimiter">: </span><span class="description">return the part of a string after the last occurrence of a specified substring.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-substring-before-last.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-substring-before-last

[test-image]: https://github.com/stdlib-js/string-substring-before-last/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-substring-before-last/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-substring-before-last/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-substring-before-last?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-substring-before-last.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-substring-before-last/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-substring-before-last/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/substring-before]: https://github.com/stdlib-js/string-substring-before

[@stdlib/string/substring-after]: https://github.com/stdlib-js/string-substring-after

[@stdlib/string/substring-after-last]: https://github.com/stdlib-js/string-substring-after-last

<!-- </related-links> -->

</section>

<!-- /.links -->
