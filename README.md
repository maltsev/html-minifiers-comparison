# HTML Minifiers Benchmark

[html-minifier-terser@5.1.1]: https://www.npmjs.com/package/html-minifier-terser
[htmlnano@1.0.0]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier-terser@5.1.1] | [htmlnano@1.0.0] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.blog](https://stackoverflow.blog/) | 95 | 87 | 82 |
| [github.com](https://github.com/) | 210 | 183 | 171 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 78 | 72 | 72 |
| [npmjs.com](https://www.npmjs.com/features) | 41 | 38 | 36 |
| **Avg. minify rate** | 0% | **9%** | **13%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
