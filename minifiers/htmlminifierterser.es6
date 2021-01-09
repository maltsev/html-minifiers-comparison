import htmlMinifierTerser from 'html-minifier-terser';
import Promise from 'bluebird';

const options = {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    useShortDoctype: false,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeOptionalTags: false,
    removeEmptyElements: false
};

export default function (html) {
    return new Promise((resolve) => {
        resolve(htmlMinifierTerser.minify(html, options));
    });
}

export const { version } = require('../node_modules/html-minifier-terser/package.json');
