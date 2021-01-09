# HTML Minifiers Benchmark

[html-minifier-terser@{{versions.htmlminifierterser}}]: https://www.npmjs.com/package/html-minifier-terser
[htmlnano@{{versions.htmlnano}}]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier-terser@{{versions.htmlminifierterser}}] | [htmlnano@{{versions.htmlnano}}] |
|---------|------------:|----------------:|-----------:|
{{#each stats}}
| [{{ this.name }}]({{ this.url }}) | {{ this.source.size }} | {{ this.htmlminifierterser.size }} | {{ this.htmlnano.size }} |
{{/each}}
| **Avg. minify rate** | 0% | **{{ rates.htmlminifierterser }}%** | **{{ rates.htmlnano }}%** |


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
