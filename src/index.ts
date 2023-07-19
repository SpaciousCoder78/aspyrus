//importing discord js
import { Client, GatewayIntentBits, Routes  } from 'discord.js';
//importing rest api
import {REST} from '@discordjs/rest';
//importing register clash commands
import { registrar } from './registerslashcmd';

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

//token
export const token = "token";
//client id
export const CLIENT_ID = '1130040553787113482';


try {
    //logging in with the bot token
    client.login(token);
    //call the registerslashcmd function here
    registrar.registerslashcmds()
    //event that occurs once the bot is ready
    client.on('ready',()=>{
      //message to show if  the bot is working
        console.log("Bot is up and running");
    });

}

//catch exception in case the code doesnt work
catch(err){
    console.log("Error occurred, couldn't start the bot");
    console.log(err);
}