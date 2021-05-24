**Overview**
Forgotten Items adds many new unique Items and Tools to the game, that are craftable in a special way. They don't have a normal crafting recipe, but they have a recipe that changes depending on the world that you're in. That means when starting off a fresh world you will never know what materials you need to craft an item. The recipes are discovered by reading runes, which are found in structure chests. The mod adds a new form of grind and exploration to the game that wasn't there before.

NOTE: This mod needs [TschippLib](https://minecraft.curseforge.com/projects/tschipplib) to run!
## Items

**Explosion Pickaxe**
The explosion pickaxe does what it says - It creates an explosion when breaking a block. The player is immune to that explosion. The dig speed is similar to iron.
The explosion can be cancelled by sneaking.

**Gamble Pickaxe**
The Gamble Pickaxe has a very special functionality. When breaking a block, there's a chance to either duplicate the drop, or destroy the block (dropping nothing). By default, there's a 30% chance to duplicate the drop. But with each level of fortune applied to the pickaxe, that chance increases by 10%. So with fortune III, there's a 60% chance to duplicate the drop. The pickaxe has very low durability.

**Vein Pickaxe**
The vein pickaxe automatically vein-mines the block that is broken. It is very useful for ore gathering, as it breaks - as the name implies - entire veins. It has 852 uses.
The vein-mine can be cancelled by sneaking.

**Hasty Pickaxe**
The hasty pickaxe is a pretty simple fast pickaxe, an improvement from gold. It doesn't have as much durability as diamond, but if it is enchanted with Efficiency V, it can insta-mine materials like stone and hardened clay. It has 547 uses.

**Obsidian Harvester**
The Obsidian harvester is an improvement of the Hasty Pickaxe. It breaks all blocks similarly to iron, but it can break Obsidian like Diamond would break Cobblestone.

**Bound Tools**
Bound tools have durability and digspeed similar to diamond, but when the player dies, they keep the tools in the inventory (soulbound). When dropped in the world, the tools can only be picked up by the player who crafted them. They cannot despawn, and are also immune to lava and other forms of damage. They get bound to the player from the moment that they're crafted. When the tools are bound, they take on a unique color, which stays with the player for all tools. Custom colors can be registered in the config file.

**Barkified Axe (Only when Barkifier installed)**
The barkified axe is only available when the latest version of [Barkifier](http://www.planetminecraft.com/mod/189-barkifier---create-six-sided-bark-logs-in-survival/) for 1.11.2 is installed. When breaking logs, the logs are automatically "barkified", meaning that they have bark on all six sides. That block can be placed and used for building various things, like custom trees. 

**Gems**
There are five different types of gems:
Shock Gems, Heat Gems, Water Gems, Wind Gems and Ender Gems.
All gems are only used as crafting components for higher-tier gadgets.

**Talismans**
For each gem there is a correspondent talisman.

The **Shock Talisman** absorbs all fall damage, when in the inventory, and transforms the damage into an explosion. The player is immune to said explosion. The size of the explosion depends on the damage that would have been inflicted. You can repair it in an anvil with a Shock gem.

The **Heat Talisman** can store lava, like a bucket (right click the source). Each lava block gives 10 "heat" points. When right clicking smeltable blocks, the blocks gets smelted in the world and 1 heat point gets consumed. So things like sand, clay and sponges can be smelted. There is a config option to also enable the smelting of blocks that would drop an item.

The **Water Talisman** creates a water source block when right clicked. It can also be used in crafting recipes, as a water bucket substitute. When crafting or placing, it consumes durability, which can be restored in an anvil with a water gem.

The **W****ind talisman** can be right clicked, and it gives the player a small boost in that direction. It can be spammed to take off and "fly". Just be careful, as fall damage is deadly (or use a shock talisman!). It can also be used with an elytra, as a substitute for rockets! You also fly way faster than with rockets. It can be repaired in an anvil with a wind gem.

Last but not least, the **Ender Talisman**. It teleports you wherever you're looking. It has a default range of 50 blocks, but that can be configured in the config file. It is repaired with ender gems.

**Golem Armor**
Golem armor has incredible strength, high armor toughness. It also gives you full knockback resistance when you're wearing the entire set. But it also has its disadvantages. When wearing the set in water, each armorpiece drags you down further. You can't really swim until you unequip the set.
Here's a picture of how it looks:
![img](https://i.imgur.com/WDt96Rb.png)

**Cushioned Boots**
The cushioned boots reduce your fall damage by 75%. They also reduce the size of the explosion when using them with a shock talisman. They can be repaired with wool.

**Lifebelt**
The lifebelt makes you float on water. It also somewhat negates or reduces the effects of the golem armor. It must be worn in the chestplate slot. It can also be repaired with wool.

## Crafting

Here I want to go a little more in depth on how the crafting works. All crafting recipes are generated with the world seed. That means that you will have different crafting recipes for every world (unless you use the same seed of course). All crafting recipes have one core item, and eight other items. The core item stays the same, but the other items change depending on the world. To find out what items you need to craft something, you need to find Crafting Runes. These runes generate in End Cities, Stronghold Libraries, Igloos, Desert Pyramids and Woodland Mansions. When you have found at least two runes, you can craft the Rune Reader:
![img](https://i.imgur.com/OJKH1Wp.png)

There, you insert a rune to see the recipe connected to that rune:
![img](https://i.imgur.com/PRmAFMk.png)
We can now see what the recipe is, but we don't know what it will output
(You can see it in creative mode, but not in survival mode). Now to find out what the output of this recipe is, we need to place the ingredients in a crafting table. But if the ingredients are hard to get, we may not want to spend a lot of time grinding only to find out that the output is an item that you don't really need.
That's why there is the advanced rune reader:
![img](https://i.imgur.com/jHqsXdH.png)
The advanced rune reader now shows the output of the recipe.
![img](https://i.imgur.com/7ePYlLD.png)
So now we can see, that this recipe would craft an ender gem.

The recipes can be generated with any block or item. This means, that if you're playing with many mods, that possibly add some creative-only items, it is possible that these items could end up in your recipes. To prevent this, there's a big config file (ForgottenItemsBannedList.cfg) with a list of all banned items. In there, you would write down all items that you want to disable for crafting.
By default, supported mods are:
- Pam's Harvestcraft
- RFTools
- Forestry
- Chisel
- BloodMagic
- Actually Additions
- BiomesOPlenty
- Extra Utilities 2
- All of my other mods
- And any items or blocks containing the word "creative"

**Custom Recipes**
Using the config file called ForgottenItemsCustomRecipes.cfg new, custom recipes for other items can be created! Example:
![img](https://i.gyazo.com/16aac7398696ee2de3876fd62b1e79fe.png)
First you add the name of the core item, in this case the nether star. Then, below the core item you add the output item. The core item always stays the same, but eight other items are generated from the seed to make up the recipe. You can add infinite recipes, just add them under eachother. The respective runes are also available in the creative inventory and generate in dungeon chests.
NOTE: For servers, this config needs to be the same for client and server.

 
Last but not least, have this overview of all the items (They are listed in the same order as in this post):
![img](https://i.imgur.com/giNLE9g.png)