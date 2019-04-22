'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var iterator = _interopDefault(require('fileable-iterator'));

const Clear = async function* ({
    folder_context = '',
    template_context = '',
    target = '',
    children: descendants
}) {
    const children = Array.isArray(descendants)
        ? descendants
        : descendants
            ? [descendants]
            : [];

    yield {
        directive: 'CLEAR',
        target,
        folder_context,
    };

    for (const child of children) {
        yield* iterator(child, {
            folder_context,
            template_context
        });
    }
};
Clear['FILEABLE COMPONENT'] = true;

module.exports = Clear;
