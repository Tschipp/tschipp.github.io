Fakename adds a simple way to change your Display name ingame.

The name does display in **Chat, Death Messages** and **over the Head of the Player.**

The name is world/server specific, meaning that it **doesn't** change your name permanently.

 This is **not** a hack, the server needs to install the mod as well.

 
To set your fake name, type

 
*/fakename set [player] \<fakename\>*

This will set the player's fake name to the provided fakename. If no player is specified, the sender's fake name will be changed. You can also use [color codes](https://www.curseforge.com/linkout?remoteUrl=http%3a%2f%2fminecraft.gamepedia.com%2fFormatting_codes), preceded with a &

Example: &6Notch displays as gold.

You can also use white spaces by typing /- (1.12 only) or by using quotes " " (1.15 and above)

 Example: My/-Name/-Is/-Tschipp would display as My Name Is Tschipp (In 1.12)

 Example: "My Name Is Tschipp" would display as My Name Is Tschipp (In 1.15+)

You can of course also combine color codes and white spaces.

 
To clear a fake name, type
 

*/fakename clear [player]*

 

This will remove the provided player's fake name. If no player is specified, the sender's fake name will be removed.

Aliases for the command are /fn and /fname.

You need to be OP on the Server / have Cheats enabled in your world if you want to execute the command.

(Or on 1.15+, you can clear your own name by leaving the player field blank)

 

To get the real name of a player, type

 

*/realname \<fakename\> (on 1.12)*

*or*

*/fakename real \<fakename\> (on 1.15+)*

 

If the fake name has any color codes or white spaces, ignore them.

Example: &4Herobrine/-the/-Boss would become HerobrinetheBoss

You can hit tab for auto completion. (Not on 1.15+, known issue)

This will return the the real name of the player with the provided fake name.

Aliases for the command are /rn and /rname. (on 1.12 only)

You do **not** need to be OP / have Cheats enabled to execute this command.


For 1.15+, you can change the permission levels of the commands in the server config (inside the world folder)