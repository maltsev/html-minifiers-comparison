import htmlnano from 'htmlnano';
const safePreset = require('htmlnano').presets.safePreset;

export default function (html) {
    return htmlnano.process(html, {
        collapseWhitespace: 'aggressive',
        removeAttributeQuotes: true,
        removeRedundantAttributes: true
    }, safePreset).then(result => result.html);
}
