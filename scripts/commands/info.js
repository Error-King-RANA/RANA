module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐀𝐌𝐄       : 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐑𝐀𝐍𝐀
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 : 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐑𝐚𝐧𝐚
𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍   : 𝐈𝐒𝐋𝐀𝐌
𝐏𝐄𝐑𝐌𝐀𝐍𝐄𝐍𝐓 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝐏𝐀𝐍𝐂𝐇𝐀𝐆𝐀𝐑𝐇, 𝐃𝐇𝐀𝐊𝐀
𝐂𝐔𝐑𝐑𝐄𝐍𝐓 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝐓𝐄𝐓𝐔𝐋𝐈𝐀, 𝐏𝐎𝐍𝐂𝐇𝐀𝐆𝐀𝐑𝐇
𝐆𝐄𝐍𝐃𝐄𝐑.   : 𝐌𝐀𝐋𝐄
𝐀𝐆𝐄           : 𝟏𝟖+
𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏 : 𝐒𝐈𝐍𝐆𝐋𝐄
𝐖𝐎𝐑𝐊        : 𝐒𝐓𝐔𝐃𝐄𝐍𝐓
𝐆𝐌𝐀𝐈𝐋       : rsrana609@gmail.com
𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801752865115
𝐓𝐄𝐋𝐈𝐆𝐑𝐀𝐌  : t.me/ar.rana007
𝐅𝐁 𝐋𝐈𝐍𝐊 : https://www.facebook.com/RANA.IS.BUSY.OKAY`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000959749712/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
