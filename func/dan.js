//load danbooru module
var Danbooru = require('danbooru');
//load login data
const loginObj = require('./../data/login.json');
//authenticate account with login data
var authedBooru = new Danbooru({login: loginObj.login, api_key: loginObj.API});


//function that exports the whole danbooru pull section
exports.danPull = function(message, mybot, funcFile, whiteArrayId, blackArrayId)
{
	if(message.content.indexOf("!hentai ") >= 0 && message.content.indexOf("!hentai ") <= 0)
	{
		//check if channel is set to NSFW
		if(message.channel.nsfw)
		{		
			console.log(funcFile.getDateTime() + " Hentai requested ".cyan + "Name: ".cyan + message.author.username);
			message.channel.send("``Looking for your fetish ヾ(｡･ω･)ｼ``").then((msg)=>{
			
			
				var tags = message.content.substring(8);
				console.log(funcFile.getDateTime() + " Tag: ".cyan + tags);
				if(tags == "Reese" || tags == "reese"){msg.edit("``Wow thats lewd! (灬♥ω♥灬)`` http://i.imgur.com/mHQePkd.jpg"); }
				else if(tags == "ruiqi" || tags == "Ruiqi"){msg.edit("``Wow thats lewd!  (灬♥ω♥灬)`` http://i.imgur.com/HjNMXKh.gifv"); }
				else
				{
					authedBooru.search('rating:explicit ' + tags,{limit: 500}, function(err, data) 
					{
						if(err)
						{
							console.log(funcFile.getDateTime() + " Caught error in tags.".cyan);
							msg.edit("``Something went wrong! Did you use at maximum 5 tags and no newlines? (≧д≦ヾ)``")
						}
						else
						{
							
							var post = data.random();
							if(post == undefined)
							{
								console.log(funcFile.getDateTime() + " Tag not found".cyan);
								msg.edit("``Could not find your fetish. (´•ω•̥`)``");
							}
							else
							{
								var w = 0;
								reshuffleB:
								while(true)
								{
									console.log(funcFile.getDateTime() + " url: ".cyan + post.file_url);
									if(post.file_url == undefined || post.file_url.endsWith(".swf") || post.file_url.endsWith(".zip"))
									{
										console.log("unuseable post reshuffling....".cyan);
										post = data.random();
									}
									else
									{
										//mybot.sendMessage(message, "http://danbooru.donmai.us"+post.file_url);
										msg.edit("``I found something, pervert (;¬_¬)`` http://danbooru.donmai.us"+post.file_url);
										break reshuffleB;
									}
									
									w++;
									
									if(w > 500){
										msg.edit("``Could not find your fetish. (´•ω•̥`)``");
										break reshuffleB;
									}
								}
							}
						}
					});
				}
			});
		}
		else
		{
			message.channel.send("``This is not a lewd channel! (´•ω•̥`)``");
		}
		
	}
	
	if(message.content === "!hentai")
	{
		//check if this is a lewd channel
		if(message.channel.nsfw)
		{
			message.channel.send("``Looking for something lewd ヾ(｡･ω･)ｼ``").then ((msg)=>{
				console.log(funcFile.getDateTime() + " Hentai requested ".cyan + "Name: ".cyan + message.author.username);
				authedBooru.search('rating:explicit',{limit: 5000}, function(err, data) 
				{
					if(err) throw err;
					var post = data.random();
					console.log(funcFile.getDateTime() + " url: ".cyan + post.file_url);
					var w = 0;
					reshuffleB:
					while(true)
								{
									console.log(funcFile.getDateTime() + " url: ".cyan + post.file_url);
									if(post.file_url == undefined || post.file_url.endsWith(".swf") || post.file_url.endsWith(".zip"))
									{
										console.log("unuseable post reshuffling....".cyan);
										post = data.random();
									}
									else
									{
										//mybot.sendMessage(message, "http://danbooru.donmai.us"+post.file_url);
										msg.edit("``I found something, pervert (;¬_¬)`` http://danbooru.donmai.us"+post.file_url);
										break reshuffleB;
									}
									
									w++;
									
									if(w > 5000){
										msg.edit("``Could not find your fetish. (´•ω•̥`)``");
										break reshuffleB;
									}
								}
				});
			});
		}
		else
		{
			message.channel.send("``This is not a lewd channel! (´•ω•̥`)``");
		}
		
	}
	
//moe command

	if(message.content.indexOf("!moe ") >= 0 && message.content.indexOf("!moe ") <= 0)
	{
		message.channel.send("``Looking for that cute thing that you told me ヾ(｡･ω･)ｼ``").then ((msg) =>{
				console.log(funcFile.getDateTime() + " Moe requested ".cyan + "Name: ".cyan + message.author.username);
				var tags = message.content.substring(4);
				console.log(funcFile.getDateTime() + " Tag: ".cyan + tags);
				if(tags == " seth" || tags == " Seth"){msg.edit("``Look at this cutie ヾ(´▽｀;)ゝ`` http://i.imgur.com/kQcKFuh.jpg");}
				else if(tags == " frankie" || tags == " Frankie"){msg.edit("``Look at this cutie ヾ(´▽｀;)ゝ`` http://i.imgur.com/GG9AwbQ.jpg");}
				else if(tags == " sass" || tags == " Sass"){msg.edit("``Look at this cutie ヾ(´▽｀;)ゝ`` https://i.imgur.com/BWYYUUj.png");}
				else if(tags == " jonathan" || tags == " Jonathan"){msg.edit("``Look at this cutie ヾ(´▽｀;)ゝ`` http://i.imgur.com/hTJSTta.jpg");}
				else if(tags == " ruiqi" || tags == " Ruiqi"){msg.edit("``Look at this cutie ヾ(´▽｀;)ゝ`` http://i.imgur.com/12PS5Lw.png");}
				else
				{
					authedBooru.search('rating:safe ' + tags,{limit: 500}, function(err, data) 
					{
						if(err)
						{
							console.log(funcFile.getDateTime() + " Caught error in tags.".cyan);
							msg.edit("``Something went wrong! Did you use at maximum 5 tags and no newlines? (≧д≦ヾ)``");
						}
						else
						{
							var post = data.random();
							if(post == undefined)
							{
								console.log(funcFile.getDateTime() + " Tag not found".cyan);
								msg.edit("``I could not find something cute with the tags:" + tags + " (´•ω•̥`)``");
							}
							else
							{
								var w = 0;
								reshuffleB:
								while(true)
								{
									console.log(funcFile.getDateTime() + " url: ".cyan + post.file_url);
									if(post.file_url == undefined || post.file_url.endsWith(".swf") || post.file_url.endsWith(".zip"))
									{
										console.log("unuseable post reshuffling....".cyan);
										post = data.random();
									}
									else
									{
										//mybot.sendMessage(message, "http://danbooru.donmai.us"+post.file_url);
										msg.edit("``I found something cute! ヾ(´▽｀;)ゝ`` http://danbooru.donmai.us"+post.file_url);
										break reshuffleB;
									}
									
									w++;
									
									if(w > 500){
										msg.edit("``I could not find something cute with the tags:" + tags + " (´•ω•̥`)``");
										break reshuffleB;
									}
								}
							}
						}
					});
				}
		});		
	}
	
	if(message.content === "!moe")
	{
		message.channel.send("``Looking for something cute ヾ(｡･ω･)ｼ``").then((msg) =>{
			{
				console.log(funcFile.getDateTime() + " Moe requested ".cyan + "Name: ".cyan + message.author.username);
				authedBooru.search('rating:safe -comic',{limit: 5000}, function(err, data) 
				{
					if(err) throw err;
					var post = data.random();
					console.log(funcFile.getDateTime() + " url: ".cyan + post.file_url);
					var w = 0;
					reshuffleB:
					while(true)
								{
									console.log(funcFile.getDateTime() + " url: ".cyan + post.file_url);
									if(post.file_url == undefined || post.file_url.endsWith(".swf") || post.file_url.endsWith(".zip"))
									{
										console.log("unuseable post reshuffling....".cyan);
										post = data.random();
									}
									else
									{
										//mybot.sendMessage(message, "http://danbooru.donmai.us"+post.file_url);
										msg.edit("``I found something cute! ヾ(´▽｀;)ゝ`` http://danbooru.donmai.us"+post.file_url);
										break reshuffleB;
									}
									
									w++;
									
									if(w > 5000){
										msg.edit("``I could not find something cute (´•ω•̥`)``");
										break reshuffleB;
									}
								}
				});
			}
		});		
	}
}