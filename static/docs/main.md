# Fileable Component: Clear

### Component:Clear

Wrapping components within a Clear component removes __all files__ from a given folder context before writing.

```javascript
import {Clear} from 'fileable-components';
const template = ()=><Clear><File name='empty_file' /></Clear>;
```

#### Attribute: target

The target is used target specific files via [glob pattern](https://github.com/isaacs/node-glob).

```javascript
import {Clear} from 'fileable-components';
const template = ()=><Clear target='**/*.md'><File name='readme.md' /></Clear>;
```

Patterns can be negated using the "!" character.

```javascript
import {Clear} from 'fileable-components';
const template = ()=><Clear target='!**/*.js'><File name='readme.md' /></Clear>;
```
