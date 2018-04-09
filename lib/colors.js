const chalk = require('chalk');

module.exports = function(data) {
  // Output
  const word = data.query;

  console.log("\n " + chalk.green.bold(word));

  if (data.basic != null) {
    const us = typeof data.basic["us-phonetic"] === "string"
        ? "美音: [" + data.basic["us-phonetic"] + "]"
        : "";
      uk = typeof data.basic["uk-phonetic"] === "string"
        ? "英音: [" + data.basic["uk-phonetic"] + "]"
        : "";

    if (uk && us) {
      console.log("\n " + us + "   " + uk);
    } else if (typeof data.basic["phonetic"] == "string") {
      console.log(
        "\n " + chalk.bold('拼音') + "：[" + data.basic["phonetic"] + "]"
      );
    }

    console.log(
      "\n " + chalk.underline.bold('翻译') + "：" + data.basic["explains"] + "\n"
    );
  } else if (data.web && data.web !== null) {
    console.log("\n " + chalk.bold.underline('网络释义：'));

    for (let i = 0; i < data.web.length; i++) {
      let temp = data.web[i];

      console.log("\n  " + (i + 1) + ". " + temp.key);
      console.log("\n  " + temp.value);
    }

    console.log("");
  } else if (data.translation) {
    console.log(
      "\n " + chalk.underline.bold('翻译') + "：" + data.translation + "\n"
    );
  } else {
    console.log("\n " + chalk.bold.underline('暂无释义'));
  }
};
