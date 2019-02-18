const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const premium = ['295216776428388362']
let prefix = "*"



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', message => { ///////// ALPHA  , Codes ///// Galal
    if (message.content.startsWith("*help")) { ///////// ALPHA  , Codes ///// Galal

message.author.send(` 
╭━━━━┳╮╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╭━━╮╱╱╱╭╮
┃╭╮╭╮┃┃╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╯┃┃╰┫╰━┳╮╭┳━╮╭━╯┣━━┳━┫╰╯╰┳━┻╮╭╯
╱╱┃┃╱┃╭╮┃┃┃┃╭╮┫╭╮┃┃━┫╭┫╭━╮┃╭╮┃┃
╱╱┃┃╱┃┃┃┃╰╯┃┃┃┃╰╯┃┃━┫┃┃╰━╯┃╰╯┃╰╮
╱╱╰╯╱╰╯╰┻━━┻╯╰┻━━┻━━┻╯╰━━━┻━━┻━╯

**الاوامــر االعامه** :earth_africa:
**
${prefix}id : أمر ألايدي
${prefix}clear : بعدد او من غير عدد) لمسح الشات)
${prefix}bot : معلمومات عن البوت
${prefix}avatar : يعرض لك افاتارك
${prefix}rooms : عدد الرومات في السيرفر
${prefix}rank : عرض رانكك
${prefix}invites
${prefix}inviteCodes
${prefix}count : عدد اعضاء السيرفر
${prefix}find : (اي حرق من الاسم الي تبيه)

**الاوامــر الاداريه** :closed_lock_with_key:
${prefix}mute @user
${prefix}unmute @user
${prefix}ban @user (unban soon !)
${prefix}gstart - room [no mention to room] time - present
${prefix}move @user
${prefix}role @user [role name] (still updating it)
${prefix}hchannel
${prefix}schannel
${prefix}mvall
${prefix}mutechannel
${prefix}dc [delete channels]
${prefix}vonline

(لو تبي تسوي ويلكم مسج سوي روم بأسم welcome)
(لتفعيل اللوق سوي روم بأسم log)

**الاوامــر أخري** :red_circle: 
${prefix}ping
${prefix}support
${prefix}invite
${prefix}say
${prefix}embed
**
`) ///////// ALPHA , Codes ///// Galal


    }
}); ///////// ALPHA , Codes ///// Galal

 client.on('message' , message => {
  var prefix = "*";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  }); //Julian

client.on('message', ra3d => {
var prefix = "*";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`How Many Colors??`');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('**You Dont Have Permission `MANAGE_ROLES`**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
    if (message.content.startsWith("*bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO EgyBot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By |  ! ZALABIA-♪ ,? ')
    })
}
});

client.on('message',async Epic => {
  var prefix = "*" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});

client.on('message', message => {
	var prefix = "*";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("❌")
 }}});

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='*count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌍| Members info')
      .addBlankField(true)
      .addField('Mmeber Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

client.on('message', message => {
    if (message.content === "*rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {
var prefix = "*";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "*";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});

client.on('message',function(message) {
	let prefix = "*";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); 
}
});

  

client.on('message', message => {
	var prefix = "*";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });

client.on('message', message => {
	var prefix = "*"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
var prefix = "*";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been Locked Channel**")
              });
                }
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
              });
    }
       
});

client.on('message', message => {
   if (message.content.startsWith("*id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message', message => {
        if (message.content === "*invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`➡ Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=539560833097793584&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/attachments/541262079169134594/541705205817802784/123456789.png")        
     message.channel.sendEmbed(embed);
       }
   });
   
   client.on('message', message => {
        if (message.content === "*invinte") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`➡ Click Here `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });
 
client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            var prefix = "*";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});


   client.on('message', message => {
     if (message.content === "*support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  https://discord.gg/RdgKYVC")
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', omar => {
var prefix = "*";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("✅ `Success Deleted All Roles - Ranks`")
}// omar jedol / Codes
});

