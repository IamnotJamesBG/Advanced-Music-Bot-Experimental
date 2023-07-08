module.exports = {
  name: "skip",
  type: "interaction",
  prototype: "slash",
  description: "Skips A Youtube Song Using Slash",
  code:`
  $interactionFollowUp[;{newEmbed:{description:⏩ Successfully skipped the current track!}}]





$djsEval[console.log("\\u001b\\[36m[LOG] $username Just Used Play Cmd!\\n \\n[LOG] Title Of Song: $message\\u001b\\[36m")]

$if[$voiceID[$clientID]==]
$onlyIf[$voiceId!=;You're not in a voice channel]
$skipTrack
$interactionDefer[true]


$suppressErrors[⚠️ Something went wrong]

`
}