module.exports = {
 name: "seek",
 code: `
 $seek[$message]

 Now Seeking The Current Track By **$humanizeMS[$message]**

 $onlyIf[$message<=10000;⚠️ Sorry You Exceeded The Limit
You can only seek by **10s**!]
 
 `
}