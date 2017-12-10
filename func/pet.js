//petting place
//pet command
var petnr = 0;
var jsonfile = require('jsonfile');
var jsonCount = 'data/count.json';

	jsonfile.readFile(jsonCount, function(err, obj){
		//console.dir(obj);
		if(err){console.log("error: " + err)}
		petnr = obj.petCounter;
		//console.log(petnr);
	});

exports.pet = function(message, mybot, funcFile, jsonCount, jsonfile, mood){
	
	if(message.content === "!pet" || message.content === "!pat")
	{
		petnr ++;
		if(petnr == 1){message.channel.send("``KYAAA, I have been patted " + petnr + " time o(≧∇≦o)``");}
		else{
			if(Math.floor((Math.random() * 100)) > 50){
				message.channel.send("``" + mood.getResponse('pet',0) + petnr + " times``");
			}
			else{
				message.channel.send("``" + mood.getResponse('pet',1) + petnr + "th time``");	
			}
			
			mood.addMood(1,2,'pet');
			}
		
		var rndnr = Math.floor((Math.random() * 100) + 1);
		if(rndnr == 42 || rndnr == 73){message.channel.send("http://i.imgur.com/4XYDGi0.gif")}
		if(rndnr == 22 || rndnr == 87){message.channel.send("http://i.imgur.com/rVxx789.gif")}
		
		console.log(funcFile.getDateTime() + " petted ".cyan + petnr +"x with rng nr: ".cyan + rndnr + " Name: ".cyan + message.author.username);
		
		var obj = {"petCounter":petnr};
		
		jsonfile.writeFile(jsonCount, obj, err => {
		//console.error(err); 
		})
	}
}