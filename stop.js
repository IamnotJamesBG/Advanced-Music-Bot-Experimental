module.exports = {
name: "stop",
  code: `
 $stopTrack

 Successfully Stopped And Cleared the queue!
 $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel!]
 $onlyIf[$voiceId!=;Your not in a voice channel!]
 
 $onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]
  `

  
}