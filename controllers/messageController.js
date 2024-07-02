// controllers/messageController.js
const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  const { receiverId, messageText } = req.body;
  try {
    const message = new Message({
      senderId: req.user.id,
      receiverId,
      messageText,
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ senderId: req.user.id }, { receiverId: req.user.id }],
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
