const axios = require("axios");
const cheerio = require("cheerio");

const getNotificationsGv = async (page) => {
  var uri = "https://jntukucev.ac.in/category/news/";
  if (page != "1") {
    uri = "https://jntukucev.ac.in/category/news/page/" + page;
  }
  try {
    const { data } = await axios.get(uri);
    const $ = cheerio.load(data);
    const notificationTitles = [];
    const notificationLinks = [];
    const notificationDates = [];

    $(".blog-item-wrap >  a").each((_idx, el) => {
      const notificationTitle = $(el).attr("title");
      notificationTitles.push(notificationTitle);
    });
    $(".blog-item-wrap >  a").each((_idx, el) => {
      const notificationLink = $(el).attr("href");
      notificationLinks.push(notificationLink);
    });
    $("span.posted-on > a > time").each((_idx, el) => {
      const notificationDate = $(el).text();
      notificationDates.push(notificationDate);
    });

    return { notificationTitles, notificationLinks, notificationDates };
  } catch (error) {
    throw error;
  }
};

// getPostTitles().then((postTitles) => console.log(postTitles));

module.exports = { getNotificationsGv };
