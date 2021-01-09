# HTML Minifiers Benchmark

[html-minifier-terser@5.1.1]: https://www.npmjs.com/package/html-minifier-terser
[htmlnano@0.2.8]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier-terser@5.1.1] | [htmlnano@0.2.8] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.blog](https://stackoverflow.blog/) | 78 | 72 | 66 |
| [github.com](https://github.com/) | 181 | 158 | 148 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 79 | 73 | 73 |
| [npmjs.com](https://www.npmjs.com/features) | 29 | 25 | 25 |
| **Avg. minify rate** | 0% | **10%** | **13%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
