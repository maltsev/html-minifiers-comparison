import htmlnano from 'htmlnano';
const safePreset = require('htmlnano').presets.safePreset;

export default function (html) {
    return htmlnano.process(html, {
        collapseWhitespace: 'aggressive',
        removeAttributeQuotes: true,
        removeRedundantAttributes: true
    }, safePreset).then(result => result.html);
}

export const { version } = require('../node_modules/htmlnano/package.json');
