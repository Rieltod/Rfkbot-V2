const contacts = [
  ['6282146218274', ' Rielxzy🗿'],
  ['081251497082', ' Nomer Bot'],
]
function handler(m) {
  m.reply('Ada perlu apa kak cari owner?, Mau sv? Chat ae🗿')
  for (let [nomor, nama] of contacts) this.sendContact(m.chat, nomor + '@s.whatsapp.net', nama || conn.getName(nomor + '@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
