//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0c2VDBDYUczcWxVcVFHNXVPd1djTlZIdTJZSUtJcTI2dERuL1RMVTJuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzhjeEJmWHkzRWQ2SzIreEl1cFNDVkJ5MldqcmhibDJ6M205UkkwQitVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRUxTOGFmQlhuOXNDbU9JK0Q1MVZFRXBnQzg0cTBvdjAxNUdZa3FKQVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMzI0K09DY3p2cjYyK0x5N3F5TmdWUDJVZXFqRTdtWGRtdmgxR1Vad2dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHeVJiQUMyVGpxN0RRZHc0czA5SG9abm9EdnNDVXA4akZwbEtUYTJPWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRoTXFQUHd4UzVRbDhMUGNvSGJHbjB4TnB4NEs3dEFBTHFZSHNMelpUbms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hwQ1RQS0lqQU1zSzdFSzdtY3M4cmlmajJFTG5pMmU0R0tPRXJOcSsxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkpWamk1UTFWZm9xR05PcTlHUHFiL3VpUXphLzZmMHhTYlVWUHdTSVNDMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxkbVZWZU5SNE00cFh1VjNMTk9ZVEVyMDhKdlIwSkJUWTgxb1k0UmgyTERiaUZBTHdkYUg1SFcrcmdrYnBaYVdvdGY1eEZ0aHNTOEdHVVdKUlVGS2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJjQkdKZi93b04wR0NKcXl5WWU0MmJJb2FxVU0wVy9CdkgyR01RWk53bE9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSWkpLYnZFOFNfR1VMZVVxZ0dTQjhRIiwicGhvbmVJZCI6ImU2ZTZkMTQ2LTc1ODctNGUyZi1hOWMwLWI3OTk3NDIzYzM0OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPVzQvVTN4QTZtYVNnV0VGZmkyRlpKcmN5UG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FzNysrZ0o1YXhYTVNzOGdUclRPbTBwWU40PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRYN0RHNE5XIiwibWUiOnsiaWQiOiI5NDcyNzc2MDI0NToyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMIM6YIM+eIM6XIM6ZIM6kIM6XIM6bIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQT00vcHdDRU9ma3BiUUdHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnZUJZTFlQK21GNWNSRmhFckFDSnY1d2lOVXFSZ25oZ0lPZ2dGU3MxZG1BPSIsImFjY291bnRTaWduYXR1cmUiOiJhdy9mL1Z2N0Q1dHd2TmJ3KzlnWDJxaThYbG9MZjFhenJYc0pzTmdieEg5bFlsVWNPMVFuRjdDMlNMUk9xb0ZRNjJxU3hzUTJXNDVWeHMrSC95L0tBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVHVQNW8yRVBuTmtpdlVHQTJQU3YzUmdGR3Zpem9IMldzcGg3b093STQ4bkNVYUVkTlhOVUxMam5LSi95TnpWQ0VyR3hyRkVZcUl5cTRpQm1GaHF3aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzc2MDI0NToyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZSGdXQzJEL3BoZVhFUllSS3dBaWIrY0lqVktrWUo0WUNEb0lCVXJOWFpnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjgzNzYzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU82ZSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
