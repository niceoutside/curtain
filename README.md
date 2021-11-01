# Curtain

## TODOs

- [x] move from GitHub to npm registry for version `1.0.0`
- [ ] create supporting packages
  - [x] svelte (not needed, can be used directly)
  - [ ] react
  - [ ] vue
  - [ ] angular

## Installation

```bash
npm i @niceoutside/curtain
```

## Usage

### Add a curtain

To add a curtain reveal effect to a node, attach a curtain to the HTML node.

```ts
import { CurtainPole } from './CurtainPole';

const pole = new CurtainPole();
const curtain = document.getElementById('curtain');

pole.hang(curtain);
```

### Remove a curtain

You can remove a curtain by calling the following method:

```ts
const curtain = document.getElementById('curtain');

pole.takeDown(curtain);
```

### Clean up

To remove everything at once, you can call the `destroy` method:

```ts
pole.destroy();
```

## Configuration

### color (`string`)

The `color` property defines the color of the curtain.

```ts
pole.hang(curtainGreen, { color: 'green');
pole.hang(curtainBlack, { color: '#000');
```

### yOffset (`number`)

The `yOffset` defines an offset factor for the y axis. Default is `0` - no offset.

_Example_: If the factor is `-0.2` the curtain will be fully lifted 20% before the corresponding div reaches the top.

_Example 2_: If the factor is `0.5` the curtain will still hang 50% when the correspondig div reaches the top.

```ts
pole.hang(curtain, { yOffset: 0.5 });
```
