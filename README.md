# HTML Minifiers Benchmark

[html-minifier]: https://www.npmjs.com/package/html-minifier
[htmlnano]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier] | [htmlnano] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.com](http://stackoverflow.com/) | 243 | 193 | 201 |
| [github.com](http://github.com/) | 24 | 18 | 21 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 64 | 56 | 60 |
| [npmjs.com](https://www.npmjs.com/) | 39 | 29 | 27 |
| **Avg. minify rate** | 0% | **21%** | **17%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
