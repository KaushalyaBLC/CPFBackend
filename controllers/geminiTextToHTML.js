const parse = require("gemini-to-html/parse");
const render = require("gemini-to-html/render");

const geminiTextToHTML = async (textInput) => {
  const tokens = await parse(textInput);

  html = await render(tokens);

  html = await html.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"); // **text** to bold
  html = await html.replace(/\*(.*?)\*\*/g, "<h1>$1</h1>"); // *text** to h1
  html = await html.replace(/\n/g, ""); // remove \n
  html = await html.replace(/\t/g, ""); // remove \t
  html = await html.replace(/<ul>(.*?)><\/ul>/g, "$1"); //remove ul tags
  html = await html.replace(/<li><h1>(.*?)<\/h1><\/li/g, "<h1>$1</h1>"); //romve li tag from headears
  html = await html.replace(/<br\/>/g, ""); //remove line brake
  return html;
};

module.exports=geminiTextToHTML;