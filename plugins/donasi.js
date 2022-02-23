let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Pulsa 〕
├ telkom : 082146218274
├ axis : 083813417529
└────
┌〔 Donasi • Non Pulsa 〕
├ Dana : belum ada om:)
├ Owner : wa.me/6288233832771
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
