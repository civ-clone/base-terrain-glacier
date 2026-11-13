# base-terrain-glacier

The `Glacier` terrain: a land terrain of permanent ice.

For example: Civ2's Glacier, found at the poles, which holds Ivory and Oil.

This package only declares the class: it has no `main` and registers nothing, so installing it changes no game.
A game's rules register it and give it its yields.

```ts
import Glacier from '@civ-clone/base-terrain-glacier/Glacier';
import { instance as terrainRegistryInstance } from '@civ-clone/core-terrain/TerrainRegistry';

terrainRegistryInstance.register(Glacier);
```

Part of the Civ2 work (civ-clone/web-renderer#1008).
