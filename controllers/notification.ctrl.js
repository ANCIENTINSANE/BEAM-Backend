const axios = require("axios");
const cheerio = require("cheerio");
const asyncHandler = require("express-async-handler");

class NotificationController {
  
  async getNotifications(req, res) {
    const url = "https://www.jntuk.edu.in/notifications";

    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const notifications = [];

      // Adjust the selector based on the actual HTML structure of the notifications
      $(".notification-item").each((index, element) => {
        const title = $(element).find(".notification-title").text().trim();
        const link = $(element).find("a").attr("href");
        const date = $(element).find(".notification-date").text().trim();

        notifications.push({ title, link, date });
      });

      res.json(notifications);
    } catch (error) {
      res.status(500).json({ message: "Error fetching notifications", error: error.message });
    }
  }
}

const notificationCtrl = new NotificationController();

module.exports = {
  getNotificationsGv: asyncHandler(notificationCtrl.getNotifications.bind(notificationCtrl))
};
