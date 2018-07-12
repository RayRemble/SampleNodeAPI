const Router = require('koa-router');

const getUpTime = new Router();
const getUpTimeCtrl = require('./getUpTime.ctrl');

getUpTime.get('/:userId', getUpTimeCtrl.balance);

module.exports = getUpTime;