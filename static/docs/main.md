![fileable logo](./static/docs/logo.png)

# Fileable Component: Clear

[Fileable](https://github.com/isaacs/fileable) template component used to delete files and folders

Wrapping components within a Clear component removes __all files__ from a given folder context before writing.

```javascript
import {Clear} from 'fileable-components';
const template = ()=><Clear><File name='empty_file' /></Clear>;
```

## Attributes

### target

Target specific files via [glob](https://github.com/isaacs/node-glob) pattern.

```javascript
import {Clear} from 'fileable-components';
const template = ()=><Clear target='**/*.md'><File name='readme.md' /></Clear>;
```

Patterns can be negated using "!".

```javascript
import {Clear} from 'fileable-components';
const template = ()=><Clear target='!**/*.js'><File name='readme.md' /></Clear>;
```
