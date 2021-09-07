const { Client, Intents, MessageEmbed, Message } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });



const Discord = require('discord.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!lyfe') {
   
      // inside a command, event listener, etc.
    const exampleEmbed = new MessageEmbed()
  .setColor("DARK_BUT_NOT_BLACK")
  .setTitle('WELCOMME TO NYTE LYFE')
  .setURL('https://discord.js.org/')
  .setAuthor('NIGHT LYFE', 'https://cdn.discordapp.com/attachments/881789458402398208/884634695541858314/image0.jpg', 'https://discord.js.org')
  .setDescription('Welcome to Night Lyfe, Make sure to read to Rules!!')
  .setThumbnail('https://cdn.discordapp.com/attachments/881789458402398208/884634695541858314/image0.jpg')
  .addFields(
      { name: 'CHILL VIBES ONLY AHEAD :) !!!', value: 'Welcome to the Night Lyfe Server! This server was created by myself and a few friends for gaming and just hanging out. But I have decided to open it up a little more to those who want to study, hang out and or game! I hope everyone has a good time on this server! This server is meant for good vibes only! Spread the love' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Owner', value: 'Kevin C', inline: true },
      { name: 'EST', value: '2020', inline: true },
  )
  .addField('DEV ', 'u5h3r', true)
  .setImage('https://cdn.discordapp.com/attachments/881789458402398208/884634695541858314/image0.jpg')
  .setTimestamp()
  .setFooter('Signed, Night Lyfe', 'https://cdn.discordapp.com/attachments/881789458402398208/884634695541858314/image0.jpg');
  message.channel.send({ embeds: [exampleEmbed] });
}});

 
client.on("guildMemberAdd", Member => {
  
  if(Member.guild.id === "810368768462159912") {
    
   
client.channels.cache.get("884642153169551451").send(`Welcome to NIGHT LYFE!!, ${Member} We are Glad to see you here, please read the rules!!`)
  }
  });
    

    
    
    client.on("guildMemberRemove", Member => {
  
      if(Member.guild.id === "810368768462159912") {
       
    client.channels.cache.get("884526270094934046").send(`Sadly, ${Member} has Left the Night Life );`)
      }
      });

    

      

      client.on('guildMemberAdd', Member  => {
        Member.roles.add(Member.guild.roles.cache.find(role => role.name === "Night Owls"));                      
  });












 client.login("NjEwNzI4OTgyMzQxNjE1NjE2.XVJfsA.SVRWd3u6gjDS9XmgkXwBvWUF5D8");
