module.exports = {
name: "leave",
code: `
$leaveVc

$addCmdReactions[✅]
Successfully Left the channel!
$onlyIf[$voiceId!=;You cant use this command because your not in a voice channel!]
$onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel]

`


  
}