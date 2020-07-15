# HTML Minifiers Benchmark

[html-minifier@4.0.0]: https://www.npmjs.com/package/html-minifier
[htmlnano@0.2.6]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier@4.0.0] | [htmlnano@0.2.6] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.blog](https://stackoverflow.blog/) | 76 | 67 | 66 |
| [github.com](https://github.com/) | 131 | 70 | 117 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 80 | 71 | 76 |
| [npmjs.com](https://www.npmjs.com/features) | 31 | 25 | 28 |
| **Avg. minify rate** | 0% | **22%** | **10%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
