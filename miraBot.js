// PEOPLE THAT GAVE ME MONEY SO I COULD BUILD A BETTER BOT
// Official Jonathan
// Ruiqi Mao, !pet


//REQUIRED PACKAGES
const Discord = require("discord.js");
const readline = require('readline');
const jsonfile = require('jsonfile');
const consolecolors = require('consolecolors');

//FUNCTION FILES
var funcFile = require('./func/remoteFunctions.js');
var dan = require('./func/dan.js');
var meme = require('./func/memes.js');
var roll = require('./func/roll.js');
var mood = require('./func/mood.js');
var pet = require('./func/pet.js');
var quest = require('./func/question.js');
var consl = require('./func/console.js');

//JSON PATH STRINGS
var jsonCount = 'data/count.json';
var jsonWhite = 'data/hentaiWhitelist.json';
var jsonBlack = 'data/moeBlacklist.json';
var jsonResponse = 'data/response.json';
var jsonLogin = 'data/login.json';

//conts
const loginObj = require('./data/login.json');

//GLOBAL VARIABLES
const client = new Discord.Client();
var rl = readline.createInterface(process.stdin, process.stdout);
var whitelistObj;
var blacklistObj;
var blackArrayId = [];
var whiteArrayId = [];
var helpTextString;
var creatorID;

client.on('ready', () => {
	console.log(funcFile.getDateTime() + " I just woke up!" .green);
	client.user.setPresence({ status: 'online', game: { name: 'in Dimension W' } });
  });
  
  client.on('message', message => {
		if(message.author.bot && message.author.id != 389178140435546112) return;
		
		pet.pet(message, client, funcFile, jsonCount, jsonfile, mood);
		dan.danPull(message, client, funcFile, whiteArrayId, blackArrayId);
		meme.justMemes(message, client , funcFile);
		roll.roll(message, client, funcFile, mood);

  });
  
  client.on("guildCreate", guild => {
	console.log(funcFile.getDateTime() + ` New friends! ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!` .green);
  });
  
  client.on("guildDelete", guild => {
	console.log(funcFile.getDateTime() + ` I have been removed from: ${guild.name} (id: ${guild.id})` .red);
  });
  

  // Log our bot in

  client.login(loginObj.email);