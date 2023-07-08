module.exports = {
  name: "play",
  type: "interaction",
  $if: "old",
  prototype: "slash",
  description: "Plays A Youtube Song Using Slash",
  code:`
  $interactionFollowUp[;{newEmbed:{description:Added **$message**!}}]





$djsEval[console.log("\\u001b\\[36m[LOG] $username Just Used Play Cmd!\\n \\n[LOG] Title Of Song: $message\\u001b\\[36m")]

$playTrack[$nonEscape[$slashOption[query]];youtube]
$if[$voiceID[$clientID]==]
$onlyIf[$voiceId!=;You're not in a voice channel]
$joinVc
$endif
$interactionDefer


$suppressErrors[⚠️ Something went wrong]

`
},{
  name: "create",
  code: `
$createApplicationCommand[global;play;Play a song!;true;slash;[{
    "name": "query",
    "description": "Song to play!",
    "required": true,
    "type": 3
}]]`
}
