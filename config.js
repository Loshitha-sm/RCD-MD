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
global.email = "veteh92606@bsidesmn.com";
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
global.sudo = process.env.SUDO || "94727760245";
global.owner = process.env.OWNER_NUMBER || "94727760245";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU0vMC83bndSV0JmYitpd2lNaTV2R0RXbUprVWYyVHN6dzlKaUMzN1ZXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnhKLzF6em91SmNORnFRck9WYkEvY2gxZk9GRVk2cEpUUC9XRldtUlFVOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R2krSkUzNUlpSjR6QURoQjBxZDE2K3lFd3daYTF2dXZDTUlwVFUrVlhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNVo2ajIwdEY4N2ltQWhnRUgrVmdvc3paTFNCa2xLcjdsSW1HOXFoandBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNOWVsQ2hid3BoMWVFZkN2Qmh1aVJweTIzY2kyRXJjVFdEZ0ZhdjlZSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJMRFJ3ZUtwNU5lVnUxWVBzQXFDL1BGcmNWeTJSeEJFYStvSVcwd0VuaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xoY1RxOU84aVd4TnN2cVNnOWdtQlNUVzIyVDE1OTNXUGh2Sm9RWEUwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmhmQkIrN0lNOHNhMG5kWU1ORUVVb2UvditnZXhJK29kVC9uNzdQQjZBWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRsWFhxYURKdjBmOUFKZGdrNGsySTZmVC9aQzdOb2pvZUc0NWJjMERBdkdDaWQ0L05HeGM1cTFPM1JhR3h4cUl2NDNVTk8wVXd5eW9jRjFIbEk1TERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJiRm11cVJIWi83VDdVMFNGMDdFNlRPcFNaSU43WENiTDlrdlZRSkE4VzJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGSW1IUk1tZFR2T0dGYjJjNGpETHpnIiwicGhvbmVJZCI6Ijc1MTBlNzBhLTQ4Y2ItNDE5NS1iOTQ5LTNmMTE2NjU4MzFjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOeXl1UUMvK1Nlbm1pQVgxSWw1eUdsY2ExOHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGFlVnJHaWVOOUwvdk0xcWN1Zis5NmdBSlFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlWNk4yUk45IiwibWUiOnsiaWQiOiI5NDcyNzc2MDI0NToyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMIM6YIM+eIM6XIM6ZIM6kIM6XIM6bIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQT00vcHdDRU1EcnBiUUdHQkFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnZUJZTFlQK21GNWNSRmhFckFDSnY1d2lOVXFSZ25oZ0lPZ2dGU3MxZG1BPSIsImFjY291bnRTaWduYXR1cmUiOiJXZ2tRQWVtUE0zVVVxODFWTkJjaUw2SGZtcFlPbis5NkpKQlV3aHV0am53QytrclNPZkNHQ3VsMXZLQXowRW5WVXdYTEJzV1pRaU4xSnFSRkhkc3pEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVmZDWTVvbXZicWhQSW1TcGkySFFMUlJuVFdiSlU2Zi9tRkNpTG1Oakl6ek0xWHVxTWE1N2ZMNzNnbk81MjBUQWVzQU9qTnBHcmNvVnl3SnlqY2U2QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzc2MDI0NToyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZSGdXQzJEL3BoZVhFUllSS3dBaWIrY0lqVktrWUo0WUNEb0lCVXJOWFpnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjg0NjIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU82ZSJ9"
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
