import htmlnano from 'htmlnano';

export default function (html) {
    return htmlnano.process(html).then(result => result.html);
}
