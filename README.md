# HTML Minifiers Benchmark

[html-minifier@3.5.20]: https://www.npmjs.com/package/html-minifier
[htmlnano@0.2.0]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier@3.5.20] | [htmlnano@0.2.0] |
|---------|------------:|----------------:|-----------:|
| [stackoverflow.com](http://stackoverflow.com/) | 258 | 205 | 218 |
| [github.com](http://github.com/) | 63 | 51 | 56 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 77 | 69 | 74 |
| [npmjs.com](https://www.npmjs.com/features) | 32 | 29 | 30 |
| **Avg. minify rate** | 0% | **15%** | **9%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
