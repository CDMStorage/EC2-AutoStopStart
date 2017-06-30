const parser = require('cron-parser');

module.exports = {

  log: (message) => {

    console.log(new Date().toISOString() + "  " + message);

  },

  isTimeToAction: (cron, now, delaySeconds) => {

    const interval = parser.parseExpression(cron);

    const date1 = new Date(now.getTime());
    date1.setSeconds(date1.getSeconds() + delaySeconds);
    let date2;

    // utils.log(now);
    // utils.log(date2);
    // utils.log(date1);

    if(delaySeconds>0) {
      date2 = interval.next();
      return now.getTime() < date2.getTime() && date2.getTime() < date1.getTime();
    }
    else {
      date2 = interval.prev();
      return date1.getTime() < date2.getTime() && date2.getTime() < now.getTime();
    }

  },

};