client.on('message', message => {
	var prefix = "*";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
    var prefix = '*' //بريفكس البوت
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**[*] شكراً لك لإضافه البوت الى سيرفرك بريفكس البوت**`)
        guild.owner.send(embed)
  });

client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'army');
 
  if (!channel) return;

  channel.send(`**Welcome To** __**The Army**__ :two_hearts: :coffee:, ${member}`);
});

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
 
  if (!channel) return;

  channel.send(` **Welcome To Server **:two_hearts: :coffee:, ${member}`);
});

client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **خاصية البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**? عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});

var EpicEdiTeD = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("الأسم :", message.author.tag)
    .addField("الليفل :", EpicEdiTeD[message.author.id].Level)
    .addField("الأكس بي :",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.25;
EpicEdiTeD[message.author.id].Money+= 0.25;
 
});

let profile = {};
      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })

client.on('message', message => {
  let args = message.content.split(" ")
  if (args[0].toLowerCase().startsWith(prefix+'roles')) {
    let str = "";
    var role = message.guild.roles.forEach(role => {
      str +=" "+role.name+'\n'
    })
    message.channel.send(`\`\`\`${str}\`\`\``)
  }
})

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'army');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","The Army"));
    });

const { Client } = require('discord.js');

client.on('message', message => {
    let args = message.content.split(' ').slice(1);

    if(message.content.startsWith(prefix + 'dm')) {
        let mnt = message.mentions.users.first();
        if(!mnt) return message.reply('Please mention someone!');
        mnt.send(args.join(' ').replace(mnt, '')).then(() => {
            message.channel.send('Successfully sent the message!');
        }).catch(() => {
            message.channel.send('The user have dms disabled');
        });
    };
})

client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "*";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'inviteCodes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on('message', message => {
       if (message.content.startsWith(prefix + 'botserver')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});

giftKeys = {};
let devs = ["295216776428388362"];
client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}giftR`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - انت لاتمتلك الصلاحية`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  } 
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - منشن الرتبة \`${prefix}giftR <@admin-role>\``);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000)); 
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}use`){
  
  if(!args) {   
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
};
});

 client.on('message', message => {

  
 if (message.author.bot) return;

 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];

 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 let messageArray = message.content.split(" ");

 let embed = new Discord.RichEmbed()

.setImage("https://d.top4top.net/p_10880lo1r1.png")

 if (command == "ban") {

 if(!message.channel.guild) return message.reply('** This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");

 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");

 let user = message.mentions.users.first();

 let Reason = message.content.split(" ").slice(3).join(" ");

 let time = messageArray[2];

 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
  
 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");

 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

 if(!Reason)  {

 message.guild.member(user).ban({reason: Reason})

 }

  if(!Reason && time) {

  message.guild.member(user).ban(7, user);

  }  

  if(!time) {

  message.guild.member(user).ban(7, user);

  }
  if(time) {
  
  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  if(time && Reason && user) {

  message.guild.member(user).ban({reason: Reason})
	  
	  
  setTimeout(() => {

  message.guild.unban(user);
  
  }, ms(time));

  }

  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)

  }

  });


client.on('message', message => {

  var ms = require('ms')
 
  var moment = require('moment');
 
   
  if (message.author.bot) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");
	
  let embed = new Discord.RichEmbed()
 
 .setImage("https://c.top4top.net/p_108825enp1.png")
 
  if (command == "mute") {
    
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('** This command only for servers**');
          
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
	   
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)
 
   }
 
});

const dateformat = require('dateformat');
const bot = new Discord.Client();

bot.on(`ready`, () => {
  console.log(`Log Bot | 0%`);
  console.log(bot.user.id);
})

bot.on(`guildMemberUpdate`, async (om, nm) => {
  if(!om || !om.id) return;

  const channel = nm.guild.channels.find(ch => ch.name == 'log')
  if(!channel) return console.log('I can\'t find it');



    om.guild.fetchAuditLogs()
    .then(async logs => {
      let user = logs.entries.first().executor
      let changes = logs.entries.first().changes


      if(om.roles.size < nm.roles.size) {

        let role = changes[0].new
        let name = role[0].name
        let id = role[0].id

        let embed = new Discord.RichEmbed()
        .setAuthor(`${nm.user.tag}`, nm.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`:white_check_mark: ${nm} was given the \`${name}\` role by ${user}`)

        channel.send("", { embed : embed } )

}
    if(om.roles.size > nm.roles.size) {

      let role = changes[0].new
      let name = role[0].name
      let id = role[0].id

      let embed = new Discord.RichEmbed()
      .setAuthor(`${nm.user.tag}`, nm.user.displayAvatarURL)
      .setTimestamp()
      .setDescription(`:negative_squared_cross_mark: ${nm} was removed from the \`${name}\` role by ${user}`)

      channel.send("", { embed : embed } )
    }

    if(om.nickname !== nm.nickname) {

      let embed = new Discord.RichEmbed()
      .setAuthor(`${nm.user.tag}`, nm.user.displayAvatarURL)
      .setTimestamp()
      .setDescription(`:white_check_mark: ${nm} nickname was changed by ${user}`)
      .addField('Old Nickname', `\`\`\`${om.nickname}\`\`\``)
      .addBlankField()
      .addField('New Nickname', `\`\`\`${nm.nickname}\`\`\``)

      channel.send("", { embed : embed } )
    }

  })

})



