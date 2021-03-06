import url from 'url';
import fs, { promises as fsPromise } from 'fs';
import fetch from 'node-fetch';
import handlebars from 'handlebars';
import Promise from 'bluebird';
import urls from './urls';

const minifiers = {
    htmlminifierterser: require('./minifiers/htmlminifierterser'),
    htmlnano: require('./minifiers/htmlnano'),
};

const stats = {};
const rates = {};


for (let minifierName of Object.keys(minifiers)) {
    rates[minifierName] = [];
    fs.mkdirSync('./build/' + minifierName);
}


const promises = urls.map(pageUrl => {
    const pageUrlHostname = url.parse(pageUrl).hostname.replace('www.', '');
    stats[pageUrl] = {
        url: pageUrl,
        name: pageUrlHostname
    };

    return fetchPage(pageUrl)
        .then(html => {
            stats[pageUrl].source = {
                size: KB(html.length)
            };

            const minifierPromises = Object.keys(minifiers).map(minifierName => {
                const minifierDir = './build/' + minifierName;
                const minifier = minifiers[minifierName].default;
                return minifier(html)
                    .then(minifiedHtml => {
                        stats[pageUrl][minifierName] = {
                            size: KB(minifiedHtml.length)
                        };
                        const minifyRate = (html.length - minifiedHtml.length) / html.length;
                        rates[minifierName].push(minifyRate);

                        return minifiedHtml;
                    })
                    .then(minifiedHtml => {
                        const filepath = minifierDir + '/' + pageUrlHostname + '.html';
                        fsPromise.writeFile(filepath, minifiedHtml);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            });

            return Promise.all(minifierPromises).then(() => html);
        })
        .then(html => {
            const filepath = './build/' + pageUrlHostname + '.html';
            return fsPromise.writeFile(filepath, html);
        })
        .catch(console.error);
});


Promise.all(promises).then(() => {
    const versions = {};
    for (let minifierName of Object.keys(rates)) {
        let minifierRates = rates[minifierName];
        let sumRate = minifierRates.reduce((prev, current) => prev + current);
        rates[minifierName] = Math.round(sumRate * 100 / minifierRates.length);
        versions[minifierName] = minifiers[minifierName].version;
    }

    return fsPromise.readFile('./README.template.md', 'utf8').then(template => {
        return handlebars.compile(template)({ stats, rates, versions });
    });
}).then(content => {
    return fsPromise.writeFile('./README.md', content, 'utf8');
});


function fetchPage(pageUrl) {
    return fetch(pageUrl)
        .then(response => {
            console.log(pageUrl + ' fetched');
            return response.text();
        })
        .catch(fatalError);
}


function fatalError(error) {
    console.error(error);
    process.exit(1);
}


function KB(bytes) {
    return Math.round(bytes / 1024);
}
