import iterator from 'fileable-iterator';
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
export default Clear;
