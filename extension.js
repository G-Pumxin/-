game.import("extension"，function(lib,game,ui,get,ai,_status){return {name:"扩展名"，content:function(config,pack){
    if(config.武将包名英文){
		for(var i in lib.characterPack['武将包名英文']) {
		if(lib.character[i][4]。indexOf("forbidai")<0)lib.character[i][4]。push("forbidai");
		};
	};
}，precontent:function(武将包名英文){
	if(武将包名英文.enable){
		game.import('character'，function(){
			var 武将包名英文={
				name:'武将包名英文',
				connect:true,
				character:{
					//直接复制下面的内层的character，不要translate
				},
				characterIntro:{},
				characterTitle:{},
				skill:{
					//直接复制下面的内层的skill，不要translate
				},
				translate:{
					//character和skill的translate都写在这里
				},
				perfectPair:{},
			};
			if(lib.device||lib.node){
				for(var i in 武将包名英文.character){武将包名英文.character[i][4]。push('ext:扩展名/'+i+'.jpg');}
			}else{
				for(var i in 武将包名英文.character){武将包名英文.character[i][4]。push('db:extension-扩展名:'+i+'.jpg');}
			}
			return 武将包名英文;
		});
		lib.config.all.characters.push('武将包名英文');
		if(!lib.config.characters.contains('武将包名英文')) lib.config.characters.push('武将包名英文');
		lib.translate['武将包名英文_character_config']='武将包名';
	};
}，help:{},config:{"武将包名英文":{"name":"禁用武将包名英文的武将","init":false}},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"1.0",
}，files:{"character":[],"card":[],"skill":[],"audio":[]}}})
