Many popular RPG games have a feature where you can simply press a key and call your horse. Your horse will appear, no matter how far away from it you are. 
This mod adds this feature to Minecraft.

## Features

To get a personal horse, you first need to sit on one (works on llamas too!) and press the P key.
If that horse isn't already owned by another player, that horse becomes your personal horse. You can only have one personal horse at a time.
To then call that horse, you need to press the V key. If your horse is near you, it will try to walk to you.
If it is further away it will teleport to you. It can event follow you through dimensions (configurable)!
If your personal horse dies, you can't call it again (also configurable!)

![img](https://i.imgur.com/dJQn7MT.png)
*Setting a personal horse*

![img](https://i.gyazo.com/6f81eeb0f105fa4053d8836b75562b7e.gif)
*Calling a horse*

The mod also adds a handy GUI to see the stats of your personal horse.
To see the stats, press K.

![img](https://i.imgur.com/orztlWJ.png)
*Horse Stats GUI*

All Keybinds can be changed in the controls.

The mod is set up in a way that there can only be one entity of your personal horse in the world.
So even if the old horse is in unloaded chunks when you call a new one, the old one will be despawned when you enter those chunks the next time.

**Technical**
Any entity that extends AbstractHorse, meaning horses, donkeys, mules, skeleton and zombie horses and llamas can be personal horses. This also works with any modded horses as long as they extend AbstracHorse.

**Notable Config Options:**

deathIsPermanent: When this is set to false, your horse can be respawned after it dies. Any items that it was wearing will not be respawned with it.

maxCallingDistance: When this is set to something other than -1, you can only call your horse if it is in the range specified. This also accounts for cross-dimensional coordinate shift.

callableInEveryDimension: When this is set to false, the horse can only be called in dimensions specified in `callableDimsWhitelist`.

enableStatsViewer: If this is set to false, the horse stat viewer is disabled.

 

 