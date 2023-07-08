module.exports = {
    name: 'loop',
  $if: 'old',
    code: `
    $title[Looped🔁]
    $description[$loopMode[$message]

    Successfully Looped 
    Current Mode:**$message**!]
    $footer[Looped by $username]
  $color[#00ffff]
    $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel!]
    $onlyIf[$voiceId!=;You must join a voice channel!]
    $onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]

    $suppressErrors[⚠️ An Error Occurred
    ⚠️Incorrect Usage Detected⚠️
Correct Usage:-loop (song/queue/none)]
  `
}