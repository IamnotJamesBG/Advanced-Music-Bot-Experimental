module.exports = {
 name: "save",
  code: `
  $onlyIf[$voiceId!=;Your not in a voice channel!]
  
  $sendMessage[Saved! Check Your Dm!]
  $author[Saved Song!]
  $title[$songInfo[title];$songInfo[url]]
  $description[
  Artist:$songInfo[artist]
  $image[$songInfo[thumbnail]]
  $dm[$authorID]]
  $footer[Requested by $username]
$color[#00ffff]

$onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]

  
  `
}