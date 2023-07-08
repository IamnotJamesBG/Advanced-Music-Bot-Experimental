module.exports = {
name: "skip",
code: `
$skipTrack


Skipped $songInfo[title] - $songInfo[artist]
$onlyIf[$voiceId!=;You must join a voice channel!]
$onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel!]

$onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]

$suppressErrors[⚠️ An Error Occurred]
`

  
}