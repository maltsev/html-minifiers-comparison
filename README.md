# HTML Minifiers Benchmark

[html-minifier]: https://www.npmjs.com/package/html-minifier
[htmlnano]: https://www.npmjs.com/package/nano

| Website | Source (KB) | [html-minifier] | [htmlnano] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.com](http://stackoverflow.com/) | 236 | 186 | 195 |
| [github.com](http://github.com/) | 24 | 16 | 22 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 62 | 56 | 59 |
| **Avg. minify rate** | 0% | **22%** | **11%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
