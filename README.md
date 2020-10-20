# HTML Minifiers Benchmark

[html-minifier@4.0.0]: https://www.npmjs.com/package/html-minifier
[htmlnano@0.2.7]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier@4.0.0] | [htmlnano@0.2.7] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.blog](https://stackoverflow.blog/) | 89 | 82 | 76 |
| [github.com](https://github.com/) | 215 | 187 | 178 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 76 | 71 | 71 |
| [npmjs.com](https://www.npmjs.com/features) | 31 | 28 | 27 |
| **Avg. minify rate** | 0% | **10%** | **13%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
