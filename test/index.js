const Clear = require('..');
const tape = require('tape');
tape('Fileable Component Test: Clear', async ({deepEqual, end}) => {
    const iterator = Clear({});
    deepEqual(
        (await iterator.next()).value
        , {
            directive:'CLEAR'
            , target:''
            , folder_context:''
        },
        'default should be created')
    end();
});
