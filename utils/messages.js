const moment = require('moment');

function formatMessage(nickname, text) {
  return {
    nickname,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
