const passionIDPromt = require("../prompts/passionIdPrompt.js");
const gemini = require("./geminiController.js"); // handle google gimini operations
const textTOHTML = require("./geminiTextToHTML");
const bodyParser = require("body-parser");

const passionIdController = async (req, res) => {

  

  const prompt = await passionIDPromt(req.body);
  const reply = await gemini(prompt);
  console.log(prompt);
  const cleanedResponse = await reply.replace(/\*\*/g, "");
  await res.json({ success: true, message: cleanedResponse });
  

};

module.exports = passionIdController;
