exports.justMemes = function(message, mybot , funcFile){
	//ping command	
	if(message.content === "!pin")
	{
		message.channel.send("``pon ( ´ ▽ ` )ﾉ``").then ((msg)=>{
			//console.log(msg.createdTimestamp);
			var i = msg.createdTimestamp - message.createdTimestamp;
			var j = Math.round(mybot.ping);
			message.channel.send(" ``Latency is "+i+"ms. API Latency is "+j+"ms`` ");	
		});	
		console.log(funcFile.getDateTime() + " pinged in: ".cyan + message.channel.name + " Name: ".cyan + message.author.username);	
	}
	
//jail time
	if(message.content == "!jail")
	{
		message.channel.send("https://www.youtube.com/watch?v=XeDM1ZjMK50");
		console.log(funcFile.getDateTime() + " who's going to jail? Name: ".cyan + message.author.username);
	}	
	
//hilko
	if(message.content == "!hilko")
	{
		message.channel.send("http://static4.koken.vtm.be/sites/koken.vtm.be/files/styles/vmmaplayer_big/public/recipe/image/kaasfondue_2.jpg?itok=Fz-TX-HM");
		console.log(funcFile.getDateTime() + " Where is hilko? Name: ".cyan + message.author.username);
	}

//daryll
	if(message.content == "!daryll")
	{
		message.channel.send("http://i.imgur.com/v4ftB0N.png");
		console.log(funcFile.getDateTime() + " Where is daryll? Name: ".cyan + message.author.username);
	}
	
//seth
	if(message.content == "!seth")
	{
		message.channel.send("http://www.pako-rhenen.nl/uploads/photos/img_0461.jpg");
		console.log(funcFile.getDateTime() + " Where is seth? Name: ".cyan + message.author.username);
	}	
	
//erik
	if(message.content == "!erik")
	{
		message.channel.send("http://i.imgur.com/3v6fZ7q.png");
		console.log(funcFile.getDateTime() + " Where is erik? Name: ".cyan + message.author.username);
	}
	
//garlic
	if(message.content == "!garlic" || message.content == "!Garlic")
	{
		message.channel.send("http://i.imgur.com/Gz6nUbn.jpg");
		console.log(funcFile.getDateTime() + " Garlic Bread memes? Name: ".cyan + message.author.username);
	}
	
//reynart
	if(message.content == "!reynart"){
		message.channel.send("https://i.imgur.com/m8tLSF0.png");
		console.log(funcFile.getDateTime() + " Where is Reynart? Name: ".cyan + message.author.username);
	}

//??? neger command
	if(message.content === "???")
	{
		message.channel.send("http://i.imgur.com/zIEfIed.jpg")
		console.log(funcFile.getDateTime() + " Black guys questioned ".cyan + "Name: ".cyan + message.author.username);
	}
	
}
