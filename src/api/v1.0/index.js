const Router = require('koa-router');

const getUpTime = require('./getUpTime');

const api = new Router();

api.use('/getuptime', getUpTime.routes());

module.exports = api;