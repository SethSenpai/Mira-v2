//question or rng functions go here //8ball command giant switchcase
//8ball command giant switchcase	
	
exports.Eightball = function(message, mybot, funcFile){
	
	if(message.content.indexOf(" !8ball") >= 0 || message.content.indexOf(" !8ball ") >= 0 || message.content.indexOf("!8ball ") >= 0)
	{
		var ball = Math.floor((Math.random() * 20) + 1);
		
		switch(ball){
			
			case 1:
				message.reply("``It is certain``");
			break;
			
			case 2:
				message.reply("``It is decidedly so``");
			break;
			
			case 3:
				message.reply("``Without a doubt``");
			break;
			
			case 4:
				message.reply("``Yes, definitely``");
			break;
			
			case 5:
				message.reply("``You may rely on it``");
			break;
			
			case 6:
				message.reply("``As I see it, yes``");
			break;
			
			case 7:
				message.reply("``Most likely``");
			break;
			
			case 8:
				message.reply("``Outlook good``");
			break;
			
			case 9:
				message.reply("``Yes``");
			break;
			
			case 10:
				message.reply("``Signs point to yes``");
			break;
			
			case 11:
				message.reply("``Reply hazy try again``");
			break;
			
			case 12:
				message.reply("``Ask again later``");
			break;
			
			case 13:
				message.reply("``Better not tell you now``");
			break;
			
			case 14:
				message.reply("``Cannot predict now``");
			break;
			
			case 15:
				message.reply("``Concentrate and ask again``");
			break;
			
			case 16:
				message.reply("``Don't count on it``");
			break;
			
			case 17:
				message.reply("``My reply is no``");
			break;
			
			case 18:
				message.reply("``My sources say no``");
			break;
			
			case 19:
				message.reply("``Outlook not so good``");
			break;
			
			case 20:
				message.reply("``Very doubtful``");
			break;

			default :
				message.reply("``Vraag het niet aan mij, ik ben met pensioen.``");
			break;
			
		}
		console.log(funcFile.getDateTime() + " 8ball with reply: ".cyan + ball + " Name: ".cyan + message.author.username);
	}
}