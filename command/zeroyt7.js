/**
* Please Jangan Di Hapus Info Dan Tq To Nya
**/

/**
* Base by Zero YT7
* Creator By BOT INDO
* Contact Me on wa.me/628811929177
* Follow Me On All Sosial Media
* Instagram : @aprigans_
* Tiktok : @prii
* Github : Aprilia3
* Youtube : BOT INDO
**/

/**
* Thanks To
* Allah S.W.T
* Ortu
* BOT INDO
* Zero YT7
* Sanzy Kawaii
* FIRAA
* Guntur
* Dhika Ardiant
* All Creator Bot
* All Subscriber Ku
**/

require('../command/config')
var { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var { fromBuffer } = require('file-type')
var path = require('path')
var os = require('os')
var yts = require('yt-search')
var hx = require('hxz-api')
var zee = require('api-alphabot')
var request = require('request')
var speed = require('performance-now')
var { performance } = require('perf_hooks')
var { Primbon } = require('scrape-primbon')
var primbon = new Primbon()
var { scdl } = require('../lib/scdl')
var { sfiledl } = require ('../lib/solidfile')
var { musicaldown } = require('../lib/ttmusik')
var { pinterest, porno, wallpaper, wikimedia, hentai, quotesAnime} = require('../lib/scraper')
var { yta, porno, ytv, igdl, upload, formatDate } = require('../lib/ytdl')
var { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('../lib/photooxy')
var { webp2gifFile, TiktokDownloader } = require('../lib/gif')
var { tiktokDownloader, instaDownloader, facebookDownloader, zippyDownloader, mediafireDownloader } = require ('../lib/downloader')
var { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../message/myfunc')
var database = require('../json/database.json')
var simbol = '»'
var setting = require('../json/setting.json')
const antilink = JSON.parse(fs.readFileSync('./json/antilink.json'))
let {
ownername,
ownernomer,
myweb,
botname,
donasi
} = setting

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, m, chatUpdate) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()        
var isGroup = m.key.remoteJid.endsWith('@g.us')
var sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var isCreator = [zeroyt7.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == zeroyt7.user.id ? true : false
var isOwner = ownernomer.includes(m.sender)
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await zeroyt7.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false

//━━━━━━━━━━━━━━━[ STATUS BOT ]━━━━━━━━━━━━━━━━━//

var used = process.memoryUsage()
var cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
var cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})


if (m.isGroup && !m.key.fromMe && isAntiLink && !isGroupAdmins && !isBotAdmins){
if (budy.includes(`https://chat.whatsapp.com`)) {
zeroyt7.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${groupMetadata.subject}`}, {quoted:m})
await zeroyt7.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//━━━━━━━━━━━━━━━[ SELF AND PUBLIC ]━━━━━━━━━━━━━━━━━//

if (!zeroyt7.public) {
if (!m.key.fromMe) return 
}

//━━━━━━━━━━━━━━━[ CONSOLE MESSAGE ]━━━━━━━━━━━━━━━━━//

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ BOT INDO ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
        
 //━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync('./image/zeroyt7.jpg'), surface: 200, message: `©Created By BOT INDO`, orderTitle: 'Please Subscribe Youtube BOT INDO', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': fs.readFileSync('./image/zeroyt7.jpg')}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': fs.readFileSync('./image/zeroyt7.jpg')}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': fs.readFileSync('./image/zeroyt7.jpg')}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./image/zeroyt7.jpg'), thumbnail: fs.readFileSync('./image/zeroyt7.jpg'),sendEphemeral: true}}}

//━━━━━━━━━━━━━━━[ SEND MESSAGE ]━━━━━━━━━━━━━━━━━//

var sendMess = (from, teks) => {
return zeroyt7.sendMessage(from, { text: teks })
}
var sendFileFromUrl2 = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
let type = mime.split("/")[0]+"Message"
return zeroyt7.sendMessage(m.chat, { document: await getBuffer(url), mimetype:'audio/mpeg' , caption: 'tiktok.mp3', mentions: men ? men : []}, {quoted: m })
}
var sendFileFromUrl = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return zeroyt7.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: fgif})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return zeroyt7.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: fgif})
} else if(mime.split("/")[0] === "video"){
return zeroyt7.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: fgif})
} else if(mime.split("/")[0] === "audio"){
return zeroyt7.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: fgif })
} else {
return zeroyt7.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
}
}

zeroyt7.sendReadReceipt(m.chat, sender, [m.key.id])        
		
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//
        
switch(command) {

case 'menu': case 'help': {
txt =`╭─⬣ *Group Menu* 🏢
│${simbol} ${prefix}revoke
│${simbol} ${prefix}add
│${simbol} ${prefix}kick
│${simbol} ${prefix}promote
│${simbol} ${prefix}demote
│${simbol} ${prefix}setname
│${simbol} ${prefix}setprofile
│${simbol} ${prefix}group
│${simbol} ${prefix}linkgroup
│${simbol} ${prefix}hidetag
│${simbol} ${prefix}tagall
│${simbol} ${prefix}antilink
│${simbol} ${prefix}meme
╰─⬣

╭─⬣ *Islam Menu* 🕋
│${simbol} ${prefix}iqra
│${simbol} ${prefix}juzamma
│${simbol} ${prefix}hadis
│${simbol} ${prefix}alquran
│${simbol} ${prefix}tafsirsurah
│${simbol} ${prefix}kisahnabi
│${simbol} ${prefix}surah
╰─⬣

╭─⬣ *Random Menu* ⁉️
│${simbol} ${prefix}beatvn
│${simbol} ${prefix}jedagjedugff
│${simbol} ${prefix}jedagjedugml
│${simbol} ${prefix}jedagjedugpubg
│${simbol} ${prefix}storywa
│${simbol} ${prefix}storygalau
│${simbol} ${prefix}storytruk
│${simbol} ${prefix}storybus
│${simbol} ${prefix}storyanime
│${simbol} ${prefix}ppcp
│${simbol} ${prefix}pantun
│${simbol} ${prefix}faktaunik
│${simbol} ${prefix}quotesanime
╰─⬣

╭─⬣ *Asupan Menu* 👩‍🦰
│${simbol} ${prefix}asupan
│${simbol} ${prefix}asupanloli
│${simbol} ${prefix}hijaber
│${simbol} ${prefix}bocil
│${simbol} ${prefix}rikagusriani
│${simbol} ${prefix}santuy
│${simbol} ${prefix}ukhty
│${simbol} ${prefix}gheayubi
│${simbol} ${prefix}nantalia
│${simbol} ${prefix}cogan
│${simbol} ${prefix}cecan
│${simbol} ${prefix}cecan2
│${simbol} ${prefix}cogan2
│${simbol} ${prefix}jeni
│${simbol} ${prefix}jiso
│${simbol} ${prefix}justina
│${simbol} ${prefix}lisa
│${simbol} ${prefix}rose
│${simbol} ${prefix}ryujin
│${simbol} ${prefix}china
│${simbol} ${prefix}vietnam
│${simbol} ${prefix}thainlad
│${simbol} ${prefix}indonesia
│${simbol} ${prefix}korea
│${simbol} ${prefix}japan
│${simbol} ${prefix}malaysia
╰─⬣

╭─⬣ *Download Menu* 💾
│${simbol} ${prefix}drakor
│${simbol} ${prefix}igdl
│${simbol} ${prefix}ytmp4
│${simbol} ${prefix}ytmp3
│${simbol} ${prefix}play
│${simbol} ${prefix}tiktok
│${simbol} ${prefix}tiktokaudio
│${simbol} ${prefix}soundcloud
│${simbol} ${prefix}gitclone
│${simbol} ${prefix}ttnowm
│${simbol} ${prefix}weebton
│${simbol} ${prefix}soundcloud
│${simbol} ${prefix}solidfile
╰─⬣

╭─⬣ *Search Menu* 🔍
│${simbol} ${prefix}ytsearch
│${simbol} ${prefix}google
│${simbol} ${prefix}gimage
│${simbol} ${prefix}pinterest
│${simbol} ${prefix}playstore
│${simbol} ${prefix}searchgc
╰─⬣

╭─⬣ *Wallpaper Menu* 📂
│${simbol} ${prefix}wallpaper
│${simbol} ${prefix}teknologi
│${simbol} ${prefix}programmer
│${simbol} ${prefix}gamer
│${simbol} ${prefix}anime
│${simbol} ${prefix}muslim
│${simbol} ${prefix}cyber
╰─⬣

╭─⬣ *Primbon Menu* 📃
│${simbol} ${prefix}nomorhoki
│${simbol} ${prefix}artimimpi
│${simbol} ${prefix}artinama
│${simbol} ${prefix}ramaljodoh
│${simbol} ${prefix}ramaljodohbali
│${simbol} ${prefix}suamiistri
│${simbol} ${prefix}ramalcinta
│${simbol} ${prefix}cocoknama
│${simbol} ${prefix}pasangan
│${simbol} ${prefix}jadiannikah
│${simbol} ${prefix}sifatusaha
│${simbol} ${prefix}rezeki
│${simbol} ${prefix}pekerjaan
│${simbol} ${prefix}nasib
│${simbol} ${prefix}penyakit
│${simbol} ${prefix}tarot
│${simbol} ${prefix}fengshui
│${simbol} ${prefix}haribaik
│${simbol} ${prefix}harisangar
│${simbol} ${prefix}harisial
│${simbol} ${prefix}nagahari
│${simbol} ${prefix}arahrezeki
│${simbol} ${prefix}peruntungan
│${simbol} ${prefix}weton
│${simbol} ${prefix}karakter
│${simbol} ${prefix}keberuntungan
│${simbol} ${prefix}memancing
│${simbol} ${prefix}masasubur
│${simbol} ${prefix}zodiak
│${simbol} ${prefix}shio
╰─⬣

╭─⬣ *Wibu Menu* 🌿
│${simbol} ${prefix}manga
│${simbol} ${prefix}waifu
│${simbol} ${prefix}loli
│${simbol} ${prefix}husbu
│${simbol} ${prefix}wallml
│${simbol} ${prefix}milf
│${simbol} ${prefix}cosplay
│${simbol} ${prefix}sagiri
│${simbol} ${prefix}naruto
│${simbol} ${prefix}kaneki
│${simbol} ${prefix}rimuru
│${simbol} ${prefix}akira
│${simbol} ${prefix}kurama
│${simbol} ${prefix}dazai
│${simbol} ${prefix}miku
│${simbol} ${prefix}mikasa
│${simbol} ${prefix}eren
│${simbol} ${prefix}titan
│${simbol} ${prefix}levi
│${simbol} ${prefix}sakura
│${simbol} ${prefix}hinata
│${simbol} ${prefix}neji
│${simbol} ${prefix}shinobu
│${simbol} ${prefix}kurumi
│${simbol} ${prefix}rem
│${simbol} ${prefix}minato
│${simbol} ${prefix}jiraya
│${simbol} ${prefix}tsunade
│${simbol} ${prefix}kiba
│${simbol} ${prefix}boruto
│${simbol} ${prefix}sarada
│${simbol} ${prefix}sasuke
│${simbol} ${prefix}madara
│${simbol} ${prefix}obito
│${simbol} ${prefix}tanjiro
│${simbol} ${prefix}nezuko
│${simbol} ${prefix}luffy
│${simbol} ${prefix}zoro
│${simbol} ${prefix}sanji
│${simbol} ${prefix}gon
│${simbol} ${prefix}killua
│${simbol} ${prefix}zenitsu
│${simbol} ${prefix}natsu
│${simbol} ${prefix}genos
│${simbol} ${prefix}saitama
│${simbol} ${prefix}inosuke
│${simbol} ${prefix}inori
╰─⬣

╭─⬣ *Sticker Menu* 🎗️
│${simbol} ${prefix}sticker
│${simbol} ${prefix}togif
│${simbol} ${prefix}tomp4
│${simbol} ${prefix}toimage
│${simbol} ${prefix}emojimix
╰─⬣

╭─⬣ *Photooxy Menu* 📸
│${simbol} ${prefix}leaves
│${simbol} ${prefix}wolflogo
│${simbol} ${prefix}gradasi3d
│${simbol} ${prefix}pornhub
│${simbol} ${prefix}blackpink textnya
│${simbol} ${prefix}halloween textnya
│${simbol} ${prefix}halloween2 textnya
│${simbol} ${prefix}3dgradient textnya
│${simbol} ${prefix}naturalleaves textnya
│${simbol} ${prefix}dropwater textnya
│${simbol} ${prefix}blood textnya
│${simbol} ${prefix}blood2 textnya
│${simbol} ${prefix}snow textnya
│${simbol} ${prefix}cloud textnya
│${simbol} ${prefix}neondevil textnya
│${simbol} ${prefix}neon textnya
│${simbol} ${prefix}glowingneonlight textnya
│${simbol} ${prefix}neonlight textnya
│${simbol} ${prefix}neonlight2 textnya
│${simbol} ${prefix}neonlight3 textnya
│${simbol} ${prefix}greenneon textnya
│${simbol} ${prefix}toxic textnya
│${simbol} ${prefix}matrix textnya
│${simbol} ${prefix}thunder textnya
│${simbol} ${prefix}thunder2 textnya
│${simbol} ${prefix}bokeh textnya
│${simbol} ${prefix}carbontext textnya
│${simbol} ${prefix}christmas textnya
│${simbol} ${prefix}breakwall textnya
│${simbol} ${prefix}roadwarning textnya
│${simbol} ${prefix}engraved3d textnya
│${simbol} ${prefix}embossed textnya
│${simbol} ${prefix}3dstone textnya
│${simbol} ${prefix}futuristic textnya
│${simbol} ${prefix}sketch textnya
│${simbol} ${prefix}bluecircuit textnya
│${simbol} ${prefix}space textnya
│${simbol} ${prefix}magmahot textnya
│${simbol} ${prefix}artpapercut textnya
│${simbol} ${prefix}3dluxurygold textnya
│${simbol} ${prefix}robotr2d2 textnya
│${simbol} ${prefix}harrypotter textnya
│${simbol} ${prefix}glitch3 textnya
│${simbol} ${prefix}greenhorror textnya
│${simbol} ${prefix}horrorgift textnya
│${simbol} ${prefix}erodedmetal textnya
│${simbol} ${prefix}3dglowingmetal textnya
│${simbol} ${prefix}blackmetal textnya
│${simbol} ${prefix}bluemetal textnya
│${simbol} ${prefix}shynimetal textnya
│${simbol} ${prefix}rustymetal textnya
│${simbol} ${prefix}metalpurple textnya
│${simbol} ${prefix}metalrainbow textnya
│${simbol} ${prefix}metaldarkgold textnya
│${simbol} ${prefix}colorfullluxurymetal textnya
│${simbol} ${prefix}glossybluemetal textnya
│${simbol} ${prefix}3dglossymetal textnya
│${simbol} ${prefix}3ddeepseametal textnya
│${simbol} ${prefix}leddisplayscreen textnya
│${simbol} ${prefix}metallic textnya
│${simbol} ${prefix}glossymetallic textnya
│${simbol} ${prefix}christmastree textnya
│${simbol} ${prefix}sparklesmerrychristmas textnya
│${simbol} ${prefix}countryflag3d textnya
│${simbol} ${prefix}americanflag3d textnya
│${simbol} ${prefix}3dscfi textnya
│${simbol} ${prefix}3drainbow textnya
│${simbol} ${prefix}3dwaterpipe textnya
│${simbol} ${prefix}3dchrome textnya
│${simbol} ${prefix}bluegem textnya
│${simbol} ${prefix}purplegem textnya
│${simbol} ${prefix}pinkcandy textnya
│${simbol} ${prefix}transformer textnya
│${simbol} ${prefix}berry textnya
│${simbol} ${prefix}brokenglass textnya
│${simbol} ${prefix}3drealistic textnya
│${simbol} ${prefix}3dunderwater textnya
│${simbol} ${prefix}writeinsandsummerbeach textnya
│${simbol} ${prefix}sandwriting textnya
│${simbol} ${prefix}foilballoon textnya
│${simbol} ${prefix}3dglue textnya
│${simbol} ${prefix}1917 textnya
│${simbol} ${prefix}minion textnya
│${simbol} ${prefix}doubleexposure textnya
│${simbol} ${prefix}holographic3d textnya
│${simbol} ${prefix}deluxegold textnya
│${simbol} ${prefix}deluxesilver textnya
│${simbol} ${prefix}glossycarbon textnya
│${simbol} ${prefix}fabric textnya
│${simbol} ${prefix}xmascards3d textnya
│${simbol} ${prefix}wicker textnya
│${simbol} ${prefix}fireworksparkle textnya
│${simbol} ${prefix}skeleton textnya
│${simbol} ${prefix}ultragloss textnya
│${simbol} ${prefix}denim textnya
│${simbol} ${prefix}decorategreen textnya
│${simbol} ${prefix}peridot textnya
│${simbol} ${prefix}rock textnya
│${simbol} ${prefix}lava textnya
│${simbol} ${prefix}rainbowequalizer textnya
│${simbol} ${prefix}purpleglass textnya
│${simbol} ${prefix}decorativeglass textnya
│${simbol} ${prefix}chocolatecake textnya
│${simbol} ${prefix}strawberry textnya
│${simbol} ${prefix}koifish textnya
│${simbol} ${prefix}bread textnya
│${simbol} ${prefix}3dbox textnya
│${simbol} ${prefix}freeadvancedglow textnya
│${simbol} ${prefix}honey textnya
│${simbol} ${prefix}marble textnya
│${simbol} ${prefix}marbleslabs textnya
│${simbol} ${prefix}icecold textnya
│${simbol} ${prefix}fruitjuice textnya
│${simbol} ${prefix}abstragold textnya
│${simbol} ${prefix}biscuit textnya
│${simbol} ${prefix}bagel textnya
│${simbol} ${prefix}wood textnya
│${simbol} ${prefix}hexagolden textnya
│${simbol} ${prefix}tahta textnya
│${simbol} ${prefix}wonderfulgraffitiart textnya
╰─⬣

╭─⬣ *Owner Menu* 〽️
│${simbol} ${prefix}block
│${simbol} ${prefix}unblock
│${simbol} ${prefix}eval
│${simbol} ${prefix}public
│${simbol} ${prefix}self
│${simbol} ${prefix}bc
│${simbol} ${prefix}bcgc
│${simbol} ${prefix}ping
│${simbol} ${prefix}owner
╰─⬣

* Thanks To
* Allah S.W.T
* Ortu
* Bot Indo (Pengembang)
* Zero YT7 (Base)
* Sanzy Kawaii 
* Guntur Ps
* Dhika Ardiant (Lord MD)
* Imell (KangReCode)
* All Creator Bot
* All Subscriber Ku`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/zeroyt7.jpg') }, { upload: zeroyt7.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedButtons: [{
urlButton: {
displayText: 'YouTube',
url: 'https://www.youtube.com/c/BOTINDO'
}
}, {
urlButton: {
displayText: 'Github',
url: 'https://github.com/Aprilia3'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
zeroyt7.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage':
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)]
        sendFileFromUrl(m.chat, `${images}`,`Hasil Pencarian🔍\nNama : ${q}`)
        })
        break
case 'playstore':
if (!q) return m.reply(`Example :\n${prefix}playstore termux`)
hx.playstore(q).then(res => {
teks3 = '``` Play Store ```'
for (let i of res) {
teks3 += `\n\n${i.name}\n`
teks3 += `${i.link}\n`
teks3 += `${i.developer}`
}
m.reply(teks3)
})
break
case 'searchgc':
if (!q) return m.reply(`Example :\n${prefix}searchgc Editor Berkelas`)
hx.linkwa(q).then(res => {
teks1 = '``` Search Group ```'
for (let i of res) {
teks1 += `\n\n•> Group Whatsapp :\n`
teks1 += `${i.link}\n`
teks1 += `${i.nama}`
}
zeroyt7.sendMessage(m.chat, { text : teks1 })
})
break
case 'revoke':
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin                                               
let link = await zeroyt7.groupRevokeInvite(m.chat)
await m.reply( `*New Link For ${groupName}* :\n https://chat.whatsapp.com/${link}`)
break
//buatan gw aprilia
  case 'pantun':
pantun = body.slice(1)
const pan =["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
const tun = pan[Math.floor(Math.random() * pan.length)]
m.reply(tun)
break
case 'faktaunik':
faktaa = body.slice(1)
const fak =["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
const taa = fak[Math.floor(Math.random() * fak.length)]
m.reply(taa)
break
case 'quotesanime':
kontol = body.slice(1)
let kon = ["karater : Hachiman Hikigaya\nquotes : _Lebih baik dibenci karena menjadi dirimu sendiri, daripada dicintai karena menjadi orang lain._","karakter : Roronoa Zoro\nquotes : _Seperti itulah seorang kapten. Jika pemimpin terlalu lembek, kepada siapa lagi kita harus percaya?_","karakter : Monkey D. Luffy\nquotes : _Jika kau tidak mau mengambil risiko, kau tidak dapat menciptakan masa depan._","karakter : Hatake Kakashi\nquotes : _Pengalaman bukan jaminan untuk menang, karena tiap generasi akan selalu tumbuh lebih baik._","karakter : Izuku Midoriya\nquotes : _Jangan khawatirkan apa yang dipikirkan orang lain. Tegakkan kepalamu dan melangkahlah ke depan._","karakter : sora\nquotes : _Hidup bukanlah permainan keberuntungan. Jika kau ingin menang, kau harus bekerja keras._","karakter : Koro Sensei\nquotes : _Ujian memberikan kesempatan yang bagus untuk mengetahui arti menang dan kalah atau kuat dan lemah. Raihlah kesuksesan dan kemunduran sebanyak yang kalian bisa, murid-muridku!_","karakter : Yukino Yukinoshita\nquotes : _Banyak orang gagal karena mereka tidak memahami usaha yang diperlukan untuk menjadi sukses._","karakter : killua\nquotes : _Kalau kau terus berfikir dan tak melakukan apa-apa, kau akan tertinggal jauh._","karakter : tanaka-kun\nquotes : _Kalau itu tidak bisa diselesaikan dengan usaha, jangan berusaha._","karakter : Kaori Miyazono\nquotes : _Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok._","karakter : naruto uzumaki\nquotes : _jika Kau tidak menyukai takdir Mu, jangan menerimanya. Sebaliknya, miliki keberanian untuk mengubahnya sesuai keinginan Mu._","karakter : Houtarou Oreki\nquotes : _Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._","karakter : Satoshi Fukube\nquotes : _Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._","karakter : Tanaka-Kun\nquotes : _Gagal itu bukan masalah, kan? Karena kalau kau gagal hari ini, masih ada besok, atau hari setelahnya, kalau perlu mungkin bisa saja butuh setahun. Hidup ini panjang, jadi meski kau tak bisa berhasil sekarang, pasti pada akhirnya kau akan berhasil._","karakter : Kayaba Akihiko\nquotes : _Kita harus mensyukuri apa yang kita punya saat ini, karena mungkin orang lain belum tentu mempunyainya._","karakter : saitama\nquotes : _Kekuatan sejati dari umat manusia adalah bahwa kita memiliki kuasa penuh untuk mengubah diri kita sendiri._","karakter : Kamado Tanjiro\nquotes : _Karena manusia bertindak atas keinginan hatinya, Hatinya pun akan terus bertambah kuat_","karakter : Doraemon\nquotes : _Lebih baik jadi orang bodoh yang tidak mengerti apa-apa, dari pada menjadi orang terpelajar yang tidak tahu jalan._","karakter : Nami\nquotes : _Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan._"]
let a = kon[Math.floor(Math.random() * kon.length)]
m.reply(a)
break
case 'bc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Aprii`
                let getGroups = await zeroyt7.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'SubsCribe',
                                    url: 'https://www.youtube.com/c/BOTINDO'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Profile Creator',
                                    url: 'https://webasu-lea27yssy-aprilia3.vercel.app/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./image/zeroyt7.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      zeroyt7.send5ButImg(i, txt, `*Loli Bot MD*`, fatihgans, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':
m.reply(mess.wait)
apri = `https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=NisaaCantik`
sendFileFromUrl(m.chat, `${apri}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'hijaber':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
m.reply(mess.wait)
apri = `https://apidhani.herokuapp.com/api/asupan/${command}?apikey=NisaaCantik`
sendFileFromUrl(m.chat, `${apri}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
m.reply(mess.wait)
apri = `https://apidhani.herokuapp.com/api/cecan/${command}?apikey=NisaaCantik`
sendFileFromUrl(m.chat, `${apri}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (!q) return m.reply(`_Example : ${prefix + command} Apri_`) 
m.reply(mess.wait)
cok = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=NisaaCantik&text=${q}`)
sendFileFromUrl(m.chat, `${cok.result}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'tahta': 
if (!q) return reply(`_Example : ${prefix + command} Aprii_`) 
m.reply(mess.wait)
harta = `https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=NisaaCantik&text=${q}`
sendFileFromUrl(m.chat, `${harta}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                zeroyt7.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await zeroyt7.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                zeroyt7.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                zeroyt7.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'blackpink':
if (!q) return m.reply(`Example : ${prefix + command} Aprilia`)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/textpro/black-pink?apikey=Fxc7&text=${q}`)
sendFileFromUrl(m.chat,`${anu.result}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'wolflogo':
if (!q) return m.reply(`Example : ${prefix + command} Aprilia|Aprii`)
var gh = body.slice(10)
var gli = gh.split("|")[0];
var tch = gh.split("|")[1];
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/textpro/logo-wolf?apikey=Fxc7&text=${gli}&text2=${tch}`)
sendFileFromUrl(m.chat,`${anu.result}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'pornhub':
if (!q) return m.reply(`Example : ${prefix + command} Aprilia|Aprii`)
var po = body.slice(9)
var as = po.split("|")[0];
var yu = po.split("|")[1];
anu = await fetchJson (`https://api-bot-xyz.herokuapp.com/api/textpro/porn-hub?apikey=Aprii&text1=${as}&text2=${yu}`)
sendFileFromUrl(m.chat,`${anu.result}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'leaves':
if (!q) return m.reply(`Example : ${prefix + command} Aprilia`)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/textpro/natural-leaves?apikey=Fxc7&text=${q}`)
sendFileFromUrl(m.chat,`${anu.result}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'gradasi3d':
if (!q) return m.reply(`Example : ${prefix + command} Aprilia`)
anu = await fetchJson(`https://api-bot-xyz.herokuapp.com/api/textpro/3d-gradient?apikey=Aprii&text=${q}`)
sendFileFromUrl(m.chat,`${anu.result}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'ytmp3':
			if (!q) return m.reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return m.reply(mess.eror)
				try {
				m.reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendFileFromUrl(m.chat, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendFileFromUrl(m.chat, thumb, captions)
				sendFileFromUrl(m.chat, dl_link).catch(() => m.reply(mess.eror))
				})
				})
				} catch (err) {
				m.reply(mess.eror)
				}
				break
case 'soundcloud':
if (!q) return m.reply(`Kirim perintah *${prefix}soundcloud [link sound]*`)
if (!q.includes('soundcloud.com')) return m.reply(`Link Nya Jelek`)
anu = await scdl(`${q}`)
.then((res) => {
sendFileFromUrl(m.chat, `${res.thumb}`, `${res.title}`)
sendFileFromUrl(m.chat, `${res.link}`)
})
break
case 'solidfile':
if (!q) return m.reply(`Kirim perintah *${prefix}solidfile [link]*`)
if (!q.includes('solidfiles.com')) return m.reply(`Link Nya Jelek`)
anu = await sfiledl(`${q}`)
.then((res) => {
titlecok = `TITLE DITEMUKAN OLEH BOT\n\nTitle : ${res.title}\nSize : ${res.size}\n\nMOHON TUNGGU BOT SEDANG MENGIRIM FILE`
zeroyt7.sendMessage(m.chat, { text : titlecok })
sendFileFromUrl(m.chat, `${res.url}`)
})
break
case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `audioyt ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `videoyt ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: zeroyt7.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zeroyt7.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'audioyt': case 'ytaudio': {
                let { ytaa } = require('../lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                zeroyt7.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fgif })
            }
            break
            case 'videoyt': case 'ytvideo': {
                let { ytvv } = require('../lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                zeroyt7.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`}, { quoted: fgif })
            }
            break
case 'ytmp4':
			if (!q) return m.reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return m.reply(mess.eror)
				try {
				m.reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 50000) return sendFileFromUrl(m.chat, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesize}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP4*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesize}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendFileFromUrl(m.chat, thumb, captions)
				sendFileFromUrl(m.chat, dl_link).catch(() => m.reply(mess.eror))
				})
				})
				} catch (err) {
				m.reply(mess.eror)
				}
				break
case 'antilink':
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
					if (Number(args[0]) === 1) {
						if (isAntiLink) return m.reply('Anti link group sudah aktif')
						antilink.push(m.chat)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						m.reply('Sukses mengaktifkan anti link group di group ini ✔️')
						m.reply(`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return m.reply('Mode anti link group sudah disable')
						antilink.splice(m.chat, 1)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						m.reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						let buttons4 = [
{buttonId: `antilink 1`, buttonText: {displayText: 'ON'}, type: 1},
{buttonId: `antilink 0`, buttonText: {displayText: 'OFF'}, type: 1},
]
let buttonMessage4 = {
text: `Pilih Dibawah`,
footerText: 'Button By Aprilia',
buttons: buttons4,
headerType: 2
}
zeroyt7.sendMessage(m.chat, buttonMessage4, { quoted: m })                        
						}
					break 
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw 'Text ?'
await zeroyt7.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setprofile': case 'setpp': {
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
await zeroyt7.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
await fs.unlinkSync(media)
} else if (!isCreator && !m.key.fromMe) {
await zeroyt7.updateProfilePicture(zeroyt7.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
await fs.unlinkSync(media)
}
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw 'Masukkan value open/close'
if (args[0].toLowerCase() === 'close') {
await zeroyt7.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await zeroyt7.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await zeroyt7.groupInviteCode(m.chat)
zeroyt7.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'igstalk':
		            if (!q) return m.reply('Usernamenya?')
		            anu = await fetchJson (`https://hardianto.xyz/api/igstalk?username=${args.join(' ')}&apikey=hardianto`)
		let infonye = `Username : ${anu.username}\nFullname : ${anu.fullname}\nBio : ${anu.bio}\nFollowers : ${anu.followers}\nFollow : ${anu.follow}`
		sendFileFromUrl(m.chat,`${anu.thumbnail}`,`${infonye}`)
		            break    
		case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
                if (!q) return m.reply('Usernamenya?')
                m.reply(mess.wait)
                axios.get(`https://api.github.com/users/${args.join(' ')}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
 Username : ${login}
 Name : ${name}
 Followers : ${followers}
 Following : ${following}
 Public Gists : ${public_gists}
 Public Repos : ${public_repos}
 Twitter : ${twitter_username}
 Email : ${email}
 Location : ${location}
 Blog : ${blog}
 Link : ${html_url}
 Bio :\n${bio}`
sendFileFromUrl(m.chat, avatar_url, txt)
})
                break
case 'hidetag':
if (!m.isGroup) throw mess.group
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
var group = await zeroyt7.groupMetadata(m.chat)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: m
}
zeroyt7.sendMessage(m.chat, optionshidetag, text)
break
case 'tagall': case 'infoall':
if (!m.isGroup) throw mess.group
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let startnum = 1
let teks = `*_Tag All Member_*\n*Pesan : ${q ? q : '-'}*\n\n`
for (let mem of groupMembers) {
teks += `${startnum++}. @${mem.id.split('@')[0]}\n`
}
teks += `\n⋙ BOT INDO ⋘`
zeroyt7.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zeroyt7.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await zeroyt7.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await zeroyt7.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await zeroyt7.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break

case 'public': {
if (!isCreator && !m.key.fromMe) throw mess.owner
zeroyt7.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator && !m.key.fromMe) throw mess.owner
zeroyt7.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': {
let vcard = `BEGIN:VCARD\n` // metadata of the contact card
+ `VERSION:3.0\n`
+ `N:;${ownername}.;;;`
+ `FN:${ownername}.\n` // full name
+ `ORG:${ownername};\n` // the organization of the contact
+ `TEL;type=CELL;type=VOICE;waid=${ownernomer}:${ownernomer}\n` // WhatsApp ID + phone number
+ `END:VCARD`
let msg = await zeroyt7.sendMessage(m.chat, { contacts: { displayName: `${ownername}`, contacts: [{ vcard }] } }, { quoted: m })
let buttons3 = [
{buttonId: `menu`, buttonText: {displayText: '►BACK MENU '}, type: 1},
]
let buttonMessage3 = {
text: `DONT NOT SPAM OWNER!! `,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
zeroyt7.sendMessage(m.chat, buttonMessage3, { quoted: m })                        
}
break
case 'eval': {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
break
case 'block': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'tiktok': case 'ttdl':
 if (!q) return m.reply('Linknya?')
             if (!q.includes('tiktok.com')) return m.reply(`Link Nya Jelek`)
            m.reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { let buttonhs = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokaudio ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: data.result.watermark },
                    caption: `By Aprilia`,
                    footer: 'Klik Button Untuk Opsi Lain',
                    buttons: buttonhs,
                    headerType: 5
                }
                zeroyt7.sendMessage(m.chat, buttonMessage, { quoted: m }})
            }
            break
