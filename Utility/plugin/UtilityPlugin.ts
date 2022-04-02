import { PluginSettings } from "../../sdk";

class UtilityPlugin {

    public readonly settings: PluginSettings = {
        name: "Utility",
        version: 1.0,
        author: "Karasu"
    }

    constructor() {
        sdk.on('tick', this.onTick);
        sdk.on('draw', this.onDraw);
    }

    public onLoad() {
        console.log("Utility Plugin Initialized");
    }

    public onTick() {
        for (const [slot, spell] of objectManager.getLocalPlayer().getSpellBook()) {
            // console.log(`Buff: ${slot} Level: ${spell.level} Cooldown: ${spell.expiresAt}`);
        }
    }

    public onDraw() {
        // for (const player of objectManager.champions) {
        //     if (!player.isAlive()) continue; 

        //     for (const [slot, spell] of player.getSpellBook()) {
        //         if (!spell.isReady()) {
        //             console.log(`Player: ${player.name} Spell: ${slot} Level: ${spell.level} Cooldown: ${spell.getCooldown()}`);
        //         }
        //     }
        // }
    }
}

export default UtilityPlugin; 