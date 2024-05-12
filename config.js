import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"





global.owner = [
  ["263781330745", "watson-xd", false],
  [''], 
  [''] 
]
//💌------------------------------------------💌


//💌global.pairingNumber = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BqTlMwc2s1V3FGRFhVSjFldm1BV0taMDNrakpFTmIzdDJWdDdoRUltVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWpUZGxmVC84TjZIbG13Z3lHbUpEUDhaU21mNHhhbDc4RVYyTEx1WU9IWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT01aMWNFQ0pudFAzUWp6NjR6aDZhNzhvZmd6SUkyU3hYbms1VEFudmw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGMUdsQURqU0x4dXd2R0JwTk9GMGswWFJYdzZxMVk3NGQzNno5QUFIRkY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOWlVwZWZmd1diYmZhV2Z5RWVNRTZGeGZNUlgvcUUrZjh6dVJsODcyWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOUGxVY2MrR2ZTbTFObHJDamNMb1VWcjR4NFJiM0VoaVVvQk1qcStSSDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0grelRSejMxdlZUNW1qQjJ2bkwxVThQSzZKaFlyQVZEazJiR0VoWDNtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXhMdmIvK2J3ODd4RDh1dWhrZU03NTlnVUJlSFhZUEdVWDNESXRycngyZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV2TC80U3VWa0xEZXRkbytYNjVhRjB5V0ZIcm84SThISkhmYzI0WUZkVDloNS8xZVFYSjd2djBWRzVtQ3VzVWZGWGpFZlRjN3VlWlZUVmtVTUkvQUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IkxzT2Jkak1qRGYwbUZBV0RxMzdkZXRsVExWZUw4aERuWnBMaTEyVjN6Njg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzgxMzMwNzQ1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM4MzFBRTBFNTM1NjI3RDY4MTZGNTg5QTA5Q0FGODAwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTU1MTE0Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4MTMzMDc0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRTk3Q0FCRDVBNDIxNjIwQTZEMjI0MkI2NTFFMjBEOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE1NTExNDQ1fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIWEY3dEJYWFFtcTVKNHV1NFp2X2FBIiwicGhvbmVJZCI6IjQ3ZDJjNzcwLTZiZTYtNDJmMS1hYmM4LWJhNmIxZWVkODUzMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSEFqUVUwZ3pubmhLNGY5ZWhEMzBEWkl5WVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWVGcGw5cUhlTTc0ckJaM2sxR3gyNnlOYVQ0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlXVk1QOEU3IiwibWUiOnsiaWQiOiIyNjM3ODEzMzA3NDU6NDBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4py6zaHNnOKes+Ktl+KOvM2lzaLijrzijrzNo+KOvOKOvM2rKvCdkJbwnZqr8J2au/CdkJLwnZqv8J2atPCdmqnwnZqv8J2au/CflYrvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tcDhOWUZFSWpCZ3JJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlHU1VDRjJWS2c1RWsveVR3eENGcFE2RWFvRHhGbnhzV0M3cmZrUFNXR2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilk2dVJodVhwdG9HdnZVZkxvUFZqTUxIZDFzR25YN2pNOGYveW1ZOGpTZnNuNmFaNmRqdFpMa0NBTlZJclpudWJpNzZYclhPNUR0QmVXNWVMNGNRVURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDQ1E2RnBuclpZZFp3ZC85STdXZlA5bFgwV0wxcUViWHpraVc2cUpFY1BKdUQ5aDNXU1RTOTJkY0RwLzNFdW9iU0lJRkl1TjB5Nkh1aThDd2FJS2xCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4MTMzMDc0NTo0MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmUmtsQWhkbFNvT1JKUDhrOE1RaGFVT2hHcUE4Ulo4YkZndTYzNUQwbGhwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NTExNDM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU93MCJ9" //put your bot number here💌
global.mods = ['923042205427'] 
global.prems = ['']
global.allowed = ['']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
//💌------------------------------------------💌



// APIS
global.APIs = { // API Prefix
  // name: 'https://website'
  CFROSAPI: 'https://api.cafirexos.com',
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
// 💌------------------------------------------💌




//APIKEYS
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}
//💌------------------------------------------💌



