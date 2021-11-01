# Curtain

## TODOs

- [ ] move from GitHub to npm registry for version `1.0.0`
- [ ] create supporting packages
  - [ ] svelte
  - [ ] react
  - [ ] vue
  - [ ] angular

## Installation

```bash
npm i @niceoutside/curtain
```

## Usage

### Add a curtain

To add a curtain reveal effect to a node, you have to attach a curtain to the HTML node.

```ts
import { CurtainPole } from './CurtainPole';

const pole = new CurtainPole();
const curtain = document.getElementById('curtain');

pole.hang(curtain, { color: 'green' });
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

## Configuration options

### yOffset (`number`)

Defines an offset factor for the y axis. Default is `0` - no offset.

_Example_: If the factor is `-0.2` the curtain will be fully lifted 20% before the corresponding div reaches the top.

_Example 2_: If the factor is `0.5` the curtain will still hang 50% when the correspondig div reaches the top.
