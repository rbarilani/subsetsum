# rbarilani-subsetsum (WIP)

Find all possible combinations of a set of positive numbers to reach a given positive sum target.

## Install

With bower:

```bash
bower install rbarilani-subsetsum --save

```

With npm:

```bash
npm install rbarilani-subsetsum --save

```

## Usage

### Node

```js

var subsetsum = require('rbarilani-subsetsum');

var result = subsetsum.getSubsets([1,5,3,8], 8);
console.log(result);
// output: [[5,3],[8]]
```

### Browser

```html

<!-- ... -->
<script type="text/javascript" src="bower_components/subsetsum/src/subsetsum.js"></script>

<script type="text/javascript">
  var result = subsetsum.getSubsets([1,5,3,8], 8);
  console.log(result);
  // output: [[5,3],[8]]
</script>

```

## API Reference

..TODO..
