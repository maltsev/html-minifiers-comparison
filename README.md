# HTML Minifiers Benchmark

[html-minifier@4.0.0]: https://www.npmjs.com/package/html-minifier
[htmlnano@0.2.8]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier@4.0.0] | [htmlnano@0.2.8] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.blog](https://stackoverflow.blog/) | 78 | 72 | 66 |
| [github.com](https://github.com/) | 215 | 187 | 177 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 78 | 73 | 72 |
| [npmjs.com](https://www.npmjs.com/features) | 29 | 25 | 25 |
| **Avg. minify rate** | 0% | **10%** | **13%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
