
module.exports = {
  name: "queue",
  code: `
   $title[1;Queue]
   $author[1;Requested By $usertag;$authorAvatar]
   $description[$replaceText[$queue[1;15;{position}.) {title} - $songInfo[requester]];,;
]]
   $footer[1;number of songs ->$queueLength]
   $color[1;#00ffff]
   $addTimestamp[1]

   $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same channel]
   $onlyIf[$voiceId!=;You need to be in a voice channel to resume!]
   
   $onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]

   $suppressErrors[⚠️ An Error Occurred]
    `,
};