// Bot Images 
global.imagen1 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen2 = fs.readFileSync("./Assets/menus/Menu1.jpg")
global.imagen3 = fs.readFileSync("./Assets/menus/Menu2.jpg")
global.imagen4 = fs.readFileSync("./Assets/menus/Menu3.jpg")
global.imagen5 = fs.readFileSync("./Assets/menus/img2.jpg")
global.imagen6 = fs.readFileSync("./Assets/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./Assets/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./Assets/menus/img8.jpg")
global.imagen9 = fs.readFileSync("./Assets/menus/img9.jpg")
global.imagen10 = fs.readFileSync("./Assets/menus/img11.jpg")
global.imagen11 = fs.readFileSync("./Assets/menus/img12.jpg")
//💌------------------------------------------💌



global.img = 'https://i.imgur.com/IXlUwTW.jpg'
global.img2 = 'https://i.imgur.com/EXTbyyn.jpg'
global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' 
global.img4 = 'https://i.imgur.com/i0pccuo.jpg' 
global.img5 = 'https://i.imgur.com/iL1snRx.jpeg'
global.img6 = 'https://i.imgur.com/cYFgSKv.jpeg'
global.img7 = 'https://i.imgur.com/JqL3h2V.jpeg'
global.img8 = 'https://i.imgur.com/PCujt1s.jpeg'
global.img9 = 'https://i.imgur.com/xfUEdDb.jpeg'
global.img10 = 'https://i.imgur.com/DvHoMc3.jpg'
global.img11 = 'https://i.imgur.com/5Q1MqGD.jpg'
global.img12 = 'https://i.imgur.com/vWnsjh8.jpg'
global.img13 = 'https://i.imgur.com/pCfFOgw.jpeg'
global.img14 = 'https://i.imgur.com/knBDWRA.jpeg'
global.img15 = 'https://i.imgur.com/QrkkKx7.jpeg'
global.img16 = 'https://i.imgur.com/JpYfcH0.jpeg'
global.img17 = 'https://i.imgur.com/9yLH4W4.jpeg'
//💌------------------------------------------💌


//Chatgpt
global.gpt1 = fs.readFileSync("./Assets/GPT/gpt1.jpg")
global.gpt2 = fs.readFileSync("./Assets/GPT/gpt2.png")
global.gpt3 = fs.readFileSync("./Assets/GPT/gpt3.png")
global.gpt4 = fs.readFileSync("./Assets/GPT/gpt4.png")
global.gpt5 = fs.readFileSync("./Assets/GPT/gpt5.png")
global.gpt6 = fs.readFileSync("./Assets/GPT/gpt6.png")
//💌------------------------------------------💌


// Randome
global.princeMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img16, img17]
global.princeImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11]
global.princegpt = [gpt1, gpt2, gpt3, gpt4, gpt5, gpt6]
//💌------------------------------------------💌



// Moderator 
global.developer = 'https://wa.me/message/DCAK67ON3XVOG1' //contact
//💌------------------------------------------💌



//Sticker WM
global.botname = 'watson-𝘉𝘖𝘛-𝘔𝘋'
global.princebot = '🛡️𝘗𝘙𝘐𝘕𝘊𝘌-𝘉𝘖𝘛-𝘔𝘋🛡️'
global.packname = 'Prince♥️' 
global.author = 'Prince♥️' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://chat.whatsapp.com/GWJkAJSgbv27sGOMLAzMDS'
global.menuvid = 'https://i.imgur.com/GFAAXqw.mp4'
global.Princesc = 'https://github.com/PRINCE-GDS/THE-PRINCE-BOT' 
global.princeyt = 'https://youtube.com/'
global.Princelog = 'https://i.imgur.com/cUvIv5w.jpeg'
global.thumb = fs.readFileSync('./Assets/Prince.png')
//💌------------------------------------------💌



//Reactions
global.wait = '*♻️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
global.multiplier = 69 
global.maxwarn = '2' 
//💌------------------------------------------💌






let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
