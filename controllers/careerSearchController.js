const careerSearchPrompt = require("../prompts/careersSearchPrompt.js");
const passionIDPromt = require("../prompts/passionIdPrompt.js");
const gemini = require("./geminiController.js"); // handle google gimini operations
const bodyParser = require("body-parser");

const careerSearchController = async (req, res) => {
    
try{
  const career = req.params.career
  console.log(career);
  
  const prompt = await careerSearchPrompt(career);
  const reply = await gemini(prompt);
  const cleanedResponse = await reply.replace(/\*\*/g, "");
  await res.json({ success: true, message: cleanedResponse });
}
catch{

}
};

module.exports = careerSearchController;
