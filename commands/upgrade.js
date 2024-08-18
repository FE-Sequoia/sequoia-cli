/**
 * commands/list.js
 * eg: sequoia upgrade
 * 升级脚手架 @sequoia/cli
 * 2024/08/18
 * by king
 * sequoia.tungfang@gmail.com
 */
const upgrade = require('../lib/upgrade');
module.exports = (program) => {
  program
    .command('upgrade')
    .description('Update @sequoia/cli')
    .action(() => {
      upgrade();
    });
};
