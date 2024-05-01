import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"





global.owner = [
  ["263781330745", "watsonfourpence",true],
  [''], 
  [''] 
]
//💌------------------------------------------💌


//💌global.pairingNumber = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFqa2VNZndOUEgwSDFhVzVlRVpuVmpnV0RhQ2Y3RlMyVW93Q0c2V1FsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTFIbWhZOFJ4bGd4ZDIrNkJxOUZPc2lwakZLZk5TQ3dLQTF5OS8vK3JYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRnA3K01Ra1V3QlFZZ2djektMZFVUTmtqRXlDazB5TzVLQmRxMWFsQ0ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPOU4xTi96SUN2UjBBdUE5bnJxSStKWEdYNkFhUE1zOHBpMG9vV3hRbndnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9EckI2R2FZcXBBekM0Y2UwQitiYWtzUGNlY1k2ak5SZkt6VjFvWDRTbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdjOFdzcUhQa1hkQ0xteFVuS000TWYrczFQaEVEdWx3amhyNWgrMjNsd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9TNGNpWXpaMFVURWJ0Qi91T1Nza0Q4NU84KzJ5a3J2NVU0RnlxNTJVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01GWk4vRC9TU3hSOEl5S2J3cjFZbVlnUGNMQ1pNUUM1ZFFQVUtvQ21qST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldsaVh4cXRoQXRRMmk5Q2NlZ0M1UnVmekJPeHJMRTFXN3pVNjhubmtzQkxSZkU0YWJOSndJazRGajd5RlZyQ1EwYWh4WEd5c3JTWitrVVZuRjVsSGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJUT0VKWTFrNS9RVnJLWlNnUHZHdWsxUVp5Y2FXRFN4NndDUlkrd2poR3JvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJud2pnOXFyT1NieUEtTXFiTjM0NnZ3IiwicGhvbmVJZCI6IjMzYzM3ZjQzLTc0YmUtNDAwYS1hOGJkLTIxYTBiYzE1YzNkOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUY3h3VkhZWThtSENBbUpvZXVNMyt2VUNMejQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjI1b3dQeXRoOVZQUXREdFR2VG5BMWMrYXBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNKMlBWOTk2IiwibWUiOnsiaWQiOiIyNjM3ODEzMzA3NDU6ODhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4py6zaHNnOKes+Ktl+KOvM2lzaLijrzijrzNo+KOvOKOvM2rKvCdkJbwnZqr8J2au/CdkJLwnZqv8J2atPCdmqnwnZqv8J2au/CflYrvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01DcDhOWUZFTmVheDdFR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlHU1VDRjJWS2c1RWsveVR3eENGcFE2RWFvRHhGbnhzV0M3cmZrUFNXR2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IiswR3h5UG1qMWs1WXVFRzZGMEZEdDBtUkZROHo4ejFnYzlxQlJ6L056MzFYSkpKOFJNQ2xEQmFOREN1T0lTV1BHWlBva2hqd1JFT0VxaVV5MmtONEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3RW1TaTZaamJBamZmcVpjUWxnWjN5M1E2b2dWTkQ2M2xRS0R3bTdzZWkzSjd0OXN3bkNBb2lKRlMrZnhCSCt3cWVoUXlFT1dtN2Y5VDZ3VXJtRzRpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4MTMzMDc0NTo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmUmtsQWhkbFNvT1JKUDhrOE1RaGFVT2hHcUE4Ulo4YkZndTYzNUQwbGhwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0NTM5ODY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV4VSJ9" //put your bot number here💌
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
global.botname = '𝘗𝘙𝘐𝘕𝘊𝘌-𝘉𝘖𝘛-𝘔𝘋'
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
