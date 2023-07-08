module.exports = {
    name: 'skipTo',
    code: `
    $skipTo[$message]

    Skipped the queue By $message songs!
    $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same channel]
    $onlyIf[$voiceId!=;You must join a voice channel!]
  `
}