case 'ttnowm': case 'tiktoknowm':
 if (!q) return m.reply('Linknya?')
             if (!q.includes('tiktok.com')) return m.reply(`Link Nya Jelek`)
            m.reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendFileFromUrl(m.chat, data.result.nowatermark,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`) })
            .catch((err) => { m.reply(String(err)) })
             break
case 'tiktokaudio':
 if (!q) return m.reply('Linknya?')
             if (!q.includes('tiktok.com')) return m.reply(`Link Nya Jelek`)
            m.reply(mess.wait)
             anu = await musicaldown(`${q}`)
            .then((data) => { sendFileFromUrl2(m.chat, data.audio) })
            .catch((err) => { m.reply(String(err)) })
             break
case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		zeroyt7.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
case 'kisahnabi':
                    if (!q) return m.reply(`Example: .${command} muhammad`)
                    get_result = await fetchJson(`https://app-botpri.herokuapp.com/api/muslim/kisahnabi?nabi=${args.join(' ')}&apikey=Fxc7`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.kelahiran}\n`
                    ini_txt += `Tempat : ${get_result.singgah}\n`
                    ini_txt += `Story : \n${get_result.kisah}`
                    m.reply(ini_txt)
                    break      
case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		zeroyt7.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		zeroyt7.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		zeroyt7.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		zeroyt7.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		zeroyt7.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Tafsir Surah*  

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
case 'surah':
if (!q) return m.reply(`Example :\n${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '```🛐 AL-QURAN 🛐```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
zeroyt7.sendMessage(m.chat, { text: teks })
})
break
case 'sc': {
m.reply('Tungguin aja, pokoknya lewat github')
}
break
case 'git': case 'gitclone':
             m.reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    
    let [, user, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
  zeroyt7.sendMessage(m.chat, { document: { url: url }, fileName: 'By Aprilia.zip', mimetype: 'application/zip' }, { quoted: m })
			 break
case 'hentai':
case 'ahegao':
case 'ass':
case 'blowjob':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
m.reply(mess.wait)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
sendFileFromUrl(m.chat,`${anu.result}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    m.reply(mess.wait)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          sendFileFromUrl(m.chat,`${wipi}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'attp':
                if (!q) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} aprii`)
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${ini_text}`)
                zeroyt7.sendMessage(m.chat, { sticker: { url: ini_buffer, quoted: m }})
                break
case 'sagiri':
m.reply(mess.wait)
let tot = (await axios.get(`https://raw.githubusercontent.com/Venz17/RESTAPI/master/data/sagiri.json`)).data
let suka = tot[Math.floor(Math.random() * (tot.length))]
sendFileFromUrl(m.chat,`${suka}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'inori':
          let sau = (await axios.get(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)).data
          let pii = sau[Math.floor(Math.random() * (sau.length))]
          sendFileFromUrl(m.chat,`${pii}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
break
case 'anime':
//By Aprilia
          let wiu = (await axios.get(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)).data
          let wii = wiu[Math.floor(Math.random() * (wiu.length))]
          sendFileFromUrl(m.chat,`${wii}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
case 'teknologi':
                //By Aprilia
          let asu = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)).data
          let titit = asu[Math.floor(Math.random() * (asu.length))]
         sendFileFromUrl(m.chat,`${titit}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
                    case 'gamer':
                //By Aprilia
          let siap = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)).data
          let itu = siap[Math.floor(Math.random() * (siap.length))]
          sendFileFromUrl(m.chat,`${itu}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
                    case 'programmer':
                //By Aprilia
          let wia = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)).data
          let hapi = wia[Math.floor(Math.random() * (wia.length))]
         sendFileFromUrl(m.chat,`${hapi}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
case 'meme':
let tes = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)).data
let sku = tes[Math.floor(Math.random() * (tes.length))]
sendFileFromUrl(m.chat,`${sku}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
case 'wallpaper':
                //By Aprilia
          let aku = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)).data
          let sapi = aku[Math.floor(Math.random() * (aku.length))]
          sendFileFromUrl(m.chat,`${sapi}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
case 'muslim':
                //By Aprilia
          let sapu = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)).data
          let pipi = sapu[Math.floor(Math.random() * (sapu.length))]
          sendFileFromUrl(m.chat,`${pipi}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
case 'cyber':
//By Aprilia
          let war = (await axios.get(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)).data
          let tipi = war[Math.floor(Math.random() * (war.length))]
          sendFileFromUrl(m.chat,`${tipi}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
case 'naruto': case 'kaneki': case 'shinomiya': case 'kurama': case 'rimuru': case 'akira': case 'dazai': case 'miku': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                   case 'shinobu': case 'kurumi': case 'animerem': case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'zenitsu': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    m.reply(mess.wait)
                let im = await hx.chara(command)
            let acak = im[Math.floor(Math.random() * im.length)]
sendFileFromUrl(m.chat,`${acak}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
                break
case 'pinterest':
            if(!q) return m.reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            sendFileFromUrl(m.chat,`${ac}`,`Nieh By Aprilia\nJangan Lupa Subscribe Bot Indo`)
            break
case 'ytsearch':
                   if (!q) return m.reply(`mo cari apaan`)
                    query = args.join(" ")
             m.reply(mess.wait)   
             get_result = await fetchJson(`https://api.dhamzxploit.my.id/api/ytsearch?q=${query}`)
                    aprii = get_result.result
                    ini_txt = ""
                    for (var x of aprii) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    m.reply(ini_txt)
                    break
case 'donasi':
var aprian = `
*•DONASI KAK BUAT BELI KUOTA*

*•GOPAY : ${setting.gopay}*
*•DANA : ${setting.dana}*
*•OVO : ${setting.ovo}*
*•PULSA : ${setting.pulsa}*
*•BELUM PREMIUM SCAN DIBAWAH*
*•LINK : https://telegra.ph/file/d36414dd2d16f0b6286af.jpg*

*Q.S Az-Zalzalah Ayat 7 :*

فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ

Artinya : Maka barangsiapa 
mengerjakan kebaikan seberat
zarrah, niscaya dia akan melihat 
(balasan)nya.

*Terima Kasih*
`
zeroyt7.sendMessage(m.chat, { text : aprian })
break
case 'ig':
case 'igdl':
case 'instagram':
if (!q) return m.reply('Linknya?')
var { igDownloader } = require('../lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
m.reply(mess.eror)
})
console.log(res)
sendFileFromUrl(m.chat,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'webtonsearch': case 'webtoon':
if (!q) return m.reply('Linknya?')
                await m.reply(mess.wait)
                zee.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await m.reply(txt)
                })
                .catch((err) => {
                    m.reply(mess.eror)
                })
            break
case 'manga':
if (!q) return m.reply('Linknya?')
                await m.reply(mess.wait)
                zee.Manga(`${q}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gambra = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    zeroyt7.sendMessage(m.chat, { image: { gambra, caption: txt }, quoted: m })
                    })
                    break
            case 'drakor':
            if (!q) return m.reply('Linknya?')
                await m.reply(mess.wait)
                zee.Drakor(`${q}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*?? Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(m.chat,data[0].thumbnail,txt)
                })
                .catch((err) => {
                    reply(mess.eror)
                })
            break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:

if (budy.startsWith('=>')) {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m = String(err)
await m.reply(m)
}
}

if (budy.startsWith('$')) {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
}
        

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})