bot.on('channelCreate', (ch) => {
  console.log(ch);

  let guild = ch.guild

  let channel = guild.channels.find(ch => ch.name == 'log')
  if(!channel) return;

  guild.fetchAuditLogs()
  .then(logs => {

    let user = logs.entries.first().executor;
    let changes = logs.entries.first().changes;

    console.log(changes);

    let name = changes[0].new
    let typeNo = changes[1].new
    let perm;

    let type = '';

    if(typeNo == 0) {
      type = 'Text Channel'
    } else if (typeNo == 4) {
      type = 'Category Channel'
    } else if (typeNo == 2) {
      type = 'Voice Channel'
    }

    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL)
    .setTimestamp()
    .setDescription('Channel Created! By: ' + '<@' + user.id + '>')
    .addField('Name :', `${name}`, true)
    .addField('Type :', `${type}`, true)
  /*  if(typeNo == 0) {
    embed.addField('NSFW :', `${nsfw}`, true)
  } else if(typeNo === 2) {
    embed.addField('BitRate :', `${bit}`, true)
  }*/
    channel.send("", { embed : embed } )

  })
})

bot.on('channelUpdate', (oC, nC) => {

  //console.log(nC);

  let guild;
  guild = oC.guild;

  const channel = guild.channels.find(ch => ch.name == 'log')
  if(!channel) return;

  guild.fetchAuditLogs()
  .then(logs => {

    console.log(logs.entries.first())

    let user = logs.entries.first().executor;
    let changes = logs.entries.first().changes;

    console.log(changes)

    const embed = new Discord.RichEmbed()
    .setAuthor(`${guild.name}`)
    .setTimestamp()

    if(logs.entries.first().action == 'CHANNEL_OVERWRITE_CREATE') {
      let roleOrUser
      changes.forEach(change => {
        if(change.key == 'id') {
          if(changes[1].new == 'role') roleOrUser = `<@&${change.new}>`
          else if(changes[1].new == 'member') roleOrUser = `<@${change.new}>`
        } 
      })
      embed.setDescription(`${roleOrUser} Permissions has been added to ${nC} By ${user}`)
    }

    if(logs.entries.first().action == 'CHANNEL_OVERWRITE_DELETE') {
      let roleOrUser
      changes.forEach(change => {
        if(change.key == 'id') {
          if(changes[1].old == 'role') roleOrUser = `<@&${change.old}>`
          else if(changes[1].old == 'member') roleOrUser = `<@${change.old}>`
        } 
      })
      embed.setDescription(`${roleOrUser} Permissions has been deleted from ${nC} By ${user}`)
    }

    if(logs.entries.first().action == 'CHANNEL_UPDATE') {

    embed
    .setDescription(`**Channel <#${oC.id}> has been updated** by ${user}`)
    if(oC.name != nC.name) {
      embed.addField('Old Name',`${oC.name}`, true)
      embed.addField('New Name', `${nC.name}`, true)
    }
    if(oC.topic != nC.topic) {
      embed.addField('Old Topic', `${oC.topic ? oC.topic : 'Null'}`, true)
      embed.addField('New Topic', `${nC.topic ? nC.topic : 'Null'}`, true)
    }
    if(oC.nsfw != nC.nsfw) {
      embed.addField('NSFW:', nC.nsfw ? 'ON' : 'OFF');
    }
    changes.forEach(change => {
      if(change.key == 'rate_limit_per_user') {
        embed.addField('Old Slowmode Time:', `${change.old}`, true)
        embed.addField('New Slowmode Time:', `${change.new}`, true);
      }
    })
  }
  channel.send("", { embed : embed } )
  })

})

