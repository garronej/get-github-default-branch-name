<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i>get github default branch name</i>
    <br>
    <br>
    <img src="https://github.com/garronej/get-github-default-branch-name/workflows/ci/badge.svg?branch=develop">
    <img src="https://img.shields.io/bundlephobia/minzip/get-github-default-branch-name">
    <img src="https://img.shields.io/npm/dw/get-github-default-branch-name">
    <img src="https://img.shields.io/npm/l/get-github-default-branch-name">
</p>
<p align="center">
  <a href="https://github.com/garronej/get-github-default-branch-name">Home</a>
  -
  <a href="https://github.com/garronej/get-github-default-branch-name">Documentation</a>
</p>

# Install / Import

```bash
$ npm install --save get-github-default-branch-name
```

```typescript
import { myFunction, myObject } from "get-github-default-branch-name";
```

Specific imports:

```typescript
import { myFunction } from "get-github-default-branch-name/myFunction";
import { myObject } from "get-github-default-branch-name/myObject";
```

## Import from HTML, with CDN

Import it via a bundle that creates a global ( wider browser support ):

```html
<script src="//unpkg.com/get-github-default-branch-name/bundle.min.js"></script>
<script>
    const { myFunction, myObject } = get_github_default_branch_name;
</script>
```

Or import it as an ES module:

```html
<script type="module">
    import {
        myFunction,
        myObject,
    } from "//unpkg.com/get-github-default-branch-name/zz_esm/index.js";
</script>
```

_You can specify the version you wish to import:_ [unpkg.com](https://unpkg.com)

## Contribute

```bash
npm install
npm run build
npm test
```
