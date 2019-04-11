'use strict';

var fileableComponents = require('fileable-components');

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
        const { props } = child;
        yield* new child.type({...props,
            folder_context,
            template_context
        });
    }
};
var index = fileableComponents.createComponent(Clear);

module.exports = index;
