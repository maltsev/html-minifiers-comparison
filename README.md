# HTML Minifiers Benchmark

[html-minifier]: https://www.npmjs.com/package/html-minifier
[htmlnano]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier] | [htmlnano] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.com](http://stackoverflow.com/) | 250 | 199 | 208 |
| [github.com](http://github.com/) | 51 | 43 | 45 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 71 | 64 | 68 |
| [npmjs.com](https://www.npmjs.com/features) | 26 | 20 | 21 |
| **Avg. minify rate** | 0% | **18%** | **14%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