bot.on('channelDelete', ( ch ) => {

  let guild;
  while (!guild)
      guild = ch.guild


  const channel = guild.channels.find(ch => ch.name == 'log')
  if(!channel) return;

  guild.fetchAuditLogs()
  .then(logs => {

    const user = logs.entries.first().executor
    const changes = logs.entries.first().changes

    var type = '';

    if(ch.type === 'text') type = 'Text Channel'
    if(ch.type === 'voice') type = 'Voice Channel'
    if(ch.type === 'category') type = 'Category Channel'

    const embed = new Discord.RichEmbed()
    .setAuthor(`${guild.name}`, guild.iconURL)
    .setDescription(`**Channel ${ch.name} has been deleted** by ${user}`)
    .addField('Channel Name:', `${ch.name}`)
    .addField('Channel Type:', `${type}`)
    .setTimestamp()
    .setFooter(`${user.tag}`, user.displayAvatarURL)


    channel.send("", { embed : embed } )

  })

})

bot.on('roleCreate', (role) => {

  let guild;
  while (!guild)
    guild = role.guild

    const channel = guild.channels.find(ch => ch.name == 'log')
    if(!channel) return;

    guild.fetchAuditLogs()
    .then(logs => {

      const user = logs.entries.first().executor
      const changes = logs.entries.first().changes

      const embed = new Discord.RichEmbed()
      .setAuthor(`${guild.name}`, guild.iconURL)
      .setDescription(`**\`${role.name}\` role has been created** by ${user}`)
      .setTimestamp()
      .setFooter(`${user.tag}`, user.displayAvatarURL)

      channel.send("", { embed : embed } )

    })
})

bot.on('roleUpdate', (oR, nR) => {

  let guild;
    while (!guild)
      guild = oR.guild

      const channel = guild.channels.find(ch => ch.name == 'log')
      if(!channel) return;

      guild.fetchAuditLogs()
      .then(logs => {

        const user = logs.entries.first().executor
        const changes = logs.entries.first().changes

        console.log(changes);

        function colorToHexString(dColor) {
    return '#' + ("000000" + (((dColor & 0xFF) << 16) + (dColor & 0xFF00) + ((dColor >> 16) & 0xFF)).toString(16)).slice(-6);
          }

          if (oR.permissions != nR.permissions) {

            let perms = {
              added: [],
              removed: []
            }

            let newPerms = new Discord.Permissions(nR.permissions);
            let nArr = newPerms.toArray();

            let oldPerms = new Discord.Permissions(oR.permissions);
            let oArr = oldPerms.toArray();

            nArr.forEach(perm => {
              
              if(oArr.includes(perm)) return;

              else if(!oArr.includes(perm)) {
                perms.added.push(perm);
              } 

            })

            oArr.forEach(perm => {

              if(nArr.includes(perm)) return;

              else if(!nArr.includes(perm)) {
                perms.removed.push(perm);
              } 

            })

            const embed = new Discord.RichEmbed()
            .setDescription(`**${nR} role permissions has been updated** by: ${user}`);
            if(perms.added[0]) {
              let text = '';
              perms.added.map(p => text += `${p}\n`)
              embed.addField('Permissions Added:', `\`\`\`${text}\`\`\``);
            }

            if(perms.removed[0]) {
              let text = '';
              perms.removed.map(p => text += `${p}\n`)
              embed.addField('Permissions Removed:', `\`\`\`${text}\`\`\``);
            }

            embed.setColor(nR.hexColor)
            embed.setFooter(`${user.tag}`, user.displayAvatarURL)
            embed.setTimestamp()

            channel.send("", { embed: embed } )

          }

          if((oR.name !== nR.name) || (oR.hexColor !== nR.hexColor)) {

          const embed = new Discord.RichEmbed()
          .setDescription(`**${nR} role has been updated** by: ${user}`)
          if(oR.name !== nR.name) {
            embed.addField('Old Name:', `${oR.name}`)
            embed.addField('New Name:', `${nR.name}`)
          }
          if(oR.hexColor !== nR.hexColor) {
            embed.addField('Old Color:', `${oR.hexColor}`)
            embed.addField('New Color:', `${nR.hexColor}`)
          }



          embed.setColor(nR.hexColor)
          embed.setFooter(`${user.tag}`, user.displayAvatarURL)
          embed.setTimestamp()


          channel.send("", { embed : embed } )
}
      })
})

