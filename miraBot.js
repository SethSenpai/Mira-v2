// PEOPLE THAT GAVE ME MONEY SO I COULD BUILD A BETTER BOT
// Official Jonathan
// Ruiqi Mao, !pet


//REQUIRED PACKAGES
const Discord = require("discord.js");
const readline = require('readline');
const jsonfile = require('jsonfile');
const consolecolors = require('consolecolors');
const publicIp = require('public-ip');

//FUNCTION FILES
var funcFile = require('./func/remoteFunctions.js');
var dan = require('./func/dan.js');
var meme = require('./func/memes.js');
var roll = require('./func/roll.js');
var mood = require('./func/mood.js');
var pet = require('./func/pet.js');
var quest = require('./func/question.js');

//JSON PATH STRINGS
var jsonCount = 'data/count.json';
const loginObj = require('./data/login.json');

//GLOBAL VARIABLES
const client = new Discord.Client();
var helpTextString;
var creatorID;
var oldIP;

setInterval(checkIP, 60*1000);

function checkIP(){
	publicIp.v4().then(ip => {
				if(oldIP == null){
					oldIP = ip;
					console.log(funcFile.getDateTime() + " Ip noted: " + oldIP);
				}
				
				if(oldIP != ip){
				client.fetchUser(loginObj.creatorID)
					.then(user => {user.send("I moved to a different house! ヾ(・ω・ｏ) ``"+ip+"``")});
				console.log(funcFile.getDateTime() + " Ip changed: " + ip);
				oldIP = ip;
				}
			});
}


client.on('ready', () => {
	console.log(funcFile.getDateTime() + " I just woke up!" .green);
	client.user.setPresence({ status: 'online', game: { name: 'in Dimension W' } });
  });
  
client.on('message', message => {
		if(message.author.bot && message.author.id != 389178140435546112) return;
		
		pet.pet(message, client, funcFile, jsonCount, jsonfile, mood);
		dan.danPull(message, client, funcFile);
		meme.justMemes(message, client , funcFile);
		roll.roll(message, client, funcFile, mood);
		quest.Eightball(message, client, funcFile);

		if(message.content === "!help")
		{
			message.channel.send(helpTextString);
			console.log(funcFile.getDateTime() + " Help requested ".cyan + "Name: ".cyan + message.author.username);
		}

		if(message.content === "!emp" && message.author.id == loginObj.creatorID){
			console.log(funcFile.getDateTime() + " Crashing now! ".red);
			let elegance = crashing[666];
		}
		
		if(message.content === "!ip" && message.author.id == loginObj.creatorID){
			publicIp.v4().then(ip => {
				client.fetchUser(loginObj.creatorID)
					.then(user => {user.send("This is where I live! ヾ(・ω・ｏ) ``"+ip+"``")});
				console.log(funcFile.getDateTime() + " Ip requested: " + ip);
			});
		}

  });
  
client.on("guildCreate", guild => {
	console.log(funcFile.getDateTime() + ` New friends! ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!` .green);
  });
  
client.on("guildDelete", guild => {
	console.log(funcFile.getDateTime() + ` I have been removed from: ${guild.name} (id: ${guild.id})` .red);
  });
  

  // Log our bot in

client.login(loginObj.email);

helpTextString = "I have several functions that you can use: \n " +
"[!8ball] ask me a question. \n "+
"[!pet] or [!pat] to pet me for being a good robot! \n "+
"[!roll xdy] to have me roll some dice, example: !roll 2d6 \n "+
"[!hentai tag] lets me post a random lewd picture if there is not tag specified, otherwise its a lewd picture with the tags specified. Different tags should be separated by a space \n"+
"[!moe tag] works the same way as its lewder counterpart but less lewd. (generally sfw) \n"+
"There are also some private memes hidden in my programming, maybe you will find them, maybe not. \n"+
"You can ask me to join a server by clicking this link: https://discordapp.com/oauth2/authorize?client_id=389178140435546112&scope=bot \n" +
"I was made by @pimwing, send him a message if you have further questions about me!";