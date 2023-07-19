//importing rest api
import {REST} from '@discordjs/rest';
//importing token
import {token, CLIENT_ID} from './index';
//importing discord js
import {Client, GatewayIntentBits, Routes} from 'discord.js';
//importing commands from commands file
import {Slashcommands} from './commands'


//class for registering cmds
export class registerslashcmd{

    //async function for registering commands
    async registerslashcmds() {
        //creating a new rest api object
        const rest = new REST({version:'10'}).setToken(token);
        //defining client id
        

        console.log("registering commands");
        await rest.put(Routes.applicationCommands(CLIENT_ID),{
            body : Slashcommands.commands,

        });
        console.log("successfully registered the commands");

    }
}

export const registrar = new registerslashcmd();

