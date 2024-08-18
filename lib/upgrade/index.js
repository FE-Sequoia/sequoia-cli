/**
 * lib/upgrade/index.js
 * 升级脚手架
 */

const spawn = require("cross-spawn");
const chalk = require("chalk");

module.exports = function () {
  try {
    const child = spawn("npm", ["install", "-g", "@sequoia/cli"], {
      stdio: "inherit",
    });

    child.on("close", (code) => {
      if (code !== 0) {
        console.log(chalk.red("Error occurred while update @sequoia/cli!"));
        process.exit(1);
      } else {
        console.log(chalk.cyan("upgrade finished!"));
        console.log(`\r\nSuccessfully upgrade ${chalk.cyan("@sequoia/cli")}`);
        console.log(`\r\n  sequoia -V`);
        console.log(" \r\n");
      }
    });
  } catch (error) {
    console.log(`Error when npm install: ${error.message || error}`);
    process.exit(1);
  }
};
