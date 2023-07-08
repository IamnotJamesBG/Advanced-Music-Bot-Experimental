module.exports = {
 name: "pause",
  code: `
  $pauseTrack

  
  $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same channel]
  $onlyIf[$voiceId!=;Your not in a voice channel!]
  Paused!

  $onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]
  `
}