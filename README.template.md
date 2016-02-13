# HTML Minifiers Benchmark

[html-minifier]: https://www.npmjs.com/package/html-minifier
[htmlnano]: https://www.npmjs.com/package/nano

| Website | Source (KB) | [html-minifier] | [htmlnano] |
|---------|------------:|----------------:|-----------:|
{{#each stats}}
| [{{ this.name }}]({{ this.url }}) | {{ this.source.size }} | {{ this.htmlminifier.size }} | {{ this.htmlnano.size }} |
{{/each}}


## Benchmark
```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