bot.on('roleDelete', (role) => {

  let guild;
    while (!guild)
      guild = role.guild

      var time = new Date()
      var mask = 'yyyy-mm-dd h:MM'

      var timestamp = dateformat(time, mask)

      const channel = guild.channels.find(ch => ch.name == 'log')
      if(!channel) return;

      guild.fetchAuditLogs()
      .then(logs => {

        const user = logs.entries.first().executor

        const embed = new Discord.RichEmbed()
        .setAuthor(`${guild.name}`, guild.iconURL)
        .setDescription(`**\`${role.name}\` has been deleted** by ${user}`)
        .setFooter(`${user.tag}`, user.displayAvatarURL)
        .setTimestamp()

        channel.send( { embed : embed } )

      })

})

bot.on('guildMemberRemove', (member) => {

  let guild;
  while (!guild)
    guild = member.guild

  let channel = guild.channels.find(ch => ch.name == 'log');
  if(!channel) return;

  guild.fetchAuditLogs()
  .then(logs => {
    let user = logs.entries.first().executor;
    let act = logs.entries.first().action;
    let reason = logs.entries.first().reason;

    let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setTimestamp()


    if(act === 'MEMBER_BAN') {

      reason ? embed.addField('With Reason:', `\`\`\`${reason}\`\`\``) : '';

      embed.setDescription(`**${member} banned from the server!** by ${user}`)
      embed.setFooter(`${user.tag}`, user.displayAvatarURL)

  } else

  if(act === 'MEMBER_KICK') {

    reason ? embed.addField('With Reason:', reason) : '';

    embed.setDescription(`**${member} kicked from the server!** by ${user}`)
    embed.setFooter(`${user.tag}`, user.displayAvatarURL)

  }

  else {
    embed.setDescription(`**${member} has left server.**`)
  }

  channel.send( { embed : embed } )

  })

})

bot.on('messageDelete', (msg) => {

  var guild;
    while(!guild)
      guild = msg.guild;


    let channel = guild.channels.find(ch => ch.name == 'log');
    if(!channel) return;

    guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor;


      const embed = new Discord.RichEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(`Message Deleted!${user == msg.author ? '' : ` by: ${user}`}`)
      .addField('Message Content:', `\`\`\`${msg.cleanContent}\`\`\``)

      channel.send( { embed : embed } )


    })

})

bot.on('messageUpdate', (oldmsg, newmsg) => {

  if(oldmsg.content == newmsg.content) return;

  var guild;
    while(!guild)
      guild = newmsg.guild;


    let channel = guild.channels.find(ch => ch.name == 'log');
    if(!channel) return;

    guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor;


      const embed = new Discord.RichEmbed()
      .setAuthor(`${newmsg.author.tag}`, newmsg.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(`Message Updated!`)
      .addField('Old Message Content:', `\`\`\`${oldmsg.cleanContent}\`\`\``)
      .addField('New Message Content:', `\`\`\`${newmsg.cleanContent}\`\`\``)

      channel.send( { embed : embed } )


    })

})

const adminprefix = "s!";
const devs = ['295216776428388362','444648241687166978'];
Rocket.on('message', message => {//for dev
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'setgame')) {
  Rocket.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
Rocket.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
Rocket.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 'setT')) {
  Rocket.user.setGame(argresult, "https://www.twitch.tv/faresgameryt");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

Rocket.on('message', message => {//restart
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            Rocket.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }


    });
});

Rocket.on('message', message => {//role
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            }
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'users') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});

bot.on('error', err => console.error(err))

client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 100000 ;
    var setGame = [`*help || Servers ${client.guilds.size} `,`invite Users ${client.users.size}`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/peery13`);
    }, ms);100000

});

client.on("message", message => {
    if (message.content === (prefix + "addrole")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
 للحذف أكتب الأمر التالي
${prefix}roleRemove @mention اسم الرتبة
وللأضافة :
${prefix}role @mention اسم الرتبة
ويدعم كذلك :
لأعطاء الرتبة للكل
${prefix}role all اسم الرتبة 
لأعطاء الرتبة للبوتات
${prefix}role bots اسم الرتبة
لأعطاء الرتبة للبشريين
${prefix}role humans اسم الرتبة

   `)
.setAuthor(message.author.username, message.author.avatarURL) 
   message.author.sendEmbed(embed)
   
   }
   });

const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 1000000000;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");

}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
