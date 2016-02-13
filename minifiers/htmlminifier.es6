import htmlMinifier from 'html-minifier';
import Promise from 'bluebird';

const options = {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeOptionalTags: true,
    removeEmptyElements: true,
    minifyJS: true,
    minifyCSS: true
};

export default function (html) {
    return new Promise((resolve, reject) => {
        resolve(htmlMinifier.minify(html, options));
    });
}
