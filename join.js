module.exports = {
name: "join",
code: `
$joinVc

Successfully Joined the channel!
$onlyIf[$voiceId!=;You must join a voice channel to use this commmand!]
`
}