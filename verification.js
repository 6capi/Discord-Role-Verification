client.on("message", message => {
    if(message.channel.id === "CHANNEL ID") {
        if(message.author.bot) return;

        if(message.content === 'verify') {
            message.member.roles.add("ROLE ID");
            message.author.send("You have been verify");
            message.delete();
        }
        else{
            message.author.send("You need to write 'verify' without '' If you need help talk to a support");
            message.delete();
        }
    }
});