module.exports = {
    name: 'volume',
    code: `
    $volume[$message]
    $title[Volume Changed✅]
    $description[🔊Successfully Set The Volume to **$message**%]
 $footer[Changed by $username]
    $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel]
    $onlyIf[$voiceId!=;You must join a voice channel!]
    
$onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]

$onlyIf[$message<=135;⚠️ Sorry You Exceeded The Limit 
Allowed volume is only **135%**]

$suppressErrors[⚠️ An Error Occurred
]
  `
}