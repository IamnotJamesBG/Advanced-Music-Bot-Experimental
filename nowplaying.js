module.exports = {
name: "nowplaying",
  aliases: "np",
  code: ` 
  $author[Now Playing]
$title[$songinfo[title];$songinfo[url]]

  
  $description[

Requester:$songInfo[requester]
Artist:$songInfo[artist]
Duration:
$splitText[2]:$splitText[3]
$textSplit[$digitalFormat[$parseTime[$songInfo[duration]]];:]
Source:$songInfo[identifier]


Video Description:$songInfo[description]
$image[$songInfo[thumbnail]]
$color[#00ffff]

$footer[Requested by $username | Volume:$volume%]

$onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel]
$onlyIf[$voiceId!=;Your not in a voice channel!]


$onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]

$suppressErrors[⚠️ An Error Occurred]
  `
  
}