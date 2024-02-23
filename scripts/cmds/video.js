const axios = require("axios");

module.exports = {
  config: {
    name: "video",
    version: "1.1",
    author: "Otinxsandip",
    countDown: 5,
    role: 0,
    longDescription: "voice",
    category: "ai",
    guide: {
      en: "{pn} song name"
    }
  },

  onStart: async function ({ api, event, args, getLang, message, usersData }) {
    try {
      const text = args.join(' ');
      if (!text) {
        return message.reply('please provide song name ');
      }
      const link = `https://sandipapi.onrender.com/video?song=${encodeURIComponent(text)}`;

      message.reply({
        body: 'here is your video',
        attachment: await global.utils.getStreamFromURL(link)
      });
    } catch (error) {
      console.error(error);
    }
  }
};