module.exports = {
 name: "resume",
  code: `
  $resumeTrack
  $onlyIf[$voiceId!=;You need to be in a voice channel to resume!]
  
  $onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]
  $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same channel]

  Resumed!
  
  
  
  `
}